import { NextResponse } from "next/server";
import { forwardLeadToKairos } from "@/lib/kairosLead";

const HUBSPOT_PORTAL_ID = "19644701";
const HUBSPOT_FORM_ID = "b4e48141-58a0-4208-9c42-641bb2731a40";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(request: Request) {
  // Held outside try so the finally below can await it even when the try
  // throws (serverless freezes pending work after the response returns).
  let kairosForward: Promise<boolean> | undefined;
  try {
    const body = await request.json();
    const {
      name,
      apellido,
      empresa,
      email,
      telefono,
      mensaje,
      cargo,
      source,
      tipo_institucion,
      turnstile_token,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    } = body;

    // El ebook de listas de riesgo, la guía de KYC gaming y la landing de
    // LFPIORPI 2026-2027 piden teléfono opcional (ver brief de cada landing);
    // el resto lo siguen requiriendo.
    const PHONE_OPTIONAL_SOURCES = [
      "landing-listas-riesgo-ebook",
      "landing-kyc-igaming-mexico-guia",
      "landing-lfpiorpi-2027",
    ];
    const phoneRequired = !PHONE_OPTIONAL_SOURCES.includes(source);
    if (!name || !email || (phoneRequired && !telefono)) {
      return NextResponse.json(
        { error: "Nombre y correo son requeridos" },
        { status: 400 }
      );
    }

    const fullName = apellido ? `${name} ${apellido}`.trim() : name;
    const fullMessage = cargo ? `Cargo: ${cargo}${mensaje ? ` | ${mensaje}` : ""}` : mensaje;

    // Validación Turnstile server-side (solo cuando el token viene en el payload)
    // No se exige a todas las landings para no romper formularios sin Turnstile
    const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
    if (TURNSTILE_SECRET && turnstile_token) {
      try {
        const verifyBody = new URLSearchParams({
          secret: TURNSTILE_SECRET,
          response: turnstile_token,
        });
        const verifyRes = await fetch(TURNSTILE_VERIFY_URL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: verifyBody.toString(),
        });
        const verifyData = await verifyRes.json() as { success: boolean };
        if (!verifyData.success) {
          return NextResponse.json(
            { error: "Verificación de seguridad fallida. Intenta de nuevo." },
            { status: 400 }
          );
        }
      } catch (e) {
        console.error("Turnstile verify error:", e);
        return NextResponse.json(
          { error: "No se pudo verificar la seguridad. Intenta de nuevo." },
          { status: 503 }
        );
      }
    }

    // Mirror the lead into Kairos with first-party UTM attribution, in
    // parallel with HubSpot/Resend. Awaited before returning (serverless
    // freezes after return); never throws nor fails the user flow.
    kairosForward = forwardLeadToKairos({
      email,
      phone: telefono,
      contact_name: fullName,
      company_name: empresa,
      message: fullMessage,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      page_url: body.page_url || request.headers.get("referer") || "",
    });

    // Forward to HubSpot
    let crmSuccess = false;
    try {
      const firstname = apellido ? name : name.trim().split(" ")[0] || "";
      const lastname = apellido || name.trim().split(" ").slice(1).join(" ") || "";

      const hubspotFields = [
        { name: "firstname", value: firstname },
        { name: "lastname", value: lastname },
        { name: "email", value: email },
        { name: "phone", value: telefono || "" },
        { name: "cual_es_tu_funcion_en_la_empresa_", value: source || "landing" },
      ];
      if (empresa) hubspotFields.push({ name: "company", value: empresa });
      if (fullMessage) hubspotFields.push({ name: "message", value: fullMessage });
      // Tipo de institución del formulario de /salud, para segmentar por vertical.
      // La propiedad landing_salud debe existir en HubSpot antes de que este campo llegue.
      if (tipo_institucion) hubspotFields.push({ name: "landing_salud", value: tipo_institucion });

      const crmRes = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: hubspotFields,
            context: {
              pageUri: `https://jaak.ai/${source || "landing"}`,
              pageName: source || "Landing JAAK",
            },
          }),
        }
      );
      crmSuccess = crmRes.ok;
      if (!crmRes.ok) {
        console.error("HubSpot landing error:", await crmRes.text());
      }
    } catch (e) {
      console.error("HubSpot error:", e);
    }

    // Send email notification via Resend (optional — only if key is set)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        const sourceLabel: Record<string, string> = {
          "landing-inmobiliarias": "Inmobiliarias",
          "landing-financieras": "Financieras",
          "landing-bancos": "Bancos",
          "landing-efisys-lab-connect": "EFISYS Lab Connect",
          "landing-listas-riesgo-ebook": "Ebook Listas de Riesgo PLD/AML",
          "landing-kyc-igaming-mexico-guia": "Guía KYC Gaming/iGaming México",
          "landing-lfpiorpi-2027": "LFPIORPI 2026-2027",
        };
        const label = sourceLabel[source] || source || "Landing";

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "JAAK Leads <noreply@jaak.ai>",
            to: ["javier.moya@jaak.ai"],
            subject: `[Landing JAAK] Nuevo lead: ${fullName} de ${empresa || "sin empresa"} — ${label}`,
            html: `
              <h2>Nuevo lead desde Landing ${label}</h2>
              <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
                <tr><td><strong>Nombre</strong></td><td>${fullName}</td></tr>
                <tr><td><strong>Empresa</strong></td><td>${empresa || "—"}</td></tr>
                <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td><strong>Teléfono</strong></td><td>${telefono || "—"}</td></tr>
                <tr><td><strong>Mensaje</strong></td><td>${fullMessage || "—"}</td></tr>
                <tr><td><strong>Fuente</strong></td><td>${source || "landing"}</td></tr>
              </table>
            `,
          }),
        });
      } catch (e) {
        console.error("Resend error:", e);
      }
    }

    const kairosSuccess = await kairosForward;
    if (!crmSuccess && !kairosSuccess && !RESEND_API_KEY) {
      console.warn("Lead not captured — CRM and Kairos failed, Resend not configured");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Landing API error:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  } finally {
    // Never leave the Kairos forward dangling — even on error paths.
    await kairosForward;
  }
}

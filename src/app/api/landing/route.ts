import { NextResponse } from "next/server";

const HUBSPOT_PORTAL_ID = "19644701";
const HUBSPOT_FORM_ID = "b4e48141-58a0-4208-9c42-641bb2731a40";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      empresa,
      email,
      telefono,
      mensaje,
      source,
      turnstile_token,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    if (!name || !email || !telefono) {
      return NextResponse.json(
        { error: "Nombre, correo y teléfono son requeridos" },
        { status: 400 }
      );
    }

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

    // Forward to HubSpot
    let crmSuccess = false;
    try {
      const nameParts = name.trim().split(" ");
      const firstname = nameParts[0] || "";
      const lastname = nameParts.slice(1).join(" ") || "";

      const hubspotFields = [
        { name: "firstname", value: firstname },
        { name: "lastname", value: lastname },
        { name: "email", value: email },
        { name: "phone", value: telefono },
        { name: "cual_es_tu_funcion_en_la_empresa_", value: source || "landing" },
      ];
      if (empresa) hubspotFields.push({ name: "company", value: empresa });
      if (mensaje) hubspotFields.push({ name: "message", value: mensaje });

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
    let emailSent = false;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        const sourceLabel: Record<string, string> = {
          "landing-inmobiliarias": "Inmobiliarias",
          "landing-financieras": "Financieras",
          "landing-bancos": "Bancos",
          "landing-efisys-lab-connect": "EFISYS Lab Connect",
        };
        const label = sourceLabel[source] || source || "Landing";

        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "JAAK Leads <noreply@jaak.ai>",
            to: ["javier.moya@jaak.ai"],
            subject: `[Landing JAAK] Nuevo lead: ${name} de ${empresa || "sin empresa"} — ${label}`,
            html: `
              <h2>Nuevo lead desde Landing ${label}</h2>
              <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
                <tr><td><strong>Nombre</strong></td><td>${name}</td></tr>
                <tr><td><strong>Empresa</strong></td><td>${empresa || "—"}</td></tr>
                <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td><strong>Teléfono</strong></td><td>${telefono}</td></tr>
                <tr><td><strong>Mensaje</strong></td><td>${mensaje || "—"}</td></tr>
                <tr><td><strong>Fuente</strong></td><td>${source || "landing"}</td></tr>
              </table>
            `,
          }),
        });
        emailSent = emailRes.ok;
        if (!emailRes.ok) {
          console.error("Resend error:", await emailRes.text());
        }
      } catch (e) {
        console.error("Resend error:", e);
      }
    }

    if (!crmSuccess && !emailSent) {
      console.warn("Lead not captured — CRM failed and email notification failed");
      return NextResponse.json(
        { error: "No se pudo registrar la solicitud. Intente de nuevo o escriba a sales@jaak.ai" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Landing API error:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}

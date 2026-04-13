import { NextResponse } from "next/server";

const EXTERNAL_API = "https://api-kairos.jaak.ai/api/v1/public/leads";
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

    // Validación Turnstile server-side (solo si el secret está configurado)
    const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
    if (TURNSTILE_SECRET) {
      if (!turnstile_token) {
        return NextResponse.json(
          { error: "Verificación de seguridad requerida." },
          { status: 400 }
        );
      }
      try {
        const verifyRes = await fetch(TURNSTILE_VERIFY_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: TURNSTILE_SECRET,
            response: turnstile_token,
          }),
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
      }
    }

    // Forward to external CRM
    let crmSuccess = false;
    try {
      const crmRes = await fetch(EXTERNAL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact_name: name,
          email,
          company_name: empresa || "",
          phone: telefono,
          message: mensaje || "",
          country: "México",
          source: source || "landing",
          ...(turnstile_token && { turnstile_token }),
          ...(utm_source && { utm_source }),
          ...(utm_medium && { utm_medium }),
          ...(utm_campaign && { utm_campaign }),
        }),
      });
      crmSuccess = crmRes.ok;
    } catch (e) {
      console.error("CRM error:", e);
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
      } catch (e) {
        console.error("Resend error:", e);
      }
    }

    if (!crmSuccess && !RESEND_API_KEY) {
      console.warn("Lead not captured — CRM failed and Resend not configured");
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

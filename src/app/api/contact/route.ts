import { NextResponse } from "next/server";

const HUBSPOT_PORTAL_ID = "19644701";
const HUBSPOT_FORM_ID = "b4e48141-58a0-4208-9c42-641bb2731a40";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, role, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !role) {
      return NextResponse.json(
        { error: "Nombre, correo electrónico, teléfono y función son requeridos" },
        { status: 400 }
      );
    }

    // Split name into first and last name for HubSpot
    const nameParts = name.trim().split(" ");
    const firstname = nameParts[0] || "";
    const lastname = nameParts.slice(1).join(" ") || "";

    // Prepare HubSpot form submission
    // Only include fields that exist in the HubSpot form
    const fields = [
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "email", value: email },
      { name: "phone", value: phone },
      { name: "cual_es_tu_funcion_en_la_empresa_", value: role },
    ];

    // Add optional fields only if they have values
    if (company) {
      fields.push({ name: "company", value: company });
    }
    // Message is optional - skip if not in the form
    if (message) {
      fields.push({ name: "message", value: message });
    }

    const hubspotData = {
      fields,
      context: {
        pageUri: "https://jaak.ai/contacto",
        pageName: "Contacto - JAAK",
      },
    };

    // Submit to HubSpot Forms API
    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotData),
      }
    );

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.text();
      console.error("HubSpot submission error:", errorData);

      // Try again without the message field if it failed
      if (message) {
        const fieldsWithoutMessage = fields.filter(f => f.name !== "TICKET.content");
        const retryData = {
          fields: fieldsWithoutMessage,
          context: {
            pageUri: "https://jaak.ai/contacto",
            pageName: "Contacto - JAAK",
          },
        };

        const retryResponse = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(retryData),
          }
        );

        if (retryResponse.ok) {
          return NextResponse.json({ success: true, note: "Message field not supported" });
        }
      }

      return NextResponse.json(
        { error: "Error al enviar a HubSpot", details: errorData },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}

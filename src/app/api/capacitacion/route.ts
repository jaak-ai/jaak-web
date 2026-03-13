import { NextResponse } from "next/server";

const HUBSPOT_PORTAL_ID = "19644701";
const HUBSPOT_FORM_ID = "b4e48141-58a0-4208-9c42-641bb2731a40";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, orderRef, topics, comments, slot } = body;

    if (!name || !email || !phone || !slot) {
      return NextResponse.json(
        { error: "Nombre, correo, teléfono y horario son requeridos" },
        { status: 400 }
      );
    }

    const nameParts = name.trim().split(" ");
    const firstname = nameParts[0] || "";
    const lastname = nameParts.slice(1).join(" ") || "";

    const slotLabel =
      slot === "martes"
        ? "Martes 10:00 – 11:00 AM"
        : slot === "jueves"
        ? "Jueves 4:00 – 5:00 PM"
        : slot;

    const topicsList =
      Array.isArray(topics) && topics.length > 0 ? topics.join(", ") : "No especificado";

    const messageText = [
      `Solicitud de capacitación post-compra JAAK Autoservicio`,
      `Horario solicitado: ${slotLabel}`,
      `Temas a revisar: ${topicsList}`,
      orderRef ? `Referencia de compra: ${orderRef}` : null,
      comments ? `Comentarios: ${comments}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const fields = [
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "email", value: email },
      { name: "phone", value: phone },
      { name: "cual_es_tu_funcion_en_la_empresa_", value: "Capacitación Autoservicio" },
      { name: "message", value: messageText },
    ];

    if (company) {
      fields.push({ name: "company", value: company });
    }

    const hubspotData = {
      fields,
      context: {
        pageUri: "https://jaak.ai/autoservicio",
        pageName: "Post-Pago Autoservicio – Solicitud de Capacitación",
      },
    };

    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotData),
      }
    );

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.text();
      console.error("HubSpot capacitacion submission error:", errorData);
      return NextResponse.json(
        { error: "Error al enviar solicitud" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing capacitacion form:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

const HUBSPOT_PORTAL_ID = "19644701";
const HUBSPOT_NEWSLETTER_FORM_ID = "db2a19a3-8be3-4f92-a0f8-7b6525ebd7d8";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "El correo electrónico es requerido" },
        { status: 400 }
      );
    }

    const hubspotData = {
      fields: [{ name: "email", value: email }],
      context: {
        pageUri: "https://jaak.ai/blog",
        pageName: "Blog - JAAK Newsletter",
      },
    };

    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_NEWSLETTER_FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotData),
      }
    );

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.text();
      console.error("HubSpot newsletter submission error:", errorData);
      return NextResponse.json(
        { error: "Error al procesar la suscripción" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing newsletter form:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}

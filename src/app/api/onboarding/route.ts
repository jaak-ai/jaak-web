import { NextResponse } from "next/server";

const HUBSPOT_PORTAL_ID = "19644701";
const HUBSPOT_FORM_ID = "b4e48141-58a0-4208-9c42-641bb2731a40";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, cargo, empresa, correo, telefono, paquete } = body;

    if (!nombre || !correo || !empresa || !telefono || !cargo) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben completarse" },
        { status: 400 }
      );
    }

    const nameParts = nombre.trim().split(" ");
    const firstname = nameParts[0] || "";
    const lastname = nameParts.slice(1).join(" ") || "";

    const fields = [
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "email", value: correo },
      { name: "phone", value: telefono },
      { name: "company", value: empresa },
      { name: "cual_es_tu_funcion_en_la_empresa_", value: cargo },
      { name: "message", value: `Onboarding Autoservicio | Paquete: ${paquete || "No especificado"}` },
    ];

    const hubspotData = {
      fields,
      context: {
        pageUri: "https://jaak.ai/autoservicio/prueba",
        pageName: "Onboarding Autoservicio - JAAK",
      },
    };

    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotData),
      }
    );

    if (!res.ok) {
      const errorData = await res.text();
      console.error("HubSpot onboarding error:", errorData);
      return NextResponse.json(
        { error: "Error al registrar en HubSpot" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing onboarding form:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Nombre y correo electrónico son requeridos" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email using Resend
    // 2. Store in a database
    // 3. Send to a CRM webhook

    // For now, we'll just log and return success
    console.log("Contact form submission:", { name, email, company, phone, message });

    // Example with Resend (uncomment when RESEND_API_KEY is set):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "JAAK <noreply@jaak.ai>",
      to: ["sales@jaak.ai"],
      subject: `Nuevo contacto: ${name} - ${company || "Sin empresa"}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Empresa: ${company || "No especificada"}
        Teléfono: ${phone || "No especificado"}
        Mensaje: ${message || "Sin mensaje"}
      `,
    });
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}

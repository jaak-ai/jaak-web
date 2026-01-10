import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inicio Rápido - Guía de Integración | JAAK",
  description: "Configura tu primera verificación de identidad con JAAK en menos de 10 minutos. Guía paso a paso con ejemplos de código.",
};

export default function InicioRapido() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/documentacion" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a documentación
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#0066ff]/20 text-[#0066ff] text-sm font-medium rounded-full">Guía</span>
              <span className="text-white/40">10 min</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Inicio rápido
            </h1>
            <p className="text-xl text-white/60">
              Configura tu primera verificación de identidad con JAAK en menos de 10 minutos.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              {/* Step 1 */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Obtén tus credenciales de API</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Primero, necesitas crear una cuenta en JAAK y obtener tus credenciales de API.
                </p>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Regístrate en <a href="https://platform.dev.jaak.ai/#/signup" className="text-[#0066ff] hover:underline">platform.jaak.ai</a></li>
                  <li>Ve a <strong>Configuración → API Keys</strong></li>
                  <li>Genera un nuevo API Key para tu ambiente (sandbox o producción)</li>
                  <li>Guarda tu <code className="bg-gray-100 px-2 py-1 rounded text-sm">API_KEY</code> y <code className="bg-gray-100 px-2 py-1 rounded text-sm">API_SECRET</code></li>
                </ol>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm m-0">
                    <strong>Importante:</strong> Nunca expongas tu API_SECRET en código del lado del cliente. Úsalo solo en tu backend.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Instala el SDK</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Instala el SDK de JAAK en tu proyecto:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">npm</span>
                  </div>
                  <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                    <code>npm install @jaak/sdk</code>
                  </pre>
                </div>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">yarn</span>
                  </div>
                  <pre className="p-4 text-green-400 text-sm overflow-x-auto">
                    <code>yarn add @jaak/sdk</code>
                  </pre>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Configura el cliente</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Inicializa el cliente de JAAK con tus credenciales:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">JavaScript / TypeScript</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`import { JaakClient } from '@jaak/sdk';

const jaak = new JaakClient({
  apiKey: process.env.JAAK_API_KEY,
  apiSecret: process.env.JAAK_API_SECRET,
  environment: 'sandbox' // o 'production'
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 4 */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Crea tu primera verificación</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Crea una sesión de verificación y obtén el enlace para el usuario:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">JavaScript / TypeScript</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Crear una sesión de verificación
const session = await jaak.verification.create({
  type: 'identity',
  config: {
    documentTypes: ['ine', 'passport'],
    livenessCheck: true,
    faceMatch: true
  },
  metadata: {
    userId: 'user_123',
    orderId: 'order_456'
  },
  redirectUrl: 'https://tuapp.com/verificacion-completada'
});

console.log(session.verificationUrl);
// https://verify.jaak.ai/session/abc123

// Redirige al usuario a session.verificationUrl`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 5 */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold">5</span>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Recibe el resultado</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Configura un webhook para recibir el resultado de la verificación:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">Express.js ejemplo</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`app.post('/webhooks/jaak', async (req, res) => {
  const { event, data } = req.body;

  // Verifica la firma del webhook
  const isValid = jaak.webhooks.verify(
    req.headers['x-jaak-signature'],
    req.body
  );

  if (!isValid) {
    return res.status(401).send('Invalid signature');
  }

  if (event === 'verification.completed') {
    const { sessionId, status, result } = data;

    if (status === 'approved') {
      // Usuario verificado exitosamente
      console.log('Verificación aprobada:', result);
    } else {
      // Verificación rechazada
      console.log('Verificación rechazada:', result.reason);
    }
  }

  res.status(200).send('OK');
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Resultado */}
              <div className="bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ¡Listo!
                </h3>
                <p className="text-gray-700 m-0">
                  Ya tienes una integración básica funcionando. El usuario será redirigido a JAAK para completar su verificación, y recibirás el resultado vía webhook.
                </p>
              </div>

              {/* Next Steps */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Próximos pasos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/documentacion/guias/flujo-onboarding" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Flujo de onboarding completo</h4>
                    <p className="text-sm text-gray-600">Implementa verificación de documentos + biometría</p>
                  </Link>
                  <Link href="/documentacion/guias/firma-electronica" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Firma electrónica</h4>
                    <p className="text-sm text-gray-600">Agrega firma con validez legal</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

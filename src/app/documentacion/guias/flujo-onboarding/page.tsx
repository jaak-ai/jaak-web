import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flujo de Onboarding KYC - Guía de Integración | JAAK",
  description: "Implementa un flujo completo de KYC con verificación de documentos y biometría facial. Guía paso a paso.",
};

export default function FlujoOnboarding() {
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
              <span className="text-white/40">30 min</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Flujo de onboarding KYC
            </h1>
            <p className="text-xl text-white/60">
              Implementa un flujo completo de verificación de identidad con captura de documentos, prueba de vida y comparación facial.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Visión general</h2>
                <p className="text-gray-600 mb-6">
                  El flujo de onboarding KYC de JAAK consiste en los siguientes pasos:
                </p>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                    <span className="text-sm font-medium text-gray-900">Captura de documento</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                    <span className="text-sm font-medium text-gray-900">Validación OCR</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                    <span className="text-sm font-medium text-gray-900">Prueba de vida</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">4</div>
                    <span className="text-sm font-medium text-gray-900">Comparación facial</span>
                  </div>
                </div>
              </div>

              {/* Step 1: Create Session */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Crear sesión de verificación</h2>
                <p className="text-gray-600 mb-4">
                  Configura el flujo de verificación según tus necesidades:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">POST /v1/verifications</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`const session = await jaak.verification.create({
  type: 'full_kyc',
  config: {
    // Tipos de documento aceptados
    documentTypes: ['ine', 'ine_reverso', 'passport'],

    // Habilitar prueba de vida pasiva
    livenessCheck: {
      enabled: true,
      type: 'passive' // 'passive' o 'active'
    },

    // Habilitar comparación facial
    faceMatch: {
      enabled: true,
      threshold: 0.85 // Umbral de similitud (0-1)
    },

    // Consultar bases oficiales
    officialSources: {
      ine: true,    // Validar en padrón INE
      renapo: true, // Validar CURP
      sat: false    // Validar RFC
    },

    // Opciones de captura
    capture: {
      allowUpload: false,  // Solo permitir cámara
      quality: 'high',
      retries: 3
    }
  },

  // Datos del usuario (opcional)
  userData: {
    email: 'usuario@ejemplo.com',
    phone: '+525512345678'
  },

  // Metadatos para tu sistema
  metadata: {
    userId: 'usr_abc123',
    applicationId: 'app_xyz789'
  },

  // URL de redirección al terminar
  redirectUrl: 'https://tuapp.com/onboarding/completado',

  // Webhook para notificaciones
  webhookUrl: 'https://tuapp.com/webhooks/jaak'
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 2: Redirect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Redirigir al usuario</h2>
                <p className="text-gray-600 mb-4">
                  Redirige al usuario a la URL de verificación. JAAK se encarga de toda la experiencia:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// En tu frontend
window.location.href = session.verificationUrl;

// O en React/Next.js
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push(session.verificationUrl);`}</code>
                  </pre>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm m-0">
                    <strong>Tip:</strong> También puedes embeber el flujo en un iframe o usar nuestro SDK de Web para una experiencia integrada.
                  </p>
                </div>
              </div>

              {/* Step 3: Process Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Procesar resultados</h2>
                <p className="text-gray-600 mb-4">
                  Recibe el resultado de la verificación vía webhook:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">Webhook: verification.completed</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`{
  "event": "verification.completed",
  "timestamp": "2025-01-09T10:30:00Z",
  "data": {
    "sessionId": "ses_abc123",
    "status": "approved", // approved, rejected, pending_review

    "document": {
      "type": "ine",
      "number": "XXXX1234567890",
      "name": "JUAN PEREZ GARCIA",
      "birthDate": "1990-05-15",
      "address": "CALLE EJEMPLO 123, CDMX",
      "curp": "PEGJ900515HDFRRL09",
      "claveElector": "PRGRJN90051509H800",
      "validUntil": "2029-12-31",
      "isValid": true,
      "securityFeatures": {
        "hologram": true,
        "microprint": true,
        "uvElements": true
      }
    },

    "biometrics": {
      "livenessScore": 0.98,
      "livenessResult": "live",
      "faceMatchScore": 0.95,
      "faceMatchResult": "match"
    },

    "officialSources": {
      "ine": {
        "status": "valid",
        "matchedFields": ["name", "curp", "photo"]
      },
      "renapo": {
        "status": "valid",
        "curpValid": true
      }
    },

    "evidence": {
      "documentFront": "https://evidence.jaak.ai/doc_front_xxx.jpg",
      "documentBack": "https://evidence.jaak.ai/doc_back_xxx.jpg",
      "selfie": "https://evidence.jaak.ai/selfie_xxx.jpg",
      "livenessVideo": "https://evidence.jaak.ai/liveness_xxx.mp4"
    },

    "metadata": {
      "userId": "usr_abc123",
      "applicationId": "app_xyz789"
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Handle Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Manejar los resultados</h2>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`app.post('/webhooks/jaak', async (req, res) => {
  const { event, data } = req.body;

  if (event === 'verification.completed') {
    const { sessionId, status, document, biometrics } = data;

    switch (status) {
      case 'approved':
        // Verificación exitosa
        await updateUserStatus(data.metadata.userId, 'verified');
        await saveVerificationData(sessionId, document);
        await sendWelcomeEmail(document.name);
        break;

      case 'rejected':
        // Verificación rechazada
        await updateUserStatus(data.metadata.userId, 'rejected');
        await notifyRejection(data.metadata.userId, data.rejectionReason);
        break;

      case 'pending_review':
        // Requiere revisión manual
        await createReviewTask(sessionId, data);
        break;
    }
  }

  res.status(200).send('OK');
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mejores prácticas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Siempre valida la firma HMAC del webhook antes de procesar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Guarda el sessionId para consultas futuras y auditorías</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Implementa idempotencia en tu endpoint de webhook</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Usa el ambiente sandbox para pruebas antes de producción</span>
                  </li>
                </ul>
              </div>

              {/* Next Steps */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Próximos pasos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/documentacion/guias/firma-electronica" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Firma electrónica</h4>
                    <p className="text-sm text-gray-600">Agrega firma con validez legal después del KYC</p>
                  </Link>
                  <Link href="/documentacion/guias/gestion-evidencia" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Gestión de evidencia</h4>
                    <p className="text-sm text-gray-600">Almacena y recupera expedientes digitales</p>
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

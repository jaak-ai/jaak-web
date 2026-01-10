import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Firma Electrónica - Guía de Integración | JAAK",
  description: "Integra firma electrónica con validez legal en México. Cumple NOM-151 y Código de Comercio.",
};

export default function FirmaElectronicaGuia() {
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
              <span className="text-white/40">20 min</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Firma electrónica
            </h1>
            <p className="text-xl text-white/60">
              Implementa firma electrónica con validez legal vinculada a la identidad verificada del firmante.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              {/* Legal Framework */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Marco legal</h3>
                <p className="text-blue-800 text-sm m-0">
                  La firma electrónica de JAAK cumple con el Código de Comercio (Art. 89-114), NOM-151-SCFI-2016 para conservación de mensajes de datos, y la LFPDPPP para protección de datos personales.
                </p>
              </div>

              {/* Step 1 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Crear un documento para firmar</h2>
                <p className="text-gray-600 mb-4">
                  Primero, sube el documento que deseas que sea firmado:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">POST /v1/documents</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`const document = await jaak.documents.create({
  name: 'Contrato de Servicios',
  file: fs.readFileSync('./contrato.pdf'), // Buffer o base64
  mimeType: 'application/pdf',

  // Metadatos del documento
  metadata: {
    contractId: 'contract_123',
    type: 'service_agreement'
  }
});

console.log(document.id); // doc_abc123`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Configurar la sesión de firma</h2>
                <p className="text-gray-600 mb-4">
                  Crea una sesión de firma con los firmantes y configuración:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">POST /v1/signatures</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`const signature = await jaak.signatures.create({
  documentId: document.id,

  // Lista de firmantes
  signers: [
    {
      name: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      phone: '+525512345678',
      role: 'signer', // 'signer', 'witness', 'approver'
      order: 1, // Orden de firma (opcional)

      // Requerir verificación de identidad antes de firmar
      requireVerification: true,
      verificationConfig: {
        documentTypes: ['ine'],
        livenessCheck: true,
        faceMatch: true
      }
    },
    {
      name: 'María García',
      email: 'maria@empresa.com',
      role: 'signer',
      order: 2,
      requireVerification: true
    }
  ],

  // Configuración de la firma
  config: {
    // Tipo de firma
    signatureType: 'advanced', // 'simple', 'advanced', 'qualified'

    // Generar constancia NOM-151
    nom151: true,

    // Capturar geolocalización
    captureLocation: true,

    // Expiración de la sesión
    expiresIn: '7d',

    // Recordatorios automáticos
    reminders: {
      enabled: true,
      frequency: '24h'
    }
  },

  // URLs de notificación
  redirectUrl: 'https://tuapp.com/firma/completada',
  webhookUrl: 'https://tuapp.com/webhooks/firma'
});

// Obtener URLs para cada firmante
signature.signers.forEach(signer => {
  console.log(\`\${signer.name}: \${signer.signatureUrl}\`);
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Enviar invitaciones</h2>
                <p className="text-gray-600 mb-4">
                  Puedes enviar las invitaciones automáticamente o manualmente:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Opción 1: Envío automático por JAAK
await jaak.signatures.sendInvitations(signature.id, {
  method: 'email', // 'email', 'sms', 'whatsapp'
  message: 'Por favor firma el contrato de servicios.'
});

// Opción 2: Obtener URLs y enviar tú mismo
const signers = await jaak.signatures.getSigners(signature.id);
signers.forEach(signer => {
  // Envía signer.signatureUrl por tu propio canal
  sendCustomEmail(signer.email, signer.signatureUrl);
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 4 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Procesar la firma completada</h2>
                <p className="text-gray-600 mb-4">
                  Recibe el webhook cuando todos los firmantes hayan firmado:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">Webhook: signature.completed</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`{
  "event": "signature.completed",
  "timestamp": "2025-01-09T15:30:00Z",
  "data": {
    "signatureId": "sig_abc123",
    "documentId": "doc_xyz789",
    "status": "completed",

    "signers": [
      {
        "name": "Juan Pérez",
        "email": "juan@ejemplo.com",
        "signedAt": "2025-01-09T14:00:00Z",
        "verificationId": "ver_123",
        "location": {
          "lat": 19.4326,
          "lng": -99.1332,
          "city": "Ciudad de México"
        },
        "ipAddress": "189.xxx.xxx.xxx"
      },
      {
        "name": "María García",
        "email": "maria@empresa.com",
        "signedAt": "2025-01-09T15:30:00Z",
        "verificationId": "ver_456"
      }
    ],

    "documents": {
      "signed": "https://docs.jaak.ai/signed_contract.pdf",
      "nom151": "https://docs.jaak.ai/nom151_certificate.pdf",
      "evidence": "https://docs.jaak.ai/evidence_package.zip"
    },

    "hashes": {
      "original": "sha256:abc123...",
      "signed": "sha256:def456..."
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 5 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Descargar documentos firmados</h2>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Obtener el documento firmado
const signedDoc = await jaak.signatures.getSignedDocument(signature.id);

// Descargar el PDF firmado
const pdfBuffer = await signedDoc.download('signed');
fs.writeFileSync('./contrato_firmado.pdf', pdfBuffer);

// Descargar constancia NOM-151
const nom151Buffer = await signedDoc.download('nom151');
fs.writeFileSync('./constancia_nom151.pdf', nom151Buffer);

// Descargar paquete de evidencia completo
const evidenceBuffer = await signedDoc.download('evidence');
fs.writeFileSync('./evidencia.zip', evidenceBuffer);`}</code>
                  </pre>
                </div>
              </div>

              {/* Evidence Package */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Paquete de evidencia</h3>
                <p className="text-gray-600 mb-4">
                  El paquete de evidencia incluye todo lo necesario para validar la firma en un proceso legal:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Documento original con hash SHA-256</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Documento firmado con sellos de tiempo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Constancia NOM-151 de conservación</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Expediente de verificación de identidad de cada firmante</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Registro de auditoría con IPs y geolocalización</span>
                  </li>
                </ul>
              </div>

              {/* Next Steps */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Próximos pasos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/documentacion/guias/verificacion-empresarial" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Verificación empresarial</h4>
                    <p className="text-sm text-gray-600">Verifica representantes legales antes de firmar</p>
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

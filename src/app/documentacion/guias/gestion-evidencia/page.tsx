import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestión de Evidencia - Guía de Integración | JAAK",
  description: "Almacena y recupera expedientes digitales con trazabilidad completa para auditorías y compliance.",
};

export default function GestionEvidencia() {
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
              Gestión de evidencia
            </h1>
            <p className="text-xl text-white/60">
              Almacena y recupera expedientes digitales con trazabilidad completa para pasar auditorías y cumplir con regulación.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              {/* What's Stored */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Qué se almacena automáticamente</h2>
                <p className="text-gray-600 mb-4">
                  Cada verificación genera un expediente digital completo:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Imágenes y video</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Foto del documento (frente y reverso)</li>
                      <li>• Selfie del usuario</li>
                      <li>• Video de prueba de vida</li>
                      <li>• Capturas del proceso</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Datos extraídos</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Datos OCR del documento</li>
                      <li>• Scores biométricos</li>
                      <li>• Resultados de validación</li>
                      <li>• Consultas a fuentes oficiales</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Metadatos</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Timestamps certificados</li>
                      <li>• Geolocalización</li>
                      <li>• Dirección IP</li>
                      <li>• User agent / dispositivo</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Auditoría</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Log de eventos completo</li>
                      <li>• Cadena de custodia</li>
                      <li>• Hashes de integridad</li>
                      <li>• Accesos al expediente</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Get Evidence */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Consultar expediente</h2>
                <p className="text-gray-600 mb-4">
                  Recupera el expediente completo de una verificación:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">GET /v1/evidence/{`{verificationId}`}</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`const evidence = await jaak.evidence.get('ver_abc123');

console.log(evidence);
// {
//   "verificationId": "ver_abc123",
//   "createdAt": "2025-01-09T10:30:00Z",
//   "status": "approved",
//
//   "subject": {
//     "name": "Juan Pérez García",
//     "documentNumber": "XXXX1234567890",
//     "curp": "PEGJ900515HDFRRL09"
//   },
//
//   "documents": {
//     "front": {
//       "url": "https://evidence.jaak.ai/ver_abc123/doc_front.jpg",
//       "hash": "sha256:abc123...",
//       "capturedAt": "2025-01-09T10:28:15Z"
//     },
//     "back": {
//       "url": "https://evidence.jaak.ai/ver_abc123/doc_back.jpg",
//       "hash": "sha256:def456..."
//     }
//   },
//
//   "biometrics": {
//     "selfie": {
//       "url": "https://evidence.jaak.ai/ver_abc123/selfie.jpg",
//       "hash": "sha256:ghi789..."
//     },
//     "livenessVideo": {
//       "url": "https://evidence.jaak.ai/ver_abc123/liveness.mp4",
//       "duration": 3.2
//     },
//     "scores": {
//       "liveness": 0.98,
//       "faceMatch": 0.95
//     }
//   },
//
//   "validations": {...},
//   "metadata": {...},
//   "auditLog": [...]
// }`}</code>
                  </pre>
                </div>
              </div>

              {/* Download Files */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descargar archivos</h2>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Descargar imagen individual
const imageBuffer = await jaak.evidence.downloadFile(
  'ver_abc123',
  'documents.front'
);
fs.writeFileSync('./documento_frente.jpg', imageBuffer);

// Descargar todo el expediente como ZIP
const zipBuffer = await jaak.evidence.downloadAll('ver_abc123');
fs.writeFileSync('./expediente_completo.zip', zipBuffer);

// Generar PDF de expediente para auditoría
const pdfBuffer = await jaak.evidence.generateReport('ver_abc123', {
  format: 'audit_report',
  language: 'es',
  includeImages: true,
  includeAuditLog: true
});
fs.writeFileSync('./reporte_auditoria.pdf', pdfBuffer);`}</code>
                  </pre>
                </div>
              </div>

              {/* Search Evidence */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Buscar expedientes</h2>
                <p className="text-gray-600 mb-4">
                  Busca expedientes por diferentes criterios:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Buscar por nombre o documento
const results = await jaak.evidence.search({
  query: 'Juan Pérez',
  fields: ['name', 'documentNumber', 'curp'],
  dateRange: {
    from: '2024-01-01',
    to: '2025-01-09'
  },
  status: ['approved', 'rejected'],
  limit: 50,
  offset: 0
});

// Buscar por metadatos personalizados
const results2 = await jaak.evidence.search({
  metadata: {
    'userId': 'usr_123',
    'applicationId': 'app_456'
  }
});

// Listar todos los expedientes de un período
const allRecords = await jaak.evidence.list({
  dateRange: {
    from: '2024-12-01',
    to: '2024-12-31'
  },
  orderBy: 'createdAt',
  order: 'desc'
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Audit Log */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Log de auditoría</h2>
                <p className="text-gray-600 mb-4">
                  Consulta el registro de todos los eventos y accesos:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`const auditLog = await jaak.evidence.getAuditLog('ver_abc123');

// [
//   {
//     "timestamp": "2025-01-09T10:28:00Z",
//     "event": "verification_started",
//     "actor": "end_user",
//     "ip": "189.xxx.xxx.xxx",
//     "userAgent": "Mozilla/5.0..."
//   },
//   {
//     "timestamp": "2025-01-09T10:28:15Z",
//     "event": "document_captured",
//     "details": { "side": "front", "quality": 0.95 }
//   },
//   {
//     "timestamp": "2025-01-09T10:30:00Z",
//     "event": "verification_completed",
//     "result": "approved"
//   },
//   {
//     "timestamp": "2025-01-10T14:00:00Z",
//     "event": "evidence_accessed",
//     "actor": "api_user",
//     "apiKeyId": "key_abc",
//     "action": "download"
//   }
// ]`}</code>
                  </pre>
                </div>
              </div>

              {/* Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Retención y eliminación</h2>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Configurar política de retención por tipo
await jaak.evidence.setRetentionPolicy({
  default: '5y', // 5 años por defecto (LFPIORPI)
  policies: [
    {
      type: 'kyc_financial',
      retention: '10y' // 10 años para sector financiero
    },
    {
      type: 'signature',
      retention: '10y'
    }
  ]
});

// Solicitar eliminación (para cumplir con LFPDPPP)
// Solo si no hay obligación legal de conservación
await jaak.evidence.requestDeletion('ver_abc123', {
  reason: 'user_request_arco',
  requestedBy: 'privacy@tuempresa.com'
});

// La eliminación se ejecuta después de validar
// que no hay obligaciones legales pendientes`}</code>
                  </pre>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm m-0">
                    <strong>Nota:</strong> La LFPIORPI requiere conservar expedientes por mínimo 5 años. JAAK valida automáticamente antes de eliminar.
                  </p>
                </div>
              </div>

              {/* Compliance Report */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reporte para auditorías</h3>
                <p className="text-gray-600 mb-4">
                  Genera reportes listos para presentar a reguladores:
                </p>
                <pre className="bg-white p-4 rounded-lg text-sm overflow-x-auto">
                  <code className="text-gray-800">{`// Generar reporte de cumplimiento
const complianceReport = await jaak.evidence.generateComplianceReport({
  dateRange: {
    from: '2024-01-01',
    to: '2024-12-31'
  },
  format: 'cnbv', // 'cnbv', 'uif', 'custom'
  includeStatistics: true,
  includeFailedVerifications: true
});

// El reporte incluye:
// - Total de verificaciones
// - Tasa de aprobación/rechazo
// - Desglose por tipo de documento
// - Alertas de AML generadas
// - Accesos a expedientes
// - Integridad de la cadena de custodia`}</code>
                </pre>
              </div>

              {/* Next Steps */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recursos relacionados</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/documentacion/guias/flujo-onboarding" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Flujo de onboarding</h4>
                    <p className="text-sm text-gray-600">Cómo se generan los expedientes</p>
                  </Link>
                  <Link href="/cumplimiento" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Cumplimiento regulatorio</h4>
                    <p className="text-sm text-gray-600">Regulaciones que requieren evidencia</p>
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

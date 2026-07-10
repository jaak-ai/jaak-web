import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verificación Empresarial KYB - Guía de Integración | JAAK",
  description: "Implementa KYB para verificar personas morales, beneficiarios finales y representantes legales.",
};

export default function VerificacionEmpresarialGuia() {
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
              <span className="text-white/40">25 min</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Verificación empresarial (KYB)
            </h1>
            <p className="text-xl text-white/60">
              Verifica personas morales, identifica beneficiarios finales y valida representantes legales conforme a LFPIORPI.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Qué incluye la verificación KYB</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Datos de la empresa</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• RFC y situación fiscal (SAT)</li>
                      <li>• Acta constitutiva</li>
                      <li>• Registro Público de Comercio</li>
                      <li>• Domicilio fiscal</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Estructura corporativa</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Accionistas y porcentajes</li>
                      <li>• Beneficiarios finales (UBO)</li>
                      <li>• Representantes legales</li>
                      <li>• Poderes notariales</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Listas de control</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• PEP (Personas Políticamente Expuestas)</li>
                      <li>• Sanciones OFAC</li>
                      <li>• Listas ONU</li>
                      <li>• Listas negras locales</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Verificación de personas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• KYC de representantes legales</li>
                      <li>• KYC de beneficiarios finales</li>
                      <li>• Validación de poderes</li>
                      <li>• Comparación de firmas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 1 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Crear verificación empresarial</h2>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">POST /v1/kyb/verifications</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`const kybSession = await jaak.kyb.create({
  // Datos básicos de la empresa
  company: {
    rfc: 'ABC123456XYZ',
    legalName: 'Empresa Ejemplo SA de CV',
    tradeName: 'Ejemplo Corp', // Nombre comercial (opcional)
    incorporationDate: '2020-01-15'
  },

  // Qué verificar
  checks: {
    // Validaciones fiscales
    sat: {
      enabled: true,
      validateRfc: true,
      getFiscalStatus: true,
      getConstancia: true
    },

    // Registro Público de Comercio
    rpc: {
      enabled: true,
      validateIncorporation: true
    },

    // Estructura accionaria
    ownership: {
      enabled: true,
      identifyUbo: true, // Beneficiarios finales
      uboThreshold: 25   // Porcentaje mínimo para UBO
    },

    // Listas de control
    watchlists: {
      enabled: true,
      pep: true,
      ofac: true,
      un: true,
      localBlacklists: true
    },

    // KYC de personas relacionadas
    relatedPersons: {
      enabled: true,
      verifyLegalReps: true,      // Representantes legales
      verifyUbos: true,           // Beneficiarios finales
      verificationConfig: {
        documentTypes: ['ine'],
        livenessCheck: true,
        faceMatch: true
      }
    }
  },

  // Documentos a solicitar
  requiredDocuments: [
    'acta_constitutiva',
    'poder_notarial',
    'comprobante_domicilio',
    'constancia_fiscal'
  ],

  metadata: {
    applicationId: 'app_123',
    source: 'onboarding'
  },

  webhookUrl: 'https://tuapp.com/webhooks/kyb'
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Subir documentos</h2>
                <p className="text-gray-600 mb-4">
                  Sube los documentos corporativos para su validación:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Subir acta constitutiva
await jaak.kyb.uploadDocument(kybSession.id, {
  type: 'acta_constitutiva',
  file: fs.readFileSync('./acta_constitutiva.pdf'),
  mimeType: 'application/pdf'
});

// Subir poder notarial
await jaak.kyb.uploadDocument(kybSession.id, {
  type: 'poder_notarial',
  file: fs.readFileSync('./poder_notarial.pdf'),
  mimeType: 'application/pdf',
  metadata: {
    notaryNumber: '123',
    notaryName: 'Lic. Juan Notario',
    date: '2023-06-15'
  }
});

// Verificar estado de documentos
const docs = await jaak.kyb.getDocuments(kybSession.id);
console.log(docs);`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Verificar personas relacionadas</h2>
                <p className="text-gray-600 mb-4">
                  Inicia la verificación KYC de representantes legales y beneficiarios finales:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Agregar representante legal
const legalRep = await jaak.kyb.addPerson(kybSession.id, {
  role: 'legal_representative',
  name: 'Juan Pérez García',
  email: 'juan@empresa.com',
  phone: '+525512345678',
  position: 'Apoderado General',

  // Referencia al poder notarial
  powerOfAttorneyRef: 'poder_notarial_001'
});

// Agregar beneficiario final
const ubo = await jaak.kyb.addPerson(kybSession.id, {
  role: 'ubo', // Ultimate Beneficial Owner
  name: 'María García López',
  email: 'maria@email.com',
  ownershipPercentage: 51,
  isDirectOwner: true
});

// Enviar invitaciones para KYC
await jaak.kyb.sendVerificationInvites(kybSession.id);

// O obtener URLs manualmente
const persons = await jaak.kyb.getPersons(kybSession.id);
persons.forEach(person => {
  console.log(\`\${person.name}: \${person.verificationUrl}\`);
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Step 4 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Consultar resultados</h2>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">Webhook: kyb.completed</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`{
  "event": "kyb.completed",
  "data": {
    "sessionId": "kyb_abc123",
    "status": "approved", // approved, rejected, pending_review

    "company": {
      "rfc": "ABC123456XYZ",
      "legalName": "Empresa Ejemplo SA de CV",
      "fiscalStatus": "active",
      "incorporationDate": "2020-01-15",
      "registeredAddress": "Av. Reforma 123, CDMX"
    },

    "satValidation": {
      "status": "valid",
      "regime": "General de Ley Personas Morales",
      "obligations": ["ISR", "IVA"],
      "constanciaUrl": "https://evidence.jaak.ai/sat_xxx.pdf"
    },

    "ownership": {
      "shareholders": [
        { "name": "María García López", "percentage": 51, "isUbo": true },
        { "name": "Pedro Sánchez", "percentage": 30, "isUbo": true },
        { "name": "Inversiones XYZ SA", "percentage": 19, "isUbo": false }
      ],
      "ubosIdentified": 2
    },

    "watchlists": {
      "pep": { "matches": 0 },
      "ofac": { "matches": 0 },
      "un": { "matches": 0 },
      "localBlacklists": { "matches": 0 }
    },

    "persons": [
      {
        "name": "Juan Pérez García",
        "role": "legal_representative",
        "kycStatus": "approved",
        "verificationId": "ver_123"
      },
      {
        "name": "María García López",
        "role": "ubo",
        "kycStatus": "approved",
        "verificationId": "ver_456"
      }
    ],

    "riskScore": 15, // 0-100
    "riskLevel": "low" // low, medium, high
  }
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Risk Levels */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Niveles de riesgo</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="w-20 h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm font-medium">0-30</span>
                    <span className="text-gray-700"><strong>Bajo:</strong> Aprobación automática recomendada</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-20 h-8 bg-yellow-500 rounded flex items-center justify-center text-white text-sm font-medium">31-70</span>
                    <span className="text-gray-700"><strong>Medio:</strong> Revisión manual recomendada</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-20 h-8 bg-red-500 rounded flex items-center justify-center text-white text-sm font-medium">71-100</span>
                    <span className="text-gray-700"><strong>Alto:</strong> Due diligence reforzado obligatorio</span>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Próximos pasos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/documentacion/guias/consultas-pld-aml" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Consultas PLD/AML</h4>
                    <p className="text-sm text-gray-600">Monitoreo continuo de listas de control</p>
                  </Link>
                  <Link href="/documentacion/guias/firma-electronica" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Firma electrónica</h4>
                    <p className="text-sm text-gray-600">Firma contratos con representantes verificados</p>
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

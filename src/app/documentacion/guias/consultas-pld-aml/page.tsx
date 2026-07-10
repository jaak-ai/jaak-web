import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultas PLD/AML - Guía de Integración | JAAK",
  description: "Configura consultas automáticas a listas de personas bloqueadas, PEP y sanciones internacionales.",
};

export default function ConsultasPldAml() {
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
              <span className="text-white/40">15 min</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Consultas PLD/AML
            </h1>
            <p className="text-xl text-white/60">
              Configura consultas automáticas a listas de control para cumplir con regulación antilavado.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              {/* Available Lists */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Listas disponibles</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">PEP México</h4>
                    <p className="text-sm text-gray-600">Personas Políticamente Expuestas en México: funcionarios públicos, familiares y asociados cercanos.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">OFAC SDN</h4>
                    <p className="text-sm text-gray-600">Lista de Nacionales Especialmente Designados del Departamento del Tesoro de EE.UU.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Sanciones ONU</h4>
                    <p className="text-sm text-gray-600">Lista consolidada de sanciones del Consejo de Seguridad de Naciones Unidas.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">UE Sanciones</h4>
                    <p className="text-sm text-gray-600">Lista consolidada de medidas restrictivas de la Unión Europea.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Lista 69-B SAT</h4>
                    <p className="text-sm text-gray-600">Contribuyentes que emiten facturas por operaciones inexistentes.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Listas locales</h4>
                    <p className="text-sm text-gray-600">Listas propias de la empresa o listas negras internas.</p>
                  </div>
                </div>
              </div>

              {/* Single Query */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Consulta individual</h2>
                <p className="text-gray-600 mb-4">
                  Consulta una persona o empresa contra todas las listas de control:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">POST /v1/aml/screen</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Consulta de persona física
const result = await jaak.aml.screen({
  type: 'individual',
  data: {
    name: 'Juan Pérez García',
    dateOfBirth: '1985-03-15',
    nationality: 'MX',
    curp: 'PEGJ850315HDFRRL09', // Opcional
    country: 'MX'
  },
  lists: ['pep_mx', 'ofac', 'un', 'eu', 'sat_69b'],
  matchThreshold: 0.85 // Umbral de coincidencia (0-1)
});

console.log(result);
// {
//   "screeningId": "scr_abc123",
//   "status": "clear", // clear, potential_match, confirmed_match
//   "matchCount": 0,
//   "matches": [],
//   "checkedLists": ["pep_mx", "ofac", "un", "eu", "sat_69b"],
//   "timestamp": "2025-01-09T10:30:00Z"
// }`}</code>
                  </pre>
                </div>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">Consulta de persona moral</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Consulta de empresa
const result = await jaak.aml.screen({
  type: 'company',
  data: {
    legalName: 'Empresa Ejemplo SA de CV',
    rfc: 'EEJ201015ABC',
    country: 'MX'
  },
  lists: ['ofac', 'un', 'eu', 'sat_69b']
});`}</code>
                  </pre>
                </div>
              </div>

              {/* Match Response */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Manejo de coincidencias</h2>
                <p className="text-gray-600 mb-4">
                  Cuando hay coincidencias potenciales, la respuesta incluye detalles:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`{
  "screeningId": "scr_xyz789",
  "status": "potential_match",
  "matchCount": 1,
  "matches": [
    {
      "list": "pep_mx",
      "matchScore": 0.92,
      "matchedName": "Juan Pérez García",
      "listEntry": {
        "name": "Juan Pérez García",
        "position": "Subsecretario de Hacienda",
        "institution": "SHCP",
        "startDate": "2020-01-01",
        "endDate": null,
        "category": "current_pep",
        "level": "federal"
      },
      "matchedFields": ["name", "country"],
      "requiresReview": true
    }
  ],
  "recommendation": "manual_review"
}`}</code>
                  </pre>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm m-0">
                    <strong>Importante:</strong> Las coincidencias con PEP no son automáticamente rechazos. Requieren due diligence reforzado según LFPIORPI.
                  </p>
                </div>
              </div>

              {/* Batch Screening */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Consultas masivas</h2>
                <p className="text-gray-600 mb-4">
                  Para verificar múltiples registros de una vez:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`const batchResult = await jaak.aml.screenBatch({
  records: [
    {
      id: 'customer_001',
      type: 'individual',
      data: { name: 'Juan Pérez', dateOfBirth: '1985-03-15' }
    },
    {
      id: 'customer_002',
      type: 'individual',
      data: { name: 'María García', dateOfBirth: '1990-07-22' }
    },
    // ... hasta 1000 registros por batch
  ],
  lists: ['pep_mx', 'ofac', 'un'],
  webhookUrl: 'https://tuapp.com/webhooks/aml-batch'
});

// El resultado se envía vía webhook cuando termina
console.log(batchResult.batchId); // batch_abc123
console.log(batchResult.estimatedTime); // "~5 minutes"`}</code>
                  </pre>
                </div>
              </div>

              {/* Ongoing Monitoring */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Monitoreo continuo</h2>
                <p className="text-gray-600 mb-4">
                  Configura monitoreo automático para recibir alertas cuando tus clientes aparezcan en listas:
                </p>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`// Agregar persona al monitoreo continuo
await jaak.aml.monitor.add({
  entityId: 'customer_001', // Tu ID interno
  type: 'individual',
  data: {
    name: 'Juan Pérez García',
    dateOfBirth: '1985-03-15',
    curp: 'PEGJ850315HDFRRL09'
  },
  lists: ['pep_mx', 'ofac', 'un', 'eu'],
  notifyOn: ['new_match', 'status_change'], // Cuándo notificar
  metadata: {
    segment: 'premium',
    riskLevel: 'medium'
  }
});

// Listar entidades monitoreadas
const monitored = await jaak.aml.monitor.list({
  limit: 100,
  status: 'active'
});

// Remover del monitoreo
await jaak.aml.monitor.remove('customer_001');`}</code>
                  </pre>
                </div>

                <div className="bg-[#0a0a0a] rounded-lg overflow-hidden mb-4">
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                    <span className="text-white/60 text-sm">Webhook: aml.alert</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white">{`{
  "event": "aml.alert",
  "timestamp": "2025-01-15T08:00:00Z",
  "data": {
    "alertId": "alert_xyz",
    "entityId": "customer_001",
    "alertType": "new_match",
    "list": "pep_mx",
    "match": {
      "name": "Juan Pérez García",
      "position": "Director General de PEMEX",
      "effectiveDate": "2025-01-14"
    },
    "previousStatus": "clear",
    "newStatus": "potential_match",
    "recommendedAction": "enhanced_due_diligence"
  }
}`}</code>
                  </pre>
                </div>
              </div>

              {/* Integration Example */}
              <div className="bg-gray-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integración en flujo de onboarding</h3>
                <pre className="bg-white p-4 rounded-lg text-sm overflow-x-auto">
                  <code className="text-gray-800">{`async function onboardCustomer(customerData) {
  // 1. Verificar en listas AML
  const amlResult = await jaak.aml.screen({
    type: 'individual',
    data: customerData,
    lists: ['pep_mx', 'ofac', 'un']
  });

  if (amlResult.status === 'confirmed_match') {
    // Rechazar automáticamente
    return { approved: false, reason: 'aml_match' };
  }

  if (amlResult.status === 'potential_match') {
    // Marcar para revisión manual
    await createReviewTask(customerData, amlResult);
    return { approved: false, reason: 'pending_review' };
  }

  // 2. Continuar con verificación KYC
  const kycResult = await jaak.verification.create({...});

  // 3. Agregar a monitoreo continuo
  await jaak.aml.monitor.add({
    entityId: customerData.id,
    type: 'individual',
    data: customerData
  });

  return { approved: true };
}`}</code>
                </pre>
              </div>

              {/* Next Steps */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Próximos pasos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/documentacion/guias/verificacion-empresarial" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Verificación empresarial</h4>
                    <p className="text-sm text-gray-600">KYB con consultas AML integradas</p>
                  </Link>
                  <Link href="/documentacion/guias/gestion-evidencia" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Gestión de evidencia</h4>
                    <p className="text-sm text-gray-600">Almacena resultados de consultas AML</p>
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

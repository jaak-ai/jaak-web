const benefits = [
  "Consulta personas físicas y morales",
  "Centraliza fuentes nacionales e internacionales",
  "Configura fuentes y criterios de búsqueda",
  "Reduce revisiones manuales dispersas",
  "Identifica posibles coincidencias",
  "Documenta el resultado",
  "Integra la consulta en tu onboarding",
  "Complementa procesos KYC",
  "Construye trazabilidad",
  "Facilita revisiones de cumplimiento",
  "Permite distinguir entre sanción, alerta, PEP y validación",
  "Reduce decisiones basadas únicamente en homonimias",
];

export default function RiskListsBenefits() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="benefits-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="benefits-heading" className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
            Cumplimiento conectado con tu operación
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <svg className="w-5 h-5 text-[#1ECAD3] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

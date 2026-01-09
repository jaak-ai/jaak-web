export default function Integration() {
  const features = [
    {
      icon: "🔌",
      title: "API y SDK listos para producción",
    },
    {
      icon: "🧩",
      title: "Arquitectura modular",
    },
    {
      icon: "📈",
      title: "Escalable y auditable",
    },
    {
      icon: "⚡",
      title: "Integración en días, no meses",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#2DB6C1] font-semibold mb-4">Cómo se integra</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#212A45] mb-6">
              Infraestructura,
              <br />
              no promesas
            </h2>
            <p className="text-xl text-[#53535B] mb-8">
              JAAK se adapta a tu flujo,
              <br />
              no te obliga a cambiar tu negocio.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-[#212A45] font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#212A45] rounded-2xl p-8 text-white">
            <pre className="text-sm overflow-x-auto">
              <code className="text-[#2DB6C1]">{`// Verificar identidad
const result = await jaak.kyc.verify({
  document: documentImage,
  selfie: selfieImage,
  liveness: true
});

// Resultado con evidencia
{
  verified: true,
  confidence: 0.99,
  evidence: {
    documentId: "...",
    biometricMatch: true,
    livenessScore: 0.98,
    timestamp: "2024-01-15T...",
    auditTrail: "..."
  }
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

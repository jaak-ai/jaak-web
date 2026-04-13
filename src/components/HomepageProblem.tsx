const before = [
  { label: "Capturas de pantalla como evidencia" },
  { label: "Papelería física extraviada o deteriorada con el tiempo" },
  { label: "Procesos manuales sin trazabilidad ni cadena de custodia" },
  { label: "Datos dispersos: no sabes dónde está cada expediente" },
  { label: "Sin capacidad de conservación a 5 o 10 años" },
  { label: "Sin defensa ante una auditoría retrospectiva" },
];

const after = [
  { label: "Expediente digital con hash verificable e inmutable" },
  { label: "Conservación automática con retención configurable hasta 10 años" },
  { label: "Proceso automatizado y auditable end-to-end" },
  { label: "Evidencia centralizada: KYC, KYB y firma en un solo lugar" },
  { label: "Cadena de custodia completa con sello de tiempo NOM-151" },
  { label: "Respuesta a auditorías retrospectivas en minutos" },
];

const auditScenarios = [
  {
    year: "5 años después",
    question: "Te llega una auditoría sobre operaciones de 2020. ¿Dónde está la evidencia de cada verificación de identidad que hiciste?",
    icon: "📅",
  },
  {
    year: "Expediente en papel",
    question: "El expediente KYC está incompleto, deteriorado o simplemente ya no aparece. ¿Qué le presentas al regulador?",
    icon: "📂",
  },
  {
    year: "Firma electrónica",
    question: "Se firmó un contrato hace 3 años. ¿Puedes probar con certeza quién firmó, desde dónde, cuándo y que no fue alterado?",
    icon: "✍️",
  },
];

export default function HomepageProblem() {
  return (
    <section className="hp-section hp-bg-1 py-24 relative overflow-hidden">
      {/* Decorative glows */}
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(200,60,60,0.05)" }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-14" data-sr>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              color: "var(--hp-red-text)",
              border: "1px solid var(--hp-red-border)",
              background: "var(--hp-red-bg)",
            }}
          >
            El problema real
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            Verificar no es suficiente.{" "}
            <span style={{ color: "var(--hp-text-lo)" }}>
              Hay que demostrarlo cuando te lo pidan, años después.
            </span>
          </h2>
          <p
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--hp-text-md)" }}
          >
            La regulación mexicana exige conservar evidencia de identidad,{" "}
            <span className="font-semibold" style={{ color: "var(--hp-orange-text)" }}>
              hasta por 10 años.
            </span>{" "}
            No alcanza con haber verificado. Tienes que poder demostrarlo con
            evidencia íntegra, trazable y de fácil acceso cuando el regulador llegue.
          </p>
        </div>

        {/* Audit scenarios — concrete pain */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10" data-sr-grid>
          {auditScenarios.map((s, i) => (
            <div
              key={i}
              className="hp-glass-red rounded-2xl p-5"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xl">{s.icon}</span>
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--hp-red-text)" }}
                >
                  {s.year}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--hp-text-md)" }}
              >
                {s.question}
              </p>
            </div>
          ))}
        </div>

        {/* Retention callout */}
        <div
          className="max-w-5xl mx-auto rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
          style={{
            background: "var(--hp-orange-bg)",
            border: "1px solid var(--hp-orange-border)",
          }}
        >
          <svg
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: "var(--hp-orange-icon)" }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm leading-relaxed" style={{ color: "var(--hp-orange-text)" }}>
            <span className="font-bold">Retención obligatoria:</span>{" "}
            LFPIORPI y disposiciones CNBV exigen conservar expedientes de identificación
            de clientes por un mínimo de 5 años, y hasta 10 años para operaciones en riesgo.
            Papelería extraviada, sistemas dados de baja o evidencia incompleta equivalen
            a incumplimiento.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto" data-sr-grid>
          {/* ANTES */}
          <div className="hp-glass-red rounded-3xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(200,60,60,0.15)" }}
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: "var(--hp-red-text)" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: "var(--hp-red-text)" }}
                >
                  Sin JAAK
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--hp-text-lo)" }}
                >
                  Proceso típico que no resiste una auditoría
                </div>
              </div>
            </div>
            <ul className="space-y-2.5">
              {before.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: "rgba(200,60,60,0.06)",
                    border: "1px solid rgba(200,60,60,0.10)",
                  }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--hp-red-icon)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="text-sm font-medium leading-snug"
                    style={{ color: "var(--hp-red-item-text)" }}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CON JAAK */}
          <div className="hp-glass-teal rounded-3xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(30,202,211,0.15)" }}
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: "#1ECAD3" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: "#1ECAD3" }}
                >
                  Con JAAK
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--hp-text-lo)" }}
                >
                  Evidencia legal lista hoy, en 5 años y en 10
                </div>
              </div>
            </div>
            <ul className="space-y-2.5">
              {after.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: "linear-gradient(90deg, rgba(30,202,211,0.10), rgba(42,215,150,0.05))",
                    border: "1px solid rgba(42,215,150,0.14)",
                  }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#2AD796" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="text-sm font-medium leading-snug"
                    style={{ color: "var(--hp-text-hi)" }}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Consequence bar */}
        <div className="hp-glass mt-8 max-w-5xl mx-auto rounded-2xl px-7 py-5">
          <p className="text-center text-sm" style={{ color: "var(--hp-text-lo)" }}>
            Sin evidencia defendible — hoy o en 10 años — te expones a:{" "}
            <span style={{ color: "var(--hp-red-consequence)" }}>
              observaciones regulatorias · multas · riesgo reputacional · retrabajo en auditoría · responsabilidad legal
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

const before = [
  { label: "Capturas de pantalla como evidencia" },
  { label: "Procesos manuales sin trazabilidad" },
  { label: "Datos dispersos en múltiples sistemas" },
  { label: "Sin defensa ante una auditoría" },
];

const after = [
  { label: "Expediente digital con hash verificable" },
  { label: "Proceso automatizado y auditable end-to-end" },
  { label: "Evidencia centralizada por usuario" },
  { label: "Respuesta a auditorías en minutos" },
];

export default function HomepageProblem() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#0E1133" }}
    >
      {/* Decorative glow */}
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
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              color: "#ff8a8a",
              border: "1px solid rgba(255,100,100,0.20)",
              background: "rgba(255,100,100,0.08)",
            }}
          >
            El problema real
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            Verificar no es suficiente.{" "}
            <span style={{ color: "rgba(255,255,255,0.38)" }}>
              Hay que demostrar que cumpliste.
            </span>
          </h2>
          <p
            className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            La mayoría de los problemas regulatorios no nacen del fraude.
            Nacen de{" "}
            <span
              className="font-semibold"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              procesos que no se pueden defender
            </span>{" "}
            ante una auditoría de la CNBV, UIF o cualquier autoridad supervisora.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* ANTES */}
          <div
            className="rounded-3xl p-7"
            style={{
              background:
                "linear-gradient(145deg, rgba(200,60,60,0.08) 0%, rgba(255,100,100,0.02) 100%)",
              border: "1px solid rgba(200,60,60,0.15)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(200,60,60,0.15)" }}
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: "#ff8a8a" }}
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
                  style={{ color: "#ff8a8a" }}
                >
                  Antes de JAAK
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.30)" }}
                >
                  Proceso típico en el mercado
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: "rgba(200,60,60,0.06)",
                    border: "1px solid rgba(200,60,60,0.10)",
                  }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "rgba(255,100,100,0.60)" }}
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
                    className="text-sm font-medium"
                    style={{ color: "#ff9898" }}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AHORA */}
          <div
            className="rounded-3xl p-7"
            style={{
              background:
                "linear-gradient(145deg, rgba(30,202,211,0.08) 0%, rgba(42,215,150,0.04) 100%)",
              border: "1px solid rgba(30,202,211,0.16)",
            }}
          >
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
                  style={{ color: "rgba(255,255,255,0.30)" }}
                >
                  Evidencia legal desde el primer contacto
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: "linear-gradient(90deg, rgba(30,202,211,0.10), rgba(42,215,150,0.05))",
                    border: "1px solid rgba(42,215,150,0.14)",
                  }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
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
                    className="text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.82)" }}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Consequence bar */}
        <div
          className="mt-10 max-w-5xl mx-auto rounded-2xl px-7 py-5"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p className="text-center text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            Sin evidencia defendible te expones a:{" "}
            <span style={{ color: "rgba(255,150,150,0.80)" }}>
              observaciones regulatorias · multas · riesgo reputacional · retrabajo en auditoría
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

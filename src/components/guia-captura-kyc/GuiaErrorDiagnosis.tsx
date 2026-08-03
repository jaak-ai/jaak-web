import { ERROR_DIAGNOSIS } from "./data";

export default function GuiaErrorDiagnosis() {
  return (
    <section id="diagnostico" className="py-16" style={{ background: "var(--section-alt)" }} aria-labelledby="diag-h2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="diag-h2" className="text-2xl md:text-3xl font-black mb-6" style={{ color: "var(--primary)" }}>
          ¿Por qué se rechazó mi verificación?
        </h2>
        <div className="space-y-2.5">
          {ERROR_DIAGNOSIS.map((item, i) => (
            <details key={item.q} open={i === 0} className="bg-white border border-gray-100 rounded-xl px-5 group">
              <summary
                className="py-4 font-bold text-sm cursor-pointer list-none flex items-center justify-between gap-3"
                style={{ color: "var(--primary)" }}
              >
                {item.q}
                <span className="text-lg font-normal group-open:hidden flex-shrink-0" style={{ color: "var(--accent-hover)" }}>+</span>
                <span className="text-lg font-normal hidden group-open:inline flex-shrink-0" style={{ color: "var(--accent-hover)" }}>–</span>
              </summary>
              <p className="text-[13.5px] leading-relaxed pb-4" style={{ color: "var(--text-muted)" }}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

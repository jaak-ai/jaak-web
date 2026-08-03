import { STANDARDS_REFERENCE } from "./data";

export default function GuiaStandardsReference() {
  return (
    <section className="gradient-bg py-16" aria-labelledby="standards-h2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="standards-h2" className="text-2xl md:text-3xl font-black text-white mb-4">
          Marco de referencia técnico
        </h2>
        <p className="text-[15px] leading-relaxed" style={{ color: "var(--hp-text-md)" }}>
          Esta guía toma como marco de referencia principios públicos de las siguientes normas y programas
          internacionales de biometría e identidad. <strong className="text-white">JAAK no declara certificación
          formal ni conformidad auditada frente a ninguna de ellas</strong> — se citan como referencia de buenas
          prácticas de la industria, no como texto reproducido de las normas.
        </p>
        <ul className="grid gap-3 mt-5">
          {STANDARDS_REFERENCE.map((item) => (
            <li key={item.code} className="rounded-lg px-4 py-3.5" style={{ background: "var(--hp-card-bg)", border: "1px solid var(--hp-card-border)" }}>
              <code className="block text-xs font-bold mb-1" style={{ color: "#7fe3ea" }}>{item.code}</code>
              <p className="text-sm m-0" style={{ color: "var(--hp-text-md)" }}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

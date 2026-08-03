import Link from "next/link";

export default function GuiaSupportCta() {
  return (
    <section className="gradient-bg py-16" aria-labelledby="cta-h2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="cta-h2" className="text-2xl md:text-3xl font-black text-white mb-6">
          ¿Necesita más ayuda?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl p-6" style={{ background: "rgba(45,182,193,0.10)", border: "1px solid rgba(45,182,193,0.28)" }}>
            <h3 className="text-white font-bold text-base mb-2">Soy usuario final</h3>
            <p className="text-sm mb-4" style={{ color: "var(--hp-text-md)" }}>
              Si tiene problemas para completar una verificación de identidad de una empresa que se lo solicitó,
              contacte directamente al soporte de esa empresa; ellos gestionan su proceso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90"
              style={{ background: "var(--accent)" }}
            >
              Contactar a soporte JAAK
            </Link>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "var(--hp-card-bg)", border: "1px solid var(--hp-card-border)" }}>
            <h3 className="text-white font-bold text-base mb-2">Soy desarrollador o integrador</h3>
            <p className="text-sm mb-4" style={{ color: "var(--hp-text-md)" }}>
              Consulte la documentación técnica de integración de KYC: flujos web, API y SDK móvil, y las
              validaciones de cada paso.
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/docs/verificar-identidad" className="text-sm font-semibold underline underline-offset-4" style={{ color: "#fff", opacity: 0.9 }}>
                Ver documentación técnica →
              </Link>
              <Link href="/kyc-demo-autoservicio" className="text-sm font-semibold underline underline-offset-4" style={{ color: "#fff", opacity: 0.9 }}>
                Ver demo de KYC →
              </Link>
              <Link href="/contacto" className="text-sm font-semibold underline underline-offset-4" style={{ color: "#fff", opacity: 0.9 }}>
                Hablar con ventas →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

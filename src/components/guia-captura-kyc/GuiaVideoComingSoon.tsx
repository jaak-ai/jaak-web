export default function GuiaVideoComingSoon() {
  return (
    <section className="py-16" style={{ background: "var(--section-alt)" }} aria-labelledby="video-h2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="video-h2" className="text-2xl md:text-3xl font-black mb-3" style={{ color: "var(--primary)" }}>
          Video guía del uso correcto
        </h2>
        <p className="text-[15px] leading-relaxed mb-5" style={{ color: "var(--text-body)" }}>
          Estamos preparando un video orientativo que resume esta guía paso a paso.
        </p>
        <div
          className="flex items-center gap-4 rounded-2xl border-2 border-dashed p-6"
          style={{ borderColor: "var(--border-light)", background: "#fff" }}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.6" aria-hidden="true" className="flex-shrink-0">
            <rect x="2.5" y="5" width="14" height="14" rx="2" />
            <path d="M16.5 10l5-3v10l-5-3" />
          </svg>
          <div>
            <p className="text-sm font-bold" style={{ color: "var(--primary)" }}>
              Video orientativo de uso correcto{" "}
              <span
                className="ml-1.5 align-middle text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "var(--section-light)", color: "var(--text-muted)", border: "1px solid var(--border-light)" }}
              >
                Próximamente
              </span>
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              Estará disponible en esta misma página cuando se publique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import CaptureCompare from "./CaptureCompare";
import { LIVENESS_CORRECT, LIVENESS_AVOID } from "./data";

export default function GuiaLivenessSection() {
  return (
    <section id="prueba-de-vida" className="gradient-bg py-16" aria-labelledby="liveness-h2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="liveness-h2" className="text-2xl md:text-3xl font-black text-white mb-4">
          Prueba de vida (liveness)
        </h2>
        <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: "var(--hp-text-md)" }}>
          La prueba de vida confirma que quien está frente a la cámara es una persona real presente en ese momento, y
          ayuda a reducir el riesgo de suplantación con fotografías, videos o máscaras. No es un mecanismo que elimine
          por completo la posibilidad de fraude; es una capa adicional de verificación dentro del proceso.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-xl p-5" style={{ background: "var(--hp-card-bg)", border: "1px solid var(--hp-card-border)" }}>
            <span
              className="inline-block text-[10.5px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-2.5"
              style={{ background: "rgba(45,182,193,0.16)", color: "#7fe3ea" }}
            >
              Pasiva
            </span>
            <h3 className="text-white font-bold text-base mb-1.5">Sin acciones del usuario</h3>
            <p className="text-sm" style={{ color: "var(--hp-text-md)" }}>
              El sistema analiza una única captura o un video corto sin pedir acciones específicas — solo debe
              mantenerse frente a la cámara, con buena iluminación y el rostro descubierto, durante unos segundos.
            </p>
          </div>
          <div className="rounded-xl p-5" style={{ background: "var(--hp-card-bg)", border: "1px solid var(--hp-card-border)" }}>
            <span
              className="inline-block text-[10.5px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-2.5"
              style={{ background: "rgba(42,215,150,0.16)", color: "#6be3b9" }}
            >
              Activa
            </span>
            <h3 className="text-white font-bold text-base mb-1.5">Con una acción puntual</h3>
            <p className="text-sm" style={{ color: "var(--hp-text-md)" }}>
              El sistema solicita una acción durante la captura (p. ej. girar ligeramente la cabeza o parpadear) para
              confirmar que la respuesta ocurre en tiempo real.
            </p>
          </div>
        </div>

        <CaptureCompare correct={LIVENESS_CORRECT} avoid={LIVENESS_AVOID} />

        <p
          className="text-[13px] mt-6 rounded-r-lg px-3.5 py-3 border-l-[3px]"
          style={{ background: "var(--hp-card-bg)", borderColor: "var(--accent)", color: "var(--hp-text-md)" }}
        >
          ⚠ Pendiente de validar con producto: si el modo activo está disponible hoy en el flujo de producción, o si
          el liveness actual es solo pasivo.
        </p>
      </div>
    </section>
  );
}

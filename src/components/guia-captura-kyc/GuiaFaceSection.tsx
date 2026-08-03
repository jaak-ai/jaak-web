import CaptureCompare from "./CaptureCompare";
import { FACE_CORRECT, FACE_AVOID } from "./data";

export default function GuiaFaceSection() {
  return (
    <section id="rostro" className="py-16" aria-labelledby="face-h2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="face-h2" className="text-2xl md:text-3xl font-black mb-4" style={{ color: "var(--primary)" }}>
          Captura facial
        </h2>
        <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: "var(--text-body)" }}>
          Colóquese frente a la cámara, a la altura de los ojos, con el rostro completo visible dentro del marco.
          Puede usar lentes ópticos graduados de armazón transparente o delgado; evite lentes oscuros, con reflejo o
          de armazón muy grueso que oculte los ojos o las cejas.
        </p>

        <CaptureCompare correct={FACE_CORRECT} avoid={FACE_AVOID} />
      </div>
    </section>
  );
}

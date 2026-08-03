import CaptureCompare from "./CaptureCompare";
import { DOCUMENT_CORRECT, DOCUMENT_AVOID } from "./data";

export default function GuiaDocumentSection() {
  return (
    <section id="documento" className="py-16" style={{ background: "var(--section-alt)" }} aria-labelledby="doc-h2">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="doc-h2" className="text-2xl md:text-3xl font-black mb-4" style={{ color: "var(--primary)" }}>
          Captura de documento
        </h2>
        <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: "var(--text-body)" }}>
          Coloque el documento sobre una superficie plana y fotografíe de frente, sin inclinar la cámara. El documento
          debe verse completo dentro del marco, con sus cuatro esquinas visibles y sin que ningún dedo cubra los datos.
        </p>
        <p className="text-[15px] leading-relaxed max-w-2xl mt-3" style={{ color: "var(--text-body)" }}>
          <strong>Nota sobre pasaporte:</strong> capture únicamente la <strong>página de datos</strong> (la que contiene
          su fotografía y la zona de lectura mecánica). No es necesario fotografiar anverso y reverso como con una
          identificación tipo tarjeta.
        </p>

        <CaptureCompare correct={DOCUMENT_CORRECT} avoid={DOCUMENT_AVOID} />

        <p
          className="text-[13px] mt-6 rounded-r-lg px-3.5 py-3 border-l-[3px]"
          style={{ background: "#fff", borderColor: "var(--accent)", color: "var(--text-muted)" }}
        >
          Use la resolución nativa de la cámara de su dispositivo y evite recortar o comprimir la imagen manualmente.
          No existe un requisito fijo de megapixeles o formato — se evalúa la nitidez y legibilidad del resultado, no
          una especificación técnica exacta.
        </p>
      </div>
    </section>
  );
}

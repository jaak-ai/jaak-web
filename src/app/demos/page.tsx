import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Probar componentes | JAAK",
  description:
    "Demos interactivas de los web components de JAAK: captura de documentos (Stamps) y verificación biométrica facial (Visage).",
};

const demos = [
  {
    slug: "stamps",
    name: "Stamps",
    pkg: "@jaak.ai/stamps",
    tagline: "Captura de documentos de identidad",
    description:
      "Detección automática, alineación y recorte de documentos (INE, pasaporte, licencia) con captura de frente y reverso.",
    features: [
      "Detección ONNX en tiempo real",
      "Captura automática por calidad",
      "Clasificación opcional de documento",
      "Multi-cámara con autofocus",
    ],
  },
  {
    slug: "visage",
    name: "Visage",
    pkg: "@jaak.ai/visage",
    tagline: "Verificación biométrica facial",
    description:
      "Detección facial en tiempo real con guía de posicionamiento, captura de video WebM y control de calidad (rotación, estabilidad, área).",
    features: [
      "TensorFlow.js + MediaPipe",
      "Modos full / light / auto",
      "Captura automática o manual",
      "i18n español / inglés",
    ],
  },
];

export default function DemosPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#0066ff] uppercase tracking-wider mb-3">
              Probar en vivo
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Demos interactivas de los componentes JAAK
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Pruebe los web components de JAAK directamente en el navegador. Cada demo incluye
              configuración completa (licencia, ambiente, cámara, versión) y consola de eventos en
              vivo para integrarlos en su flujo.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid md:grid-cols-2 gap-6">
            {demos.map((demo) => (
              <Link
                key={demo.slug}
                href={`/demos/${demo.slug}`}
                className="group block bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#0066ff] hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs font-mono text-gray-400 mb-1">{demo.pkg}</div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#0066ff] transition-colors">
                      {demo.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#00d4aa] mt-1">{demo.tagline}</p>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#0066ff] group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 mb-5 leading-relaxed">{demo.description}</p>
                <ul className="space-y-2">
                  {demo.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 text-[#00d4aa] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Necesitas una licencia?</h3>
            <p className="text-sm text-gray-500 mb-4">
              Las demos requieren una licencia válida de JAAK para el ambiente seleccionado (dev,
              qa, sandbox o prod). Si aún no cuenta con una, escríbanos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066ff] hover:text-[#0052cc]"
            >
              Solicitar licencia
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

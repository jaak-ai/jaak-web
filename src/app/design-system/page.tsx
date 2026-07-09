import VerificationFlowAnimation from "@/components/VerificationFlowAnimation";

export const metadata = {
  title: "Sistema de Diseño — JAAK",
  description: "Componentes y animaciones narrativas del sistema de diseño JAAK.",
};

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-800 text-[#212A45] mb-4">
            Sistema de Diseño JAAK
          </h1>
          <p className="text-lg text-[#64748B] max-w-2xl">
            Componentes, animaciones narrativas y patrones visuales alineados con patrón visual data-driven.
          </p>
        </div>

        {/* Animaciones narrativas */}
        <section className="mb-20">
          <h2 className="text-2xl font-700 text-[#212A45] mb-8">
            Animaciones Narrativas
          </h2>
          <VerificationFlowAnimation />
        </section>

        {/* Color palette */}
        <section className="mb-20">
          <h2 className="text-2xl font-700 text-[#212A45] mb-8">
            Paleta de Colores (DESIGN.md)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ColorSwatch color="#212A45" label="Navy" />
            <ColorSwatch color="#0E1133" label="Navy Deep" />
            <ColorSwatch color="#2DB6C1" label="Teal" />
            <ColorSwatch color="#25969f" label="Teal Hover" />
            <ColorSwatch color="#2AD796" label="Green" />
            <ColorSwatch color="#4A5568" label="Text Body" />
            <ColorSwatch color="#64748B" label="Text Muted" />
            <ColorSwatch color="#EEEEEE" label="Border Light" />
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-2xl font-700 text-[#212A45] mb-8">
            Tipografía (Montserrat única)
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-[3.6rem] font-800 text-[#212A45] leading-tight">
                Display
              </p>
              <p className="text-xs text-[#64748B] mt-2">
                clamp(2.6rem, 5vw, 4rem) · 800 weight
              </p>
            </div>
            <div>
              <p className="text-[2.6rem] font-700 text-[#212A45] leading-tight">
                Headline
              </p>
              <p className="text-xs text-[#64748B] mt-2">
                clamp(1.9rem, 3.5vw, 2.6rem) · 700 weight
              </p>
            </div>
            <div>
              <p className="text-xl font-600 text-[#212A45]">
                Title / Subheading
              </p>
              <p className="text-xs text-[#64748B] mt-2">1.18rem · 600 weight</p>
            </div>
            <div>
              <p className="text-base text-[#4A5568]">
                Body text para narrativa y descripción. Lorem ipsum dolor sit amet.
              </p>
              <p className="text-xs text-[#64748B] mt-2">1rem · 400 weight · 1.7 line-height</p>
            </div>
          </div>
        </section>

        {/* Componentes */}
        <section className="mb-20">
          <h2 className="text-2xl font-700 text-[#212A45] mb-8">
            Componentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-600 text-[#64748B] uppercase mb-4">
                Botones
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-6 py-2 text-white font-600 rounded-lg transition-colors duration-200"
                  style={{
                    background: "#2DB6C1",
                  }}
                >
                  Primario
                </button>
                <button
                  className="px-6 py-2 text-[#212A45] font-600 rounded-lg border border-[#EEEEEE] transition-colors duration-200 hover:bg-[#F3F4F8]"
                >
                  Secundario
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs font-600 text-[#64748B] uppercase mb-4">
                Badges
              </p>
              <div className="flex flex-wrap gap-3">
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-sm"
                  style={{
                    background: "#2AD79610",
                    color: "#2AD796",
                  }}
                >
                  Verificado
                </span>
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-sm"
                  style={{
                    background: "#2DB6C110",
                    color: "#2DB6C1",
                  }}
                >
                  En progreso
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ColorSwatch({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div
        className="w-full h-24 rounded-lg mb-2 border border-[#EEEEEE]"
        style={{ backgroundColor: color }}
      />
      <p className="text-sm font-600 text-[#212A45]">{label}</p>
      <p className="text-xs text-[#64748B] font-mono">{color}</p>
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signa vs Mifiel vs DocuSign | Comparación de firma electrónica",
  description:
    "Comparación de Signa, Mifiel y DocuSign en firma electrónica para México: validez NOM-151, expediente probatorio, tecnología, soporte y precios transparentes.",
  alternates: {
    canonical: "https://jaak.ai/signa/comparacion"
  },
  openGraph: {
    title: "Signa vs Mifiel vs DocuSign | Comparación de firma electrónica",
    description:
      "Compara Signa frente a Mifiel y DocuSign: validez NOM-151, expediente probatorio, tecnología y soporte.",
    type: "website",
    url: "https://jaak.ai/signa/comparacion",
    images: [
      {
        url: "https://jaak.ai/signa-comparison-og.jpg",
        width: 1200,
        height: 630,
        alt: "Comparación Signa vs Mifiel vs DocuSign"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Signa vs Mifiel vs DocuSign | Comparación de firma electrónica",
    description:
      "Compara Signa frente a Mifiel y DocuSign: validez NOM-151, tecnología y soporte.",
    images: ["https://jaak.ai/signa-comparison-twitter.jpg"]
  },
  other: {
    'geo.region': 'MX',
    'geo.country': 'México',
    'language': 'Spanish'
  }
};

export default function SignaComparacion() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#0E1133] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#212A45]/10 border border-[#212A45]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#212A45] rounded-full"></span>
              <span className="text-[#212A45] text-sm font-medium">Comparación detallada</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="text-[#2DB6C1]">Signa</span> vs <span className="text-red-400">Competencia</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comparación lado a lado de capacidades, tecnología y validez legal en firma electrónica para México.
            </p>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Comparación detallada de capacidades
              </h2>
              <p className="text-xl text-gray-600">
                Tecnología, validez legal y servicio, lado a lado
              </p>
            </div>

            {/* Mobile-friendly comparison card for small screens */}
            <div className="block md:hidden space-y-8">
              <div className="bg-gradient-to-r from-[#2DB6C1]/5 to-[#212A45]/5 border-2 border-[#2DB6C1] rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precio por firma</h3>
                <p className="text-gray-600 mb-4">
                  Cada proveedor publica su propio tarifario. Consulta los precios de Signa de forma transparente.
                </p>
                <Link
                  href="/precios"
                  className="inline-flex px-5 py-2 bg-[#2DB6C1] text-black font-semibold rounded-lg hover:bg-[#00c499] transition-all"
                >
                  Ver precios de Signa
                </Link>
              </div>
            </div>

            {/* Desktop comparison table */}
            <div className="hidden md:block overflow-x-auto bg-white rounded-2xl shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                    <th className="px-6 py-4 text-left text-lg font-bold">Característica</th>
                    <th className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="text-red-400 font-bold">Mifiel</div>
                        <div className="text-xs opacity-75">Competencia #1</div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="text-blue-400 font-bold">DocuSign</div>
                        <div className="text-xs opacity-75">Internacional</div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center bg-[#2DB6C1]/20 relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-[#2DB6C1] text-black text-xs font-bold px-3 py-1 rounded-b-lg">
                        RECOMENDADO
                      </div>
                      <div className="flex flex-col items-center mt-2">
                        <div className="text-[#2DB6C1] font-bold">Signa</div>
                        <div className="text-xs text-[#2DB6C1]/80">Nosotros</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Pricing Row */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-6">
                      <div className="font-bold text-gray-900 text-lg">Precio por firma</div>
                      <div className="text-sm text-gray-600">Modelo de precios</div>
                    </td>
                    <td className="px-6 py-6 text-center text-gray-600">Según su tarifario</td>
                    <td className="px-6 py-6 text-center text-gray-600">Según su tarifario</td>
                    <td className="px-6 py-6 text-center bg-[#2DB6C1]/10">
                      <Link href="/precios" className="text-[#2DB6C1] font-bold hover:underline">
                        Consulta transparente
                      </Link>
                    </td>
                  </tr>

                  {/* API Technology */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">Tecnología de la API</div>
                      <div className="text-sm text-gray-600">Tipo de integración disponible</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-gray-600">REST básico</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-gray-600">REST avanzado</div>
                    </td>
                    <td className="px-6 py-4 text-center bg-[#2DB6C1]/5">
                      <span className="text-[#2DB6C1] font-bold">GraphQL + REST</span>
                    </td>
                  </tr>

                  {/* Support */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">Soporte técnico</div>
                      <div className="text-sm text-gray-600">Disponibilidad de ayuda</div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Lun-Vie 9-18h</td>
                    <td className="px-6 py-4 text-center text-gray-600">24/5 (Inglés)</td>
                    <td className="px-6 py-4 text-center bg-[#2DB6C1]/5">
                      <span className="text-[#2DB6C1] font-bold">24/7/365</span>
                      <div className="text-xs text-[#2DB6C1]">En español</div>
                    </td>
                  </tr>

                  {/* Legal Validity */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">Validez legal</div>
                      <div className="text-sm text-gray-600">Cumplimiento normativo México</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-semibold">NOM-151</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-semibold">NOM-151</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-[#2DB6C1]/5">
                      <span className="text-green-600 font-semibold">NOM-151</span>
                      <div className="text-xs text-[#2DB6C1]">+ Biometría</div>
                    </td>
                  </tr>

                  {/* Migration */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">Migración asistida</div>
                      <div className="text-sm text-gray-600">Ayuda para cambiar de proveedor</div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">No disponible</td>
                    <td className="px-6 py-4 text-center text-blue-600">Limitada</td>
                    <td className="px-6 py-4 text-center bg-[#2DB6C1]/5">
                      <span className="text-[#2DB6C1] font-bold">Sin costo</span>
                      <div className="text-xs text-[#2DB6C1]">Te acompañamos</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Switch Section */}
        <section className="py-16 bg-[#0E1133]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Por qué migrar a Signa?
              </h2>
              <p className="text-xl text-white/60">
                Beneficios que van más allá del precio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">Precios transparentes</h3>
                <p className="text-white/70">Modelo de pago por uso, sin cuotas mínimas ni costos de configuración ocultos.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">Firma sin fricción</h3>
                <p className="text-white/70">Tus clientes completan la firma en pocos pasos, desde cualquier dispositivo.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">Tecnología moderna</h3>
                <p className="text-white/70">API bien documentada y estable, pensada para integraciones rápidas.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">Soporte en español</h3>
                <p className="text-white/70">Atención cuando la necesitas, todos los días y en tu idioma.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">Migración sin costo</h3>
                <p className="text-white/70">Te acompañamos en la migración de tus documentos y configuraciones.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">Validez NOM-151</h3>
                <p className="text-white/70">Conservación con constancia NOM-151 y expediente probatorio de cada firma.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-[#2DB6C1] to-[#212A45]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              ¿Listo para migrar a Signa?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              La migración es gratis y te acompañamos en cada paso del proceso.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/precios"
                className="px-8 py-4 bg-white text-[#212A45] font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg"
              >
                Ver precios
              </Link>
              <Link
                href="/contacto"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#212A45] transition-all"
              >
                Hablar con un experto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

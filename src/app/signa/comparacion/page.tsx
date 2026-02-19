import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signa vs Competencia - Comparación Completa | ¿Por qué Cambiar?",
  description: "Comparación detallada: Signa vs Mifiel vs DocuSign. Precios, características, soporte y tecnología lado a lado. Ahorra hasta 50%.",
  keywords: ["signa vs mifiel", "comparación firma electrónica", "precios firma digital", "mifiel alternativa", "docusign vs signa"],
};

export default function SignaComparacion() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#0066ff] rounded-full"></span>
              <span className="text-[#0066ff] text-sm font-medium">Comparación Detallada</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              ⚖️ <span className="text-[#00d4aa]">Signa</span> vs <span className="text-red-400">Competencia</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comparación lado a lado de características, precios y beneficios. 
              <strong className="text-white"> Descubre por qué 1,000+ empresas ya cambiaron.</strong>
            </p>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                🔍 Comparación Detallada de Características
              </h2>
              <p className="text-xl text-gray-600">
                Tecnología, precios y servicio - lado a lado
              </p>
            </div>

            {/* Mobile-friendly comparison cards for small screens */}
            <div className="block md:hidden space-y-8">
              {/* Pricing Comparison */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">💰 Precio por Firma</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-red-100 rounded-lg p-3">
                    <div className="text-xs text-red-600 font-medium">Mifiel</div>
                    <div className="text-lg font-bold text-red-700">$29.90</div>
                    <div className="text-xs text-red-600">MXN</div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="text-xs text-blue-600 font-medium">DocuSign</div>
                    <div className="text-lg font-bold text-blue-700">$25.00</div>
                    <div className="text-xs text-blue-600">USD</div>
                  </div>
                  <div className="bg-[#00d4aa]/10 border-2 border-[#00d4aa] rounded-lg p-3 relative">
                    <div className="absolute -top-2 -right-2 bg-[#00d4aa] text-black text-xs font-bold px-2 py-1 rounded-full">MEJOR</div>
                    <div className="text-xs text-[#00d4aa] font-medium">Signa</div>
                    <div className="text-lg font-bold text-[#00d4aa]">$15.00</div>
                    <div className="text-xs text-[#00d4aa]">MXN</div>
                  </div>
                </div>
                <div className="text-center mt-4 p-3 bg-[#00d4aa]/10 rounded-lg">
                  <div className="text-[#00d4aa] font-bold">50% más económico que Mifiel</div>
                </div>
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
                    <th className="px-6 py-4 text-center bg-[#00d4aa]/20 relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-[#00d4aa] text-black text-xs font-bold px-3 py-1 rounded-b-lg">
                        RECOMENDADO
                      </div>
                      <div className="flex flex-col items-center mt-2">
                        <div className="text-[#00d4aa] font-bold">✍️ Signa</div>
                        <div className="text-xs text-[#00d4aa]/80">Nosotros</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Pricing Row */}
                  <tr className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b-2 border-yellow-200">
                    <td className="px-6 py-6">
                      <div className="font-bold text-gray-900 text-lg">💰 Precio por Firma</div>
                      <div className="text-sm text-gray-600">Costo base por documento firmado</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-2xl font-black text-red-600">$29.90</div>
                      <div className="text-sm text-red-500">MXN</div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="text-2xl font-black text-blue-600">$25.00</div>
                      <div className="text-sm text-blue-500">USD ≈ $450 MXN</div>
                    </td>
                    <td className="px-6 py-6 text-center bg-[#00d4aa]/10 relative">
                      <div className="absolute top-2 right-2 bg-[#00d4aa] text-black text-xs font-bold px-2 py-1 rounded-full">
                        50% MENOS
                      </div>
                      <div className="text-2xl font-black text-[#00d4aa]">$15.00</div>
                      <div className="text-sm text-[#00d4aa]">MXN</div>
                    </td>
                  </tr>

                  {/* Setup Cost */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">🏗️ Costo de Setup</div>
                      <div className="text-sm text-gray-600">Precio inicial de configuración</div>
                    </td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">$2,500 MXN</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">$200 USD</td>
                    <td className="px-6 py-4 text-center bg-[#00d4aa]/5">
                      <span className="text-[#00d4aa] font-bold">GRATIS</span>
                      <div className="text-xs text-[#00d4aa]">$2,500 ahorro</div>
                    </td>
                  </tr>

                  {/* Monthly Fee */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">📅 Cuota Mensual</div>
                      <div className="text-sm text-gray-600">Costo fijo mensual mínimo</div>
                    </td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">$500 MXN</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">$25 USD/mes</td>
                    <td className="px-6 py-4 text-center bg-[#00d4aa]/5">
                      <span className="text-[#00d4aa] font-bold">$0 MXN</span>
                      <div className="text-xs text-[#00d4aa]">Pay per use</div>
                    </td>
                  </tr>

                  {/* Speed */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">⚡ Velocidad Promedio</div>
                      <div className="text-sm text-gray-600">Tiempo para procesar firma</div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">3-5 segundos</td>
                    <td className="px-6 py-4 text-center text-gray-600">2-4 segundos</td>
                    <td className="px-6 py-4 text-center bg-[#00d4aa]/5">
                      <span className="text-[#00d4aa] font-bold">1-2 segundos</span>
                      <div className="text-xs text-[#00d4aa]">2.5x más rápido</div>
                    </td>
                  </tr>

                  {/* API Technology */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">🔧 Tecnología API</div>
                      <div className="text-sm text-gray-600">Tipo de integración disponible</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-gray-600">REST básico</div>
                      <div className="text-xs text-gray-500">2014</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-gray-600">REST avanzado</div>
                      <div className="text-xs text-gray-500">2020</div>
                    </td>
                    <td className="px-6 py-4 text-center bg-[#00d4aa]/5">
                      <span className="text-[#00d4aa] font-bold">GraphQL + REST</span>
                      <div className="text-xs text-[#00d4aa]">2026</div>
                    </td>
                  </tr>

                  {/* Support */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">🎧 Soporte Técnico</div>
                      <div className="text-sm text-gray-600">Disponibilidad de ayuda</div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Lun-Vie 9-18h</td>
                    <td className="px-6 py-4 text-center text-gray-600">24/5 (Inglés)</td>
                    <td className="px-6 py-4 text-center bg-[#00d4aa]/5">
                      <span className="text-[#00d4aa] font-bold">24/7/365</span>
                      <div className="text-xs text-[#00d4aa]">En español</div>
                    </td>
                  </tr>

                  {/* Legal Validity */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">⚖️ Validez Legal</div>
                      <div className="text-sm text-gray-600">Cumplimiento normativo México</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-semibold">✅ NOM-151</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-semibold">✅ NOM-151</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-[#00d4aa]/5">
                      <span className="text-green-600 font-semibold">✅ NOM-151</span>
                      <div className="text-xs text-[#00d4aa]">+ Biometría</div>
                    </td>
                  </tr>

                  {/* Migration */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">🔄 Migración Asistida</div>
                      <div className="text-sm text-gray-600">Ayuda para cambiar de proveedor</div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">No disponible</td>
                    <td className="px-6 py-4 text-center text-blue-600">Limitada</td>
                    <td className="px-6 py-4 text-center bg-[#00d4aa]/5">
                      <span className="text-[#00d4aa] font-bold">Gratis + 24h</span>
                      <div className="text-xs text-[#00d4aa]">Servicio completo</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Savings Showcase */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">💸 Tu Ahorro Real</h2>
              <p className="text-lg text-gray-600">Calcula exactamente cuánto ahorrarías con diferentes volúmenes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Uso Bajo</h3>
                  <div className="text-[#0066ff] text-xl font-bold mb-4">50 docs/mes</div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Con Mifiel:</span>
                      <span className="text-red-600 font-semibold">$1,995/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Con Signa:</span>
                      <span className="text-[#00d4aa] font-semibold">$750/mes</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-black text-[#00d4aa]">$14,940</div>
                        <div className="text-sm text-gray-500">ahorro anual</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-[#0066ff]/10 text-[#0066ff] font-semibold rounded-lg hover:bg-[#0066ff]/20 transition-all">
                    Ver Detalles
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00d4aa]/5 to-[#0066ff]/5 border-2 border-[#00d4aa] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00d4aa] text-black text-xs font-bold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Uso Medio</h3>
                  <div className="text-[#00d4aa] text-xl font-bold mb-4">200 docs/mes</div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Con Mifiel:</span>
                      <span className="text-red-600 font-semibold">$6,480/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Con Signa:</span>
                      <span className="text-[#00d4aa] font-semibold">$3,000/mes</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-black text-[#00d4aa]">$41,760</div>
                        <div className="text-sm text-gray-500">ahorro anual</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-[#00d4aa] text-black font-bold rounded-lg hover:bg-[#00c499] transition-all">
                    Calcular Mi Caso
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Uso Alto</h3>
                  <div className="text-[#ff6b35] text-xl font-bold mb-4">500 docs/mes</div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Con Mifiel:</span>
                      <span className="text-red-600 font-semibold">$15,450/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Con Signa:</span>
                      <span className="text-[#00d4aa] font-semibold">$7,500/mes</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-black text-[#00d4aa]">$95,400</div>
                        <div className="text-sm text-gray-500">ahorro anual</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-[#ff6b35]/10 text-[#ff6b35] font-semibold rounded-lg hover:bg-[#ff6b35]/20 transition-all">
                    Contactar Ventas
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/signa/calculadora"
                className="inline-flex px-8 py-4 bg-[#00d4aa] text-black font-bold rounded-lg hover:bg-[#00c499] transition-all"
              >
                🧮 Calcular Mi Ahorro Exacto
              </Link>
            </div>
          </div>
        </section>

        {/* Why Switch Section */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                🤔 ¿Por Qué 1,000+ Empresas ya Cambiaron?
              </h2>
              <p className="text-xl text-white/60">
                Los beneficios van más allá del ahorro económico
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-[#00d4aa] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Ahorro Inmediato</h3>
                <p className="text-white/70">Desde el primer día pagas 50% menos por cada firma. Sin costos ocultos ni sorpresas.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-[#0066ff] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Velocidad Superior</h3>
                <p className="text-white/70">Procesamiento 2.5x más rápido. Tus clientes firman en segundos, no minutos.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Tecnología Moderna</h3>
                <p className="text-white/70">API de 2026 vs tecnología legacy. Más estable, más rápida, más confiable.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Soporte 24/7</h3>
                <p className="text-white/70">Ayuda cuando la necesitas, no solo en horario de oficina. Respuesta promedio: 2 minutos.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Migración Gratis</h3>
                <p className="text-white/70">Te ayudamos a migrar todos tus documentos y configuraciones en 24 horas. Sin costo.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Garantía Total</h3>
                <p className="text-white/70">30 días de garantía. Si no ahorras como prometemos, devolvemos 100% tu dinero.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-[#00d4aa] to-[#0066ff]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              🚀 ¿Listo para Unirte a los 1,000+ que ya Ahorran?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              La migración es <strong>gratis</strong>, el ahorro es <strong>inmediato</strong>, 
              y la garantía es <strong>total</strong>.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link
                href="/signa/calculadora"
                className="px-8 py-4 bg-white text-[#0066ff] font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg"
              >
                💰 Ver Mi Ahorro Exacto
              </Link>
              <Link
                href="/contacto"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0066ff] transition-all"
              >
                📞 Hablar con un Experto
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block max-w-2xl">
              <p className="text-white">
                🛡️ <strong>Garantía 30 días:</strong> Si no ahorras dinero como prometemos, 
                te devolvemos el 100% sin hacer preguntas.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
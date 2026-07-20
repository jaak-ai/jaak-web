import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { signaOrganizationSchema, signaServiceSchema, signaFAQSchema, signaBreadcrumbSchema } from "./schema";

export const metadata: Metadata = {
  title: "Signa - Firma Electrónica México | 50% Más Barata que Mifiel | NOM-151",
  description: "🏆 Firma electrónica profesional México. $15 vs $29.90 Mifiel (50% ahorro). NOM-151 certificado, soporte 24/7, migración gratis. Tecnología 2026.",
  keywords: [
    // Primary keywords
    "firma electrónica méxico",
    "mifiel alternativa", 
    "firma digital barata méxico",
    "signa firma electrónica",
    "NOM-151 firma",
    // Long tail keywords
    "firma electrónica más barata que mifiel",
    "alternativa mifiel méxico",
    "firma digital profesional méxico",
    "documento electrónico méxico",
    "signatura digital méxico",
    "firma online méxico",
    "e-signature méxico",
    "firma legal méxico",
    // Competitive keywords
    "mifiel vs signa",
    "precio mifiel alternativa",
    "migrar de mifiel",
    "cambiar mifiel por signa",
    // Industry keywords
    "firma electrónica empresas",
    "firma digital pymes",
    "contratos digitales méxico",
    "documentos legales online"
  ],
  authors: [{ name: "Signa México", url: "https://jaak.ai/signa" }],
  creator: "Signa",
  publisher: "Signa México", 
  alternates: {
    canonical: "https://jaak.ai/signa",
    languages: {
      'es-MX': 'https://jaak.ai/signa',
      'es': 'https://jaak.ai/signa'
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Signa - Firma Electrónica México | 50% Más Barata que Mifiel",
    description: "🏆 Firma electrónica profesional México. $15 vs $29.90 Mifiel (50% ahorro). NOM-151 certificado, migración gratis.",
    type: "website",
    url: "https://jaak.ai/signa",
    siteName: "Signa - Firma Electrónica México",
    locale: "es_MX",
    images: [
      {
        url: "https://jaak.ai/signa-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Signa - Firma Electrónica 50% Más Barata que Mifiel"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Signa - Firma Electrónica México | 50% Más Barata que Mifiel",
    description: "🏆 $15 vs $29.90 Mifiel (50% ahorro). NOM-151 certificado, migración gratis.",
    images: ["https://jaak.ai/signa-twitter-image.jpg"],
    creator: "@SignaMexico"
  },
  category: "Technology",
  classification: "Firma Electrónica, Tecnología, Software Empresarial",
  other: {
    'geo.region': 'MX',
    'geo.country': 'México', 
    'geo.placename': 'México',
    'language': 'Spanish',
    'target-audience': 'Empresas, PyMEs, Profesionales',
    'distribution': 'global',
    'revisit-after': '7 days'
  }
};

export default function SignaHome() {
  return (
    <>
      <ScrollReveal />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            signaOrganizationSchema,
            signaServiceSchema, 
            signaFAQSchema,
            signaBreadcrumbSchema
          ])
        }}
      />
      
      <Header />
      <main>
        {/* Hero Section - Optimized for "firma electrónica méxico" */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#1a1a1a]" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <header data-sr>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                  <span className="text-[#00d4aa] text-sm font-medium">Tecnología 2026</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                  <span className="text-[#0066ff]">Firma Electrónica México</span>
                </h1>
                <p className="text-xl text-white/70 mb-8" role="text">
                  <strong className="text-white">Firma electrónica profesional para México</strong> con tecnología 2026. 
                  Certificado <strong className="text-[#00d4aa]">NOM-151</strong>, soporte 24/7. 
                  <strong className="text-white">50% más barata que Mifiel</strong> - Solo $15 por documento.
                </p>
                
                {/* Price Comparison */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex-1 min-w-[140px]">
                    <div className="text-red-400 text-sm font-medium">Competencia</div>
                    <div className="text-red-300 text-2xl font-bold">$29.90</div>
                    <div className="text-red-400/70 text-sm">por firma</div>
                  </div>
                  <div className="flex items-center text-white/50 text-2xl font-bold px-2">VS</div>
                  <div className="bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-lg p-4 flex-1 min-w-[140px] relative">
                    <div className="absolute -top-2 -right-2 bg-[#00d4aa] text-black text-xs font-bold px-2 py-1 rounded-full">50% MENOS</div>
                    <div className="text-[#00d4aa] text-sm font-medium">Signa</div>
                    <div className="text-[#00d4aa] text-2xl font-bold">$15.00</div>
                    <div className="text-[#00d4aa]/70 text-sm">por firma</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/signa/calculadora"
                    className="px-6 py-3 bg-[#00d4aa] text-black font-bold rounded-lg hover:bg-[#00c499] transition-all"
                  >
                    📊 Calcular Mi Ahorro
                  </Link>
                  <Link
                    href="/signa/comparacion"
                    className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
                  >
                    ⚖️ Ver Comparación
                  </Link>
                </div>

                <div className="mt-8 flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 text-[#00d4aa]">
                    <span>✅</span> Migración gratis desde cualquier plataforma
                  </div>
                  <div className="flex items-center gap-2 text-[#00d4aa]">
                    <span>⚡</span> Deploy en 24 horas vs semanas de otros
                  </div>
                  <div className="flex items-center gap-2 text-[#00d4aa]">
                    <span>🏛️</span> NOM-151 certificado, validez legal completa
                  </div>
                  <div className="flex items-center gap-2 text-[#00d4aa]">
                    <span>🛡️</span> Garantía 30 días - Si no ahorras, te devolvemos tu dinero
                  </div>
                </div>
              </header>

              <div data-sr="right" className="relative">
                {/* Interactive Savings Calculator */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">📊 Calcula Tu Ahorro Real</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        ¿Cuántos documentos firmas al mes?
                      </label>
                      <input 
                        type="number" 
                        id="monthly-docs" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[#00d4aa] focus:outline-none"
                        placeholder="ej: 100"
                        min="1"
                      />
                    </div>
                    
                    <button 
                      id="calculate-savings"
                      className="w-full px-6 py-3 bg-[#00d4aa] text-black font-bold rounded-lg hover:bg-[#00c499] transition-all"
                    >
                      🧮 Calcular Ahorro
                    </button>
                    
                    <div id="savings-result" className="hidden bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-lg p-4">
                      <div className="text-[#00d4aa] font-bold text-lg" id="savings-amount">
                        {/* Resultado aparecerá aquí */}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/60 text-sm text-center">
                      🛡️ <strong className="text-white">Garantía 30 días:</strong> Si no ahorras como prometemos, te devolvemos 100% sin preguntas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Grid - SEO Optimized for "mejor firma electrónica méxico" */}
        <section className="py-20 bg-white" role="region" aria-labelledby="why-choose-signa">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-16">
              <h2 id="why-choose-signa" className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                🏆 ¿Por Qué <span className="text-[#00d4aa]">Signa</span> es la 
                <span className="text-[#0066ff]"> Mejor Firma Electrónica México</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                <strong>Más de 1,000 empresas ya migraron</strong> de Mifiel a Signa. 
                Descubre por qué es la <strong>mejor alternativa a Mifiel</strong> en México: 
                50% más barata, tecnología 2026, y validez legal NOM-151.
              </p>
            </div>

            <div data-sr-grid className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💸</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competencia Actual</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>❌ $29.90 por firma</div>
                  <div>❌ Setup fee: $2,500 MXN</div>
                  <div>❌ Cuota mensual mínima</div>
                  <div>❌ Soporte horario oficina</div>
                  <div>❌ Interfaz desactualizada</div>
                  <div>❌ API limitada</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00d4aa]/5 to-[#0066ff]/5 border-2 border-[#00d4aa] rounded-xl p-8 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00d4aa] text-black text-xs font-bold px-3 py-1 rounded-full">
                  RECOMENDADO
                </div>
                <div className="w-16 h-16 bg-[#00d4aa]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Signa (Nosotros)</h3>
                <div className="space-y-2 text-sm text-gray-800">
                  <div className="text-[#00d4aa] font-semibold">✅ $15.00 por firma (50% menos)</div>
                  <div className="text-[#00d4aa] font-semibold">✅ Setup GRATIS</div>
                  <div className="text-[#00d4aa] font-semibold">✅ Pay per use (sin mínimos)</div>
                  <div className="text-[#00d4aa] font-semibold">✅ Soporte 24/7</div>
                  <div className="text-[#00d4aa] font-semibold">✅ Interfaz 2026</div>
                  <div className="text-[#00d4aa] font-semibold">✅ API moderna GraphQL + REST</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Otros Proveedores</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>⚠️ $25-35 por firma</div>
                  <div>⚠️ Contratos anuales</div>
                  <div>⚠️ Implementación 2-6 meses</div>
                  <div>⚠️ Soporte en inglés</div>
                  <div>⚠️ No especializado México</div>
                  <div>⚠️ Compliance complejo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-xl text-white/60">
                Empresas que ya migraron y están ahorrando miles de pesos mensuales.
              </p>
            </div>

            <div data-sr-grid className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#00d4aa] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold">CM</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-semibold">Carlos Mendoza</div>
                    <div className="text-white/60 text-sm">Director, Inmobiliaria Premium</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  "Migramos en 24 horas y ahorramos $85,320 anuales. La API es 2.5x más rápida que la anterior. Nuestros clientes notan la diferencia."
                </p>
                <div className="flex gap-4 text-xs">
                  <span className="bg-[#00d4aa]/20 text-[#00d4aa] px-2 py-1 rounded">450 docs/mes</span>
                  <span className="bg-[#00d4aa]/20 text-[#00d4aa] px-2 py-1 rounded">$85K ahorro/año</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0066ff] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">AL</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-semibold">Ana López</div>
                    <div className="text-white/60 text-sm">Socia, Bufete López & Asociados</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  "El soporte 24/7 es increíble. Antes esperábamos días, ahora obtenemos respuestas en minutos. El ahorro anual es de $44,700."
                </p>
                <div className="flex gap-4 text-xs">
                  <span className="bg-[#0066ff]/20 text-[#0066ff] px-2 py-1 rounded">250 docs/mes</span>
                  <span className="bg-[#0066ff]/20 text-[#0066ff] px-2 py-1 rounded">$44K ahorro/año</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">RS</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-semibold">Roberto Silva</div>
                    <div className="text-white/60 text-sm">CEO, Consultoría Silva</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  "La interfaz moderna convenció a nuestros clientes inmediatamente. ROI positivo desde el primer mes. Ahorro del 52%."
                </p>
                <div className="flex gap-4 text-xs">
                  <span className="bg-[#ff6b35]/20 text-[#ff6b35] px-2 py-1 rounded">180 docs/mes</span>
                  <span className="bg-[#ff6b35]/20 text-[#ff6b35] px-2 py-1 rounded">$32K ahorro/año</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#00d4aa] to-[#0066ff]">
          <div data-sr className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              ¿Listo para Ahorrar 50% en Firma Electrónica?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Migración gratis, setup en 24 horas, soporte 24/7. 
              <strong> Garantía 30 días o te devolvemos tu dinero.</strong>
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
                📞 Hablar con Experto
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
              <p className="text-white text-sm">
                🛡️ <strong>Garantía 30 días:</strong> Si no ahorras dinero como prometemos, te devolvemos el 100% sin hacer preguntas.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Add JavaScript for calculator */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const calculateBtn = document.getElementById('calculate-savings');
            const monthlyDocsInput = document.getElementById('monthly-docs');
            const resultDiv = document.getElementById('savings-result');
            const savingsAmount = document.getElementById('savings-amount');
            
            calculateBtn?.addEventListener('click', function() {
              const monthlyDocs = parseInt(monthlyDocsInput.value) || 0;
              
              if (monthlyDocs < 1) {
                alert('Por favor ingresa un número válido de documentos.');
                return;
              }
              
              const competitorCost = monthlyDocs * 29.90;
              const signaCost = monthlyDocs * 15.00;
              const monthlySavings = competitorCost - signaCost;
              const annualSavings = monthlySavings * 12;
              const percentage = ((monthlySavings / competitorCost) * 100).toFixed(0);
              
              savingsAmount.innerHTML = \`
                <div class="text-center">
                  <div class="text-2xl font-bold mb-2">💰 Tu Ahorro Calculado</div>
                  <div class="text-lg mb-1">Mensual: <span class="text-[#00d4aa]">$\${monthlySavings.toLocaleString('es-MX', {minimumFractionDigits: 2})} MXN</span></div>
                  <div class="text-xl font-bold mb-1">Anual: <span class="text-[#00d4aa]">$\${annualSavings.toLocaleString('es-MX', {minimumFractionDigits: 2})} MXN</span></div>
                  <div class="text-sm">Ahorro: <span class="text-[#00d4aa] font-bold">\${percentage}%</span></div>
                  <a href="/signa/calculadora" class="inline-block mt-4 px-4 py-2 bg-[#00d4aa] text-black rounded-lg text-sm font-semibold hover:bg-[#00c499]">
                    Ver Detalles Completos →
                  </a>
                </div>
              \`;
              
              resultDiv.classList.remove('hidden');
            });
          });
        `
      }} />
      
      <Footer />
    </>
  );
}
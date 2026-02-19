import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculadora de Ahorro vs Competencia | Signa - Firma Electrónica",
  description: "Calcula exactamente cuánto puedes ahorrar con Signa vs Mifiel y otros proveedores. Ahorro promedio: $26,000 MXN anuales.",
  keywords: ["calculadora ahorro firma electrónica", "mifiel precio comparación", "signa costo beneficio", "ahorro firma digital"],
};

export default function SignaCalculadora() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
              <span className="text-[#00d4aa] text-sm font-medium">Calculadora Inteligente</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              💰 <span className="text-[#00d4aa]">Calculadora</span> de Ahorro
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Descubre exactamente cuánto dinero puedes ahorrar cambiando a Signa. 
              <strong className="text-white"> Ahorro promedio: $26,000+ MXN anuales.</strong>
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Calculator Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">📊 Ingresa tus Datos</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-800 text-sm font-semibold mb-2">
                      ¿Cuántos documentos firmas por mes?
                    </label>
                    <input 
                      type="number" 
                      id="monthly-volume" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#00d4aa] focus:outline-none"
                      placeholder="ej: 150"
                      min="1"
                    />
                    <p className="text-xs text-gray-500 mt-1">Promedio de documentos que procesas mensualmente</p>
                  </div>

                  <div>
                    <label className="block text-gray-800 text-sm font-semibold mb-2">
                      ¿Cuánto pagas actualmente por firma?
                    </label>
                    <select id="current-price" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#00d4aa] focus:outline-none">
                      <option value="29.90">Mifiel ($29.90 MXN)</option>
                      <option value="25.00">DocuSign (~$25.00 USD ≈ $450 MXN)</option>
                      <option value="35.00">Otro proveedor ($35.00 MXN)</option>
                      <option value="custom">Precio personalizado</option>
                    </select>
                    <input 
                      type="number" 
                      id="custom-price" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#00d4aa] focus:outline-none mt-2 hidden"
                      placeholder="Ingresa tu precio por firma"
                      step="0.01"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 text-sm font-semibold mb-2">
                      ¿Tienes costos adicionales mensuales? (opcional)
                    </label>
                    <input 
                      type="number" 
                      id="additional-costs" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#00d4aa] focus:outline-none"
                      placeholder="ej: 500"
                      min="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Setup fees, mensualidades, soporte, etc.</p>
                  </div>

                  <div>
                    <label className="block text-gray-800 text-sm font-semibold mb-2">
                      ¿Cuántas personas usan la plataforma?
                    </label>
                    <input 
                      type="number" 
                      id="team-size" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#00d4aa] focus:outline-none"
                      placeholder="ej: 5"
                      min="1"
                      defaultValue="3"
                    />
                    <p className="text-xs text-gray-500 mt-1">Usuarios que firman o administran documentos</p>
                  </div>

                  <button 
                    id="calculate-btn"
                    className="w-full px-6 py-4 bg-[#00d4aa] text-black font-bold text-lg rounded-lg hover:bg-[#00c499] transition-all"
                  >
                    🧮 Calcular Mi Ahorro
                  </button>
                </div>
              </div>

              {/* Results Panel */}
              <div id="results-panel" className="bg-gradient-to-br from-[#00d4aa]/5 to-[#0066ff]/5 border-2 border-[#00d4aa]/20 rounded-2xl p-8 opacity-0 transform translate-x-4 transition-all duration-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">💸 Tu Ahorro Potencial</h2>
                
                {/* Savings Summary */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#0066ff]/10 border border-[#0066ff]/30 rounded-xl p-6 text-center">
                    <h3 className="text-sm text-gray-600 font-medium mb-2">Ahorro Mensual</h3>
                    <span id="monthly-savings" className="text-3xl font-black text-[#0066ff]">$0</span>
                  </div>
                  <div className="bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-xl p-6 text-center">
                    <h3 className="text-sm text-gray-600 font-medium mb-2">Ahorro Anual</h3>
                    <span id="annual-savings" className="text-3xl font-black text-[#00d4aa]">$0</span>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-white/50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📈 Comparación Detallada</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Costo por firma actual</span>
                      <span id="current-per-signature" className="font-semibold text-gray-900">$29.90</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Costo por firma con Signa</span>
                      <span className="font-semibold text-[#00d4aa]">$15.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Volumen mensual</span>
                      <span id="monthly-volume-display" className="font-semibold text-gray-900">100 docs</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Total mensual actual</span>
                      <span id="current-monthly-total" className="font-semibold text-gray-900">$2,990</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Total mensual con Signa</span>
                      <span id="our-monthly-total" className="font-semibold text-[#00d4aa]">$1,500</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-red-50 rounded-lg px-4">
                      <span className="text-sm font-bold text-gray-900">Diferencia mensual</span>
                      <span id="monthly-difference" className="font-black text-red-600 text-lg">-$1,490</span>
                    </div>
                  </div>
                </div>

                {/* ROI Analysis */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Tiempo ROI</div>
                    <div className="text-lg font-bold text-[#00d4aa]">Inmediato</div>
                    <div className="text-xs text-gray-500">Desde día 1</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">% Ahorro</div>
                    <div id="savings-percentage" className="text-lg font-bold text-[#00d4aa]">50%</div>
                    <div className="text-xs text-gray-500">Reducción costos</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Migración</div>
                    <div className="text-lg font-bold text-[#00d4aa]">Gratis</div>
                    <div className="text-xs text-gray-500">Sin costo</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-[#00d4aa] to-[#0066ff] rounded-xl p-6 text-center text-white">
                  <h3 className="text-lg font-bold mb-2">🚀 ¿Listo para Ahorrar?</h3>
                  <p className="text-sm mb-4 opacity-90">Con estos ahorros, la migración se paga sola desde el primer día.</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Link
                      href="/contacto"
                      className="px-4 py-2 bg-white text-[#0066ff] font-bold rounded-lg hover:bg-gray-50 transition-all text-sm"
                    >
                      Solicitar Migración
                    </Link>
                    <button 
                      id="share-results"
                      className="px-4 py-2 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0066ff] transition-all text-sm"
                    >
                      📱 Compartir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Examples */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">💼 Casos de Éxito por Industria</h2>
              <p className="text-lg text-gray-600">Ahorro real de empresas que ya migraron a Signa</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-4">🏠</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Inmobiliaria</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-600 mb-1">500 docs/mes</div>
                    <div className="text-2xl font-bold text-[#00d4aa]">$89,400/año</div>
                    <div className="text-sm text-gray-500">de ahorro</div>
                  </div>
                  <p className="text-sm text-gray-600">Contratos de compraventa, arrendamiento y poderes notariales</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-4">⚖️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Bufete Legal</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-600 mb-1">300 docs/mes</div>
                    <div className="text-2xl font-bold text-[#00d4aa]">$53,640/año</div>
                    <div className="text-sm text-gray-500">de ahorro</div>
                  </div>
                  <p className="text-sm text-gray-600">Contratos, demandas, documentos notariales y poderes</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-4">🏭</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Empresa</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-600 mb-1">200 docs/mes</div>
                    <div className="text-2xl font-bold text-[#00d4aa]">$35,760/año</div>
                    <div className="text-sm text-gray-500">de ahorro</div>
                  </div>
                  <p className="text-sm text-gray-600">Contratos laborales, proveedores y documentos internos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">❓ Preguntas Frecuentes</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">¿La migración realmente es gratis?</h3>
                <p className="text-gray-600">Sí, completamente. Te ayudamos a exportar tus documentos e importarlos a Signa sin ningún costo.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">¿Cuánto tiempo toma migrar?</h3>
                <p className="text-gray-600">Entre 24-48 horas. La mayoría de clientes están operando completamente en menos de 2 días.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">¿Mis documentos tendrán la misma validez legal?</h3>
                <p className="text-gray-600">Absolutamente. Cumplimos con NOM-151-SCFI-2016, el mismo estándar que otros proveedores.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">¿Qué pasa si no estoy satisfecho?</h3>
                <p className="text-gray-600">Garantía de 30 días. Si no ahorras dinero como prometemos, te devolvemos el 100% sin preguntas.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Calculator JavaScript */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const calculateBtn = document.getElementById('calculate-btn');
            const resultsPanel = document.getElementById('results-panel');
            const priceSelect = document.getElementById('current-price');
            const customPriceInput = document.getElementById('custom-price');
            
            // Show/hide custom price input
            priceSelect?.addEventListener('change', function() {
              if (this.value === 'custom') {
                customPriceInput.classList.remove('hidden');
                customPriceInput.focus();
              } else {
                customPriceInput.classList.add('hidden');
              }
            });
            
            calculateBtn?.addEventListener('click', function() {
              const monthlyVolume = parseInt(document.getElementById('monthly-volume').value) || 0;
              const currentPriceSelect = document.getElementById('current-price');
              const customPrice = parseFloat(document.getElementById('custom-price').value) || 0;
              const additionalCosts = parseFloat(document.getElementById('additional-costs').value) || 0;
              
              if (monthlyVolume < 1) {
                alert('Por favor ingresa al menos 1 documento por mes.');
                return;
              }
              
              let currentPricePerSignature;
              if (currentPriceSelect.value === 'custom') {
                if (customPrice <= 0) {
                  alert('Por favor ingresa un precio personalizado válido.');
                  return;
                }
                currentPricePerSignature = customPrice;
              } else {
                currentPricePerSignature = parseFloat(currentPriceSelect.value);
              }
              
              const ourPricePerSignature = 15.00;
              const currentMonthlyCost = (monthlyVolume * currentPricePerSignature) + additionalCosts;
              const ourMonthlyCost = monthlyVolume * ourPricePerSignature;
              const monthlySavings = currentMonthlyCost - ourMonthlyCost;
              const annualSavings = monthlySavings * 12;
              const savingsPercentage = ((monthlySavings / currentMonthlyCost) * 100).toFixed(1);
              
              // Update display
              document.getElementById('monthly-savings').textContent = '$' + monthlySavings.toLocaleString('es-MX', {minimumFractionDigits: 2});
              document.getElementById('annual-savings').textContent = '$' + annualSavings.toLocaleString('es-MX', {minimumFractionDigits: 2});
              document.getElementById('current-per-signature').textContent = '$' + currentPricePerSignature.toFixed(2);
              document.getElementById('monthly-volume-display').textContent = monthlyVolume + ' docs';
              document.getElementById('current-monthly-total').textContent = '$' + currentMonthlyCost.toLocaleString('es-MX', {minimumFractionDigits: 2});
              document.getElementById('our-monthly-total').textContent = '$' + ourMonthlyCost.toLocaleString('es-MX', {minimumFractionDigits: 2});
              document.getElementById('monthly-difference').textContent = '-$' + monthlySavings.toLocaleString('es-MX', {minimumFractionDigits: 2});
              document.getElementById('savings-percentage').textContent = savingsPercentage + '%';
              
              // Show results with animation
              resultsPanel.classList.remove('opacity-0', 'translate-x-4');
              resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            
            // Share functionality
            document.getElementById('share-results')?.addEventListener('click', function() {
              const annualSavings = document.getElementById('annual-savings').textContent;
              const monthlyVolume = document.getElementById('monthly-volume').value;
              
              const shareText = \`🚀 ¡Increíble! Puedo ahorrar \${annualSavings} anuales con Signa vs la competencia. Con \${monthlyVolume} documentos/mes, el ahorro es inmediato. 💰\`;
              
              if (navigator.share) {
                navigator.share({
                  title: 'Mi Ahorro con Signa',
                  text: shareText,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(shareText + '\\n\\n👉 Calcula tu ahorro: ' + window.location.href).then(() => {
                  alert('¡Resultados copiados al portapapeles!');
                });
              }
            });
          });
        `
      }} />
      
      <Footer />
    </>
  );
}
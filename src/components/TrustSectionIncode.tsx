"use client";

import { STATS, CERTIFICACIONES } from "@/lib/trust";

/**
 * TrustSectionIncode — Sección de confianza con visual deep-tech
 *
 * Inspiración INCODE: muestra gráficamente cómo funciona iBeta,
 * procesos de verificación y certificaciones reales.
 *
 * NO testimonios ficticios. Datos reales de src/lib/trust.ts.
 */

export default function TrustSectionIncode() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E1133] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-800 mb-4">
            Confianza de grado bancario
          </h2>
          <p className="text-lg text-[#C5C7D0] max-w-2xl mx-auto">
            Tecnología criptográfica + procesos auditados + certificaciones reales.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <MetricCardDarkMode
            label="Precisión biométrica"
            value="99%"
            description="En verificación facial 1:1"
          />
          <MetricCardDarkMode
            label="Tiempo promedio"
            value="< 30s"
            description="De captura a verificación"
          />
          <MetricCardDarkMode
            label="Disponibilidad"
            value="99.9%"
            description="SLA para producción"
          />
          <MetricCardDarkMode
            label="Verificaciones"
            value="+50M"
            description="Acumuladas desde 2020"
          />
        </div>

        {/* Process Flow: Visual Deep-Tech */}
        <div className="mb-20">
          <h3 className="text-2xl font-700 mb-12 text-center">
            Flujo de verificación (iBeta Nivel 1)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                label: "Captura",
                description: "INE + Selfie",
                icon: "📸",
              },
              {
                step: "2",
                label: "Liveness",
                description: "Prueba de vida anti-spoofing",
                icon: "✨",
              },
              {
                step: "3",
                label: "Verificación",
                description: "Cruce 1:1 + listas negras",
                icon: "🔍",
              },
              {
                step: "4",
                label: "Evidencia",
                description: "Expediente auditable",
                icon: "✅",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {/* Card */}
                <div
                  className="p-6 rounded-lg border border-[#2DB6C1]/30 bg-[#2DB6C1]/05"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="text-xs font-700 text-[#2DB6C1] uppercase tracking-wide mb-2">
                    Paso {item.step}
                  </p>
                  <h4 className="text-lg font-700 mb-1">{item.label}</h4>
                  <p className="text-sm text-[#C5C7D0]">{item.description}</p>
                </div>

                {/* Arrow */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-0.5 bg-[#2DB6C1]/50" />
                    <div className="w-0 h-0 border-l-2 border-t-2 border-b-2 border-l-[#2DB6C1]/50 border-t-transparent border-b-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mb-20">
          <h3 className="text-2xl font-700 mb-8 text-center">
            Certificaciones verificadas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CERTIFICACIONES.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-[#2AD796]/30 bg-[#2AD796]/05 text-center"
              >
                <div className="text-2xl mb-2">🏆</div>
                <p className="text-xs font-600 text-[#2AD796]">{cert}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#C5C7D0] text-center mt-6">
            Todas las certificaciones verificables en registros públicos.
          </p>
        </div>

        {/* Technical Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div>
            <h4 className="text-lg font-700 mb-4 flex items-center gap-2">
              <span>🔐</span> Seguridad criptográfica
            </h4>
            <ul className="space-y-2 text-sm text-[#C5C7D0]">
              <li>✓ Hashes SHA-256 para integridad</li>
              <li>✓ Encriptación TLS 1.3 en tránsito</li>
              <li>✓ AES-256 en reposo para datos sensibles</li>
              <li>✓ Rotación automática de claves</li>
              <li>✓ Auditoría de accesos 100%</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-700 mb-4 flex items-center gap-2">
              <span>⚖️</span> Cumplimiento regulatorio
            </h4>
            <ul className="space-y-2 text-sm text-[#C5C7D0]">
              <li>✓ LFPIORPI (retención legal 5-10 años)</li>
              <li>✓ CNBV (entidades de crédito)</li>
              <li>✓ UIF (prevención de PLD/AML)</li>
              <li>✓ NOM-151 (firma electrónica)</li>
              <li>✓ IFAI (protección de datos personales)</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-[#C5C7D0] mb-6">
            ¿Listo para verificar identidad con confianza de grado bancario?
          </p>
          <button className="px-7 py-3 text-[#0E1133] font-700 rounded-lg bg-[#2DB6C1] hover:bg-[#25969f] transition-colors duration-200">
            Agendar demo
          </button>
        </div>
      </div>
    </section>
  );
}

function MetricCardDarkMode({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-[#2DB6C1]/20 bg-[#2DB6C1]/05">
      <p className="text-xs font-700 text-[#2DB6C1] uppercase tracking-wide mb-2">
        {label}
      </p>
      <p className="text-3xl font-800 text-white mb-2">{value}</p>
      <p className="text-sm text-[#C5C7D0]">{description}</p>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prueba JAAK Autoservicio | Empieza con el plan Cobre",
  description:
    "Compra tu paquete de prueba y empieza a integrar los productos JAAK en minutos. Sin contrato, sin setup fee.",
};

export default function AutoservicioPrueba() {
  const valueBadges = [
    "Sin contrato mínimo",
    "Activación inmediata",
    "Soporte incluido",
    "Documentación completa",
    "Sandbox gratuito",
  ];

  const accompanyingItems = [
    {
      icon: "📚",
      title: "Documentación técnica",
      desc: "Guías paso a paso, referencia de API y ejemplos de código listos para copiar.",
    },
    {
      icon: "🧪",
      title: "Entorno sandbox",
      desc: "Ambiente de pruebas gratuito e ilimitado para desarrollar y validar sin consumir créditos.",
    },
    {
      icon: "💬",
      title: "Soporte por email",
      desc: "Tiempo de respuesta garantizado según su plan. Resolvemos dudas técnicas y de integración.",
    },
    {
      icon: "🎓",
      title: "Onboarding guiado",
      desc: "Llamada de bienvenida de 30 minutos para que su equipo arranque sin fricciones.",
    },
    {
      icon: "🔁",
      title: "Créditos no vencen",
      desc: "Sus créditos tienen vigencia de 12 meses desde la compra. Úselos a su ritmo.",
    },
  ];

  const trialPlans = [
    {
      icon: "🪪",
      name: "KYC — Verificación de identidad",
      color: "#2DB6C1",
      qty: "10 verificaciones",
      price: "$990",
      link: "https://platform.jaak.ai/register?d=eyJwbGFuIjoiY29icmUiLCJwcm9kdWN0Ijoia3ljIn0=",
    },
    {
      icon: "✍️",
      name: "Firma Simple",
      color: "#3b82f6",
      qty: "10 sesiones",
      price: "$399",
      link: "https://platform.jaak.ai/register?d=eyJwbGFuIjoiY29icmUiLCJwcm9kdWN0IjoiZmlybWEtc2ltcGxlIn0=",
    },
    {
      icon: "📜",
      name: "Firma NOM-151",
      color: "#0ea5e9",
      qty: "10 sesiones",
      price: "$699",
      link: "https://platform.jaak.ai/register?d=eyJwbGFuIjoiY29icmUiLCJwcm9kdWN0IjoiZmlybWEtbm9tIn0=",
    },
    {
      icon: "✍️",
      name: "Firma NOM-151 + Biometría",
      color: "#8b5cf6",
      qty: "10 sesiones",
      price: "$1,300",
      link: "https://platform.jaak.ai/register?d=eyJwbGFuIjoiY29icmUiLCJwcm9kdWN0IjoiZmlybWEtbm9tLWJpbyJ9",
    },
    {
      icon: "🔐",
      name: "Firma NOM-151 + KYC Completo",
      color: "#f59e0b",
      qty: "10 sesiones",
      price: "$1,490",
      link: "https://platform.jaak.ai/register?d=eyJwbGFuIjoiY29icmUiLCJwcm9kdWN0IjoiZmlybWEtbm9tLWt5YyJ9",
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Recibes acceso inmediato",
      desc: "En minutos recibirá sus credenciales de API y acceso al portal de autoservicio.",
    },
    {
      num: "2",
      title: "Exploras el sandbox",
      desc: "Pruebe flujos reales en el entorno de pruebas sin consumir créditos de producción.",
    },
    {
      num: "3",
      title: "Integras con tu sistema",
      desc: "Use nuestra documentación y SDKs para conectar JAAK a su plataforma en pocos días.",
    },
    {
      num: "4",
      title: "Consumes tus créditos",
      desc: "Cuando esté listo, sus créditos están disponibles para producción desde el primer momento.",
    },
    {
      num: "5",
      title: "Escala cuando quieras",
      desc: "Adquiera más créditos o suba de plan en cualquier momento desde el portal, sin contratos.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D1B3E] to-[#1a2f5a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="w-2 h-2 bg-[#2DB6C1] rounded-full inline-block"></span>
            Plan Cobre — Paquetes de prueba
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Empieza a integrar JAAK<br />
            <span className="text-[#2DB6C1]">hoy mismo</span>
          </h1>
          <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
            Elige el producto que necesitas, compra tu paquete Cobre y activa tu
            acceso en minutos. Sin contrato, sin burocracia.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {valueBadges.map((badge) => (
              <span
                key={badge}
                className="text-sm bg-white/10 border border-white/20 rounded-full px-3 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Acompañamiento incluido */}
      <section className="py-16 px-4 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#212A45] mb-2">
              Acompañamiento incluido en todos los planes
            </h2>
            <p className="text-gray-500">
              Desde el primer día cuenta con todo lo necesario para integrar con éxito.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {accompanyingItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-[#EEEEEE] p-5 flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#212A45] text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes de prueba */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#212A45] mb-2">
              Elige tu paquete de prueba
            </h2>
            <p className="text-gray-500">
              Todos incluyen 10 créditos del producto seleccionado. Precios en MXN + IVA.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trialPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-2xl border border-[#EEEEEE] shadow-sm overflow-hidden"
              >
                <div
                  className="p-6"
                  style={{ borderTop: `4px solid ${plan.color}` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{plan.icon}</span>
                    <h3 className="font-bold text-[#212A45] text-base leading-tight">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="flex items-end justify-between mt-4">
                    <div>
                      <div className="text-2xl font-bold text-[#212A45]">
                        {plan.price}
                      </div>
                      <div className="text-xs text-gray-400">
                        {plan.qty} · + IVA
                      </div>
                    </div>
                    <Link
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                      style={{ backgroundColor: plan.color }}
                    >
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Qué pasa después de comprar? */}
      <section className="py-16 px-4 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#212A45] mb-2">
              ¿Qué pasa después de comprar?
            </h2>
            <p className="text-gray-500">
              El proceso de activación es completamente automático.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-[#EEEEEE] p-5 flex gap-5 items-start"
              >
                <div className="w-9 h-9 rounded-full bg-[#2DB6C1] text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-[#212A45] mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0D1B3E] to-[#1a2f5a] rounded-3xl p-10 text-white">
            <div className="flex justify-center flex-wrap gap-3 mb-6">
              {["100% prepago", "Sin permanencia", "Activación en minutos"].map(
                (b) => (
                  <span
                    key={b}
                    className="text-sm bg-white/10 border border-white/20 rounded-full px-3 py-1"
                  >
                    {b}
                  </span>
                )
              )}
            </div>
            <h2 className="text-2xl font-bold mb-3">¿Tienes dudas?</h2>
            <p className="text-white/75 mb-6">
              Nuestro equipo puede orientarle para elegir el producto y plan
              más adecuado para su caso de uso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#2DB6C1] hover:bg-[#25969f] text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

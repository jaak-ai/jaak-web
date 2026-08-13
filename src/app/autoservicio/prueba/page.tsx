import type { Metadata } from "next";
import Link from "next/link";
import OnboardingForm from "@/components/OnboardingForm";
import { buildCheckoutUrl, buildKycRegisterUrl } from "@/data/autoservicio-catalogo";
import { getAutoservicioCatalog } from "@/lib/catalog";

const WHATSAPP_NUMBER = "5215535091788";
const WHATSAPP_MESSAGE =
  "Hola, te contactamos de JAAK IT. Vimos que te interesó nuestra solución de identidad digital y cumplimiento regulatorio. ¿Tienes 5 minutos para que te cuente cómo podemos ayudarte?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// KYC usa el checkout unificado /register con el plan pre-seleccionado
// (TO-809 Fase 3 / AUTO-20).
const KYC_REGISTER_URL = buildKycRegisterUrl("gratis");

// Agrega el cupón (AUTO-4) a un deep-link ya construido, dentro del hash para que
// /register o /onboarding lo lean del query. Vacío = deja el link igual.
function withCoupon(url: string, coupon?: string): string {
  const code = (coupon ?? "").trim();
  return code ? `${url}&coupon=${encodeURIComponent(code)}` : url;
}

export const metadata: Metadata = {
  title: "Paquetes de Prueba JAAK Autoservicio | Empieza hoy",
  description:
    "Elige tu paquete de prueba único y empieza a usar JAAK en producción de inmediato. Sin contrato, sin setup fee, activación automática.",
};

export default async function AutoservicioPrueba({
  searchParams,
}: {
  searchParams: Promise<{ coupon?: string }>;
}) {
  // Cupón del banner (AUTO-4): llega como ?coupon=CODE y se propaga a cada
  // deep-link de compra para que el checkout lo pre-aplique.
  const { coupon } = await searchParams;

  // IDs de pricing reales (por producto+tier) para hidratar el checkout, igual
  // que /autoservicio — nunca un snapshot hardcodeado que pueda desactualizarse.
  const { productos, pricingIndex, productKeys } = await getAutoservicioCatalog();
  const cobreCheckoutUrl = (catalogId: string) => {
    const producto = productos.find((p) => p.id === catalogId);
    const paquete = producto?.paquetes.find((q) => q.id === "cobre");
    if (!producto || !paquete) return "/autoservicio";
    return buildCheckoutUrl([{ producto, paquete }], { pricingIndex, productKeys, coupon });
  };

  const valueBadges = [
    "Sin contrato mínimo",
    "Activación inmediata",
    "Soporte incluido",
    "Paquetes únicos de prueba",
  ];

  const accompanyingItems = [
    {
      icon: "💬",
      title: "Soporte por email",
      desc: "Tiempo de respuesta garantizado según su plan. Resolvemos dudas del servicio y su uso.",
    },
    {
      icon: "🎓",
      title: "Onboarding guiado",
      desc: "Sesiones grupales de 1 hora para garantizar que comience su proyecto sin fricción y en minutos.",
    },
    {
      icon: "🔁",
      title: "Créditos vigentes 12 meses",
      desc: "Sus créditos tienen vigencia de 12 meses desde la compra. Úselos a su ritmo.",
    },
  ];

  const trialPlans = [
    {
      icon: "🪪",
      name: "KYC — Verificación de identidad",
      color: "#2DB6C1",
      qty: "5 verificaciones",
      price: "$99",
      link: withCoupon(KYC_REGISTER_URL, coupon),
    },
    {
      icon: "✍️",
      name: "Firma Simple",
      color: "#3b82f6",
      qty: "10 sesiones",
      price: "$49",
      link: cobreCheckoutUrl("firma-simple"),
    },
    {
      icon: "📜",
      name: "Firma Digital con Validez NOM-151",
      color: "#0ea5e9",
      qty: "5 sesiones",
      price: "$99",
      link: cobreCheckoutUrl("firma-nom151"),
    },
    {
      icon: "✍️",
      name: "Firma Digital con Validez NOM-151 con Tecnología Biométrica",
      color: "#8b5cf6",
      qty: "5 sesiones",
      price: "$130",
      link: cobreCheckoutUrl("firma-nom151-bio"),
    },
    {
      icon: "🔐",
      name: "Firma Digital con Validez NOM-151 + KYC",
      color: "#f59e0b",
      qty: "5 sesiones",
      price: "$174",
      link: cobreCheckoutUrl("firma-nom151-kyc"),
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Compra tu paquete",
      desc: "Elige el producto que necesitas y completa tu compra en minutos desde el portal de autoservicio.",
    },
    {
      num: "2",
      title: "Acceso directo a producción",
      desc: "Al comprar se crea su empresa automáticamente y recibe acceso inmediato al servicio en producción, sin configuraciones adicionales.",
    },
    {
      num: "3",
      title: "Úsalo inmediatamente",
      desc: "Sus créditos están disponibles desde el primer momento. Empiece a usar el servicio sin esperas.",
    },
    {
      num: "4",
      title: "Recibe acompañamiento",
      desc: "Nuestro equipo está disponible para orientarle en sesiones grupales de onboarding y soporte por email.",
    },
    {
      num: "5",
      title: "Escala cuando quieras",
      desc: "Adquiera más créditos o suba de plan en cualquier momento desde el portal, sin contratos ni permanencia.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D1B3E] to-[#1a2f5a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="w-2 h-2 bg-[#2DB6C1] rounded-full inline-block"></span>
            Paquetes únicos de prueba
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Empieza a usar JAAK<br />
            <span className="text-[#2DB6C1]">hoy mismo</span>
          </h1>
          <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
            Elige el producto que necesitas, compra tu paquete de prueba y úsalo
            en producción de inmediato. Sin contrato, sin burocracia.
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#212A45] mb-2">
              Acompañamiento incluido en todos los paquetes
            </h2>
            <p className="text-gray-500">
              Desde el primer día cuenta con el apoyo necesario para comenzar con éxito.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
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
              Elige tu paquete único de prueba
            </h2>
            <p className="text-gray-500">
              Paquetes especiales de entrada. Precios en MXN + IVA.
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
                    <h3
                      className="font-bold text-[#212A45] text-sm leading-tight"
                    >
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
              El proceso es completamente automático. Sin esperas.
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

      <OnboardingForm />

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
              Nuestro equipo puede orientarle para elegir el producto y paquete
              más adecuado para su caso de uso.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="mailto:ventas@jaak.ai"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm"
              >
                ✉️ ventas@jaak.ai
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm"
              >
                💬 Escríbenos por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

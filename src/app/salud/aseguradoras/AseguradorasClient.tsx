"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { gtmEvent } from "@/components/GoogleTagManager";
import {
  NAVY,
  NAVY_SOFT,
  TEAL,
  TEAL_DEEP,
  LIGHT,
  BORDER,
  TEXT_BODY,
  STOP,
  SectorBreadcrumb,
  SectorHero,
  NormTable,
  ClaimsBlock,
  SourcesBlock,
  SectorCTADuo,
  SectorDisclosure,
  SectionHeading,
  ToolsBand,
  type NormRow,
  type ClaimPair,
  type SourceLink,
} from "@/components/salud/SectorPage";

const PAGE = "salud_aseguradoras";
const DEMO_HREF = "/kyc-demo-autoservicio";

interface ChainLink {
  n: string;
  title: string;
  text: string;
  breaks: string;
}

const CHAIN: ChainLink[] = [
  { n: "01", title: "Identidad", text: "Quién es el asegurado y quién autorizó en su nombre.", breaks: "Si falla: expedientes cruzados y fraude de suplantación sin rastro." },
  { n: "02", title: "Autorización", text: "Qué se autorizó, con qué alcance y en qué momento.", breaks: "Si falla: se paga algo que nunca se aprobó, sin poder demostrarlo." },
  { n: "03", title: "Servicio", text: "Qué se prestó realmente, por quién y con qué cédula.", breaks: "Si falla: no hay forma de contrastar lo facturado contra lo atendido." },
  { n: "04", title: "Factura", text: "Qué se cobró y contra qué documento clínico.", breaks: "Si falla: la objeción de pago no tiene soporte documental." },
  { n: "05", title: "Dictamen", text: "Quién resolvió, con qué criterio y sobre qué versión.", breaks: "Si falla: la resolución no se puede defender ante el asegurado." },
];

interface RetentionTerm {
  name: string;
  years: string;
  widthPct: number;
  alt?: boolean;
}

const TERMS: RetentionTerm[] = [
  { name: "Expediente clínico", years: "5 años", widthPct: 50 },
  { name: "Documentación mercantil", years: "10 años", widthPct: 100, alt: true },
  { name: "Contabilidad fiscal", years: "5 años", widthPct: 50 },
  { name: "Reclamación abierta", years: "Legal hold", widthPct: 100, alt: true },
];

const REVIEWER_CHECKS = [
  "Clasificación de cada documento del expediente por plazo aplicable",
  "Criterio de suspensión de depuración cuando hay reclamación abierta",
  "Evidencia de autenticación y aceptación en contratación electrónica",
  "Delimitación de responsable y encargado en el flujo con cada hospital",
  "Prueba de integridad del expediente desde la fecha en que se integró",
];

const NORM_ROWS: NormRow[] = [
  {
    instrument: "Circular Única de Seguros y Fianzas",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "4.10",
    effect: "Reglas para contratación por medios electrónicos. Debe conservarse la autenticación, la aceptación y la trazabilidad de la operación.",
  },
  {
    instrument: "Circular Única de Seguros y Fianzas",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "15.4 · 37.2",
    effect: "Expedientes clínicos en seguros de salud y conservación electrónica con seguridad, integridad, acceso y respaldo.",
  },
  {
    instrument: "Código de Comercio",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "46 · 46 Bis · 49",
    effect: "Conservación mercantil por diez años. La conservación electrónica se realiza conforme a la NOM-151.",
  },
  {
    instrument: "Código Fiscal de la Federación",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "30",
    effect: "Conservación de contabilidad y documentación relacionada por cinco años, con supuestos especiales que pueden extender el plazo.",
  },
  {
    instrument: "LFPDPPP 2025",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "8 · 18 · 19 · 20",
    effect: "Consentimiento expreso y por escrito para datos sensibles, medidas de seguridad proporcionales al riesgo, notificación de vulneraciones y deber de confidencialidad permanente.",
  },
  {
    instrument: "NOM-151-SCFI-2016",
    flagLabel: "Permite",
    flagTone: "permite",
    numeral: "4.2 · 6.2",
    effect: "La constancia de conservación es emitida por un prestador de servicios de certificación acreditado y permite demostrar existencia e integridad desde una fecha.",
  },
];

const CLAIMS: ClaimPair[] = [
  {
    said: "«El hospital nos manda el expediente, así que la evidencia es suya.»",
    real: "El deber de conservación y de seguridad aplica a quien trata los datos, y en el flujo hospital–aseguradora ambos tratan datos sensibles. Conviene delimitar por contrato quién es responsable y quién encargado en cada etapa.",
    ref: "LFPDPPP 2025 · 18 y 20 · CUSF 15.4",
  },
  {
    said: "«La constancia de conservación acredita que el asegurado firmó.»",
    real: "Acredita existencia e integridad del documento desde una fecha determinada. La identidad de quien firmó es una capa distinta que requiere verificación propia.",
    ref: "NOM-151-SCFI-2016 · Apéndice A · CCom 93 y 97",
  },
  {
    said: "«Podemos depurar el expediente completo a los cinco años.»",
    real: "Cinco años es el mínimo sanitario del expediente clínico. La documentación mercantil del mismo siniestro puede requerir diez años, y una reclamación abierta suspende cualquier depuración.",
    ref: "NOM-004 · 5.4 · CCom 49 · CFF 30",
  },
];

const SOURCES: SourceLink[] = [
  { code: "P26", label: "CNSF · Circular Única de Seguros y Fianzas, contratación electrónica", url: "https://www.cnsf.gob.mx/CUSFELECTRONICA/CUSF/CUSF4_10", meta: "Fuente regulatoria sectorial" },
  { code: "P27", label: "CNSF · Circular Única de Seguros y Fianzas", url: "https://www.cnsf.gob.mx/CUSFELECTRONICA/CUSF", meta: "Expedientes y conservación" },
  { code: "P10", label: "Código de Comercio", url: "https://www.diputados.gob.mx/LeyesBiblio/ref/ccom.htm", meta: "Cámara de Diputados · Texto vigente" },
  { code: "P25", label: "Código Fiscal de la Federación", url: "https://www.diputados.gob.mx/LeyesBiblio/ref/cff.htm", meta: "Cámara de Diputados · Texto vigente" },
  { code: "P13", label: "Ley Federal de Protección de Datos Personales (2025)", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf", meta: "Publicada 20 mar 2025" },
  { code: "P08", label: "NOM-151-SCFI-2016", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5478024&fecha=30/03/2017", meta: "DOF · 30 mar 2017 · Vigente" },
  { code: "P01", label: "NOM-004-SSA3-2012, Del expediente clínico", url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787", meta: "DOF · 15 oct 2012 · Vigente" },
  { code: "P17", label: "Sanción por tratamiento biométrico, julio 2026", url: "https://www.gob.mx/buengobierno/prensa/buen-gobierno-sanciona-a-la-federacion-mexicana-de-futbol-con-42-8-millones-de-pesos-por-violaciones-a-la-proteccion-de-datos-personales", meta: "Fuente oficial · No sector salud" },
];

function EvidenceChain() {
  return (
    <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {CHAIN.map((link) => (
        <div key={link.n} className="rounded-2xl p-5 bg-white h-full flex flex-col" style={{ border: `1px solid ${BORDER}` }}>
          <span className="text-xs font-mono font-bold" style={{ color: TEAL_DEEP }}>{link.n}</span>
          <h3 className="text-base font-bold mt-2 mb-2" style={{ color: NAVY }}>{link.title}</h3>
          <p className="text-[13.5px] leading-relaxed flex-1" style={{ color: TEXT_BODY }}>{link.text}</p>
          <p className="text-[12.5px] mt-3 pt-3 border-t leading-relaxed" style={{ borderColor: BORDER, color: STOP }}>{link.breaks}</p>
        </div>
      ))}
    </div>
  );
}

function RetentionBars() {
  return (
    <div data-sr className="space-y-3">
      {TERMS.map((term) => (
        <div key={term.name} className="grid sm:grid-cols-[13rem_1fr_6rem] gap-3 sm:gap-4 items-center">
          <span className="font-semibold text-sm text-white">{term.name}</span>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.14)" }}>
            <div
              className="h-full rounded-full"
              style={{ width: `${term.widthPct}%`, background: term.alt ? TEAL : "rgba(255,255,255,0.55)" }}
            />
          </div>
          <span className="font-mono text-sm sm:text-right" style={{ color: "rgba(255,255,255,0.7)" }}>{term.years}</span>
        </div>
      ))}
    </div>
  );
}

export default function AseguradorasClient() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <SectorBreadcrumb current="Aseguradoras" />
      <main>
        <SectorHero
          eyebrow="Aseguradoras de gastos médicos"
          h1={
            <>
              El expediente de siniestro es una cadena. <em style={{ fontStyle: "normal", color: TEAL }}>Se rompe por el eslabón más débil.</em>
            </>
          }
          lede={
            <>
              La controversia con un asegurado casi nunca es sobre un documento aislado. Es sobre si la cadena completa se sostiene: quién era, qué se autorizó, qué se prestó, qué se cobró y quién resolvió.{" "}
              <strong className="text-white font-semibold">Y las piezas llegan de hospitales con sistemas que no hablan entre sí.</strong>
            </>
          }
          heroNote="La Circular Única de Seguros y Fianzas exige conservación de expedientes clínicos con seguridad, integridad, acceso y respaldo. Lo que no resuelve es cómo correlacionar evidencia de origen externo."
          statFigure="$42.85M"
          statCaption="Sanción impuesta en julio de 2026 por deficiencias en aviso de privacidad y consentimiento en tratamiento biométrico. No fue un caso del sector salud, y por eso conviene leerlo bien: marca cómo la autoridad actual evalúa la biometría, no cuánto se multa a una aseguradora."
          primaryCtaLabel="Ver demo de verificación de identidad"
          primaryCtaHref={DEMO_HREF}
          secondaryCtaLabel="Matriz de retención"
          secondaryCtaHref="#retencion"
          onPrimaryClick={() => gtmEvent("demo_kyc_click", { source: "hero", destination: "kyc_general", page: PAGE })}
          onSecondaryClick={() => gtmEvent("salud_aseguradoras_retention_jump", { page: PAGE })}
        />

        <ToolsBand trackingPrefix={PAGE} background={LIGHT} />

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Elemento firma · Cadena probatoria del siniestro"
              title="Cinco eslabones, y lo que se pierde cuando uno falta."
              lede="Un expediente de siniestro no se defiende con volumen de papeles. Se defiende cuando cada eslabón puede vincularse al siguiente con evidencia verificable."
            />
            <EvidenceChain />
          </div>
        </section>

        <section id="retencion" className="py-16" style={{ background: NAVY }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider font-mono block mb-3" style={{ color: TEAL }}>Retención</span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 max-w-2xl">
              Cinco años es el mínimo sanitario, no su política.
            </h2>
            <p className="text-lg max-w-2xl mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              El mismo siniestro contiene documentos con plazos distintos. Depurar según el más corto es la forma más común de perder la evidencia que después se necesita para defender una objeción de pago.
            </p>
            <RetentionBars />
            <div data-sr className="mt-10 rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <span className="text-xs font-bold uppercase tracking-wide font-mono block mb-4" style={{ color: TEAL }}>
                Lo que un revisor va a pedir
              </span>
              <ul className="space-y-2.5">
                {REVIEWER_CHECKS.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <span aria-hidden="true" style={{ color: TEAL }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Base normativa"
              title="De qué norma sale cada requisito."
              lede="Sin interpretaciones intermedias: instrumento, numeral y lo que obliga en la práctica. Los enlaces al Diario Oficial están al final de la página."
            />
            <div data-sr>
              <NormTable rows={NORM_ROWS} />
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: LIGHT }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Precisiones"
              title="Afirmaciones que circulan y no resisten el numeral."
              lede="Las escuchamos en evaluaciones de proveedor y en comités internos de este sector."
            />
            <div data-sr>
              <ClaimsBlock claims={CLAIMS} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Siguiente paso" title="Dos formas de continuar, según qué necesite resolver." />
            <div data-sr>
              <SectorCTADuo
                primaryEyebrow="Para cumplimiento y jurídico"
                primaryTitle="Sesión de 30 minutos con un especialista de producto de JAAK"
                primaryText="Revisamos su expediente de siniestro y le mostramos cómo configurar KYC para verificar al asegurado y Firma NOM-151 para conservar la evidencia. No damos asesoría legal: los plazos y criterios normativos debe validarlos su propio equipo jurídico."
                primaryCtaLabel="Agendar la sesión"
                primaryCtaHref="https://meetings.hubspot.com/jose-andres-yllescas-lira"
                secondaryEyebrow="Para siniestros y antifraude"
                secondaryTitle="Verificación de identidad del asegurado"
                secondaryText="Verificación documental y biométrica con prueba de vida en el alta de siniestro, más constancia de conservación sobre el expediente integrado. Dos demos de noventa segundos, sin agendar nada."
                secondaryButtons={[
                  { label: "Demo de identidad", href: DEMO_HREF },
                  { label: "Demo NOM-151", href: "/firma-nom151-demo-autoservicio" },
                  { label: "Descargar brochure", href: "/contacto" },
                ]}
              />
            </div>
            <div data-sr className="mt-6">
              <SectorDisclosure />
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: NAVY_SOFT }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider font-mono block mb-3" style={{ color: TEAL }}>Verificación</span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 max-w-2xl">
              Cada afirmación de esta página tiene su fuente oficial.
            </h2>
            <div data-sr>
              <SourcesBlock
                sources={SOURCES}
                note="Consultadas el 27 de julio de 2026. Si encuentra una desactualizada, escríbanos y la corregimos con fecha de revisión visible."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

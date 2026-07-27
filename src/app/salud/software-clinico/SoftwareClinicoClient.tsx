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

const PAGE = "salud_software_clinico";
const DEMO_HREF = "/kyc-demo-autoservicio";

interface RfpQuestion {
  n: string;
  q: string;
  a: string;
  ref: string;
}

const QUESTIONS: RfpQuestion[] = [
  {
    n: "Q1",
    q: "¿Quién emite la constancia de conservación y su acreditación está vigente?",
    a: "La NOM-151 establece que la constancia es emitida por un prestador de servicios de certificación acreditado. «Cumplimos NOM-151» y «emitimos constancias a través de un prestador acreditado, conservando la cadena de validación» son afirmaciones distintas, y un área de compras sofisticada las distingue.",
    ref: "NOM-151-SCFI-2016 · 4.2 y 6.2",
  },
  {
    n: "Q2",
    q: "¿Cómo se exporta la evidencia para una auditoría o un juicio?",
    a: "El estándar de certificación revisa registros, manuales y evidencia de implementación. Un tablero en pantalla no es un entregable probatorio: hace falta exportar el expediente con sus versiones, firmas, accesos y constancias en un formato que un peritaje pueda revisar.",
    ref: "Modelo de certificación del CSG · Estándar 3",
  },
  {
    n: "Q3",
    q: "¿El sistema permite cuentas compartidas o genéricas?",
    a: "La NOM-024 pide autenticación al menos por usuario y contraseña, y recomienda factores adicionales. Si un turno completo entra con la misma cuenta, el no repudio deja de sostenerse aunque el sistema registre cada evento.",
    ref: "NOM-024-SSA3-2012 · 6.6.1 y 6.6.3",
  },
  {
    n: "Q4",
    q: "¿Qué modalidades de firma soporta y con qué evidencia cada una?",
    a: "La NOM-004 admite firma autógrafa, electrónica o digital sin definir niveles. Esa neutralidad obliga a documentar por qué el método elegido es fiable para cada tipo de documento, y a que el sistema soporte más de una modalidad según el riesgo.",
    ref: "NOM-004-SSA3-2012 · 5.10 · CCom 97",
  },
  {
    n: "Q5",
    q: "¿Cómo se valida al profesional que firma?",
    a: "Desde febrero de 2026 el estándar federal aclara que la cédula profesional no constituye identificación oficial. Validar la cédula acredita habilitación; acreditar que quien firmó es su titular requiere una capa distinta.",
    ref: "Estándar de cédula profesional electrónica · 17/02/2026",
  },
];

const BUILD_ITEMS = [
  "Acuerdo y mantenimiento con un prestador de servicios de certificación acreditado",
  "Verificación documental y biométrica con prueba de vida, y su mantenimiento contra fraude",
  "Validación de cédula profesional contra fuente y manejo de bajas y revocaciones",
  "Formato de exportación de evidencia que resista un peritaje",
  "Actualización cada vez que cambia el marco, como ocurrió cuatro veces desde 2025",
];

const INTEGRATE_ITEMS = [
  "Constancia de conservación emitida a través de prestador acreditado",
  "Verificación de identidad y prueba de vida como servicio",
  "Seis modalidades de firma para cubrir la matriz de riesgo por documento",
  "Exportación de evidencia con versiones, firmas, accesos y constancias",
  "Su equipo sigue en el producto clínico, que es donde compiten",
];

const NORM_ROWS: NormRow[] = [
  { instrument: "NOM-151-SCFI-2016", flagLabel: "Obliga cuando se invoca", flagTone: "obliga", numeral: "4.2 · 6.2", effect: "La constancia de conservación es emitida por un prestador de servicios de certificación acreditado. Conviene verificar acreditación vigente y conservar la cadena de validación." },
  { instrument: "NOM-024-SSA3-2012", flagLabel: "Permite", flagTone: "permite", numeral: "6.6.2", effect: "Los documentos deben ser estructurados e inalterables y permitir firma electrónica avanzada del profesional cuando el prestador lo determine. Es funcionalidad habilitable por política de riesgo, no mandato universal." },
  { instrument: "NOM-024-SSA3-2012", flagLabel: "Obliga", flagTone: "obliga", numeral: "6.1.3 · 6.6.5", effect: "Uso de estándares y perfiles de integración reconocidos, e intercambio con autenticación, cifrado y control de consentimiento. Enviar archivos por correo no es interoperabilidad." },
  { instrument: "NOM-004-SSA3-2012", flagLabel: "Obliga", flagTone: "obliga", numeral: "5.10 · 5.12", effect: "Toda nota con fecha, hora, nombre completo y firma autógrafa, electrónica o digital. Se admiten medios electrónicos si se cumple el resto del marco aplicable." },
  { instrument: "Código de Comercio", flagLabel: "Obliga para equivalencia", flagTone: "obliga", numeral: "93 · 93 Bis · 97", effect: "Integridad y accesibilidad para equivalencia con el escrito, integridad desde la generación final para equivalencia con el original, y criterios de fiabilidad de la firma." },
  { instrument: "Niveles de firma clínica", flagLabel: "Laguna", flagTone: "laguna", numeral: "Sin definición", effect: "La NOM-004 admite firma electrónica o digital sin definir niveles de autenticación, certificados ni evidencia mínima. Permite diseñar controles proporcionales al riesgo, documentando por qué son fiables." },
];

const CLAIMS: ClaimPair[] = [
  {
    said: "«Nuestro sistema cumple NOM-151.»",
    real: "Un sistema no cumple la NOM-151 por sí mismo: la constancia de conservación la emite un prestador de servicios de certificación acreditado. La afirmación defendible identifica a ese prestador y demuestra que su acreditación está vigente.",
    ref: "NOM-151-SCFI-2016 · 4.2 y 6.2",
  },
  {
    said: "«La NOM-024 obliga a firma electrónica avanzada en toda nota.»",
    real: "La norma la contempla cuando el prestador lo determine. Lo que sí es exigible siempre es lo que rodea a la firma: autenticación nominal, trazabilidad, inalterabilidad y no repudio.",
    ref: "NOM-024-SSA3-2012 · 6.6.2 y 6.6.3",
  },
  {
    said: "«Si el hospital exporta un PDF del expediente, ya puede defenderse.»",
    real: "Un PDF legible no acredita integridad ni versiones ni accesos. Para producir el expediente en un juicio hace falta exportar la historia del documento, no solo su apariencia final.",
    ref: "CCom 93 Bis · NOM-024 · 5.8 y 5.9",
  },
];

const SOURCES: SourceLink[] = [
  { code: "P08", label: "NOM-151-SCFI-2016", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5478024&fecha=30/03/2017", meta: "DOF · 30 mar 2017 · Vigente" },
  { code: "P04", label: "NOM-024-SSA3-2012, registro electrónico para la salud", url: "https://www.dof.gob.mx/normasOficiales/4956/SALUD1/SALUD1.html", meta: "DOF · 30 nov 2012 · Vigente" },
  { code: "P01", label: "NOM-004-SSA3-2012, Del expediente clínico", url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787", meta: "DOF · 15 oct 2012 · Vigente" },
  { code: "P10", label: "Código de Comercio, artículos 89 a 114", url: "https://www.diputados.gob.mx/LeyesBiblio/ref/ccom.htm", meta: "Cámara de Diputados · Texto vigente" },
  { code: "P24", label: "Modificación al estándar de cédula profesional electrónica", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5776766&fecha=17/02/2026", meta: "DOF · 17 feb 2026" },
  { code: "P29", label: "Modificación de reglas del modelo de certificación del CSG", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5783050&fecha=30/03/2026", meta: "DOF · 30 mar 2026" },
];

function RfpAccordion() {
  return (
    <div data-sr className="space-y-3">
      {QUESTIONS.map((item) => (
        <details key={item.n} className="rounded-2xl bg-white overflow-hidden group" style={{ border: `1px solid ${BORDER}` }}>
          <summary className="cursor-pointer list-none px-5 sm:px-6 py-5 flex items-start gap-4 font-bold text-[15px]" style={{ color: NAVY }}>
            <span className="font-mono text-sm flex-shrink-0" style={{ color: TEAL_DEEP }}>{item.n}</span>
            <span className="flex-1">{item.q}</span>
            <span className="font-mono flex-shrink-0 transition-transform group-open:rotate-45" style={{ color: TEAL }} aria-hidden="true">+</span>
          </summary>
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[3.75rem]">
            <p className="text-[14.5px] leading-relaxed" style={{ color: TEXT_BODY }}>{item.a}</p>
            <p className="text-xs font-mono mt-3" style={{ color: TEAL_DEEP }}>{item.ref}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

function BuildVsIntegrate() {
  return (
    <div data-sr-grid className="grid md:grid-cols-2 gap-5">
      <div className="rounded-2xl p-6 sm:p-7" style={{ border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.03)" }}>
        <span className="text-xs font-bold uppercase tracking-wide font-mono" style={{ color: TEAL }}>Construirla</span>
        <h3 className="text-lg font-bold text-white mt-3 mb-4">Su equipo la desarrolla</h3>
        <ul className="space-y-2.5">
          {BUILD_ITEMS.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              <span aria-hidden="true" style={{ color: TEAL }}>·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl p-6 sm:p-7" style={{ border: `1.5px solid ${TEAL}`, background: "rgba(30,202,211,0.06)" }}>
        <span className="text-xs font-bold uppercase tracking-wide font-mono" style={{ color: TEAL }}>Integrarla</span>
        <h3 className="text-lg font-bold text-white mt-3 mb-4">Se consume por API en modelo de marca blanca</h3>
        <ul className="space-y-2.5">
          {INTEGRATE_ITEMS.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
              <span aria-hidden="true" style={{ color: TEAL }}>·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SoftwareClinicoClient() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <SectorBreadcrumb current="Software clínico" />
      <main>
        <SectorHero
          eyebrow="Proveedores de expediente clínico y sistemas hospitalarios"
          h1={
            <>
              Declarar cumplimiento no es acreditarlo. <em style={{ fontStyle: "normal", color: TEAL }}>El comité de compras conoce la diferencia.</em>
            </>
          }
          lede={
            <>
              Varios sistemas de expediente clínico en México declaran cumplimiento con NOM-024 y NOM-151, pero la firma, la validación de identidad y la constancia de conservación dependen de terceros o quedan sin detallar públicamente.{" "}
              <strong className="text-white font-semibold">Funciona hasta que llega un área jurídica hospitalaria con su cuestionario.</strong>
            </>
          }
          heroNote="Escribimos esto desde el lado de infraestructura, no como competencia de su producto. Si esa capa le hace falta y no quiere construirla, existe como API."
          statFigure="Q1–Q5"
          statCaption="Las cinco preguntas que hemos visto aparecer en cuestionarios de compra hospitalarios cuando participa el área jurídica. Ninguna es sobre funcionalidad clínica. Todas son sobre evidencia."
          primaryCtaLabel="Ver documentación de API"
          primaryCtaHref="/docs"
          secondaryCtaLabel="Esquema de canal"
          secondaryCtaHref="#decision"
          onPrimaryClick={() => gtmEvent("salud_software_clinico_docs_click", { page: PAGE })}
          onSecondaryClick={() => gtmEvent("salud_software_clinico_decision_jump", { page: PAGE })}
        />

        <ToolsBand trackingPrefix={PAGE} background={LIGHT} />

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Elemento firma · Cuestionario de compra"
              title="Las cinco preguntas que decide el área jurídica, no la clínica."
              lede="Ábralas y contéstelas contra su producto actual. Si alguna no tiene respuesta documentada, es la que va a detener la venta en el comité."
            />
            <RfpAccordion />
          </div>
        </section>

        <section id="decision" className="py-16" style={{ background: NAVY }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider font-mono block mb-3" style={{ color: TEAL }}>Decisión de producto</span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 max-w-2xl">
              Construir la capa probatoria o integrarla.
            </h2>
            <p className="text-lg max-w-2xl mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              No es una pregunta ideológica, es de asignación de equipo. La capa de evidencia no diferencia su producto clínico, pero su ausencia lo descalifica en una compra grande.
            </p>
            <BuildVsIntegrate />
          </div>
        </section>

        <section className="py-16" style={{ background: LIGHT }}>
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

        <section className="py-16 bg-white">
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

        <section className="py-16" style={{ background: LIGHT }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Siguiente paso" title="Dos formas de continuar, según qué necesite resolver." />
            <div data-sr>
              <SectorCTADuo
                primaryEyebrow="Para producto y dirección"
                primaryTitle="Llamada de 30 minutos con nuestro equipo técnico"
                primaryText="Revisamos su arquitectura actual, qué de KYC, Firma NOM-151 o Firma NOM-151 + Biometría le conviene integrar vía API, y cómo se vería la integración. Incluye el esquema comercial de canal."
                primaryCtaLabel="Agendar la llamada"
                primaryCtaHref="https://meetings.hubspot.com/jose-andres-yllescas-lira"
                secondaryEyebrow="Para ingeniería"
                secondaryTitle="Documentación técnica"
                secondaryText="Documentación de API, diagrama de integración, manejo de huellas criptográficas y sello de tiempo, y formato de exportación de evidencia. Demos de noventa segundos de cada capa."
                secondaryButtons={[
                  { label: "Documentación de API", href: "/docs" },
                  { label: "Demo de identidad", href: DEMO_HREF },
                  { label: "Demo NOM-151", href: "/firma-nom151-demo-autoservicio" },
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

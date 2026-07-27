"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { gtmEvent } from "@/components/GoogleTagManager";
import {
  NAVY,
  NAVY_SOFT,
  TEAL,
  LIGHT,
  BORDER,
  TEXT_BODY,
  TEXT_MUTED,
  STOP,
  OK,
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

const PAGE = "salud_laboratorios";
const DEMO_HREF = "/kyc-demo-autoservicio";

const NORM_ROWS: NormRow[] = [
  { instrument: "NOM-024-SSA3-2012", flagLabel: "Obliga", flagTone: "obliga", numeral: "6.4 · 6.5", effect: "Uso de catálogos nacionales y CURP validada como identificador para el intercambio de información en salud. La calidad de la identidad maestra es lo que evita duplicados y cruces erróneos." },
  { instrument: "NOM-024-SSA3-2012", flagLabel: "Obliga", flagTone: "obliga", numeral: "5.3 · 5.6 · 5.8 · 5.9", effect: "Confidencialidad, integridad, preservación, trazabilidad, completitud e inalterabilidad. El sistema debe registrar eventos y evitar cambios silenciosos." },
  { instrument: "NOM-024-SSA3-2012", flagLabel: "Obliga", flagTone: "obliga", numeral: "6.6.1 · 6.6.3", effect: "Sistema de gestión de seguridad con no repudio, y autenticación al menos por usuario y contraseña. Las cuentas genéricas o compartidas erosionan la atribución." },
  { instrument: "NOM-004-SSA3-2012", flagLabel: "Obliga", flagTone: "obliga", numeral: "5.10", effect: "Toda nota debe contener fecha, hora y nombre completo, con firma autógrafa, electrónica o digital. Aplica a la orden y al informe de resultado que se integran al expediente." },
  { instrument: "LFPDPPP 2025", flagLabel: "Obliga", flagTone: "obliga", numeral: "2 fr. VI · 8 · 18", effect: "Los datos de salud y genéticos son sensibles. Requieren consentimiento expreso y por escrito, y medidas de seguridad proporcionales al riesgo y a la sensibilidad." },
  { instrument: "NOM-151-SCFI-2016", flagLabel: "Permite", flagTone: "permite", numeral: "5.3.2 · Apéndice A", effect: "Digitalización controlada de forma íntegra e inalterable y constancia que permite verificar existencia e integridad desde una fecha. Útil para resultados y para migrar acervo en papel." },
];

const CLAIMS: ClaimPair[] = [
  {
    said: "«Los duplicados son un problema de limpieza de base de datos.»",
    real: "Son un problema clínico. Un historial partido en dos significa que quien solicita el siguiente estudio no ve el anterior, ni la alergia, ni el valor de referencia previo del paciente.",
    ref: "NOM-024 · 6.4 y 6.5",
  },
  {
    said: "«El resultado va firmado en PDF, con eso se acredita.»",
    real: "Un PDF que se ve correcto no prueba por sí solo que no fue alterado después de emitirse. La integridad requiere huella criptográfica, sello y bitácora; el archivo visible es otra cosa.",
    ref: "NOM-024 · 5.8 y 5.9 · CCom 93 Bis",
  },
  {
    said: "«Con usuario y contraseña cumplimos la autenticación.»",
    real: "Es el mínimo que pide la norma, y la propia norma recomienda factores adicionales. Con cuentas compartidas entre turnos, el no repudio deja de sostenerse aunque el sistema registre todo.",
    ref: "NOM-024 · 6.6.1 y 6.6.3",
  },
];

const SOURCES: SourceLink[] = [
  { code: "P04", label: "NOM-024-SSA3-2012, registro electrónico para la salud", url: "https://www.dof.gob.mx/normasOficiales/4956/SALUD1/SALUD1.html", meta: "DOF · 30 nov 2012 · Vigente" },
  { code: "P01", label: "NOM-004-SSA3-2012, Del expediente clínico", url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787", meta: "DOF · 15 oct 2012 · Vigente" },
  { code: "P13", label: "Ley Federal de Protección de Datos Personales (2025)", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf", meta: "Publicada 20 mar 2025" },
  { code: "P08", label: "NOM-151-SCFI-2016", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5478024&fecha=30/03/2017", meta: "DOF · 30 mar 2017 · Vigente" },
  { code: "P30", label: "Consejo de Salubridad General · Modelo de certificación", url: "https://www.csg.gob.mx/descargas/pdf/certificacion-establecimientos/modelo_de_seguridad/hospitales/Manual_MOCEBPASS.pdf", meta: "Fuente oficial · URL sujeta a actualización" },
];

function IdentityMerge() {
  return (
    <div data-sr>
      <div className="grid lg:grid-cols-[1fr_3rem_1fr] gap-4 items-center">
        <div className="space-y-3">
          <div className="rounded-2xl p-5 bg-white" style={{ border: `1px solid ${BORDER}`, borderLeft: `3px solid ${STOP}` }}>
            <span className="font-mono text-xs" style={{ color: TEXT_MUTED }}>EXP-448210</span>
            <h3 className="text-base font-bold mt-1 mb-2" style={{ color: NAVY }}>María G. Hernández</h3>
            <ul className="space-y-1">
              <li className="text-[13px]" style={{ color: TEXT_BODY }}>Alta en recepción, captura manual</li>
              <li className="text-[13px]" style={{ color: TEXT_BODY }}>Dos estudios de 2024</li>
              <li className="text-[13px]" style={{ color: TEXT_BODY }}>Alergia registrada</li>
            </ul>
          </div>
          <div className="rounded-2xl p-5 bg-white" style={{ border: `1px solid ${BORDER}`, borderLeft: `3px solid ${STOP}` }}>
            <span className="font-mono text-xs" style={{ color: TEXT_MUTED }}>EXP-509772</span>
            <h3 className="text-base font-bold mt-1 mb-2" style={{ color: NAVY }}>Ma. Guadalupe Hernandez</h3>
            <ul className="space-y-1">
              <li className="text-[13px]" style={{ color: TEXT_BODY }}>Alta en portal, sin validación</li>
              <li className="text-[13px]" style={{ color: TEXT_BODY }}>Cuatro estudios de 2025 y 2026</li>
              <li className="text-[13px]" style={{ color: TEXT_BODY }}>Sin alergias registradas</li>
            </ul>
          </div>
        </div>
        <div className="font-mono text-2xl font-bold text-center rotate-90 lg:rotate-0" style={{ color: TEAL }} aria-hidden="true">→</div>
        <div className="rounded-2xl p-5 bg-white" style={{ border: `1px solid ${BORDER}`, borderLeft: `3px solid ${OK}` }}>
          <span className="font-mono text-xs" style={{ color: TEXT_MUTED }}>Identidad resuelta al ingreso</span>
          <h3 className="text-base font-bold mt-1 mb-2" style={{ color: NAVY }}>Un solo historial</h3>
          <ul className="space-y-1.5">
            <li className="text-[13px]" style={{ color: TEXT_BODY }}>Verificación documental y biométrica antes de crear el registro</li>
            <li className="text-[13px]" style={{ color: TEXT_BODY }}>Seis estudios en una línea de tiempo continua</li>
            <li className="text-[13px]" style={{ color: TEXT_BODY }}>La alergia visible para quien solicita el siguiente estudio</li>
            <li className="text-[13px]" style={{ color: TEXT_BODY }}>Sin estudio repetido por no encontrar el anterior</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function LaboratoriosClient() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <SectorBreadcrumb current="Laboratorios" />
      <main>
        <SectorHero
          eyebrow="Laboratorios y centros de diagnóstico"
          h1={
            <>
              Un expediente duplicado no es un problema de archivo. <em style={{ fontStyle: "normal", color: TEAL }}>Es un problema clínico.</em>
            </>
          }
          lede={
            <>
              Un historial partido en dos significa que quien solicita el siguiente estudio no ve el anterior, ni la alergia, ni el valor de referencia previo del paciente.{" "}
              <strong className="text-white font-semibold">Es un riesgo clínico, no solo un problema de captura.</strong>
            </>
          }
          heroNote="La identidad deja de ser un trámite de alta de paciente y se vuelve un control de seguridad. La NOM-024 ya apunta ahí al exigir CURP validada como identificador para intercambio de información en salud."
          statFigure="CURP"
          statCaption="La NOM-024 exige un identificador validado para el intercambio de información en salud entre instituciones. La calidad de esa identidad maestra es lo que evita duplicados y cruces erróneos de resultados."
          primaryCtaLabel="Ver demo de verificación de identidad"
          primaryCtaHref={DEMO_HREF}
          secondaryCtaLabel="Base normativa"
          secondaryCtaHref="#normativa"
          onPrimaryClick={() => gtmEvent("demo_kyc_click", { source: "hero", destination: "kyc_general", page: PAGE })}
          onSecondaryClick={() => gtmEvent("salud_laboratorios_normativa_jump", { page: PAGE })}
        />

        <ToolsBand trackingPrefix={PAGE} background={LIGHT} />

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Elemento firma · Resolución de identidad"
              title="El momento en que se decide todo lo demás."
              lede="Resolver la identidad antes de crear el registro cuesta segundos. Resolverla después, cuando ya hay dos historiales con resultados repartidos, cuesta un proceso de fusión y un riesgo clínico que ya corrió."
            />
            <IdentityMerge />
          </div>
        </section>

        <section id="normativa" className="py-16" style={{ background: LIGHT }}>
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
                primaryEyebrow="Para calidad y dirección"
                primaryTitle="Sesión de 30 minutos con un especialista de producto de JAAK"
                primaryText="Revisamos su proceso de alta de paciente y le mostramos cómo configurar KYC para resolver identidad en recepción y reducir duplicados. No damos asesoría legal: los criterios de auditoría de certificación debe definirlos su propio equipo de calidad."
                primaryCtaLabel="Agendar la sesión"
                primaryCtaHref="https://meetings.hubspot.com/jose-andres-yllescas-lira"
                secondaryEyebrow="Para operaciones y tecnología"
                secondaryTitle="Identidad resuelta en recepción"
                secondaryText="Verificación documental y biométrica que resuelve identidad antes de crear el registro, más constancia de integridad sobre el resultado emitido. Demos de noventa segundos y documentación de API."
                secondaryButtons={[
                  { label: "Demo de identidad", href: DEMO_HREF },
                  { label: "Demo NOM-151", href: "/firma-nom151-demo-autoservicio" },
                  { label: "Ficha técnica", href: "/contacto" },
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

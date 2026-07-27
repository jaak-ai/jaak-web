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
  TEXT_MUTED,
  STOP,
  WARN,
  SectorBreadcrumb,
  SectorHero,
  NormTable,
  ClaimsBlock,
  SourcesBlock,
  SectorCTADuo,
  SectorDisclosure,
  SectionHeading,
  type NormRow,
  type ClaimPair,
  type SourceLink,
} from "@/components/salud/SectorPage";

const PAGE = "salud_hospitales";
const DEMO_HREF = "/kyc-demo-autoservicio";

type Mark = "req" | "cond" | "no";

interface SignerRow {
  doc: string;
  paciente: Mark;
  medico: Mark;
  testigo1: Mark;
  testigo2: Mark;
  riesgo: "MEDIA" | "ALTA" | "MUY ALTA";
}

const SIGNERS: SignerRow[] = [
  { doc: "Nota de evolución", paciente: "no", medico: "req", testigo1: "no", testigo2: "no", riesgo: "MEDIA" },
  { doc: "Autorización de ingreso hospitalario", paciente: "req", medico: "req", testigo1: "no", testigo2: "no", riesgo: "ALTA" },
  { doc: "Consentimiento de cirugía o anestesia", paciente: "req", medico: "req", testigo1: "req", testigo2: "req", riesgo: "MUY ALTA" },
  { doc: "Acto con mutilación o cambio permanente", paciente: "req", medico: "req", testigo1: "req", testigo2: "req", riesgo: "MUY ALTA" },
  { doc: "Excepción por urgencia o incapacidad", paciente: "cond", medico: "req", testigo1: "req", testigo2: "no", riesgo: "MUY ALTA" },
  { doc: "Orden de laboratorio o imagen", paciente: "no", medico: "req", testigo1: "no", testigo2: "no", riesgo: "MEDIA" },
];

const RISK_STYLE: Record<SignerRow["riesgo"], string> = {
  MEDIA: WARN,
  ALTA: WARN,
  "MUY ALTA": STOP,
};

function SignMark({ mark }: { mark: Mark }) {
  if (mark === "req") {
    return (
      <span className="font-mono font-bold" style={{ color: STOP }} aria-label="Firma requerida">
        ● <span className="sr-only">Firma requerida</span>
      </span>
    );
  }
  if (mark === "cond") {
    return (
      <span className="font-mono font-bold" style={{ color: WARN }} aria-label="Requerida según el supuesto">
        ◐ <span className="sr-only">Requerida según el supuesto</span>
      </span>
    );
  }
  return (
    <span className="font-mono" style={{ color: TEXT_MUTED }} aria-label="No aplica">
      — <span className="sr-only">No aplica</span>
    </span>
  );
}

function SignersMatrix() {
  return (
    <div>
      <div className="overflow-x-auto rounded-2xl" style={{ border: `1px solid ${BORDER}` }}>
        <table className="w-full text-sm min-w-[640px]">
          <caption className="sr-only">Firmas requeridas por documento clínico, según rol y nivel de riesgo</caption>
          <thead>
            <tr style={{ background: NAVY }}>
              <th scope="col" className="text-left font-mono text-[11px] uppercase tracking-wide text-white px-4 py-3">Documento</th>
              <th scope="col" className="font-mono text-[11px] uppercase tracking-wide text-white px-4 py-3">Paciente o repr.</th>
              <th scope="col" className="font-mono text-[11px] uppercase tracking-wide text-white px-4 py-3">Médico</th>
              <th scope="col" className="font-mono text-[11px] uppercase tracking-wide text-white px-4 py-3">Testigo 1</th>
              <th scope="col" className="font-mono text-[11px] uppercase tracking-wide text-white px-4 py-3">Testigo 2</th>
              <th scope="col" className="font-mono text-[11px] uppercase tracking-wide text-white px-4 py-3">Riesgo</th>
            </tr>
          </thead>
          <tbody>
            {SIGNERS.map((row, i) => (
              <tr key={row.doc} style={{ background: i % 2 === 0 ? "#fff" : LIGHT, borderTop: `1px solid ${BORDER}` }}>
                <th scope="row" className="text-left font-semibold px-4 py-3.5" style={{ color: NAVY }}>{row.doc}</th>
                <td className="text-center px-4 py-3.5"><SignMark mark={row.paciente} /></td>
                <td className="text-center px-4 py-3.5"><SignMark mark={row.medico} /></td>
                <td className="text-center px-4 py-3.5"><SignMark mark={row.testigo1} /></td>
                <td className="text-center px-4 py-3.5"><SignMark mark={row.testigo2} /></td>
                <td className="text-center px-4 py-3.5">
                  <span className="font-mono font-bold text-xs" style={{ color: RISK_STYLE[row.riesgo] }}>{row.riesgo}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs" style={{ color: TEXT_MUTED }}>
        <span><b className="font-mono" style={{ color: STOP }}>●</b> Firma requerida</span>
        <span><b className="font-mono" style={{ color: WARN }}>◐</b> Requerida según el supuesto</span>
        <span><b className="font-mono">—</b> No aplica</span>
      </div>
      <p className="text-xs mt-3 max-w-2xl" style={{ color: TEXT_MUTED }}>
        Clasificación construida a partir de NOM-004 10.1 y Reglamento 80 a 83. Verifique supuestos con su área jurídica.
      </p>
    </div>
  );
}

interface RouteStep {
  n: string;
  title: string;
  text: string;
  must: string;
}

const ROUTE_STEPS: RouteStep[] = [
  {
    n: "Paso 1",
    title: "Se documenta la incapacidad o la urgencia",
    text: "El sistema debe permitir registrar por qué el paciente no puede manifestar su voluntad, no solo omitir la firma.",
    must: "Debe quedar: la causa clínica, con hora.",
  },
  {
    n: "Paso 2",
    title: "Se busca al representante",
    text: "En incapacidad firma el familiar, tutor o representante legal, y hay que conservar con qué documento se acreditó.",
    must: "Debe quedar: identidad y calidad del representante.",
  },
  {
    n: "Paso 3",
    title: "Si no hay representante, dos médicos",
    text: "La urgencia permite la excepción con acuerdo de dos médicos y constancia escrita. El flujo debe soportar dos firmantes profesionales.",
    must: "Debe quedar: la firma de ambos y la constancia.",
  },
  {
    n: "Paso 4",
    title: "Se reconstruye después",
    text: "Cuando el paciente recupera capacidad o llega el representante, el expediente debe poder complementarse sin sobrescribir lo anterior.",
    must: "Debe quedar: versión original intacta y la nueva.",
  },
];

const AUDITOR_CHECKS = [
  "Que ninguna nota pueda quedar sin fecha, hora, nombre completo y firma",
  "Registro de qué versión del consentimiento se le mostró al paciente",
  "Identidad y firma acreditadas de los dos testigos cuando aplican",
  "Ruta documentada de urgencia con acuerdo de dos médicos y constancia",
  "Exportación del expediente con versiones, accesos y constancias de integridad",
  "Política de retención alineada al último acto médico, no a la fecha de alta",
];

const NORM_ROWS: NormRow[] = [
  {
    instrument: "NOM-004-SSA3-2012",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "5.1 · 5.4",
    effect:
      "Integrar y conservar el expediente por un mínimo de cinco años contados desde el último acto médico. El expediente es propiedad de la institución, sin que ello elimine los derechos del paciente sobre su información.",
  },
  {
    instrument: "NOM-004-SSA3-2012",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "5.10 · 5.12",
    effect:
      "Toda nota debe contener fecha, hora y nombre completo, con firma autógrafa, electrónica o digital. Se admite el uso de medios electrónicos si se cumple el resto del marco.",
  },
  {
    instrument: "NOM-004-SSA3-2012",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "10.1 · 10.1.4",
    effect:
      "Las cartas de consentimiento deben contener datos del establecimiento, acto autorizado, riesgos y beneficios, y las firmas del paciente o representante, del médico y de dos testigos en los supuestos normativos.",
  },
  {
    instrument: "Reglamento de la LGS",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "80 · 81",
    effect:
      "Autorización escrita y firmada al ingreso hospitalario, con consentimiento específico para procedimientos de alto riesgo. En incapacidad firma el representante; la urgencia permite excepción con acuerdo de dos médicos y constancia escrita.",
  },
  {
    instrument: "Reglamento de la LGS",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "82 · 83",
    effect:
      "Datos mínimos, acto autorizado, explicación y firmas. Los actos con mutilación o modificación permanente requieren dos testigos idóneos.",
  },
  {
    instrument: "Ley General de Salud",
    flagLabel: "Obliga",
    flagTone: "obliga",
    numeral: "51 Bis 1 · 51 Bis 2",
    effect:
      "Información suficiente, clara, oportuna y veraz sobre diagnóstico, pronóstico y tratamiento, y derecho a decidir libremente. El contenido y la oportunidad de la información deben poder probarse, no solo la firma final.",
  },
  {
    instrument: "Niveles de firma clínica",
    flagLabel: "Laguna",
    flagTone: "laguna",
    numeral: "Sin definición",
    effect:
      "La NOM-004 no define niveles de autenticación, biometría, sellado de tiempo ni certificados. Permite diseñar controles proporcionales al riesgo documentando su fiabilidad.",
  },
];

const CLAIMS: ClaimPair[] = [
  {
    said: "«La NOM-004 exige firma autógrafa, así que el expediente digital no aplica.»",
    real:
      "El numeral 5.10 admite firma autógrafa, electrónica o digital, y el 5.12 admite expresamente el uso de medios electrónicos. Lo que hay que poder demostrar es por qué el método elegido es fiable y atribuible.",
    ref: "NOM-004-SSA3-2012 · 5.10 y 5.12",
  },
  {
    said: "«Con el consentimiento firmado quedamos protegidos ante una demanda.»",
    real:
      "El consentimiento no excluye la negligencia, y la carga de probar que se informó recae en quien está en mejor posición de hacerlo. Una firma impecable sobre información insuficiente sigue siendo insuficiente.",
    ref: "Jurisprudencia 1a./J. 22/2011 · Registro 2012512",
  },
  {
    said: "«Un expediente incompleto demuestra negligencia.»",
    real:
      "No de forma automática: se valoran todos los elementos. Pero la deficiencia documental debilita la defensa, y los tribunales pueden desplazar la carga hacia la institución que posee los registros y tiene mayor facilidad probatoria.",
    ref: "Registros 2012113 · 2013945 · 2022136",
  },
  {
    said: "«Una autorización general al ingreso cubre toda la estancia.»",
    real:
      "El Reglamento pide autorización al ingreso y consentimiento específico para procedimientos de alto riesgo. Una autorización general no sustituye al consentimiento del acto concreto.",
    ref: "Reglamento de la LGS · 80",
  },
];

const SOURCES: SourceLink[] = [
  { code: "P01", label: "NOM-004-SSA3-2012, Del expediente clínico", url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787", meta: "DOF · 15 oct 2012 · Vigente" },
  { code: "P07", label: "Reglamento de la LGS en prestación de servicios de atención médica", url: "https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LGS_MPSAM_170718.pdf", meta: "Cámara de Diputados · Artículos 80 a 83" },
  { code: "P06", label: "Ley General de Salud, artículos 51 Bis 1 y 51 Bis 2", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGS.pdf", meta: "Cámara de Diputados · Texto vigente" },
  { code: "P04", label: "NOM-024-SSA3-2012, registro electrónico para la salud", url: "https://www.dof.gob.mx/normasOficiales/4956/SALUD1/SALUD1.html", meta: "DOF · 30 nov 2012 · Vigente" },
  { code: "J04", label: "Carga de la prueba del deber de informar", url: "https://sjf2.scjn.gob.mx/detalle/tesis/2012512", meta: "SCJN · Registro digital 2012512" },
  { code: "J03", label: "Responsabilidad médico-sanitaria. Expediente clínico incompleto", url: "https://sjf2.scjn.gob.mx/detalle/tesis/2012113", meta: "SCJN · Registro digital 2012113" },
  { code: "J07", label: "El consentimiento no excluye la negligencia", url: "https://sjf2.scjn.gob.mx/detalle/tesis/2001287", meta: "SCJN · Jurisprudencia 1a./J. 22/2011" },
  { code: "P29", label: "Modificación de reglas del modelo de certificación del CSG", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5783050&fecha=30/03/2026", meta: "DOF · 30 mar 2026" },
];

export default function HospitalesClient() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <SectorBreadcrumb current="Hospitales" />
      <main>
        <SectorHero
          eyebrow="Hospitales y grupos hospitalarios"
          h1={
            <>
              El consentimiento informado no empieza en el botón Firmar. <em style={{ fontStyle: "normal", color: TEAL }}>Ni termina ahí.</em>
            </>
          }
          lede={
            <>
              Es el único documento clínico que puede exigir cuatro firmantes: paciente o representante, médico y dos testigos idóneos. Y aun con las cuatro firmas, la Primera Sala ha sostenido que{" "}
              <strong className="text-white font-semibold">el profesional está en mejor posición para probar que informó.</strong> La firma acredita atribución, no comprensión.
            </>
          }
          heroNote="La NOM-004 admite firma autógrafa, electrónica o digital, pero no define niveles de autenticación ni evidencia mínima. Esa neutralidad permite diseñar controles proporcionales al riesgo, siempre que se documente por qué son fiables."
          statFigure="4 firmas"
          statCaption="En los supuestos de mutilación o modificación permanente, el Reglamento exige dos testigos idóneos además del paciente o su representante y del médico. Un flujo digital que solo contemple un firmante no cubre el documento de mayor riesgo del hospital."
          primaryCtaLabel="Ver demo de consentimiento multirrol"
          primaryCtaHref={DEMO_HREF}
          secondaryCtaLabel="Matriz de firma por riesgo"
          secondaryCtaHref="#matriz"
          onPrimaryClick={() => gtmEvent("demo_kyc_click", { source: "hero", destination: "kyc_general", page: PAGE })}
          onSecondaryClick={() => gtmEvent("salud_hospitales_matrix_jump", { page: PAGE })}
        />

        <section id="matriz" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Elemento firma · Bloque de firmantes"
              title="Quién firma qué, según el documento."
              lede="Es la parte del consentimiento que más se simplifica al digitalizar, y la que más cuesta en una revisión. Un flujo de un solo firmante no cubre la mitad de esta tabla."
            />
            <div data-sr>
              <SignersMatrix />
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: NAVY }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider font-mono block mb-3" style={{ color: TEAL }}>
              Ruta de excepción
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 max-w-2xl">
              Urgencia e incapacidad: el flujo que casi ningún sistema contempla.
            </h2>
            <p className="text-lg max-w-2xl mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              El Reglamento permite actuar sin consentimiento del paciente en supuestos definidos, pero exige dejar constancia. Un sistema que solo tiene la ruta feliz obliga al personal a saltarse el sistema justo en el caso de mayor riesgo.
            </p>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ROUTE_STEPS.map((step) => (
                <div key={step.n} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.14)" }}>
                  <span className="text-xs font-mono uppercase tracking-wide" style={{ color: TEAL }}>{step.n}</span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">{step.title}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{step.text}</p>
                  <p className="text-[13px] text-white mt-3 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.14)" }}>{step.must}</p>
                </div>
              ))}
            </div>
            <div data-sr className="mt-8 rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <span className="text-xs font-bold uppercase tracking-wide font-mono block mb-4" style={{ color: TEAL }}>
                Qué buscará un auditor de certificación
              </span>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {AUDITOR_CHECKS.map((item) => (
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
                primaryEyebrow="Para dirección médica y jurídico"
                primaryTitle="Sesión de 30 minutos con nuestro asesor en derecho sanitario"
                primaryText="Revisamos su matriz de documentos, qué modalidad de firma es proporcional a cada uno y qué preguntas conviene resolver con su propio abogado antes de decidir. Incluye la ruta de urgencia e incapacidad. Sin demo de producto si no la pide."
                primaryCtaLabel="Agendar la sesión"
                primaryCtaHref="https://meetings.hubspot.com/jose-andres-yllescas-lira"
                secondaryEyebrow="Para TI, calidad y compras"
                secondaryTitle="Consentimiento multirrol y evidencia exportable"
                secondaryText="Flujo con paciente o representante, médico y dos testigos sobre una versión identificable, con sello de tiempo, bitácora y exportación para auditoría o juicio. Demos de noventa segundos y ficha de arquitectura."
                secondaryButtons={[
                  { label: "Demo de consentimiento", href: DEMO_HREF },
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

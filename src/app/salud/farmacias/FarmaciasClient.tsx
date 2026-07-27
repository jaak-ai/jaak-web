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

const PAGE = "salud_farmacias";
const DEMO_HREF = "/kyc-demo-autoservicio";

interface LedgerRow {
  fraction: string;
  risk: string;
  riskColor: string;
  requires: string;
  control: string;
}

const LEDGER: LedgerRow[] = [
  {
    fraction: "Fracción I",
    risk: "Riesgo máximo",
    riskColor: STOP,
    requires: "Estupefacientes. Recetario especial con código de barras, permiso y control específico.",
    control: "Validación en el sistema oficial, retención y trazabilidad completa médico–receta–paciente.",
  },
  {
    fraction: "Fracción II",
    risk: "Riesgo máximo",
    riskColor: STOP,
    requires: "Receta retenida en la farmacia, registro en libro de control y vigencia de treinta días.",
    control: "Vínculo entre dispensación, receta, fecha e inventario, con conservación íntegra de la retenida.",
  },
  {
    fraction: "Fracción III",
    risk: "Riesgo alto",
    riskColor: WARN,
    requires: "Hasta tres surtimientos. Se sella y registra cada uno, y se retiene en el tercero.",
    control: "Control efectivo de surtimientos que impida reuso, con registro de cada dispensación.",
  },
  {
    fraction: "Antibióticos",
    risk: "Riesgo alto",
    riskColor: WARN,
    requires: "Sujetos a receta y a control de dispensación por su impacto en resistencia antimicrobiana.",
    control: "Validación de prescriptor y registro de dispensación, aunque el régimen documental sea menos detallado.",
  },
  {
    fraction: "Receta general",
    risk: "Laguna normativa",
    riskColor: TEAL_DEEP,
    requires: "No se localizó una regla nacional única sobre firma, formato y validación para toda receta no controlada.",
    control: "Cada cadena define su estándar y debe poder justificarlo. Ahí conviene un criterio propio documentado.",
  },
];

const MOSAIC = [
  { label: "Capa 1", text: "Cédula vigente: acredita que esa persona está autorizada a prescribir.", void: false },
  { label: "Capa 2", text: "Identidad: acredita que quien prescribió es el titular de esa cédula.", void: false },
  { label: "Capa 3", text: "Integridad: acredita que la receta no fue alterada después de emitirse.", void: false },
  { label: "Brecha común", text: "Validar solo la capa 1 y asumir las otras dos. Es el hueco por donde entra la receta apócrifa.", void: true },
];

const NORM_ROWS: NormRow[] = [
  { instrument: "Ley General de Salud", flagLabel: "Obliga", flagTone: "obliga", numeral: "226 fr. II", effect: "Receta retenida en la farmacia, registro en libro de control y vigencia de treinta días." },
  { instrument: "Ley General de Salud", flagLabel: "Obliga", flagTone: "obliga", numeral: "226 fr. III", effect: "Hasta tres surtimientos. Se sella y registra cada uno, y la receta se retiene en el tercero." },
  { instrument: "Ley General de Salud", flagLabel: "Obliga", flagTone: "obliga", numeral: "240 a 242", effect: "Estupefacientes con recetarios especiales, código de barras y control de retención." },
  { instrument: "Estándar de cédula profesional electrónica", flagLabel: "Obliga", flagTone: "obliga", numeral: "Mod. 17/02/2026", effect: "La cédula acredita autorización para ejercer la profesión y no constituye identificación oficial." },
  { instrument: "Sistema de recetarios especiales de COFEPRIS", flagLabel: "Permite", flagTone: "permite", numeral: "Operativo", effect: "Sistema electrónico para permisos y recetas especiales con código bidimensional. Evidencia de que la receta digital regulada ya opera en el segmento de mayor riesgo." },
  { instrument: "Receta general no controlada", flagLabel: "Laguna", flagTone: "laguna", numeral: "Sin regla única", effect: "No se localizó una disposición nacional única sobre firma, formato y validación. Conviene definir criterio interno documentado y no extrapolar el régimen de controlados." },
];

const CLAIMS: ClaimPair[] = [
  {
    said: "«Si la cédula del médico es válida, la receta es válida.»",
    real: "La cédula acredita habilitación profesional. No acredita que quien emitió la receta sea el titular de esa cédula, ni que la receta no haya sido alterada. Son tres validaciones distintas.",
    ref: "Estándar de cédula profesional electrónica · 17/02/2026",
  },
  {
    said: "«La receta digital se puede surtir en cualquier sucursal, es el mismo sistema.»",
    real: "Solo si el control de surtimientos es central y en tiempo real. Con registro por sucursal, la misma receta puede surtirse más veces de las permitidas sin que ningún control lo detecte.",
    ref: "LGS · 226 fracciones II y III",
  },
  {
    said: "«No hay regulación de receta electrónica en México.»",
    real: "Sí la hay en el segmento de mayor riesgo: COFEPRIS opera recetarios especiales electrónicos con código bidimensional. Lo que no existe es un régimen nacional único para toda receta no controlada.",
    ref: "LGS · 240 a 242 · COFEPRIS",
  },
];

const SOURCES: SourceLink[] = [
  { code: "P06", label: "Ley General de Salud, artículos 226 y 240 a 242", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGS.pdf", meta: "Cámara de Diputados · Texto vigente" },
  { code: "P20", label: "COFEPRIS · Recetarios especiales electrónicos", url: "https://www.gob.mx/cofepris/acciones-y-programas/recetarios-especiales-electronicos", meta: "Fuente oficial" },
  { code: "P21", label: "COFEPRIS · Medicamentos controlados", url: "https://www.gob.mx/cofepris/acciones-y-programas/medicamentos-controlados", meta: "Trámites y permisos" },
  { code: "P24", label: "Modificación al estándar de cédula profesional electrónica", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5776766&fecha=17/02/2026", meta: "DOF · 17 feb 2026" },
  { code: "P01", label: "NOM-004-SSA3-2012, Del expediente clínico", url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787", meta: "DOF · 15 oct 2012 · Vigente" },
  { code: "P08", label: "NOM-151-SCFI-2016", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5478024&fecha=30/03/2017", meta: "DOF · 30 mar 2017 · Vigente" },
];

function LedgerTable() {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
      {LEDGER.map((row, i) => (
        <div
          key={row.fraction}
          className="grid sm:grid-cols-[10rem_1.2fr_1.2fr] gap-2 sm:gap-5 p-5 sm:p-6"
          style={{ background: i % 2 === 0 ? "#fff" : LIGHT, borderTop: i === 0 ? "none" : `1px solid ${BORDER}` }}
        >
          <div>
            <p className="font-mono font-bold text-sm" style={{ color: NAVY }}>{row.fraction}</p>
            <span className="block text-[11px] font-bold font-mono uppercase tracking-wide mt-1" style={{ color: row.riskColor }}>
              {row.risk}
            </span>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: TEXT_BODY }}>{row.requires}</p>
          <p className="text-[14px] leading-relaxed" style={{ color: TEXT_MUTED }}>{row.control}</p>
        </div>
      ))}
    </div>
  );
}

function CedulaMosaic() {
  return (
    <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {MOSAIC.map((tile) => (
        <div
          key={tile.label}
          className="rounded-2xl p-5"
          style={
            tile.void
              ? { border: "1px dashed #D69E2E", background: "rgba(214,158,46,0.08)" }
              : { border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.04)" }
          }
        >
          <span className="text-xs font-mono uppercase tracking-wide" style={{ color: tile.void ? "#EBC77A" : TEAL }}>
            {tile.label}
          </span>
          <p className="text-[13.5px] leading-relaxed mt-2" style={{ color: tile.void ? "#F0D9A0" : "rgba(255,255,255,0.72)" }}>
            {tile.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function FarmaciasClient() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <SectorBreadcrumb current="Farmacias" />
      <main>
        <SectorHero
          eyebrow="Farmacias y cadenas de farmacias"
          h1={
            <>
              No todas las recetas tienen el mismo riesgo. <em style={{ fontStyle: "normal", color: TEAL }}>Tratarlas igual cuesta en las dos direcciones.</em>
            </>
          }
          lede={
            <>
              La Ley General de Salud regula la receta de forma muy distinta según el medicamento: retención con registro en libro de control, hasta tres surtimientos, o recetario especial con código de barras.{" "}
              <strong className="text-white font-semibold">Un criterio único sobrecontrola unas y subcontrola otras.</strong>
            </>
          }
          heroNote="COFEPRIS ya demostró que la receta digital funciona en el segmento de mayor riesgo, con su sistema de recetarios especiales electrónicos y código bidimensional."
          statFigure="30 días"
          statCaption="Vigencia de la receta que debe retenerse y registrarse en el libro de control, conforme al artículo 226 de la Ley General de Salud. El plazo es la parte fácil; lo difícil es demostrar meses después qué se dispensó, contra qué receta y quién la prescribió."
          primaryCtaLabel="Ver demo de validación de identidad"
          primaryCtaHref={DEMO_HREF}
          secondaryCtaLabel="Matriz por fracción"
          secondaryCtaHref="#matriz"
          onPrimaryClick={() => gtmEvent("demo_kyc_click", { source: "hero", destination: "kyc_general", page: PAGE })}
          onSecondaryClick={() => gtmEvent("salud_farmacias_matrix_jump", { page: PAGE })}
        />

        <section id="matriz" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Elemento firma · Libro de control"
              title="Cinco regímenes distintos, un solo mostrador."
              lede="La misma persona que dispensa tiene que aplicar reglas diferentes según lo que trae la receta. El sistema debería resolver esa clasificación, no la memoria del personal."
            />
            <div data-sr>
              <LedgerTable />
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: NAVY }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider font-mono block mb-3" style={{ color: TEAL }}>Cambio de febrero de 2026</span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 max-w-2xl">
              La cédula profesional dejó de ser identificación oficial.
            </h2>
            <p className="text-lg max-w-2xl mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              Este cambio pasó bastante desapercibido y afecta directo a la validación en el punto de dispensación. La modificación al estándar federal aclara que la cédula, física o electrónica, no constituye identificación oficial: acredita autorización para ejercer la profesión, nada más.
            </p>
            <CedulaMosaic />
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
                primaryEyebrow="Para regulatorio y operaciones"
                primaryTitle="Sesión de 30 minutos con nuestro asesor en derecho sanitario"
                primaryText="Revisamos su matriz de dispensación por fracción, qué validar en cada caso y qué criterio interno conviene documentar para la receta general, donde no hay regla nacional única."
                primaryCtaLabel="Agendar la sesión"
                primaryCtaHref="https://meetings.hubspot.com/jose-andres-yllescas-lira"
                secondaryEyebrow="Para tecnología y punto de venta"
                secondaryTitle="Validación en el mostrador"
                secondaryText="Verificación de identidad del paciente, validación de cédula del prescriptor y control central de surtimientos. Demos de noventa segundos y documentación de API para integrar al punto de venta."
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

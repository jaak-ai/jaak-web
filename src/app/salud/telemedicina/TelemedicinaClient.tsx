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
  type NormRow,
  type ClaimPair,
  type SourceLink,
} from "@/components/salud/SectorPage";

const PAGE = "salud_telemedicina";
const DEMO_HREF = "/kyc-demo-autoservicio";

interface Phase {
  when: string;
  title: string;
  text: string;
  keep: string;
}

const PHASES: Phase[] = [
  { when: "Antes", title: "Identificación de ambas partes", text: "Verificar quién es el paciente y quién el profesional, con cédula vigente y rol habilitado.", keep: "Queda: evidencia de verificación y del método usado." },
  { when: "Al inicio", title: "Consentimiento con su alcance", text: "Grabación, nube, subencargados, transferencias y usos secundarios son finalidades distintas.", keep: "Queda: consentimiento de datos separado del consentimiento del acto médico." },
  { when: "Al cierre", title: "Nota clínica atribuible", text: "La teleconsulta debe terminar en una nota firmada, con fecha, hora y nombre completo.", keep: "Queda: la nota firmada sobre una versión identificable." },
  { when: "Después", title: "Bitácora y conservación", text: "Registro del canal, de los eventos y de quién accedió al expediente después.", keep: "Queda: trazabilidad reconstruible y evidencia conservada." },
];

const MOSAIC = [
  { label: "Nota clínica", text: "NOM-004: fecha, hora, nombre completo y firma autógrafa, electrónica o digital en toda nota.", void: false },
  { label: "Sistema", text: "NOM-024: autenticación, trazabilidad, inalterabilidad y no repudio en el registro electrónico.", void: false },
  { label: "Datos", text: "LFPDPPP 2025: consentimiento expreso para datos sensibles, aviso de privacidad y seguridad proporcional.", void: false },
  { label: "Sin norma final", text: "Identificación remota, calidad de video y modalidad de firma para toda teleconsulta: criterio propio documentado.", void: true },
];

const NORM_ROWS: NormRow[] = [
  { instrument: "PROY-NOM-036-SSA3-2015", flagLabel: "No vigente", flagTone: "laguna", numeral: "Cancelado 2018", effect: "El proyecto de norma para atención médica a distancia fue cancelado mediante aviso oficial. No es norma vigente y no debe citarse como si lo fuera." },
  { instrument: "NOM-004-SSA3-2012", flagLabel: "Obliga", flagTone: "obliga", numeral: "5.10 · 5.12", effect: "Toda nota debe contener fecha, hora y nombre completo, con firma autógrafa, electrónica o digital. Se admite el uso de medios electrónicos." },
  { instrument: "NOM-024-SSA3-2012", flagLabel: "Obliga", flagTone: "obliga", numeral: "5.8 · 5.9 · 6.6.1 · 6.6.3", effect: "Trazabilidad, inalterabilidad, sistema de gestión de seguridad con no repudio y autenticación al menos por usuario y contraseña, con factores adicionales recomendados." },
  { instrument: "NOM-024-SSA3-2012", flagLabel: "Permite", flagTone: "permite", numeral: "6.6.2", effect: "Los documentos deben ser estructurados e inalterables y permitir firma electrónica avanzada del profesional cuando el prestador lo determine. No es un mandato universal." },
  { instrument: "LFPDPPP 2025", flagLabel: "Obliga", flagTone: "obliga", numeral: "8 · 14 · 15 · 18", effect: "Consentimiento expreso y por escrito para datos sensibles, aviso de privacidad con finalidades específicas y medidas de seguridad proporcionales al riesgo." },
  { instrument: "Identificación remota", flagLabel: "Laguna", flagTone: "laguna", numeral: "Sin especificación", effect: "No existe una especificación federal única y vigente de identificación remota o modalidad de firma para toda teleconsulta. Definir política interna basada en riesgo y conservar la justificación." },
];

const CLAIMS: ClaimPair[] = [
  {
    said: "«La teleconsulta no está regulada en México.»",
    real: "No hay una norma general final específica, pero sí un mosaico vinculante: Ley General de Salud, NOM-004 para la nota, NOM-024 para trazabilidad y no repudio, y la ley de datos personales de 2025 para el tratamiento de información sensible.",
    ref: "Aviso de cancelación PROY-NOM-036 · 27/06/2018",
  },
  {
    said: "«Con la grabación de la sesión tenemos el respaldo.»",
    real: "La grabación no sustituye la nota clínica firmada, y además abre un tratamiento de datos adicional que necesita su propia base y su propio aviso. Son dos obligaciones distintas, no una que cubre a la otra.",
    ref: "NOM-004 · 5.10 · LFPDPPP 2025 · 8 y 14",
  },
  {
    said: "«Aceptar los términos de la plataforma cubre el consentimiento del paciente.»",
    real: "El consentimiento del acto médico y el consentimiento del tratamiento de datos son distintos, con finalidades y bases diferentes. Fusionarlos en una sola casilla debilita ambos.",
    ref: "LGS 51 Bis 1 · LFPDPPP 2025 · 8 y 14",
  },
];

const SOURCES: SourceLink[] = [
  { code: "P19", label: "Aviso de cancelación del PROY-NOM-036-SSA3-2015", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5529663&fecha=27/06/2018", meta: "DOF · 27 jun 2018" },
  { code: "P18", label: "PROY-NOM-036-SSA3-2015, atención médica a distancia", url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5420784&fecha=21/12/2015", meta: "DOF · Proyecto no vigente" },
  { code: "P01", label: "NOM-004-SSA3-2012, Del expediente clínico", url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5272787", meta: "DOF · 15 oct 2012 · Vigente" },
  { code: "P04", label: "NOM-024-SSA3-2012, registro electrónico para la salud", url: "https://www.dof.gob.mx/normasOficiales/4956/SALUD1/SALUD1.html", meta: "DOF · 30 nov 2012 · Vigente" },
  { code: "P13", label: "Ley Federal de Protección de Datos Personales (2025)", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf", meta: "Publicada 20 mar 2025" },
  { code: "P06", label: "Ley General de Salud, artículos 51 Bis 1 y 51 Bis 2", url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGS.pdf", meta: "Cámara de Diputados · Texto vigente" },
];

function SessionTimeline() {
  return (
    <ol data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t-2" style={{ borderColor: "rgba(255,255,255,0.16)" }}>
      {PHASES.map((phase) => (
        <li key={phase.when} className="relative pt-6 px-4 first:pl-0">
          <span
            aria-hidden="true"
            className="absolute -top-[7px] left-4 first:left-0 w-3 h-3 rounded-full"
            style={{ background: TEAL }}
          />
          <span className="text-xs font-mono uppercase tracking-wide" style={{ color: TEAL }}>{phase.when}</span>
          <h3 className="text-base font-bold text-white mt-2 mb-2">{phase.title}</h3>
          <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{phase.text}</p>
          <p className="text-[13px] text-white mt-3 pl-3 border-l-2" style={{ borderColor: TEAL }}>{phase.keep}</p>
        </li>
      ))}
    </ol>
  );
}

function NormativeMosaic() {
  return (
    <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {MOSAIC.map((tile) => (
        <div
          key={tile.label}
          className="rounded-2xl p-5"
          style={tile.void ? { border: "1px dashed #D69E2E", background: "rgba(214,158,46,0.06)" } : { border: `1px solid ${BORDER}`, background: "#fff" }}
        >
          <span className="text-xs font-mono uppercase tracking-wide" style={{ color: tile.void ? "#8A6D1F" : TEAL_DEEP }}>
            {tile.label}
          </span>
          <p className="text-[13.5px] leading-relaxed mt-2" style={{ color: tile.void ? "#8A6D1F" : TEXT_BODY }}>
            {tile.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function TelemedicinaClient() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <SectorBreadcrumb current="Telemedicina" />
      <main>
        <SectorHero
          eyebrow="Telemedicina y salud digital"
          h1={
            <>
              No existe una NOM de telemedicina. <em style={{ fontStyle: "normal", color: TEAL }}>Eso no significa que no esté regulada.</em>
            </>
          }
          lede={
            <>
              El proyecto de norma específica para atención médica a distancia fue cancelado en 2018 y no se ha publicado una norma general final que lo sustituya.{" "}
              <strong className="text-white font-semibold">La teleconsulta se rige por un mosaico vinculante, y cada plataforma tiene que definir su propio estándar de identificación remota y poder justificarlo.</strong>
            </>
          }
          heroNote="Es la laguna normativa más grande del sector, y también el mejor terreno para tomar una posición: quien documenta su criterio antes de que llegue la norma no tiene que rehacer su producto después."
          statFigure="2018"
          statCaption="Año en que se publicó el aviso de cancelación del proyecto de norma para la regulación de la atención médica a distancia. Ocho años después no se localizó una norma general final que lo sustituya."
          primaryCtaLabel="Ver demo de identidad remota"
          primaryCtaHref={DEMO_HREF}
          secondaryCtaLabel="Checklist de privacidad"
          secondaryCtaHref="#marco-aplicable"
          onPrimaryClick={() => gtmEvent("demo_kyc_click", { source: "hero", destination: "kyc_general", page: PAGE })}
          onSecondaryClick={() => gtmEvent("salud_telemedicina_mosaic_jump", { page: PAGE })}
        />

        <section className="py-16" style={{ background: NAVY }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider font-mono block mb-3" style={{ color: TEAL }}>Elemento firma · Línea de la sesión</span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 max-w-2xl">
              Cuatro evidencias tienen que sobrevivir a la videollamada.
            </h2>
            <p className="text-lg max-w-2xl mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              La consulta termina cuando se cierra el video. La prueba se queda. Si estas cuatro piezas no persisten en forma verificable, la atención existió pero no puede demostrarse.
            </p>
            <SessionTimeline />
          </div>
        </section>

        <section id="marco-aplicable" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Mosaico aplicable"
              title="Qué norma cubre cada parte, y dónde queda el hueco."
              lede="No hay una sola disposición que resuelva la teleconsulta. Hay cuatro que la cubren por partes, y una zona que sigue siendo decisión de la institución."
            />
            <NormativeMosaic />
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
                primaryEyebrow="Para producto y jurídico"
                primaryTitle="Sesión de 30 minutos con nuestro asesor en derecho sanitario"
                primaryText="Revisamos su flujo de teleconsulta y qué criterio de identificación remota conviene documentar mientras no exista norma final. También qué preguntas dejar para su propio abogado, incluida la teleconsulta interestatal."
                primaryCtaLabel="Agendar la sesión"
                primaryCtaHref="https://meetings.hubspot.com/jose-andres-yllescas-lira"
                secondaryEyebrow="Para ingeniería"
                secondaryTitle="Identidad remota y firma en el flujo"
                secondaryText="Verificación documental y biométrica con prueba de vida antes de la consulta, validación de cédula del profesional y nota firmada con sello de tiempo al cierre. Demos de noventa segundos y documentación de API."
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

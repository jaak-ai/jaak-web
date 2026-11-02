"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";
import {
  getRecommendation,
  signatureLevels,
  type QuizAnswers,
  type QuizIdentity,
  type QuizIntegrity,
  type QuizRisk,
  type SignatureLevel,
} from "@/lib/firma/levels";

/**
 * Selector de orientación comercial. Orienta hacia modalidades de firma; NO determina validez
 * legal, capacidad técnica ni precios. Reutiliza la lógica de recomendación existente
 * (`getRecommendation`, `signatureLevels`).
 */

type Option<T extends string> = { value: T; label: string };

const DOCS: Option<QuizRisk>[] = [
  { value: "low", label: "Documentos internos o de bajo riesgo" },
  { value: "high", label: "Contratos comerciales o empresariales" },
  { value: "regulated", label: "Documentos de procesos regulados o financieros" },
  { value: "medium", label: "Otros documentos de mi operación" },
];
const IDENTITY: Option<QuizIdentity>[] = [
  { value: "none", label: "No por ahora" },
  { value: "biometric", label: "Sí, con biometría facial" },
  { value: "kyc", label: "Sí, con verificación KYC completa" },
];
const INTEGRITY: Option<QuizIntegrity | "unsure">[] = [
  { value: "nom151", label: "Sí, sello de tiempo y NOM-151" },
  { value: "timestamp", label: "Solo sello de tiempo" },
  { value: "datetime", label: "No" },
  { value: "unsure", label: "No estoy seguro" },
];
const MODE: Option<"web" | "api" | "sdk" | "unsure">[] = [
  { value: "web", label: "Web (plataforma de JAAK)" },
  { value: "api", label: "API" },
  { value: "sdk", label: "SDK" },
  { value: "unsure", label: "Aún no lo sé" },
];
const VOLUME: Option<string>[] = [
  { value: "low", label: "Pocos documentos al mes" },
  { value: "mid", label: "Cientos de documentos al mes" },
  { value: "high", label: "Miles de documentos al mes" },
  { value: "unsure", label: "No lo sé todavía" },
];

/**
 * Capacidades de la modalidad sugerida, derivadas de la matriz de `signatureLevels` (misma fuente
 * que la tabla de /signa/comparacion). Se muestran "incluye" y "no incluye" para que ninguna
 * recomendación sugiera funciones que pertenecen a otra modalidad.
 */
function capabilities(level: SignatureLevel) {
  const m = level.matrix;
  const all = [
    { label: "Sello de tiempo", on: m.timestamp },
    { label: "Constancia NOM-151", on: m.nom151 },
    { label: "Biometría facial con prueba de vida", on: m.biometria },
    { label: "Verificación KYC completa", on: m.kyc },
  ];
  return {
    includes: all.filter((c) => c.on).map((c) => c.label),
    excludes: all.filter((c) => !c.on).map((c) => c.label),
  };
}

const MODE_TEXT: Record<string, string> = {
  web: "Uso desde la plataforma web de JAAK, sin desarrollar una integración.",
  api: "Integración por API con tus sistemas empresariales; se evalúa con el equipo comercial y considera una cuota de configuración (setup fee).",
  sdk: "Integración por SDK en tus propias aplicaciones; se evalúa con el equipo comercial y considera una cuota de configuración (setup fee).",
  unsure: "Te ayudamos a definir si conviene Web, API o SDK según tu operación.",
};

function Question<T extends string>({
  n,
  legend,
  name,
  options,
  value,
  onChange,
}: {
  n: number;
  legend: string;
  name: string;
  options: Option<T>[];
  value: T | undefined;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="border-t border-white/10 pt-5 first:border-0 first:pt-0">
      <legend className="mb-3 text-base font-semibold text-white">
        <span className="mr-2 text-[#1ECAD3]">{n}.</span>
        {legend}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <label
              key={o.value}
              className={`cursor-pointer rounded-lg border px-3.5 py-2 text-sm transition-colors focus-within:ring-2 focus-within:ring-[#1ECAD3] ${
                active
                  ? "border-[#1ECAD3] bg-[#1ECAD3]/15 text-white"
                  : "border-white/15 text-white/75 hover:border-white/40"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={active}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              {o.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function SignaSolutionFinder() {
  const [risk, setRisk] = useState<QuizRisk>();
  const [identity, setIdentity] = useState<QuizIdentity>();
  const [integrity, setIntegrity] = useState<QuizIntegrity | "unsure">();
  const [mode, setMode] = useState<"web" | "api" | "sdk" | "unsure">();
  const [volume, setVolume] = useState<string>();

  const complete = risk && identity && integrity && mode && volume;

  const level = useMemo(() => {
    if (!complete) return null;
    // El tipo de documento NO se usa como atajo hacia KYC: la recomendación respeta lo que la
    // persona indicó sobre identidad y sello de tiempo. Si no está segura de requerir NOM-151,
    // se sugiere evaluar NOM-151 (sin atribuirle funciones de identidad).
    const answers: QuizAnswers = {
      identity,
      integrity: integrity === "unsure" ? "nom151" : integrity,
    };
    const id = getRecommendation(answers);
    return signatureLevels.find((l) => l.id === id) ?? null;
  }, [complete, identity, integrity]);

  const caps = level ? capabilities(level) : null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="space-y-5">
        <Question n={1} legend="¿Qué tipo de documentos necesitas firmar?" name="docs" options={DOCS} value={risk} onChange={setRisk} />
        <Question n={2} legend="¿Necesitas verificar la identidad de los firmantes?" name="identity" options={IDENTITY} value={identity} onChange={setIdentity} />
        <Question n={3} legend="¿Requieres sello de tiempo y evidencia NOM-151?" name="integrity" options={INTEGRITY} value={integrity} onChange={setIntegrity} />
        <Question n={4} legend="¿Cómo deseas utilizar la solución?" name="mode" options={MODE} value={mode} onChange={setMode} />
        <Question n={5} legend="¿Cuál es tu volumen aproximado de documentos?" name="volume" options={VOLUME} value={volume} onChange={setVolume} />
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-[#0E2233]/60 p-5" aria-live="polite">
        {level && mode ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1ECAD3]">Modalidad sugerida para evaluar</p>
            <h3 className="mt-2 text-xl font-bold text-white">{level.name}</h3>
            {caps && (
              <ul className="mt-3 space-y-1 text-sm text-white/75">
                <li>
                  <strong className="text-white">Incluye:</strong>{" "}
                  {caps.includes.length ? caps.includes.join(", ") : "firma con aceptación y bitácora básica"}
                </li>
                {caps.excludes.length > 0 && (
                  <li>
                    <strong className="text-white">No incluye:</strong> {caps.excludes.join(", ")}
                  </li>
                )}
              </ul>
            )}
            {integrity === "unsure" && (
              <p className="mt-2 text-sm text-white/75">
                Como no estás seguro de requerir sello de tiempo o NOM-151, te sugerimos evaluarlo con tu área legal y con nuestro equipo.
              </p>
            )}
            {risk === "regulated" && (
              <p className="mt-2 text-sm text-white/75">
                Si tu proceso es regulado, valida con tu área de cumplimiento los requisitos de identidad y evidencia aplicables.
              </p>
            )}
            <p className="mt-3 text-sm text-white/75">
              <strong className="text-white">Modalidad de uso:</strong> {MODE_TEXT[mode]}
            </p>
            {volume !== "unsure" && (
              <p className="mt-2 text-sm text-white/75">
                Tu volumen aproximado ayudará a preparar una propuesta adecuada a tu operación.
              </p>
            )}
            <Link
              href={level.href}
              className="mt-3 inline-block text-sm font-semibold text-[#1ECAD3] underline underline-offset-4"
            >
              Conocer más sobre {level.shortName}
            </Link>
          </>
        ) : (
          <p className="text-sm text-white/70">Responde las cinco preguntas para ver qué modalidad conviene evaluar.</p>
        )}
        <p className="mt-4 text-xs leading-relaxed text-white/50">
          Esta orientación es informativa: no determina la validez legal de tus documentos, la capacidad técnica
          requerida ni las condiciones comerciales. Un especialista de JAAK confirmará la solución adecuada a tu operación.
        </p>
      </div>

      <div className="mt-6">
        <Link
          href="/contacto"
          onClick={() =>
            gtmEvent("cta_click", {
              source: "signa_selector",
              destination: "/contacto",
              page_path: typeof window !== "undefined" ? window.location.pathname : "/signa",
              signa_recommendation: level?.id ?? "sin_resultado",
            })
          }
          className="inline-flex items-center justify-center rounded-lg bg-[#1ECAD3] px-6 py-3.5 text-[15px] font-bold text-[#0E2233] transition-colors hover:bg-[#19b3bb] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Solicitar una propuesta para mi operación
        </Link>
      </div>
    </div>
  );
}

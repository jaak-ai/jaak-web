"use client";

import { useState } from "react";
import Link from "next/link";
import { useFirmaTheme, fc } from "@/components/FirmaThemeContext";
import {
  signatureLevels,
  getRecommendation,
  type QuizAnswers,
} from "@/lib/firma/levels";

type Question = {
  key: keyof QuizAnswers;
  question: string;
  options: { value: string; label: string }[];
};

const questions: Question[] = [
  {
    key: "risk",
    question: "¿Qué tan sensible es el documento?",
    options: [
      { value: "low", label: "Bajo riesgo" },
      { value: "medium", label: "Riesgo medio" },
      { value: "high", label: "Alto valor o impacto legal" },
      { value: "regulated", label: "Regulado o con PLD/FT" },
    ],
  },
  {
    key: "identity",
    question: "¿Necesitas verificar identidad?",
    options: [
      { value: "none", label: "No, solo consentimiento" },
      { value: "basic", label: "Sí, con datos básicos" },
      { value: "biometric", label: "Sí, con biometría" },
      { value: "kyc", label: "Sí, con KYC completo" },
    ],
  },
  {
    key: "integrity",
    question: "¿Necesitas probar integridad y fecha?",
    options: [
      { value: "datetime", label: "Solo fecha y hora" },
      { value: "timestamp", label: "Sello de tiempo" },
      { value: "nom151", label: "NOM-151" },
      { value: "nom151-full", label: "NOM-151 + expediente completo" },
    ],
  },
  {
    key: "signer",
    question: "¿Quién firma? (opcional)",
    options: [
      { value: "individual", label: "Persona física" },
      { value: "legalRepresentative", label: "Representante legal" },
      { value: "client", label: "Cliente final" },
      { value: "employee", label: "Colaborador interno" },
    ],
  },
];

export default function SignatureRecommendationQuiz() {
  const isDark = useFirmaTheme();
  const cl = fc(isDark);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const isDone = step >= questions.length;
  const recommendedId = isDone ? getRecommendation(answers) : null;
  const recommended = recommendedId ? signatureLevels.find((l) => l.id === recommendedId)! : null;

  const answer = (key: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  if (isDone && recommended) {
    return (
      <div
        className="rounded-2xl p-6 sm:p-8 animate-fade-in-up"
        style={{ background: cl.cardBg, border: `1px solid ${recommended.color}44`, boxShadow: `0 0 50px ${recommended.color}15` }}
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
          style={{ background: recommended.color + "22", color: recommended.color, border: `1px solid ${recommended.color}44` }}
        >
          Recomendación
        </div>
        <h3 className="text-2xl font-black mb-3" style={{ color: isDark ? "#fff" : "#0A0F1A" }}>
          {recommended.name}
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: cl.textMuted }}>
          {recommended.description} Con este nivel obtienes: {recommended.evidence.slice(0, 3).join(", ").toLowerCase()}
          {recommended.evidence.length > 3 ? " y más." : "."}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {recommended.evidence.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ background: recommended.color + "15", border: `1px solid ${recommended.color}33`, color: cl.textFaint }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={recommended.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ background: recommended.color }}
          >
            {recommended.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-white/10"
            style={{ background: cl.inputBg, border: `1px solid ${cl.border}`, color: cl.textFaint }}
          >
            Hablar con un experto
          </Link>
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-white/10"
            style={{ color: cl.textMuted }}
          >
            Volver a empezar
          </button>
        </div>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div className="rounded-2xl p-6 sm:p-8" style={{ background: cl.cardBg, border: `1px solid ${cl.border}` }}>
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={questions.length}>
        {questions.map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full flex-1 transition-all duration-300"
            style={{ background: i <= step ? "#1ECAD3" : cl.divider }}
          />
        ))}
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1ECAD3" }}>
        Pregunta {step + 1} de {questions.length}
      </p>
      <h3 className="text-xl font-black mb-6" style={{ color: isDark ? "#fff" : "#0A0F1A" }}>
        {current.question}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {current.options.map((option) => (
          <button
            key={option.value}
            onClick={() => answer(current.key, option.value)}
            className="text-left px-5 py-4 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
            style={{ background: cl.cardBgAlt, border: `1px solid ${cl.border}`, color: cl.textFaint }}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        {step > 0 ? (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className="text-xs font-semibold flex items-center gap-1.5"
            style={{ color: cl.textMuted }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior
          </button>
        ) : (
          <span />
        )}
        {current.key === "signer" && (
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="text-xs font-semibold"
            style={{ color: cl.textMuted }}
          >
            Omitir →
          </button>
        )}
      </div>
    </div>
  );
}

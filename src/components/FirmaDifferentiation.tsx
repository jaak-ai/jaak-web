"use client";

import React, { useState, useRef } from "react";
import { useFirmaTheme, fc } from "@/components/FirmaThemeContext";

type TooltipTerm = {
  term: string;
  explanation: string;
};

type DiffItem = {
  id: string;
  icon: string;
  title: string;
  summary: string;
  detail: string;
  tooltips: TooltipTerm[];
  color: string;
};

const diffItems: DiffItem[] = [
  {
    id: "nom151",
    icon: "⏱",
    title: "Sello de tiempo NOM-151 certificado",
    summary: "Cada documento firmado recibe un timestamp emitido por una Entidad Autorizada (PSC), garantizando la fecha exacta y la integridad del archivo.",
    detail:
      "La NOM-151-SCFI-2016 establece los requisitos técnicos para la conservación de mensajes de datos. El sello de tiempo que emitimos es irrefutable: cualquier modificación posterior al documento invalida el hash y es detectable. Esto es lo que diferencia una firma con valor legal probatorio de una firma electrónica ordinaria.",
    tooltips: [
      {
        term: "NOM-151",
        explanation:
          "Norma Oficial Mexicana NOM-151-SCFI-2016. Establece los requisitos para conservación de mensajes de datos y digitalización de documentos con validez legal.",
      },
      {
        term: "PSC",
        explanation:
          "Prestador de Servicios de Certificación. Entidad autorizada por la SE (Secretaría de Economía) para emitir certificados digitales y sellos de tiempo con valor legal.",
      },
    ],
    color: "#1ECAD3",
  },
  {
    id: "biometria",
    icon: "🧬",
    title: "Validación biométrica con detección de vida",
    summary: "El firmante se verifica con reconocimiento facial activo: se detecta que es una persona real, no una foto. La biometría queda registrada en el expediente.",
    detail:
      "Nuestro motor de biometría realiza análisis de liveness en tiempo real: detecta parpadeo, movimiento ocular y profundidad facial para evitar fraudes con fotografías. El vector biométrico del firmante se almacena cifrado y nunca se expone en texto claro. Es la misma tecnología usada por bancos digitales.",
    tooltips: [
      {
        term: "liveness",
        explanation:
          "Detección de vida. Tecnología que verifica que la persona frente a la cámara es un ser humano real y no una foto, video o máscara impresa.",
      },
    ],
    color: "#8B5CF6",
  },
  {
    id: "auditoria",
    icon: "📋",
    title: "Expediente digital auditable",
    summary: "Cada firma genera un expediente completo con todos los metadatos: IP, geolocalización, dispositivo, timestamps, evidencia de identidad y cadena de custodia.",
    detail:
      "El expediente incluye: documento original en hash SHA-256, todas las versiones firmadas, evidencias biométricas (foto frontal, video de liveness), datos de IP y geolocalización en cada paso, sello de tiempo NOM-151, y un log de auditoría inmutable. Este expediente puede presentarse directamente en un proceso legal o ante la CNBV.",
    tooltips: [
      {
        term: "SHA-256",
        explanation:
          "Algoritmo de hash criptográfico. Genera una huella digital única de 256 bits para cualquier documento. Si el documento cambia en un solo byte, el hash cambia completamente.",
      },
      {
        term: "CNBV",
        explanation:
          "Comisión Nacional Bancaria y de Valores. Organismo regulador del sistema financiero mexicano que supervisa bancos, financieras y entidades reguladas.",
      },
    ],
    color: "#F59E0B",
  },
  {
    id: "kyc",
    icon: "🪪",
    title: "Verificación de identidad integrada (KYC)",
    summary: "Antes de firmar, se valida la identidad del firmante: OCR del INE/pasaporte, consulta en Renapo (CURP) y verificación en listas de control PLD y OFAC.",
    detail:
      "La validación de identidad es parte del flujo de firma, no un proceso separado. Esto significa que el expediente contiene tanto la prueba de identidad como la firma en el mismo documento de evidencia, sin posibilidad de disociarlos. Cumplimos con los requisitos de la LFPIORPI para Actividades Vulnerables y la regulación CNBV para instituciones financieras.",
    tooltips: [
      {
        term: "KYC",
        explanation:
          "Know Your Customer (Conoce a tu Cliente). Proceso de verificación de identidad requerido por regulaciones AML/PLD para instituciones financieras.",
      },
      {
        term: "LFPIORPI",
        explanation:
          "Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita. Regula las Actividades Vulnerables en México.",
      },
      {
        term: "OFAC",
        explanation:
          "Office of Foreign Assets Control. Lista de personas y entidades sancionadas por el gobierno de EE.UU. Verificación obligatoria para empresas con operaciones internacionales.",
      },
    ],
    color: "#10B981",
  },
  {
    id: "disponibilidad",
    icon: "🚀",
    title: "Disponible en autoservicio y vía integración",
    summary: "Empieza a firmar hoy desde el panel de autoservicio sin integración técnica. Cuando necesites automatizar, nuestra API REST se conecta a tu stack en días.",
    detail:
      "Dos canales, el mismo motor legal. En autoservicio puedes subir documentos, configurar flujos y gestionar firmantes desde el día uno sin escribir código. Cuando tu operación escale, la integración a tu plataforma permite automatizar el 100% del proceso con webhooks en tiempo real y ambientes de prueba. Ambos canales generan el mismo nivel de evidencia legal y el mismo expediente auditable.",
    tooltips: [],
    color: "#EC4899",
  },
];

function TooltipWord({
  term,
  explanation,
}: {
  term: string;
  explanation: string;
}) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(true);
  };

  const hide = () => {
    timeoutRef.current = setTimeout(() => setVisible(false), 150);
  };

  return (
    <span className="relative inline-block">
      <span
        className="underline decoration-dotted cursor-help"
        style={{ textDecorationColor: "#1ECAD3", color: "#A7F3F6" }}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        tabIndex={0}
        role="button"
        aria-label={`Definición: ${term}`}
      >
        {term}
      </span>
      {visible && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl text-xs text-gray-200 leading-relaxed z-50 pointer-events-none"
          style={{
            background: "#0D1F3C",
            border: "1px solid rgba(30,202,211,0.3)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,202,211,0.1)",
          }}
          role="tooltip"
        >
          <span className="font-bold text-[#1ECAD3]">{term}:</span>{" "}
          {explanation}
          {/* Arrow */}
          <span
            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid rgba(30,202,211,0.3)",
            }}
            aria-hidden="true"
          />
        </span>
      )}
    </span>
  );
}

function renderWithTooltips(text: string, tooltips: TooltipTerm[]): React.ReactNode {
  if (!tooltips.length) return <span>{text}</span>;

  let result: React.ReactNode[] = [text];

  for (const { term, explanation } of tooltips) {
    const next: React.ReactNode[] = [];
    for (const segment of result) {
      if (typeof segment !== "string") {
        next.push(segment);
        continue;
      }
      const parts = segment.split(term);
      parts.forEach((part, i) => {
        if (part) next.push(part);
        if (i < parts.length - 1) {
          next.push(
            <TooltipWord
              key={`${term}-${i}`}
              term={term}
              explanation={explanation}
            />
          );
        }
      });
    }
    result = next;
  }

  return <>{result}</>;
}

export default function FirmaDifferentiation() {
  const isDark = useFirmaTheme();
  const cl = fc(isDark);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3" role="list">
      {diffItems.map((item) => {
        const isExpanded = expandedItems.has(item.id);
        return (
          <div
            key={item.id}
            className="rounded-2xl transition-all duration-300"
            style={{
              background: isExpanded ? cl.cardBgAlt : cl.cardBgTiny,
              border: `1px solid ${isExpanded ? item.color + "44" : cl.border}`,
            }}
            role="listitem"
          >
            <button
              className="w-full text-left px-6 py-5 flex items-start gap-4"
              onClick={() => toggle(item.id)}
              aria-expanded={isExpanded}
              aria-controls={`diff-content-${item.id}`}
            >
              <span
                className="text-2xl flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: item.color + "15",
                  border: `1px solid ${item.color}22`,
                }}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {renderWithTooltips(item.summary, item.tooltips)}
                </p>
              </div>
              <svg
                className="w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-300"
                style={{
                  color: isExpanded ? item.color : "#64748B",
                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isExpanded && (
              <div
                id={`diff-content-${item.id}`}
                className="px-6 pb-5"
                style={{ borderTop: `1px solid ${cl.borderFaint}` }}
              >
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                  {renderWithTooltips(item.detail, item.tooltips)}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import { useFirmaTheme, fc } from "@/components/FirmaThemeContext";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: "legalidad",
    question: "¿La firma electrónica es legal en México?",
    answer:
      "Sí. La firma electrónica tiene plena validez legal en México conforme al Código de Comercio (artículos 89 al 114) y la Ley Federal de Firma Electrónica Avanzada (LFEA). Estos ordenamientos establecen que los mensajes de datos y las firmas electrónicas tienen la misma validez jurídica que los documentos en papel y las firmas autógrafas, siempre que cumplan con los requisitos de autenticidad e integridad. La firma con certificación NOM-151 agrega un sello de tiempo certificado que fortalece aún más su valor probatorio.",
  },
  {
    id: "nom151",
    question: "¿Qué es la NOM-151 y por qué es importante?",
    answer:
      "La NOM-151 (Norma Oficial Mexicana NOM-151-SCFI-2016) establece los requisitos técnicos y legales para la conservación de mensajes de datos y digitalización de documentos en México. Cuando un documento es firmado con certificación NOM-151, un Prestador de Servicios de Certificación (PSC) autorizado por la Secretaría de Economía emite un sello de tiempo que: (1) registra la fecha y hora exacta de la firma, (2) vincula el hash criptográfico del documento al sello, y (3) garantiza que cualquier modificación posterior sea detectable. Esto hace que la firma sea prácticamente irrebatible en un proceso legal o auditoría regulatoria.",
  },
  {
    id: "diferencia",
    question: "¿Qué diferencia hay entre firma simple y firma avanzada?",
    answer:
      "La firma simple es cualquier símbolo electrónico que una persona usa para manifestar su consentimiento (un clic, una imagen de firma, un código OTP). No verifica la identidad del firmante y tiene evidencia mínima. La firma avanzada (conforme a la LFEA) requiere: (1) vinculación exclusiva al firmante, (2) identificación del firmante, (3) creación bajo su control exclusivo, y (4) capacidad de detectar modificaciones posteriores. En la práctica, una firma con biometría + NOM-151 cumple todos estos requisitos y agrega un nivel de evidencia que la firma simple jamás puede igualar.",
  },
  {
    id: "sat",
    question: "¿Tiene validez ante el SAT?",
    answer:
      "Para obligaciones fiscales electrónicas (CFDI, declaraciones, trámites en el portal del SAT) se requiere la e.firma (FIEL) emitida por el SAT, que es una firma electrónica avanzada basada en certificados de clave pública. Para contratos comerciales, laborales y financieros, la firma electrónica con NOM-151 tiene plena validez ante autoridades fiscales como documento de respaldo de operaciones. Si necesitas que tus contratos sean reconocidos ante el SAT como evidencia de una transacción comercial, la firma NOM-151 es suficiente.",
  },
  {
    id: "kyc-compliance",
    question: "¿Cumple con los requisitos de la CNBV y la LFPIORPI?",
    answer:
      "Sí. La solución Firma + KYC de JAAK está diseñada para cumplir con los requisitos de identificación de clientes establecidos por la CNBV (Comisión Nacional Bancaria y de Valores), la LFPIORPI (Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita) y las Disposiciones de Carácter General en materia de PLD/FT. Incluye: validación de identificación oficial (INE/pasaporte), consulta en listas de control (PLD, OFAC, SAT 69-B), verificación de CURP en Renapo, y generación del expediente de identificación del cliente (EIC) con todos los elementos requeridos.",
  },
  {
    id: "impugnar",
    question: "¿Puede impugnarse una firma electrónica en un juicio?",
    answer:
      "Cualquier documento puede impugnarse en un juicio. La diferencia está en qué tan fácil es defender la firma. Con una firma simple (solo imagen o clic), cualquier parte puede alegar que no firmó o que el documento fue alterado. Con una firma JAAK que incluye NOM-151 + biometría + KYC, tienes: el sello de tiempo certificado que vincula la identidad del firmante al documento, el reconocimiento facial biométrico que prueba que esa persona estuvo presente en el momento de la firma, y el expediente auditable con todos los metadatos. En la práctica, esto hace que una impugnación exitosa sea extremadamente difícil.",
  },
];

export default function FirmaFAQ() {
  const isDark = useFirmaTheme();
  const cl = fc(isDark);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenItems((prev) => {
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
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${cl.border}` }}
    >
      {faqItems.map((item, index) => {
        const isOpen = openItems.has(item.id);
        const isLast = index === faqItems.length - 1;
        return (
          <div
            key={item.id}
            style={{
              borderBottom: isLast ? "none" : `1px solid ${cl.borderMid}`,
            }}
          >
            <button
              className="w-full text-left px-6 py-5 flex items-start gap-4 transition-all duration-200"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
              style={{
                background: isOpen
                  ? "rgba(30,202,211,0.04)"
                  : cl.cardBgMin,
              }}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 text-sm font-bold"
                style={{
                  background: isOpen
                    ? "#1ECAD3"
                    : cl.border,
                  color: isOpen ? "#fff" : "#64748B",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              >
                +
              </span>
              <span
                className="flex-1 font-semibold text-base leading-snug transition-colors duration-200"
                style={{ color: isOpen ? (isDark ? "#fff" : "#0A0F1A") : cl.textFaint }}
              >
                {item.question}
              </span>
            </button>

            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isOpen ? "500px" : "0",
              }}
            >
              <div className="px-6 pb-6 pt-2 pl-16">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreciosClient from "./PreciosClient";
import { buildKycRegisterUrl, KYC_PLAN_CODE_BY_TIER } from "@/data/autoservicio-catalogo";

export const metadata: Metadata = {
  title: "Precios – KYC Biométrico y Firma Digital NOM-151 | JAAK",
  description:
    "KYC biométrico desde $99 MXN/año. Firma Digital NOM-151 desde $49 MXN/año. Sin setup fee. Para empresas reguladas en México. ISO 27001 · iBeta Nivel 2.",
  keywords: [
    "precios KYC México",
    "KYC biométrico precio",
    "verificación de identidad México precios",
    "firma electrónica NOM-151 precio",
    "firma electrónica México",
    "biometría facial precio",
    "JAAK precios",
    "Enterprise KYC",
    "autoservicio verificación identidad",
    "cumplimiento CNBV LFPIORPI UIF",
  ],
  openGraph: {
    title: "Precios – KYC Biométrico y Firma Digital NOM-151 | JAAK",
    description:
      "KYC biométrico desde $99 MXN/año. Firma Digital NOM-151 desde $49 MXN/año. Sin setup fee. Autoservicio, Enterprise y Alianzas para empresas reguladas en México.",
    url: "https://jaak.ai/precios",
  },
  alternates: {
    canonical: "https://jaak.ai/precios",
  },
};

// --- JSON-LD Schemas ---
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el KYC biométrico en México?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autoservicio desde $99 MXN/año (5 verif, plan Cobre), sin setup fee. Precio unitario de $19.80 (Cobre) a $25.00 (Platino). Para más de 1,000 verif/mes: Enterprise con cotización personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta la Firma Electrónica NOM-151?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Firma Simple desde $49 MXN (10 firmas). Firma Digital NOM-151 desde $99 MXN (5 firmas) hasta $6,000 MXN (500 firmas). Firma Digital NOM-151+Bio desde $99 MXN hasta $12,500 MXN (500 firmas). Sin setup fee en Autoservicio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si supero mi volumen en Autoservicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bronce a Platino pueden comprar paquetes adicionales al 120% del precio unitario. Cobre se bloquea al superar el límite. Si superas 1,000 verif/mes consistentemente, la migración a Enterprise es obligatoria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los paquetes caducan o son reembolsables?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vencen a 12 meses desde la compra. No son reembolsables. Setup Fees tampoco son reembolsables.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK cumple con LFPIORPI, CNBV y UIF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. LFPIORPI Art. 17, identificación remota CNBV, evidencia para UIF, NOM-151 con PSC certificado. Certificaciones: ISO 27001, ISO 9001, iBeta Liveness Nivel 2.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona la facturación Enterprise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mensual: 80% del estimado del mes actual + 20% real del mes anterior. Neto 30 días. Descuento 15% si se paga días 1–10. Cobro mínimo = tier inicial contratado aunque el consumo sea menor.",
      },
    },
  ],
};

// --- Product Schemas (data-driven, optimizados para SEO) ---
// Estrategia: un Product por SKU-line con AggregateOffer + Offer[] por tier.
// Precios sin IVA (declarado en priceSpecification.valueAddedTaxIncluded = false).
// URL por Offer apunta al checkout pre-llenado del SKU específico — Google indexa
// cada tier como deep link y permite rich snippets "Desde $X · N planes".

type TierName = "Cobre" | "Bronce" | "Plata" | "Oro" | "Platino";

interface PackageOffer {
  tier: TierName;
  sku: string;
  qty: number;
  unit: string;        // singular: "verificación", "firma", "sesión", "consulta", "token"
  unitPlural: string;
  price: number;       // sin IVA, MXN
  url: string;         // checkout pre-llenado del SKU
}

interface ProductDefinition {
  id: string;                  // fragment anchor en /precios (#kyc, #firma-simple, ...)
  name: string;
  description: string;
  category: string;
  applicationCategory: string; // SoftwareApplication.applicationCategory (Google enum)
  image: string;               // URL absoluta ≥696px (requisito Merchant Listings)
  packages: PackageOffer[];
}

const BRAND_REF = {
  "@type": "Brand" as const,
  name: "JAAK",
  url: "https://jaak.ai",
};

const SELLER_REF = {
  "@type": "Organization" as const,
  name: "JAAK",
  url: "https://jaak.ai",
};

// Política de no-reembolso (alineada con FAQ): satisface el requisito de
// hasMerchantReturnPolicy de Google Merchant Listings sin inventar política.
const RETURN_POLICY = {
  "@type": "MerchantReturnPolicy" as const,
  applicableCountry: "MX",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
};

// Imágenes por categoría visual (URLs absolutas, ≥696px lado largo).
const IMG_IDENTIDAD = "https://jaak.ai/images/jaak-face-recognition.png";   // 1232×1044
const IMG_FIRMA = "https://jaak.ai/images/firma-electronica-flujo.jpg";     // 1499×817

const PRICE_VALID_UNTIL = "2027-12-31";
const PRECIOS_URL = "https://jaak.ai/precios";

const PRODUCTS: ProductDefinition[] = [
  {
    id: "kyc",
    name: "KYC Biométrico – Verificación de Identidad",
    description:
      "Verificación de identidad con prueba de vida iBeta Nivel 2, OCR de identificación oficial, consulta INE/RENAPO y validación contra listas negras (OFAC, Interpol, SAT). Diseñado para empresas reguladas en México: CNBV, LFPIORPI, UIF.",
    category: "Software de Verificación de Identidad / KYC",
    applicationCategory: "SecurityApplication",
    image: IMG_IDENTIDAD,
    packages: [
      { tier: "Cobre",   sku: "JAAK-KYC-COBRE",   qty: 5,   unit: "verificación", unitPlural: "verificaciones", price: 99,    url: buildKycRegisterUrl(KYC_PLAN_CODE_BY_TIER["cobre"]) },
      { tier: "Bronce",  sku: "JAAK-KYC-BRONCE",  qty: 50,  unit: "verificación", unitPlural: "verificaciones", price: 1500,  url: buildKycRegisterUrl(KYC_PLAN_CODE_BY_TIER["bronce"]) },
      { tier: "Plata",   sku: "JAAK-KYC-PLATA",   qty: 100, unit: "verificación", unitPlural: "verificaciones", price: 2800,  url: buildKycRegisterUrl(KYC_PLAN_CODE_BY_TIER["plata"]) },
      { tier: "Oro",     sku: "JAAK-KYC-ORO",     qty: 250, unit: "verificación", unitPlural: "verificaciones", price: 6625,  url: buildKycRegisterUrl(KYC_PLAN_CODE_BY_TIER["oro"]) },
      { tier: "Platino", sku: "JAAK-KYC-PLATINO", qty: 500, unit: "verificación", unitPlural: "verificaciones", price: 12500, url: buildKycRegisterUrl(KYC_PLAN_CODE_BY_TIER["platino1"]) },
    ],
  },
  {
    id: "firma-simple",
    name: "Firma Simple",
    description:
      "Firma electrónica con validez legal en México para contratos comerciales, RR.HH. y flujos de aprobación sin obligación regulatoria de NOM-151. API REST y plataforma web, hasta 4 firmantes por documento.",
    category: "Software de Firma Electrónica",
    applicationCategory: "BusinessApplication",
    image: IMG_FIRMA,
    packages: [
      { tier: "Cobre",   sku: "JAAK-FIRMA-SIMPLE-COBRE",   qty: 10,  unit: "firma", unitPlural: "firmas", price: 49,   url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNGVkYzNhODg3MzU1MzNmMmI5ZjclMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNGVkYzNhODg3MzU1MzNmMmI5ZjclMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfc2ltcGxlJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIyJTJDJTIycHIlMjIlM0E1Ni44NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyMFNpbXBsZSUyMENvYnJlJTIwMTAlMjIlMkMlMjJxJTIyJTNBNSU3RCU1RCU3RA%3D%3D" },
      { tier: "Bronce",  sku: "JAAK-FIRMA-SIMPLE-BRONCE",  qty: 50,  unit: "firma", unitPlural: "firmas", price: 400,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNGZhYTNhODg3MzU1MzNmMmJhMTYlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNGZhYTNhODg3MzU1MzNmMmJhMTYlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfc2ltcGxlJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIyJTJDJTIycHIlMjIlM0E0NjQlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjBCcm9uY2UlMjA1MCUyMiUyQyUyMnElMjIlM0E1MCU3RCU1RCU3RA%3D%3D" },
      { tier: "Plata",   sku: "JAAK-FIRMA-SIMPLE-PLATA",   qty: 100, unit: "firma", unitPlural: "firmas", price: 700,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNTQ0ODNhODg3MzU1MzNmMmJhNDUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNTQ0ODNhODg3MzU1MzNmMmJhNDUlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfc2ltcGxlJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIyJTJDJTIycHIlMjIlM0E4MTIlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjBQbGF0YSUyMDEwMCUyMiUyQyUyMnElMjIlM0ExMDAlN0QlNUQlN0Q%3D" },
      { tier: "Oro",     sku: "JAAK-FIRMA-SIMPLE-ORO",     qty: 250, unit: "firma", unitPlural: "firmas", price: 1500, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNTUwOTNhODg3MzU1MzNmMmJhNGElMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNTUwOTNhODg3MzU1MzNmMmJhNGElMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfc2ltcGxlJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIyJTJDJTIycHIlMjIlM0ExNzQwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIwT3JvJTIwMjUwJTIyJTJDJTIycSUyMiUzQTI1MCU3RCU1RCU3RA%3D%3D" },
      { tier: "Platino", sku: "JAAK-FIRMA-SIMPLE-PLATINO", qty: 500, unit: "firma", unitPlural: "firmas", price: 2500, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNTU4YTNhODg3MzU1MzNmMmJhNGYlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNTU4YTNhODg3MzU1MzNmMmJhNGYlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfc2ltcGxlJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIyJTJDJTIycHIlMjIlM0EyOTAwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIwUGxhdGlubyUyMDUwMCUyMiUyQyUyMnElMjIlM0E1MDAlN0QlNUQlN0Q%3D" },
    ],
  },
  {
    id: "firma-nom151",
    name: "Firma Electrónica NOM-151",
    description:
      "Firma electrónica avanzada con constancia de conservación NOM-151 emitida por PSCC acreditado. Validez plena en juicio bajo Código de Comercio y LFEA. Sellado de tiempo y hash criptográfico por documento.",
    category: "Software de Firma Electrónica Avanzada",
    applicationCategory: "BusinessApplication",
    image: IMG_FIRMA,
    packages: [
      { tier: "Cobre",   sku: "JAAK-NOM151-COBRE",   qty: 5,   unit: "firma", unitPlural: "firmas", price: 99,   url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNTYyMjNhODg3MzU1MzNmMmJhNTUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNTYyMjNhODg3MzU1MzNmMmJhNTUlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWQlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMChOT00tMTUxKSUyMiUyQyUyMnByJTIyJTNBMTE0Ljg0JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwQ29icmUlMjA1JTIyJTJDJTIycSUyMiUzQTUlN0QlNUQlN0Q%3D" },
      { tier: "Bronce",  sku: "JAAK-NOM151-BRONCE",  qty: 50,  unit: "firma", unitPlural: "firmas", price: 750,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNTY4MTNhODg3MzU1MzNmMmJhNWIlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNTY4MTNhODg3MzU1MzNmMmJhNWIlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWQlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMChOT00tMTUxKSUyMiUyQyUyMnByJTIyJTNBODcwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwQnJvbmNlJTIwNTAlMjIlMkMlMjJxJTIyJTNBNTAlN0QlNUQlN0Q%3D" },
      { tier: "Plata",   sku: "JAAK-NOM151-PLATA",   qty: 100, unit: "firma", unitPlural: "firmas", price: 1400, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNTZlYjNhODg3MzU1MzNmMmJhNjQlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNTZlYjNhODg3MzU1MzNmMmJhNjQlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWQlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMChOT00tMTUxKSUyMiUyQyUyMnByJTIyJTNBMTYyNCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMFBsYXRhJTIwMTAwJTIyJTJDJTIycSUyMiUzQTEwMCU3RCU1RCU3RA%3D%3D" },
      { tier: "Oro",     sku: "JAAK-NOM151-ORO",     qty: 250, unit: "firma", unitPlural: "firmas", price: 3250, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWI4ODNhODg3MzU1MzNmMmJhNmYlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWI4ODNhODg3MzU1MzNmMmJhNmYlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWQlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMChOT00tMTUxKSUyMiUyQyUyMnByJTIyJTNBMzc3MCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyME9ybyUyMDI1MCUyMiUyQyUyMnElMjIlM0EyNTAlN0QlNUQlN0Q%3D" },
      { tier: "Platino", sku: "JAAK-NOM151-PLATINO", qty: 500, unit: "firma", unitPlural: "firmas", price: 6000, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWJkMjNhODg3MzU1MzNmMmJhNzQlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWJkMjNhODg3MzU1MzNmMmJhNzQlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWQlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMChOT00tMTUxKSUyMiUyQyUyMnByJTIyJTNBNjk2MCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMFBsYXRpbm8lMjA1MDAlMjIlMkMlMjJxJTIyJTNBNTAwJTdEJTVEJTdE" },
    ],
  },
  {
    id: "firma-nom151-bio",
    name: "Firma Digital NOM-151 + Biometría",
    description:
      "Firma electrónica avanzada NOM-151 con prueba de vida facial del firmante en tiempo real y validación 1:1 contra identificación oficial. Expediente con video y fotogramas. Ideal para banca, aseguradoras y contratos de alto valor.",
    category: "Software de Firma Electrónica con Biometría",
    applicationCategory: "SecurityApplication",
    image: IMG_IDENTIDAD,
    packages: [
      { tier: "Cobre",   sku: "JAAK-NOM151BIO-COBRE",   qty: 5,   unit: "sesión", unitPlural: "sesiones", price: 130,   url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWNhNjNhODg3MzU1MzNmMmJhNzklMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWNhNjNhODg3MzU1MzNmMmJhNzklMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWRfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAlMkIlMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTE1MC44JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwQklPJTIwQ29icmUlMjA1JTIyJTJDJTIycSUyMiUzQTUlN0QlNUQlN0Q%3D" },
      { tier: "Bronce",  sku: "JAAK-NOM151BIO-BRONCE",  qty: 50,  unit: "sesión", unitPlural: "sesiones", price: 1500,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWNmZDNhODg3MzU1MzNmMmJhN2UlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWNmZDNhODg3MzU1MzNmMmJhN2UlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWRfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAlMkIlMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTE3NDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBCSU8lMjBCcm9uY2UlMjA1MCUyMiUyQyUyMnElMjIlM0E1MCU3RCU1RCU3RA%3D%3D" },
      { tier: "Plata",   sku: "JAAK-NOM151BIO-PLATA",   qty: 100, unit: "sesión", unitPlural: "sesiones", price: 2700,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWQ0MzNhODg3MzU1MzNmMmJhODMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWQ0MzNhODg3MzU1MzNmMmJhODMlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWRfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAlMkIlMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTMxMzIlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBCSU8lMjBQbGF0YSUyMDEwMCUyMiUyQyUyMnElMjIlM0ExMDAlN0QlNUQlN0Q%3D" },
      { tier: "Oro",     sku: "JAAK-NOM151BIO-ORO",     qty: 250, unit: "sesión", unitPlural: "sesiones", price: 6625,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWRhODNhODg3MzU1MzNmMmJhOTklMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWRhODNhODg3MzU1MzNmMmJhOTklMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWRfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAlMkIlMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTc2ODUlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBCSU8lMjBPcm8lMjAyNTAlMjIlMkMlMjJxJTIyJTNBMjUwJTdEJTVEJTdE" },
      { tier: "Platino", sku: "JAAK-NOM151BIO-PLATINO", qty: 500, unit: "sesión", unitPlural: "sesiones", price: 12500, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWRmZjNhODg3MzU1MzNmMmJhYTclMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWRmZjNhODg3MzU1MzNmMmJhYTclMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYWR2YW5jZWRfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAlMkIlMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTE0NTAwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwQklPJTIwUGxhdGlubyUyMDUwMCUyMiUyQyUyMnElMjIlM0E1MDAlN0QlNUQlN0Q%3D" },
    ],
  },
  {
    id: "firma-nom151-kyc",
    name: "Firma Digital NOM-151 + KYC",
    description:
      "Solución integral de onboarding regulado: firma NOM-151 con biometría facial y KYC completo del firmante (OCR + RENAPO + INE + OFAC + Interpol + SAT) en una sola sesión. Expediente único firma + identidad para AML/PLD y CNBV.",
    category: "Software de Onboarding Digital Regulado",
    applicationCategory: "SecurityApplication",
    image: IMG_IDENTIDAD,
    packages: [
      { tier: "Cobre",   sku: "JAAK-NOM151KYC-COBRE",   qty: 5,   unit: "sesión", unitPlural: "sesiones", price: 174,   url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWY5ODNhODg3MzU1MzNmMmJhYjElMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWY5ODNhODg3MzU1MzNmMmJhYjElMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwY29uJTIwQmlvbWV0cmlhJTIyJTJDJTIycHIlMjIlM0EyMDEuODQlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBLWUMlMjBDb2JyZSUyMDUlMjIlMkMlMjJxJTIyJTNBNSU3RCU1RCU3RA%3D%3D" },
      { tier: "Bronce",  sku: "JAAK-NOM151KYC-BRONCE",  qty: 50,  unit: "sesión", unitPlural: "sesiones", price: 2625,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNWZkODNhODg3MzU1MzNmMmJhYjYlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNWZkODNhODg3MzU1MzNmMmJhYjYlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwY29uJTIwQmlvbWV0cmlhJTIyJTJDJTIycHIlMjIlM0EzMDQ1JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwS1lDJTIwQnJvbmNlJTIwNTAlMjIlMkMlMjJxJTIyJTNBNTAlN0QlNUQlN0Q%3D" },
      { tier: "Plata",   sku: "JAAK-NOM151KYC-PLATA",   qty: 100, unit: "sesión", unitPlural: "sesiones", price: 4725,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNjAzNDNhODg3MzU1MzNmMmJhYmIlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNjAzNDNhODg3MzU1MzNmMmJhYmIlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwY29uJTIwQmlvbWV0cmlhJTIyJTJDJTIycHIlMjIlM0E1NDgxJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwS1lDJTIwUGxhdGElMjAxMDAlMjIlMkMlMjJxJTIyJTNBMTAwJTdEJTVEJTdE" },
      { tier: "Oro",     sku: "JAAK-NOM151KYC-ORO",     qty: 250, unit: "sesión", unitPlural: "sesiones", price: 11594, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNjBhNjNhODg3MzU1MzNmMmJhYzAlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNjBhNjNhODg3MzU1MzNmMmJhYzAlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwY29uJTIwQmlvbWV0cmlhJTIyJTJDJTIycHIlMjIlM0ExMzQ0OS4wNCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEtZQyUyME9ybyUyMDI1MCUyMiUyQyUyMnElMjIlM0EyNTAlN0QlNUQlN0Q%3D" },
      { tier: "Platino", sku: "JAAK-NOM151KYC-PLATINO", qty: 500, unit: "sesión", unitPlural: "sesiones", price: 21875, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWNkNjBmZjNhODg3MzU1MzNmMmJhYzUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWNkNjBmZjNhODg3MzU1MzNmMmJhYzUlMjIlMkMlMjJrJTIyJTNBJTIyc2lnbmFfYmlvbWV0cmljJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwY29uJTIwQmlvbWV0cmlhJTIyJTJDJTIycHIlMjIlM0EyNTM3NSUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEtZQyUyMFBsYXRpbm8lMjA1MDAlMjIlMkMlMjJxJTIyJTNBNTAwJTdEJTVEJTdE" },
    ],
  },
  {
    id: "consulta-ine",
    name: "Consulta INE / IFE",
    description:
      "Validación en tiempo real de credencial INE/IFE contra el padrón electoral oficial. Verificación de vigencia y confirmación de datos biográficos del titular. Respuesta en menos de un minuto con evidencia descargable.",
    category: "Servicio de Validación de Identidad Oficial",
    applicationCategory: "SecurityApplication",
    image: IMG_IDENTIDAD,
    packages: [
      { tier: "Cobre",   sku: "JAAK-INE-COBRE",   qty: 10,  unit: "consulta", unitPlural: "consultas", price: 14,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4M2U4YmU1NzU4OWU3MTk0MmQxYzklMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4M2U4YmU1NzU4OWU3MTk0MmQxYzklMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBMTYuMjQlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyQ29uc3VsdGElMjBJTkUlNUN0Q29icmUlMjAxMCUyMiUyQyUyMnElMjIlM0ExMCU3RCU1RCU3RA%3D%3D" },
      { tier: "Bronce",  sku: "JAAK-INE-BRONCE",  qty: 50,  unit: "consulta", unitPlural: "consultas", price: 105, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NTFkM2U1NzU4OWU3MTk0MmQxZmElMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NTFkM2U1NzU4OWU3MTk0MmQxZmElMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBMTIxLjglMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyQ29uc3VsdGElMjBJTkUlNUN0QnJvbmNlJTIwNTAlMjIlMkMlMjJxJTIyJTNBNTAlN0QlNUQlN0Q%3D" },
      { tier: "Plata",   sku: "JAAK-INE-PLATA",   qty: 100, unit: "consulta", unitPlural: "consultas", price: 200, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NTMzY2U1NzU4OWU3MTk0MmQyMGElMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NTMzY2U1NzU4OWU3MTk0MmQyMGElMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBMjMyJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkNvbnN1bHRhJTIwSU5FJTVDdFBsYXRhJTIwMTAwJTIyJTJDJTIycSUyMiUzQTEwMCU3RCU1RCU3RA%3D%3D" },
      { tier: "Oro",     sku: "JAAK-INE-ORO",     qty: 250, unit: "consulta", unitPlural: "consultas", price: 475, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NTU5NWU1NzU4OWU3MTk0MmQyMmMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NTU5NWU1NzU4OWU3MTk0MmQyMmMlMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBNTUxJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkNvbnN1bHRhJTIwSU5FJTVDdE9ybyUyMDI1MCUyMiUyQyUyMnElMjIlM0EyNTAlN0QlNUQlN0Q%3D" },
      { tier: "Platino", sku: "JAAK-INE-PLATINO", qty: 500, unit: "consulta", unitPlural: "consultas", price: 900, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NTY1OWU1NzU4OWU3MTk0MmQyMzMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NTY1OWU1NzU4OWU3MTk0MmQyMzMlMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBMTA0NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJDb25zdWx0YSUyMElORSU1Q3RQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCU3RCU1RCU3RA%3D%3D" },
    ],
  },
  {
    id: "consulta-curp",
    name: "Consulta CURP / RENAPO",
    description:
      "Validación de CURP ante el Registro Nacional de Población (RENAPO) con obtención de datos biográficos completos. Detección de CURPs inválidas o duplicadas. Respuesta en tiempo real con evidencia descargable.",
    category: "Servicio de Validación de Identidad Oficial",
    applicationCategory: "SecurityApplication",
    image: IMG_IDENTIDAD,
    packages: [
      { tier: "Cobre",   sku: "JAAK-CURP-COBRE",   qty: 10,  unit: "consulta", unitPlural: "consultas", price: 14,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjJkOGU1NzU4OWU3MTk0MmQyNzMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjJkOGU1NzU4OWU3MTk0MmQyNzMlMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBMTYuMjQlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyQ29uc3VsdGElMjBDVVJQJTVDdENvYnJlJTVDdDEwJTIyJTJDJTIycSUyMiUzQTEwJTdEJTVEJTdE" },
      { tier: "Bronce",  sku: "JAAK-CURP-BRONCE",  qty: 50,  unit: "consulta", unitPlural: "consultas", price: 105, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjMzYmU1NzU4OWU3MTk0MmQyNzglMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjMzYmU1NzU4OWU3MTk0MmQyNzglMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBMTIxLjglMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyQ29uc3VsdGElMjBDVVJQJTVDdEJyb25jZSU1Q3Q1MCUyMiUyQyUyMnElMjIlM0E1MCU3RCU1RCU3RA%3D%3D" },
      { tier: "Plata",   sku: "JAAK-CURP-PLATA",   qty: 100, unit: "consulta", unitPlural: "consultas", price: 200, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjM1OGU1NzU4OWU3MTk0MmQyN2QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjM1OGU1NzU4OWU3MTk0MmQyN2QlMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBMjMyJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkNvbnN1bHRhJTIwQ1VSUCU1Q3RQbGF0YSU1Q3QxMDAlMjIlMkMlMjJxJTIyJTNBMTAwJTdEJTVEJTdE" },
      { tier: "Oro",     sku: "JAAK-CURP-ORO",     qty: 250, unit: "consulta", unitPlural: "consultas", price: 475, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjM4MGU1NzU4OWU3MTk0MmQyODIlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjM4MGU1NzU4OWU3MTk0MmQyODIlMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBNTUxJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkNvbnN1bHRhJTIwQ1VSUCU1Q3RPcm8lNUN0MjUwJTIyJTJDJTIycSUyMiUzQTI1MCU3RCU1RCU3RA%3D%3D" },
      { tier: "Platino", sku: "JAAK-CURP-PLATINO", qty: 500, unit: "consulta", unitPlural: "consultas", price: 900, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjNhMWU1NzU4OWU3MTk0MmQyODclMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjNhMWU1NzU4OWU3MTk0MmQyODclMjIlMkMlMjJrJTIyJTNBJTIyYmxhY2tsaXN0JTIyJTJDJTIybiUyMiUzQSUyMkJsYWNrJTIwTGlzdCUyMiUyQyUyMnByJTIyJTNBMTA0NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJDb25zdWx0YSUyMENVUlAlNUN0UGxhdGlubyU1Q3Q1MDAlMjIlMkMlMjJxJTIyJTNBNTAwJTdEJTVEJTdE" },
    ],
  },
  {
    id: "ocr-inteligente",
    name: "OCR Inteligente",
    description:
      "Extracción de datos estructurados de +500 tipos de documentos con IA: actas constitutivas, CSF, estados de cuenta, comprobantes de domicilio y más. El consumo de tokens varía según tipo y extensión del documento.",
    category: "Software de Reconocimiento Óptico de Caracteres (OCR) con IA",
    applicationCategory: "BusinessApplication",
    image: IMG_FIRMA,
    packages: [
      { tier: "Cobre",   sku: "JAAK-OCR-INT-COBRE",   qty: 210,   unit: "token", unitPlural: "tokens", price: 99,    url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjY2OWU1NzU4OWU3MTk0MmQyOTUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjY2OWU1NzU4OWU3MTk0MmQyOTUlMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTExNC44NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJPQ1IlMjBJbnRlbGlnZW50ZSU1Q3RDb2JyZSU1Q3QyMTAlMjB0b2tlbnMlMjIlMkMlMjJxJTIyJTNBMjEwJTdEJTVEJTdE" },
      { tier: "Bronce",  sku: "JAAK-OCR-INT-BRONCE",  qty: 2100,  unit: "token", unitPlural: "tokens", price: 1500,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjZhZGU1NzU4OWU3MTk0MmQyOWIlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjZhZGU1NzU4OWU3MTk0MmQyOWIlMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTE3NDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyT0NSJTIwSW50ZWxpZ2VudGUlNUN0QnJvbmNlJTVDdDIlMkMxMDAlMjB0b2tlbnMlMjIlMkMlMjJxJTIyJTNBMjEwMCU3RCU1RCU3RA%3D%3D" },
      { tier: "Plata",   sku: "JAAK-OCR-INT-PLATA",   qty: 4200,  unit: "token", unitPlural: "tokens", price: 2800,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjcwZmU1NzU4OWU3MTk0MmQyYTIlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjcwZmU1NzU4OWU3MTk0MmQyYTIlMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTMyNDglMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyT0NSJTIwSW50ZWxpZ2VudGUlNUN0UGxhdGElNUN0NCUyQzIwMCUyMHRva2VucyUyMiUyQyUyMnElMjIlM0E0MjAwJTdEJTVEJTdE" },
      { tier: "Oro",     sku: "JAAK-OCR-INT-ORO",     qty: 10500, unit: "token", unitPlural: "tokens", price: 6625,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjcyZGU1NzU4OWU3MTk0MmQyYTclMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjcyZGU1NzU4OWU3MTk0MmQyYTclMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTc2ODUlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyT0NSJTIwSW50ZWxpZ2VudGUlNUN0T3JvJTVDdDEwJTJDNTAwJTIwdG9rZW5zJTIyJTJDJTIycSUyMiUzQTEwNTAwJTdEJTVEJTdE" },
      { tier: "Platino", sku: "JAAK-OCR-INT-PLATINO", qty: 21000, unit: "token", unitPlural: "tokens", price: 12500, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4Njg0NmU1NzU4OWU3MTk0MmQyYjIlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4Njg0NmU1NzU4OWU3MTk0MmQyYjIlMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTE0NTAwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMk9DUiUyMEludGVsaWdlbnRlJTVDdFBsYXRpbm8lNUN0MjElMkMwMDAlMjB0b2tlbnMlMjIlMkMlMjJxJTIyJTNBMjEwMDAlN0QlNUQlN0Q%3D" },
    ],
  },
  {
    id: "ocr-id",
    name: "OCR para Identificación Oficial",
    description:
      "Extracción de datos estructurados y fotografía de identificaciones oficiales (INE, pasaporte) con detección de documentos falsificados o alterados. Evidencia descargable, disponible vía plataforma web y API.",
    category: "Software de Reconocimiento de Identificación Oficial",
    applicationCategory: "SecurityApplication",
    image: IMG_IDENTIDAD,
    packages: [
      { tier: "Cobre",   sku: "JAAK-OCR-ID-COBRE",   qty: 210,   unit: "token", unitPlural: "tokens", price: 99,    url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4Njk3ZGU1NzU4OWU3MTk0MmQyYmIlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4Njk3ZGU1NzU4OWU3MTk0MmQyYmIlMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTExNC44NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJPQ1IlMjBwYXJhJTIwSWRlbnRpZmljYWNpJUMzJUIzbiUyME9maWNpYWwlNUN0Q29icmUlNUN0MjEwJTIwdG9rZW5zJTIyJTJDJTIycSUyMiUzQTIxMCU3RCU1RCU3RA%3D%3D" },
      { tier: "Bronce",  sku: "JAAK-OCR-ID-BRONCE",  qty: 2100,  unit: "token", unitPlural: "tokens", price: 1500,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4Njk5OGU1NzU4OWU3MTk0MmQyYzElMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4Njk5OGU1NzU4OWU3MTk0MmQyYzElMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTE3NDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyT0NSJTIwcGFyYSUyMElkZW50aWZpY2FjaSVDMyVCM24lMjBPZmljaWFsJTVDdEJyb25jZSU1Q3QyJTJDMTAwJTIwdG9rZW5zJTIyJTJDJTIycSUyMiUzQTIxMDAlN0QlNUQlN0Q%3D" },
      { tier: "Plata",   sku: "JAAK-OCR-ID-PLATA",   qty: 4200,  unit: "token", unitPlural: "tokens", price: 2800,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NjllN2U1NzU4OWU3MTk0MmQyYzclMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NjllN2U1NzU4OWU3MTk0MmQyYzclMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTMyNDglMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyT0NSJTIwcGFyYSUyMElkZW50aWZpY2FjaSVDMyVCM24lMjBPZmljaWFsJTVDdFBsYXRhJTVDdDQlMkMyMDAlMjB0b2tlbnMlMjIlMkMlMjJxJTIyJTNBNDIwMCU3RCU1RCU3RA%3D%3D" },
      { tier: "Oro",     sku: "JAAK-OCR-ID-ORO",     qty: 10500, unit: "token", unitPlural: "tokens", price: 6625,  url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NmEyOGU1NzU4OWU3MTk0MmQyY2MlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NmEyOGU1NzU4OWU3MTk0MmQyY2MlMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTc2ODUlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyT0NSJTIwcGFyYSUyMElkZW50aWZpY2FjaSVDMyVCM24lMjBPZmljaWFsJTVDdE9ybyU1Q3QxMCUyQzUwMCUyMHRva2VucyUyMiUyQyUyMnElMjIlM0ExMDUwMCU3RCU1RCU3RA%3D%3D" },
      { tier: "Platino", sku: "JAAK-OCR-ID-PLATINO", qty: 21000, unit: "token", unitPlural: "tokens", price: 12500, url: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjI2OWQ4NmE1M2U1NzU4OWU3MTk0MmQyZDIlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmklMjIlM0ElMjI2OWQ4NmE1M2U1NzU4OWU3MTk0MmQyZDIlMjIlMkMlMjJrJTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJuJTIyJTNBJTIyRG9jdW1lbnQlMjIlMkMlMjJwciUyMiUzQTE0NTAwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMk9DUiUyMHBhcmElMjBJZGVudGlmaWNhY2klQzMlQjNuJTIwT2ZpY2lhbCU1Q3RQbGF0aW5vJTVDdDIxJTJDMDAwJTIwdG9rZW5zJTIyJTJDJTIycSUyMiUzQTIxMDAwJTdEJTVEJTdE" },
    ],
  },
];

function buildProductSchema(p: ProductDefinition) {
  const prices = p.packages.map((pkg) => pkg.price);
  return {
    "@context": "https://schema.org",
    // Multi-type: Product habilita Merchant Listings / Product Snippets,
    // SoftwareApplication habilita Software App rich result (SaaS).
    "@type": ["Product", "SoftwareApplication"],
    "@id": `${PRECIOS_URL}#${p.id}`,
    name: p.name,
    description: p.description,
    image: p.image,
    brand: BRAND_REF,
    category: p.category,
    applicationCategory: p.applicationCategory,
    operatingSystem: "Web, API",
    mainEntityOfPage: PRECIOS_URL,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "MXN",
      lowPrice: Math.min(...prices).toString(),
      highPrice: Math.max(...prices).toString(),
      offerCount: p.packages.length,
      availability: "https://schema.org/InStock",
      offers: p.packages.map((pkg) => ({
        "@type": "Offer",
        name: `Plan ${pkg.tier} – ${p.name}`,
        sku: pkg.sku,
        mpn: pkg.sku,
        price: pkg.price.toString(),
        priceCurrency: "MXN",
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url: pkg.url,
        description: `${pkg.qty.toLocaleString("es-MX")} ${pkg.qty === 1 ? pkg.unit : pkg.unitPlural} por año`,
        seller: SELLER_REF,
        hasMerchantReturnPolicy: RETURN_POLICY,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: (pkg.price / pkg.qty).toFixed(2),
          priceCurrency: "MXN",
          valueAddedTaxIncluded: false,
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: 1,
            unitText: pkg.unit,
          },
        },
      })),
    },
  };
}

const productSchemas = PRODUCTS.map(buildProductSchema);

export default function PreciosPage() {
  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {productSchemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <PreciosClient />
      </main>
      <Footer />
    </>
  );
}

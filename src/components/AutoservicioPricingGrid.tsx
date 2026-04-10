"use client";

import { useState } from "react";
import Link from "next/link";

interface Plan {
  name: string;
  qty: string;
  price: string;
  link?: string;
}

interface Product {
  id: string;
  shortName: string;
  name: string;
  icon: string;
  color: string;
  desc: string;
  popular: string;
  forWhom: string;
  benefits: string[];
  idealFor: string[];
  plans: Plan[];
}

const PRODUCTS: Product[] = [
  {
    id: "kyc",
    shortName: "KYC",
    name: "KYC · Verificación de Identidad",
    icon: "👤",
    color: "#2DB6C1",
    desc: "Liveness iBeta Level 1 · Sin NOM-151",
    popular: "Plata",
    forWhom: "Empresas que necesitan verificar la identidad real de sus clientes o usuarios de forma digital, sin fricción y con alta seguridad antifraude.",
    benefits: [
      "Prueba de vida iBeta Level 1 (antisuplantación)",
      "OCR de identificación oficial (INE, pasaporte)",
      "Consulta en listas nominales INE / RENAPO",
      "Alertas OFAC · Interpol · listas negras SAT",
      "Geolocalización y metadatos del dispositivo",
      "Expediente digital descargable",
    ],
    idealFor: ["Fintechs", "Apps de crédito", "Plataformas digitales", "E-commerce regulado"],
    plans: [
      {name:"Cobre",   qty:"5 verificaciones",   price:"$99",     link:"https://platform.jaak.ai/#/onboarding/plans/cobre"},
      {name:"Bronce",  qty:"50 verificaciones",  price:"$1,500",  link:"https://platform.jaak.ai/#/onboarding/plans/bronce"},
      {name:"Plata",   qty:"100 verificaciones", price:"$2,800",  link:"https://platform.jaak.ai/#/onboarding/plans/plata"},
      {name:"Oro",     qty:"250 verificaciones", price:"$6,625",  link:"https://platform.jaak.ai/#/onboarding/plans/oro"},
      {name:"Platino", qty:"500 verificaciones", price:"$12,500", link:"https://platform.jaak.ai/#/onboarding/plans/platino1"},
    ],
  },
  {
    id: "firma-simple",
    shortName: "Firma Simple",
    name: "Firma Simple",
    icon: "✍️",
    color: "#818cf8",
    desc: "Firma electrónica básica sin NOM-151",
    popular: "Plata",
    forWhom: "Empresas que requieren firma electrónica válida legalmente para documentos internos, contratos comerciales o flujos de aprobación sin obligación regulatoria de NOM-151.",
    benefits: [
      "Firma electrónica con validez legal en México",
      "Hasta 4 firmantes por documento",
      "Flujo de firma 100% digital, sin instalar nada",
      "Integración vía API REST o plataforma web",
      "Notificaciones automáticas a firmantes",
      "Evidencia y trazabilidad de cada firma",
    ],
    idealFor: ["Startups", "RR.HH.", "Contratos internos", "Acuerdos comerciales"],
    plans: [
      {name:"Cobre",   qty:"10 firmas",  price:"$49",    link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTU2Ljg0JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIwQ29icmUlMjAxMCUyMiUyQyUyMnElMjIlM0ExMCU3RCU1RCU3RA%3D%3D"},
      {name:"Bronce",  qty:"50 firmas",  price:"$400",   link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTQ2NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyMFNpbXBsZSUyMEJyb25jZSUyMDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNGZhYTNhODg3MzU1MzNmMmJhMTYlMjIlN0QlNUQlN0Q="},
      {name:"Plata",   qty:"100 firmas", price:"$700",   link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTgxMiUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyMFNpbXBsZSUyMFBsYXRhJTIwMTAwJTIyJTJDJTIycSUyMiUzQTEwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDU0NDgzYTg4NzM1NTMzZjJiYTQ1JTIyJTdEJTVEJTdE"},
      {name:"Oro",     qty:"250 firmas", price:"$1,500", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTE3NDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjBPcm8lMjAyNTAlMjIlMkMlMjJxJTIyJTNBMjUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNTUwOTNhODg3MzU1MzNmMmJhNGElMjIlN0QlNUQlN0Q="},
      {name:"Platino", qty:"500 firmas", price:"$2,500", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTI5MDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjBQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDU1OGEzYTg4NzM1NTMzZjJiYTRmJTIyJTdEJTVEJTdE"},
    ],
  },
  {
    id: "firma-nom151",
    shortName: "Firma NOM-151",
    name: "Firma Digital con Validez NOM-151",
    icon: "📜",
    color: "#38bdf8",
    desc: "Firma electrónica avanzada con validez legal NOM-151",
    popular: "Plata",
    forWhom: "Empresas e instituciones que requieren firma electrónica avanzada con plena validez legal y conservación conforme a la NOM-151, para documentos con efectos jurídicos.",
    benefits: [
      "Constancia de conservación NOM-151 (PSCC acreditado)",
      "Firma electrónica avanzada con validez en juicio",
      "Hasta 4 firmantes por documento",
      "Expediente digital con evidencia forense",
      "Sellado de tiempo y hash criptográfico",
      "Cumplimiento con Código de Comercio y LFEA",
    ],
    idealFor: ["Instituciones financieras", "Contratos de crédito", "Servicios regulados", "Seguros"],
    plans: [
      {name:"Cobre",   qty:"5 firmas",   price:"$99",    link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTExNC44NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMENvYnJlJTIwNSUyMiUyQyUyMnElMjIlM0E1JTJDJTIyaWQlMjIlM0ElMjI2OWNkNTYyMjNhODg3MzU1MzNmMmJhNTUlMjIlN0QlNUQlN0Q="},
      {name:"Bronce",  qty:"50 firmas",  price:"$750",   link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTg3MCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMEJyb25jZSUyMDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNTY4MTNhODg3MzU1MzNmMmJhNWIlMjIlN0QlNUQlN0Q="},
      {name:"Plata",   qty:"100 firmas", price:"$1,400", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTE2MjQlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjBQbGF0YSUyMDEwMCUyMiUyQyUyMnElMjIlM0ExMDAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q1NmViM2E4ODczNTUzM2YyYmE2NCUyMiU3RCU1RCU3RA=="},
      {name:"Oro",     qty:"250 firmas", price:"$3,250", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTM3NzAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjBPcm8lMjAyNTAlMjIlMkMlMjJxJTIyJTNBMjUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNWI4ODNhODg3MzU1MzNmMmJhNmYlMjIlN0QlNUQlN0Q="},
      {name:"Platino", qty:"500 firmas", price:"$6,000", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTY5NjAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjBQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDViZDIzYTg4NzM1NTMzZjJiYTc0JTIyJTdEJTVEJTdE"},
    ],
  },
  {
    id: "nom151-bio",
    shortName: "NOM-151 + BIO",
    name: "Firma NOM-151 con Biometría Facial",
    icon: "🔐",
    color: "#a78bfa",
    desc: "Firma NOM-151 con validación facial biométrica del firmante",
    popular: "Plata",
    forWhom: "Empresas que necesitan acreditar tanto la identidad del firmante como la autenticidad del documento, con máxima trazabilidad y cumplimiento regulatorio.",
    benefits: [
      "Prueba de vida facial del firmante en tiempo real",
      "Firma NOM-151 con validez legal plena",
      "Hasta 2 firmantes por sesión biométrica",
      "Validación 1:1 contra identificación oficial",
      "Expediente con video y fotogramas de la sesión",
      "Constancia NOM-151 por cada documento firmado",
    ],
    idealFor: ["Banca y crédito", "Aseguradoras", "Cumplimiento AML", "Contratos de alto valor"],
    plans: [
      {name:"Cobre",   qty:"5 sesiones",   price:"$130",    link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMTUwLjglMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBCSU8lMjBDb2JyZSUyMDUlMjIlMkMlMjJxJTIyJTNBNSUyQyUyMmlkJTIyJTNBJTIyNjljZDVjYTYzYTg4NzM1NTMzZjJiYTc5JTIyJTdEJTVEJTdE"},
      {name:"Bronce",  qty:"50 sesiones",  price:"$1,500",  link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMTc0MCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyMEJyb25jZSUyMDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNWNmZDNhODg3MzU1MzNmMmJhN2UlMjIlN0QlNUQlN0Q="},
      {name:"Plata",   qty:"100 sesiones", price:"$2,700",  link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMzEzMiUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyMFBsYXRhJTIwMTAwJTIyJTJDJTIycSUyMiUzQTEwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDVkNDMzYTg4NzM1NTMzZjJiYTgzJTIyJTdEJTVEJTdE"},
      {name:"Oro",     qty:"250 sesiones", price:"$6,625",  link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBNzY4NSUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyME9ybyUyMDI1MCUyMiUyQyUyMnElMjIlM0EyNTAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q1ZGE4M2E4ODczNTUzM2YyYmE5OSUyMiU3RCU1RCU3RA=="},
      {name:"Platino", qty:"500 sesiones", price:"$12,500", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMTQ1MDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBCSU8lMjBQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDVkZmYzYTg4NzM1NTMzZjJiYWE3JTIyJTdEJTVEJTdE"},
    ],
  },
  {
    id: "nom151-kyc",
    shortName: "NOM-151 + KYC",
    name: "Firma NOM-151 + KYC Biométrico",
    icon: "🛡️",
    color: "#fbbf24",
    desc: "La solución más completa: firma NOM-151 + KYC + biometría",
    popular: "Plata",
    forWhom: "Instituciones que necesitan la máxima cobertura: onboarding digital regulado con verificación de identidad completa y firma con validez legal plena.",
    benefits: [
      "Todo lo de Firma NOM-151 + Biometría",
      "KYC completo del firmante en la misma sesión",
      "OCR de identificación oficial integrado",
      "Consulta RENAPO, INE, OFAC, Interpol, SAT",
      "Expediente único: firma + identidad + biometría",
      "Ideal para cumplimiento AML / PLD / CNBV",
    ],
    idealFor: ["Onboarding regulado", "AML / PLD", "CNBV", "Crédito formal"],
    plans: [
      {name:"Cobre",   qty:"5 sesiones",   price:"$149",    link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTE3Mi44NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEtZQyUyMENvYnJlJTIwNSUyMiUyQyUyMnElMjIlM0E1JTJDJTIyaWQlMjIlM0ElMjI2OWNkNWY5ODNhODg3MzU1MzNmMmJhYjElMjIlN0QlNUQlN0Q="},
      {name:"Bronce",  qty:"50 sesiones",  price:"$2,250",  link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTI2MTAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBLWUMlMjBCcm9uY2UlMjA1MCUyMiUyQyUyMnElMjIlM0E1MCUyQyUyMmlkJTIyJTNBJTIyNjljZDVmZDgzYTg4NzM1NTMzZjJiYWI2JTIyJTdEJTVEJTdE"},
      {name:"Plata",   qty:"100 sesiones", price:"$4,200",  link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTQ4NzIlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBLWUMlMjBQbGF0YSUyMDEwMCUyMiUyQyUyMnElMjIlM0ExMDAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q2MDM0M2E4ODczNTUzM2YyYmFiYiUyMiU3RCU1RCU3RA=="},
      {name:"Oro",     qty:"250 sesiones", price:"$9,875",  link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTExNDU1JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwS1lDJTIwT3JvJTIwMjUwJTIyJTJDJTIycSUyMiUzQTI1MCUyQyUyMmlkJTIyJTNBJTIyNjljZDYwYTYzYTg4NzM1NTMzZjJiYWMwJTIyJTdEJTVEJTdE"},
      {name:"Platino", qty:"500 sesiones", price:"$18,500", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTIxNDYwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwS1lDJTIwUGxhdGlubyUyMDUwMCUyMiUyQyUyMnElMjIlM0E1MDAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q2MGZmM2E4ODczNTUzM2YyYmFjNSUyMiU3RCU1RCU3RA=="},
    ],
  },
  {
    id: "ine",
    shortName: "INE",
    name: "Consulta INE",
    icon: "📛",
    color: "#34d399",
    desc: "Validación ante padrón electoral · INE/IFE",
    popular: "Plata",
    forWhom: "Empresas que necesitan validar la autenticidad de una credencial INE/IFE contra el padrón electoral oficial en tiempo real.",
    benefits: [
      "Validación en tiempo real contra padrón INE",
      "Verificación de vigencia del documento",
      "Confirmación de datos biográficos del titular",
      "Disponible vía API o plataforma web",
      "Respuesta en milisegundos",
      "Evidencia de consulta descargable",
    ],
    idealFor: ["Fintechs", "Plataformas de crédito", "Onboarding digital", "Servicios financieros"],
    plans: [
      {name:"Cobre",   qty:"10 consultas",  price:"$14",  link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0ExNi4yNCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJDb25zdWx0YSUyMElORSU1Q3RDb2JyZSUyMiUyQyUyMnElMjIlM0ExMCU3RCU1RCU3RA%3D%3D"},
      {name:"Bronce",  qty:"50 consultas",  price:"$105", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0ExMjEuOCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJDb25zdWx0YSUyMElORSU1Q3RCcm9uY2UlMjIlMkMlMjJxJTIyJTNBMCUyQyUyMmlkJTIyJTNBJTIyNjlkODUxZDNlNTc1ODllNzE5NDJkMWZhJTIyJTdEJTVEJTdE"},
      {name:"Plata",   qty:"100 consultas", price:"$200", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0EyMzIlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyQ29uc3VsdGElMjBJTkUlNUN0T3JvJTIyJTJDJTIycSUyMiUzQTI1MCUyQyUyMmlkJTIyJTNBJTIyNjlkODUzM2NlNTc1ODllNzE5NDJkMjBhJTIyJTdEJTVEJTdE"},
      {name:"Oro",     qty:"250 consultas", price:"$475", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0E1NTElMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyQ29uc3VsdGElMjBJTkUlNUN0T3JvJTIyJTJDJTIycSUyMiUzQTI1MCUyQyUyMmlkJTIyJTNBJTIyNjlkODU1OTVlNTc1ODllNzE5NDJkMjJjJTIyJTdEJTVEJTdE"},
      {name:"Platino", qty:"500 consultas", price:"$900", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0ExMDQ0JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkNvbnN1bHRhJTIwSU5FJTVDdFBsYXRpbm8lMjA1MDAlMjIlMkMlMjJxJTIyJTNBNTAwJTJDJTIyaWQlMjIlM0ElMjI2OWQ4NTY1OWU1NzU4OWU3MTk0MmQyMzMlMjIlN0QlNUQlN0Q="},
    ],
  },
  {
    id: "curp",
    shortName: "CURP",
    name: "Consulta CURP",
    icon: "📋",
    color: "#22d3ee",
    desc: "Validación ante RENAPO · Datos biográficos",
    popular: "Plata",
    forWhom: "Empresas que necesitan validar la CURP de una persona ante el Registro Nacional de Población, obteniendo datos biográficos completos.",
    benefits: [
      "Consulta directa a RENAPO",
      "Validación de CURP y datos biográficos",
      "Detección de CURP inválidas o duplicadas",
      "Disponible vía API o plataforma web",
      "Respuesta en tiempo real",
      "Evidencia de consulta descargable",
    ],
    idealFor: ["Recursos Humanos", "Servicios de salud", "Instituciones educativas", "Empresas reguladas"],
    plans: [
      {name:"Cobre",   qty:"10 consultas",  price:"$14",  link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0ExNi4yNCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJDb25zdWx0YSUyMENVUlAlNUN0Q29icmUlNUN0MTAlMjIlMkMlMjJxJTIyJTNBMTAlMkMlMjJpZCUyMiUzQSUyMjY5ZDg2MmQ4ZTU3NTg5ZTcxOTQyZDI3MyUyMiU3RCU1RCU3RA=="},
      {name:"Bronce",  qty:"50 consultas",  price:"$105", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0ExMjEuOCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJDb25zdWx0YSUyMENVUlAlNUN0QnJvbmNlJTVDdDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWQ4NjMzYmU1NzU4OWU3MTk0MmQyNzglMjIlN0QlNUQlN0Q="},
      {name:"Plata",   qty:"100 consultas", price:"$200", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0EyMzIlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyQ29uc3VsdGElMjBDVVJQJTVDdFBsYXRhJTVDdDEwMCUyMiUyQyUyMnElMjIlM0ExMDAlMkMlMjJpZCUyMiUzQSUyMjY5ZDg2MzU4ZTU3NTg5ZTcxOTQyZDI3ZCUyMiU3RCU1RCU3RA=="},
      {name:"Oro",     qty:"250 consultas", price:"$475", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0E1NTElMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyQ29uc3VsdGElMjBDVVJQJTVDdE9ybyU1Q3QyNTAlMjIlMkMlMjJxJTIyJTNBMjUwJTJDJTIyaWQlMjIlM0ElMjI2OWQ4NjM4MGU1NzU4OWU3MTk0MmQyODIlMjIlN0QlNUQlN0Q="},
      {name:"Platino", qty:"500 consultas", price:"$900", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJibGFja2xpc3QlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJibGFja2xpc3QlMjIlMkMlMjJuJTIyJTNBJTIyQmxhY2slMjBMaXN0JTIyJTJDJTIycHIlMjIlM0ExMDQ0JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkNvbnN1bHRhJTIwQ1VSUCU1Q3RQbGF0aW5vJTVDdDUwMCUyMiUyQyUyMnElMjIlM0E1MDAlMkMlMjJpZCUyMiUzQSUyMjY5ZDg2M2ExZTU3NTg5ZTcxOTQyZDI4NyUyMiU3RCU1RCU3RA=="},
    ],
  },
  {
    id: "ocr-inteligente",
    shortName: "OCR Inteligente",
    name: "OCR Inteligente",
    icon: "🧠",
    color: "#fb923c",
    desc: "Extracción de datos de +500 tipos de documentos · IA",
    popular: "Plata",
    forWhom: "Empresas que necesitan extraer información estructurada de actas constitutivas, CSF, estados de cuenta, comprobantes de domicilio y más de 500 tipos de documentos entrenados con IA.",
    benefits: [
      "Actas constitutivas · 2 tokens por hoja",
      "Constancia de Situación Fiscal (CSF) · 10 tokens",
      "Estados de cuenta · 5 tokens",
      "Comprobantes de domicilio · 5 tokens",
      "+500 tipos de documentos entrenados con IA",
      "Modelo que se actualiza y mejora continuamente",
    ],
    idealFor: ["Bancos", "Aseguradoras", "Onboarding empresarial", "Compliance documental"],
    plans: [
      {name:"Cobre",   qty:"210 tokens",    price:"$99",    link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0ExMTQuODQlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyT0NSJTIwSW50ZWxpZ2VudGUlNUN0Q29icmUlNUN0MjEwJTIwdG9rZW5zJTIyJTJDJTIycSUyMiUzQTIxMCUyQyUyMmlkJTIyJTNBJTIyNjlkODY2NjllNTc1ODllNzE5NDJkMjk1JTIyJTdEJTVEJTdE"},
      {name:"Bronce",  qty:"2,100 tokens",  price:"$1,500", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0ExNzQwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMk9DUiUyMEludGVsaWdlbnRlJTVDdEJyb25jZSU1Q3QyJTJDMTAwJTIwdG9rZW5zJTIyJTJDJTIycSUyMiUzQTIxMDAlMkMlMjJpZCUyMiUzQSUyMjY5ZDg2NmFkZTU3NTg5ZTcxOTQyZDI5YiUyMiU3RCU1RCU3RA=="},
      {name:"Plata",   qty:"4,200 tokens",  price:"$2,800", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0EzMjQ4JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMk9DUiUyMEludGVsaWdlbnRlJTVDdFBsYXRhJTVDdDQlMkMyMDAlMjB0b2tlbnMlMjIlMkMlMjJxJTIyJTNBNDIwMCUyQyUyMmlkJTIyJTNBJTIyNjlkODY3MGZlNTc1ODllNzE5NDJkMmEyJTIyJTdEJTVEJTdE"},
      {name:"Oro",     qty:"10,500 tokens", price:"$6,625", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0E3Njg1JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMk9DUiUyMEludGVsaWdlbnRlJTVDdE9ybyU1Q3QxMCUyQzUwMCUyMHRva2VucyUyMiUyQyUyMnElMjIlM0ExMDUwMCUyQyUyMmlkJTIyJTNBJTIyNjlkODY3MmRlNTc1ODllNzE5NDJkMmE3JTIyJTdEJTVEJTdE"},
      {name:"Platino", qty:"21,000 tokens", price:"$12,500",link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0ExNDUwMCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJPQ1IlMjBJbnRlbGlnZW50ZSU1Q3RQbGF0aW5vJTVDdDIxJTJDMDAwJTIwdG9rZW5zJTIyJTJDJTIycSUyMiUzQTIxMDAwJTJDJTIyaWQlMjIlM0ElMjI2OWQ4Njg0NmU1NzU4OWU3MTk0MmQyYjIlMjIlN0QlNUQlN0Q="},
    ],
  },
  {
    id: "ocr-id",
    shortName: "OCR ID",
    name: "OCR para Identificación Oficial",
    icon: "📝",
    color: "#f472b6",
    desc: "Extracción de datos y fotografía · IDs oficiales",
    popular: "Plata",
    forWhom: "Empresas que necesitan extraer datos estructurados y fotografía de identificaciones oficiales como INE, pasaporte, licencia de manejo y más de 15 tipos de IDs mexicanos.",
    benefits: [
      "Extracción de datos de INE, pasaporte, licencia",
      "Fotografía del documento y del portador",
      "Detección de documentos falsificados o alterados",
      "Más de 15 tipos de IDs mexicanos soportados",
      "Disponible vía API o plataforma web",
      "Evidencia descargable con metadatos",
    ],
    idealFor: ["KYC simplificado", "Registro de clientes", "Marketplaces", "Validación básica de identidad"],
    plans: [
      {name:"Cobre",   qty:"210 tokens",    price:"$99",    link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0ExMTQuODQlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyT0NSJTIwcGFyYSUyMElkZW50aWZpY2FjaSVDMyVCM24lMjBPZmljaWFsJTVDdENvYnJlJTVDdDIxMCUyMHRva2VucyUyMiUyQyUyMnElMjIlM0EyMTAlMkMlMjJpZCUyMiUzQSUyMjY5ZDg2OTdkZTU3NTg5ZTcxOTQyZDJiYiUyMiU3RCU1RCU3RA=="},
      {name:"Bronce",  qty:"2,100 tokens",  price:"$1,500", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0ExNzQwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMk9DUiUyMHBhcmElMjBJZGVudGlmaWNhY2klQzMlQjNuJTIwT2ZpY2lhbCU1Q3RCcm9uY2UlNUN0MiUyQzEwMCUyMHRva2VucyUyMiUyQyUyMnElMjIlM0EyMTAwJTJDJTIyaWQlMjIlM0ElMjI2OWQ4Njk5OGU1NzU4OWU3MTk0MmQyYzElMjIlN0QlNUQlN0Q="},
      {name:"Plata",   qty:"4,200 tokens",  price:"$2,800", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0EzMjQ4JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMk9DUiUyMHBhcmElMjBJZGVudGlmaWNhY2klQzMlQjNuJTIwT2ZpY2lhbCU1Q3RQbGF0YSU1Q3Q0JTJDMjAwJTIwdG9rZW5zJTIyJTJDJTIycSUyMiUzQTQyMDAlMkMlMjJpZCUyMiUzQSUyMjY5ZDg2OWU3ZTU3NTg5ZTcxOTQyZDJjNyUyMiU3RCU1RCU3RA=="},
      {name:"Oro",     qty:"10,500 tokens", price:"$6,625", link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0E3Njg1JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMk9DUiUyMHBhcmElMjBJZGVudGlmaWNhY2klQzMlQjNuJTIwT2ZpY2lhbCU1Q3RPcm8lNUN0MTAlMkM1MDAlMjB0b2tlbnMlMjIlMkMlMjJxJTIyJTNBMTA1MDAlMkMlMjJpZCUyMiUzQSUyMjY5ZDg2YTI4ZTU3NTg5ZTcxOTQyZDJjYyUyMiU3RCU1RCU3RA=="},
      {name:"Platino", qty:"21,000 tokens", price:"$12,500",link:"https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJkb2N1bWVudCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMmRvY3VtZW50JTIyJTJDJTIybiUyMiUzQSUyMkRvY3VtZW50JTIyJTJDJTIycHIlMjIlM0ExNDUwMCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJPQ1IlMjBwYXJhJTIwSWRlbnRpZmljYWNpJUMzJUIzbiUyME9maWNpYWwlNUN0UGxhdGlubyU1Q3QyMSUyQzAwMCUyMHRva2VucyUyMiUyQyUyMnElMjIlM0EyMTAwMCUyQyUyMmlkJTIyJTNBJTIyNjlkODZhNTNlNTc1ODllNzE5NDJkMmQyJTIyJTdEJTVEJTdE"},
    ],
  },
];


const TIER_BADGE: Record<string, string> = {
  "Cobre":   "bg-orange-400/20 text-orange-300 border border-orange-400/30",
  "Bronce":  "bg-amber-400/20  text-amber-300  border border-amber-400/30",
  "Plata":   "bg-slate-400/20  text-slate-200  border border-slate-400/30",
  "Oro":     "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30",
  "Platino": "bg-violet-400/20 text-violet-200 border border-violet-400/30",
};


export default function AutoservicioPricingGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const product = PRODUCTS[activeIdx];

  return (
    <div
      className="rounded-3xl overflow-hidden relative"
      style={{ background: "linear-gradient(135deg, #0D1833 0%, #0E1133 50%, #15213d 100%)" }}
    >
      {/* Orbs de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        <div className="orb-drift-1 absolute rounded-full opacity-25" style={{ width: 420, height: 420, top: "-15%", right: "-8%", background: "radial-gradient(circle, #1ecad3 0%, transparent 70%)", filter: "blur(55px)" }} />
        <div className="orb-drift-2 absolute rounded-full opacity-20" style={{ width: 380, height: 380, bottom: "-20%", left: "-10%", background: "radial-gradient(circle, #655dc6 0%, transparent 70%)", filter: "blur(55px)" }} />
        <div className="orb-drift-3 absolute rounded-full opacity-12" style={{ width: 280, height: 280, top: "40%", left: "38%", background: "radial-gradient(circle, #2a60d4 0%, transparent 70%)", filter: "blur(45px)" }} />
      </div>
      <div
        className="relative p-6 md:p-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      >

        {/* ─── Selector de producto ─── */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-8" style={{ scrollbarWidth: "none" }}>
          {PRODUCTS.map((p, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveIdx(i)}
                className={[
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-base font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0",
                  isActive
                    ? "text-white shadow-lg"
                    : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/80",
                ].join(" ")}
                style={isActive ? {
                  background: `linear-gradient(135deg, ${p.color}cc 0%, ${p.color}99 100%)`,
                  boxShadow: `0 4px 20px ${p.color}40`,
                  border: `1px solid ${p.color}60`,
                } : {}}
              >
                <span className="text-base leading-none">{p.icon}</span>
                {p.shortName}
              </button>
            );
          })}
        </div>

        {/* ─── Encabezado del producto + info ─── */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Izquierda: nombre, para quién es */}
          <div
            className="rounded-2xl p-5 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `${product.color}20`, border: `1px solid ${product.color}40` }}
              >
                {product.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">{product.name}</h3>
                <p className="text-white/60 text-sm mt-0.5">{product.desc}</p>
              </div>
            </div>
            <p className="text-white/70 text-base leading-relaxed mb-3">{product.forWhom}</p>
            <div className="flex flex-wrap gap-1.5">
              {product.idealFor.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: `${product.color}18`, color: product.color, border: `1px solid ${product.color}30` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Derecha: beneficios */}
          <div
            className="rounded-2xl p-5 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}
          >
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">Incluye</p>
            <ul className="space-y-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: product.color }}>&#10003;</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Tarjetas de plan ─── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {product.plans.map((plan) => {
            const isPopular = plan.name === product.popular;
            return (
              <div
                key={plan.name}
                className={[
                  "relative flex flex-col rounded-2xl p-5 transition-all duration-200 backdrop-blur-sm",
                  isPopular
                    ? "scale-[1.06]"
                    : "hover:scale-[1.02] hover:border-white/25",
                ].join(" ")}
                style={isPopular ? {
                  background: `linear-gradient(145deg, ${product.color}22 0%, rgba(255,255,255,0.07) 100%)`,
                  border: `1.5px solid ${product.color}70`,
                  boxShadow: `0 0 50px ${product.color}35, 0 0 20px ${product.color}20, 0 12px 40px rgba(0,0,0,0.5)`,
                } : {
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {isPopular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap text-white"
                    style={{
                      background: `linear-gradient(90deg, ${product.color}, #00d4aa)`,
                      boxShadow: `0 4px 20px ${product.color}70, 0 0 0 1px ${product.color}40`,
                    }}
                  >
                    ⭐ Recomendado
                  </div>
                )}

                <div className="mb-4">
                  <span className={`inline-flex items-center text-xs font-bold tracking-wide uppercase px-2 py-0.5 rounded-md ${TIER_BADGE[plan.name]}`}>
                    {plan.name}
                  </span>
                </div>

                <div className="mb-0.5">
                  <span className="text-2xl md:text-3xl font-black text-white tracking-tight">{plan.price}</span>
                </div>
                <p className="text-xs text-white/50 font-medium mb-3">+ IVA</p>
                <p className="text-base text-white/70 mb-5 flex-1">{plan.qty}</p>

                {plan.link ? (
                  <Link
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-base font-bold py-2.5 rounded-xl transition-all duration-150 hover:opacity-90 active:scale-95"
                    style={isPopular ? {
                      background: `linear-gradient(90deg, ${product.color}, #00d4aa)`,
                      color: "#fff",
                      boxShadow: `0 6px 24px ${product.color}60, 0 2px 8px ${product.color}40`,
                    } : {
                      background: "rgba(255,255,255,0.09)",
                      color: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    Comprar &#8594;
                  </Link>
                ) : (
                  <button disabled className="w-full text-center text-base py-2.5 rounded-xl bg-white/5 text-white/20 cursor-not-allowed font-semibold">
                    Próximamente
                  </button>
                )}
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
}
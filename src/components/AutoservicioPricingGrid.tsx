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
  colorHover: string;
  desc: string;
  popular: string;
  plans: Plan[];
}

const PRODUCTS: Product[] = [
  {
    id: "kyc",
    shortName: "KYC",
    name: "KYC · Verificación de Identidad",
    icon: "👤",
    color: "#2DB6C1",
    colorHover: "#25969f",
    desc: "Liveness iBeta Level 1 · Sin NOM-151",
    popular: "Plata",
    plans: [
      { name: "Cobre",   qty: "5 verif",   price: "$99",     link: "https://platform.jaak.ai/#/onboarding/plans/cobre" },
      { name: "Bronce",  qty: "50 verif",  price: "$1,500",  link: "https://platform.jaak.ai/#/onboarding/plans/bronce" },
      { name: "Plata",   qty: "100 verif", price: "$2,800",  link: "https://platform.jaak.ai/#/onboarding/plans/plata" },
      { name: "Oro",     qty: "250 verif", price: "$6,625",  link: "https://platform.jaak.ai/#/onboarding/plans/oro" },
      { name: "Platino", qty: "500 verif", price: "$12,500", link: "https://platform.jaak.ai/#/onboarding/plans/platino1" },
    ],
  },
  {
    id: "firma-simple",
    shortName: "Firma Simple",
    name: "Firma Simple",
    icon: "✍️",
    color: "#6366f1",
    colorHover: "#4f52c7",
    desc: "Firma electrónica básica sin NOM-151",
    popular: "Plata",
    plans: [
      { name: "Cobre",   qty: "10 firmas",  price: "$49",    link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTU2Ljg0JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwU2ltcGxlJTIwQ29icmUlMjAxMCUyMiUyQyUyMnElMjIlM0ExMCU3RCU1RCU3RA%3D%3D" },
      { name: "Bronce",  qty: "50 firmas",  price: "$400",   link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTQ2NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyMFNpbXBsZSUyMEJyb25jZSUyMDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNGZhYTNhODg3MzU1MzNmMmJhMTYlMjIlN0QlNUQlN0Q=" },
      { name: "Plata",   qty: "100 firmas", price: "$700",   link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTgxMiUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyMFNpbXBsZSUyMFBsYXRhJTIwMTAwJTIyJTJDJTIycSUyMiUzQTEwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDU0NDgzYTg4NzM1NTMzZjJiYTQ1JTIyJTdEJTVEJTdE" },
      { name: "Oro",     qty: "250 firmas", price: "$1,500", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTE3NDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjBPcm8lMjAyNTAlMjIlMkMlMjJxJTIyJTNBMjUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNTUwOTNhODg3MzU1MzNmMmJhNGElMjIlN0QlNUQlN0Q=" },
      { name: "Platino", qty: "500 firmas", price: "$2,500", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9zaW1wbGUlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9zaW1wbGUlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjIlMkMlMjJwciUyMiUzQTI5MDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBTaW1wbGUlMjBQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDU1OGEzYTg4NzM1NTMzZjJiYTRmJTIyJTdEJTVEJTdE" },
    ],
  },
  {
    id: "firma-nom151",
    shortName: "Firma NOM-151",
    name: "Firma Digital con Validez NOM-151",
    icon: "📜",
    color: "#0ea5e9",
    colorHover: "#0284c7",
    desc: "Firma electrónica avanzada con validez legal NOM-151",
    popular: "Plata",
    plans: [
      { name: "Cobre",   qty: "5 firmas",   price: "$99",    link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTExNC44NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMENvYnJlJTIwNSUyMiUyQyUyMnElMjIlM0E1JTJDJTIyaWQlMjIlM0ElMjI2OWNkNTYyMjNhODg3MzU1MzNmMmJhNTUlMjIlN0QlNUQlN0Q=" },
      { name: "Bronce",  qty: "50 firmas",  price: "$750",   link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTg3MCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMEJyb25jZSUyMDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNTY4MTNhODg3MzU1MzNmMmJhNWIlMjIlN0QlNUQlN0Q=" },
      { name: "Plata",   qty: "100 firmas", price: "$1,400", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTE2MjQlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjBQbGF0YSUyMDEwMCUyMiUyQyUyMnElMjIlM0ExMDAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q1NmViM2E4ODczNTUzM2YyYmE2NCUyMiU3RCU1RCU3RA==" },
      { name: "Oro",     qty: "250 firmas", price: "$3,250", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTM3NzAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjBPcm8lMjAyNTAlMjIlMkMlMjJxJTIyJTNBMjUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNWI4ODNhODg3MzU1MzNmMmJhNmYlMjIlN0QlNUQlN0Q=" },
      { name: "Platino", qty: "500 firmas", price: "$6,000", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZCUyMiU1RCUyQyUyMnByb2R1Y3RzJTIyJTNBJTVCJTdCJTIyayUyMiUzQSUyMnNpZ25hX2FkdmFuY2VkJTIyJTJDJTIybiUyMiUzQSUyMkZpcm1hJTIwQXZhbnphZGElMjAoTk9NLTE1MSklMjIlMkMlMjJwciUyMiUzQTY5NjAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjBQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDViZDIzYTg4NzM1NTMzZjJiYTc0JTIyJTdEJTVEJTdE" },
    ],
  },
  {
    id: "firma-nom151-bio",
    shortName: "NOM-151 + BIO",
    name: "Firma Digital con Validez NOM-151 con Tecnología Biométrica",
    icon: "✍️",
    color: "#8b5cf6",
    colorHover: "#7c3aed",
    desc: "Firma NOM-151 con validación biométrica del firmante",
    popular: "Plata",
    plans: [
      { name: "Cobre",   qty: "5 sesiones",   price: "$130",    link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMTUwLjglMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBCSU8lMjBDb2JyZSUyMDUlMjIlMkMlMjJxJTIyJTNBNSUyQyUyMmlkJTIyJTNBJTIyNjljZDVjYTYzYTg4NzM1NTMzZjJiYTc5JTIyJTdEJTVEJTdE" },
      { name: "Bronce",  qty: "50 sesiones",  price: "$1,500",  link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMTc0MCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyMEJyb25jZSUyMDUwJTIyJTJDJTIycSUyMiUzQTUwJTJDJTIyaWQlMjIlM0ElMjI2OWNkNWNmZDNhODg3MzU1MzNmMmJhN2UlMjIlN0QlNUQlN0Q=" },
      { name: "Plata",   qty: "100 sesiones", price: "$2,700",  link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMzEzMiUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyMFBsYXRhJTIwMTAwJTIyJTJDJTIycSUyMiUzQTEwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDVkNDMzYTg4NzM1NTMzZjJiYTgzJTIyJTdEJTVEJTdE" },
      { name: "Oro",     qty: "250 sesiones", price: "$6,625",  link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBNzY4NSUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEJJTyUyME9ybyUyMDI1MCUyMiUyQyUyMnElMjIlM0EyNTAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q1ZGE4M2E4ODczNTUzM2YyYmE5OSUyMiU3RCU1RCU3RA==" },
      { name: "Platino", qty: "500 sesiones", price: "$12,500", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9hZHZhbmNlZF9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBBdmFuemFkYSUyMCUyQiUyMEJpb21ldHJpYSUyMiUyQyUyMnByJTIyJTNBMTQ1MDAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBCSU8lMjBQbGF0aW5vJTIwNTAwJTIyJTJDJTIycSUyMiUzQTUwMCUyQyUyMmlkJTIyJTNBJTIyNjljZDVkZmYzYTg4NzM1NTMzZjJiYWE3JTIyJTdEJTVEJTdE" },
    ],
  },
  {
    id: "firma-nom151-kyc",
    shortName: "NOM-151 + KYC",
    name: "Firma Digital con Validez NOM-151 + KYC",
    icon: "🔐",
    color: "#f59e0b",
    colorHover: "#d97706",
    desc: "Firma NOM-151 con verificación biométrica de identidad completa",
    popular: "Plata",
    plans: [
      { name: "Cobre",   qty: "5 sesiones",   price: "$149",    link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTE3Mi44NCUyQyUyMmMlMjIlM0ElMjJNWE4lMjIlMkMlMjJzJTIyJTNBMCUyQyUyMmQlMjIlM0ElMjJGaXJtYSUyME5PTTE1MSUyMCUyQiUyMEtZQyUyMENvYnJlJTIwNSUyMiUyQyUyMnElMjIlM0E1JTJDJTIyaWQlMjIlM0ElMjI2OWNkNWY5ODNhODg3MzU1MzNmMmJhYjElMjIlN0QlNUQlN0Q=" },
      { name: "Bronce",  qty: "50 sesiones",  price: "$2,250",  link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTI2MTAlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBLWUMlMjBCcm9uY2UlMjA1MCUyMiUyQyUyMnElMjIlM0E1MCUyQyUyMmlkJTIyJTNBJTIyNjljZDVmZDgzYTg4NzM1NTMzZjJiYWI2JTIyJTdEJTVEJTdE" },
      { name: "Plata",   qty: "100 sesiones", price: "$4,200",  link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTQ4NzIlMkMlMjJjJTIyJTNBJTIyTVhOJTIyJTJDJTIycyUyMiUzQTAlMkMlMjJkJTIyJTNBJTIyRmlybWElMjBOT00xNTElMjAlMkIlMjBLWUMlMjBQbGF0YSUyMDEwMCUyMiUyQyUyMnElMjIlM0ExMDAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q2MDM0M2E4ODczNTUzM2YyYmFiYiUyMiU3RCU1RCU3RA==" },
      { name: "Oro",     qty: "250 sesiones", price: "$9,875",  link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTExNDU1JTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwS1lDJTIwT3JvJTIwMjUwJTIyJTJDJTIycSUyMiUzQTI1MCUyQyUyMmlkJTIyJTNBJTIyNjljZDYwYTYzYTg4NzM1NTMzZjJiYWMwJTIyJTdEJTVEJTdE" },
      { name: "Platino", qty: "500 sesiones", price: "$18,500", link: "https://platform.jaak.ai/#/register/user-info?d=JTdCJTIycGslMjIlM0ElNUIlMjJzaWduYV9iaW9tZXRyaWMlMjIlNUQlMkMlMjJwcm9kdWN0cyUyMiUzQSU1QiU3QiUyMmslMjIlM0ElMjJzaWduYV9iaW9tZXRyaWMlMjIlMkMlMjJuJTIyJTNBJTIyRmlybWElMjBjb24lMjBCaW9tZXRyaWElMjIlMkMlMjJwciUyMiUzQTIxNDYwJTJDJTIyYyUyMiUzQSUyMk1YTiUyMiUyQyUyMnMlMjIlM0EwJTJDJTIyZCUyMiUzQSUyMkZpcm1hJTIwTk9NMTUxJTIwJTJCJTIwS1lDJTIwUGxhdGlubyUyMDUwMCUyMiUyQyUyMnElMjIlM0E1MDAlMkMlMjJpZCUyMiUzQSUyMjY5Y2Q2MGZmM2E4ODczNTUzM2YyYmFjNSUyMiU3RCU1RCU3RA==" },
    ],
  },
];

const OTROS = [
  {
    id: "ine",
    name: "Consulta INE",
    icon: "📛",
    color: "#10b981",
    desc: "Validación de credencial INE/IFE ante el padrón electoral.",
    plans: [
      { name: "Cobre",   qty: "10 consultas",  price: "$14"  },
      { name: "Bronce",  qty: "50 consultas",  price: "$105" },
      { name: "Plata",   qty: "100 consultas", price: "$200" },
      { name: "Oro",     qty: "250 consultas", price: "$475" },
      { name: "Platino", qty: "500 consultas", price: "$900" },
    ],
  },
  {
    id: "curp",
    name: "Consulta CURP",
    icon: "📋",
    color: "#06b6d4",
    desc: "Validación de CURP ante RENAPO con datos biográficos.",
    plans: [
      { name: "Cobre",   qty: "10 consultas",  price: "$14"  },
      { name: "Bronce",  qty: "50 consultas",  price: "$105" },
      { name: "Plata",   qty: "100 consultas", price: "$200" },
      { name: "Oro",     qty: "250 consultas", price: "$475" },
      { name: "Platino", qty: "500 consultas", price: "$900" },
    ],
  },
  {
    id: "ocr-foto",
    name: "OCR Fotográfico y Documental",
    icon: "📄",
    color: "#f97316",
    desc: "Extracción de datos de documentos con IA. Vendido por tokens.",
    plans: [
      { name: "Cobre",   qty: "210 tokens",    price: "$99"    },
      { name: "Bronce",  qty: "2,100 tokens",  price: "$1,500" },
      { name: "Plata",   qty: "4,200 tokens",  price: "$2,800" },
      { name: "Oro",     qty: "10,500 tokens", price: "$6,625" },
      { name: "Platino", qty: "21,000 tokens", price: "$12,500"},
    ],
  },
  {
    id: "ocr-id",
    name: "OCR para Identificación Oficial",
    icon: "📝",
    color: "#ec4899",
    desc: "Extracción de fotografía y datos de identificaciones oficiales.",
    plans: [
      { name: "Cobre",   qty: "210 tokens",    price: "$99"    },
      { name: "Bronce",  qty: "2,100 tokens",  price: "$1,500" },
      { name: "Plata",   qty: "4,200 tokens",  price: "$2,800" },
      { name: "Oro",     qty: "10,500 tokens", price: "$6,625" },
      { name: "Platino", qty: "21,000 tokens", price: "$12,500"},
    ],
  },
];

const TIER_STYLES: Record<string, { badge: string; dot: string }> = {
  "Cobre":   { badge: "bg-orange-100 text-orange-700 border border-orange-200", dot: "bg-orange-400" },
  "Bronce":  { badge: "bg-amber-100 text-amber-800 border border-amber-200",   dot: "bg-amber-500" },
  "Plata":   { badge: "bg-slate-100 text-slate-600 border border-slate-200",   dot: "bg-slate-400" },
  "Oro":     { badge: "bg-yellow-100 text-yellow-700 border border-yellow-200",dot: "bg-yellow-400" },
  "Platino": { badge: "bg-slate-800 text-white border border-slate-600",        dot: "bg-slate-300" },
};

export default function AutoservicioPricingGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const product = PRODUCTS[activeIdx];

  return (
    <div>
      {/* ── Selector de producto ── */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
        {PRODUCTS.map((p, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={p.id}
              onClick={() => setActiveIdx(i)}
              className={[
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 border",
                isActive
                  ? "text-white shadow-md scale-[1.03]"
                  : "bg-white text-[#212A45] border-[#EEEEEE] hover:border-gray-300 hover:shadow-sm",
              ].join(" ")}
              style={isActive ? { backgroundColor: p.color, borderColor: p.color } : {}}
            >
              <span className="text-base">{p.icon}</span>
              {p.shortName}
            </button>
          );
        })}
      </div>

      {/* ── Encabezado del producto activo ── */}
      <div className="flex items-start gap-4 mb-8">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
          style={{ backgroundColor: product.color + "20" }}
        >
          {product.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#212A45]">{product.name}</h3>
          <p className="text-gray-500 text-sm mt-0.5">{product.desc}</p>
          <div className="flex items-center gap-2 mt-2">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: product.color }}
            >
              Compra por paquete · Paga solo lo que usas
            </span>
          </div>
        </div>
      </div>

      {/* ── Tarjetas de planes ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {product.plans.map((plan) => {
          const isPopular = plan.name === product.popular;
          const tier = TIER_STYLES[plan.name];

          return (
            <div
              key={plan.name}
              className={[
                "relative flex flex-col rounded-2xl p-5 transition-all duration-200",
                isPopular
                  ? "shadow-xl scale-[1.04] bg-white"
                  : "bg-white border border-[#EEEEEE] hover:shadow-md hover:-translate-y-0.5",
              ].join(" ")}
              style={isPopular ? { boxShadow: `0 8px 30px ${product.color}30, 0 0 0 2px ${product.color}` } : {}}
            >
              {isPopular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow whitespace-nowrap"
                  style={{ backgroundColor: product.color }}
                >
                  Más popular
                </div>
              )}

              {/* Tier badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg ${tier.badge}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${tier.dot}`} />
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="mb-1">
                <span className="text-3xl font-extrabold text-[#212A45] tracking-tight">{plan.price}</span>
              </div>
              <p className="text-[11px] text-gray-400 mb-3">+ IVA</p>

              {/* Quantity */}
              <p className="text-sm font-medium text-gray-600 mb-5 flex-1">{plan.qty}</p>

              {/* CTA */}
              {plan.link ? (
                <Link
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-sm font-bold py-2.5 rounded-xl text-white transition-all duration-150 hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: product.color }}
                >
                  Comprar →
                </Link>
              ) : (
                <button
                  disabled
                  className="block w-full text-center text-sm font-bold py-2.5 rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed"
                >
                  Próximamente
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Otros productos ── */}
      <div className="border-t border-[#EEEEEE] pt-10">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-lg font-bold text-[#212A45]">Otros productos disponibles</h3>
          <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-medium">
            Próximamente
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OTROS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-[#EEEEEE] overflow-hidden opacity-70 hover:opacity-90 transition-opacity"
            >
              <div className="h-1 w-full" style={{ backgroundColor: prod.color }} />
              <div className="p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xl">{prod.icon}</span>
                  <span className="font-bold text-[#212A45] text-sm">{prod.name}</span>
                </div>
                <p className="text-gray-400 text-xs mb-4">{prod.desc}</p>
                <div className="space-y-1.5">
                  {prod.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className="flex items-center justify-between text-xs text-gray-500 px-2 py-1.5 rounded-lg bg-[#FAFAFA]"
                    >
                      <span className="font-semibold text-[#212A45]">{plan.name}</span>
                      <span className="text-gray-400">{plan.qty}</span>
                      <span className="font-bold text-[#212A45]">{plan.price}</span>
                    </div>
                  ))}
                </div>
                <button
                  disabled
                  className="mt-4 w-full text-xs py-2 rounded-xl bg-gray-100 text-gray-400 font-semibold cursor-not-allowed"
                >
                  Próximamente
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

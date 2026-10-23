import type { Metadata } from "next";
import { createInstitutionalArticleSeo } from "@/lib/blog/institutionalArticleSeo";

export const article = {
  "title": "Cómo elegir un proveedor de firma electrónica en México: 7 criterios para comparar",
  "seoTitle": "Cómo elegir proveedor de firma electrónica en México | JAAK",
  "description": "Compara proveedores de firma electrónica en México con 7 criterios: identidad, evidencia, NOM-151, experiencia, API, soporte y costo total.",
  "slug": "como-elegir-proveedor-firma-electronica-mexico",
  "category": "Firma Electrónica",
  "readTime": "9 min",
  "authorName": "JAAK",
  "reviewerName": "JAAK",
  "date": "23 de octubre, 2026",
  "dateISO": "2026-10-23",
  "image": "/images/blog/como-elegir-proveedor-firma-electronica-mexico.png",
  "imageAlt": "Cómo elegir un proveedor de firma electrónica en México: 7 criterios para comparar — JAAK",
  "imageDimensions": {
    "width": 2400,
    "height": 1260
  }
};
const seo = createInstitutionalArticleSeo(article, ["proveedor de firma electrónica en México", "comparar proveedores de firma electrónica", "NOM-151", "e.firma del SAT", "firma electrónica API", "autoservicio de firma electrónica"]);

export const articleMetadata: Metadata = {
  ...seo.metadata,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};
export const articleSchema = seo.schema;

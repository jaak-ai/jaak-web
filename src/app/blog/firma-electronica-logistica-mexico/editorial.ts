import { logisticsArticle as article } from "@/lib/blog/logisticsArticle";
import { createInstitutionalArticleSeo } from "@/lib/blog/institutionalArticleSeo";

export { logisticsArticle as article } from "@/lib/blog/logisticsArticle";
export const { metadata: articleMetadata, schema: articleSchema } = createInstitutionalArticleSeo(article, ["firma electrónica en logística", "firma electrónica en transporte", "documentos de transporte", "acuse de entrega electrónico", "contratos de transporte", "validación de operadores", "NOM-151", "Carta Porte", "verificación de identidad", "QR del INE"]);

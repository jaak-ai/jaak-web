import { cnbvFacialArticle as article } from "@/lib/blog/cnbvFacialArticle";
import { createInstitutionalArticleSeo } from "@/lib/blog/institutionalArticleSeo";

export { article };
export const { metadata: articleMetadata, schema: articleSchema } = createInstitutionalArticleSeo(article, ["biometría facial", "CNBV 2026", "Anexo 71", "Circular Única de Bancos", "prueba de vida", "OCR", "KYC"]);

import { providerSelectionArticle as article } from "@/lib/blog/providerSelectionArticle";
import { createInstitutionalArticleSeo } from "@/lib/blog/institutionalArticleSeo";

export { providerSelectionArticle as article } from "@/lib/blog/providerSelectionArticle";
export const { metadata: articleMetadata, schema: articleSchema } = createInstitutionalArticleSeo(article, ["proveedor de firma electrónica en México", "comparar proveedores de firma electrónica", "NOM-151", "e.firma del SAT", "firma electrónica API", "autoservicio de firma electrónica"]);

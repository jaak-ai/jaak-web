type DraftEnvironment = Readonly<{
  NODE_ENV?: string;
  VERCEL_ENV?: string;
  JAAK_BLOG_DRAFT_PREVIEW?: string;
}>;

export function isBlogDraftPreview(env: DraftEnvironment): boolean {
  if (env.VERCEL_ENV) return env.VERCEL_ENV === "preview";
  return env.NODE_ENV === "development" || env.JAAK_BLOG_DRAFT_PREVIEW === "true";
}

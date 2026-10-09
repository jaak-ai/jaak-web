interface PreviewEnvironment {
  NODE_ENV?: string;
  VERCEL_ENV?: string;
  JAAK_BLOG_DRAFT_PREVIEW?: string;
}

// Vercel production is always blocked, including with the local override.
export function isDraftPreview(env: PreviewEnvironment): boolean {
  if (env.VERCEL_ENV === "production") return false;
  if (env.VERCEL_ENV === "preview") return true;
  if (env.NODE_ENV === "development") return true;
  return !env.VERCEL_ENV && env.JAAK_BLOG_DRAFT_PREVIEW === "true";
}

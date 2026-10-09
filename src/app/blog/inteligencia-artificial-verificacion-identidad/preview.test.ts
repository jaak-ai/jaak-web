import { describe, expect, it } from "vitest";
import { isDraftPreview } from "./preview";

describe("identity AI article draft visibility", () => {
  it.each([
    [{ NODE_ENV: "development" }, true],
    [{ NODE_ENV: "production", VERCEL_ENV: "preview" }, true],
    [{ NODE_ENV: "production", JAAK_BLOG_DRAFT_PREVIEW: "true" }, true],
    [{ NODE_ENV: "production" }, false],
    [{}, false],
    [{ NODE_ENV: "production", VERCEL_ENV: "production" }, false],
    [{ NODE_ENV: "production", VERCEL_ENV: "production", JAAK_BLOG_DRAFT_PREVIEW: "true" }, false],
    [{ NODE_ENV: "development", VERCEL_ENV: "production" }, false],
    [{ NODE_ENV: "production", VERCEL_ENV: "unknown", JAAK_BLOG_DRAFT_PREVIEW: "true" }, false],
  ])("handles runtime %j without exposing an unapproved article", (env, expected) => {
    expect(isDraftPreview(env)).toBe(expected);
  });
});

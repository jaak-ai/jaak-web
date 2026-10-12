import { describe, expect, it } from "vitest";
import { isBlogDraftPreview } from "./draftPreview";

describe("draft blog visibility", () => {
  it.each([
    [{ NODE_ENV: "development" }, true],
    [{ NODE_ENV: "production" }, false],
    [{ VERCEL_ENV: "preview", NODE_ENV: "production" }, true],
    [{ VERCEL_ENV: "production", NODE_ENV: "development" }, false],
    [{ VERCEL_ENV: "production", JAAK_BLOG_DRAFT_PREVIEW: "true" }, false],
    [{ VERCEL_ENV: "development", JAAK_BLOG_DRAFT_PREVIEW: "true" }, false],
    [{ NODE_ENV: "production", JAAK_BLOG_DRAFT_PREVIEW: "true" }, true],
    [{ JAAK_BLOG_DRAFT_PREVIEW: "false" }, false],
    [{}, false],
  ])("allows only explicitly supported preview environments: %j", (environment, visible) => {
    expect(isBlogDraftPreview(environment)).toBe(visible);
  });
});

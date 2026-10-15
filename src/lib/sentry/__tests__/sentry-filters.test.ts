import { describe, expect, it } from "vitest";
import { isExpectedRejection, SENTRY_DENIED_URLS } from "../sentry-filters";

describe("isExpectedRejection", () => {
    it.each(["AbortError", "NotAllowedError"])("ignores user-cancelled %s", (name) => {
        expect(isExpectedRejection(Object.assign(new Error("cancelled"), { name }))).toBe(true);
    });

    it("keeps real failures", () => {
        expect(isExpectedRejection(new TypeError("boom"))).toBe(false);
    });

    it("ignores non-error values", () => {
        expect(isExpectedRejection("plain string")).toBe(false);
    });
});

describe("SENTRY_DENIED_URLS", () => {
    it("matches browser extension frames", () => {
        expect(SENTRY_DENIED_URLS.some((pattern) => pattern.test("chrome-extension://abc/x.js"))).toBe(true);
    });
});

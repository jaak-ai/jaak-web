import { describe, expect, it } from "vitest";
import { resolveSentryConfig } from "../sentry-environment";
import { CONFIGURED_INPUT, FAKE_DSN } from "./sentry-fixtures";

describe("resolveSentryConfig", () => {
    it("resolves a configured input", () => {
        expect(resolveSentryConfig(CONFIGURED_INPUT)).toEqual({
            dsn: FAKE_DSN,
            environment: "development",
            release: "jaak-web@abc123",
        });
    });

    it.each(["", "not-a-dsn", "https://host-without-key/1"])("disables Sentry for DSN %j", (dsn) => {
        expect(resolveSentryConfig({ ...CONFIGURED_INPUT, dsn })).toBeNull();
    });

    it.each(["staging", "", "qa"])("disables Sentry for environment %j", (environment) => {
        expect(resolveSentryConfig({ ...CONFIGURED_INPUT, environment })).toBeNull();
    });

    it("accepts preview and production environments", () => {
        expect(resolveSentryConfig({ ...CONFIGURED_INPUT, environment: "preview" })?.environment).toBe("preview");
        expect(resolveSentryConfig({ ...CONFIGURED_INPUT, environment: "production" })?.environment).toBe("production");
    });

    it("omits an empty or unreplaced release", () => {
        expect(resolveSentryConfig({ ...CONFIGURED_INPUT, release: "" })?.release).toBeUndefined();
        expect(resolveSentryConfig({ ...CONFIGURED_INPUT, release: "__SHA__" })?.release).toBeUndefined();
    });
});

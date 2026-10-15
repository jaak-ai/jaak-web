import { describe, expect, it } from "vitest";
import { buildSentryOptions, prepareEvent } from "../sentry-options";
import { CONFIGURED_INPUT, FAKE_DSN, piiEvent } from "./sentry-fixtures";
import { resolveSentryConfig } from "../sentry-environment";

const config = resolveSentryConfig(CONFIGURED_INPUT);
const options = buildSentryOptions(config!);

function abortError(): Error {
    return Object.assign(new Error("cancelled"), { name: "AbortError" });
}

describe("buildSentryOptions", () => {
    it("sends errors only, with no tracing", () => {
        expect(options).toMatchObject({ dsn: FAKE_DSN, environment: "development" });
        expect(options.tracesSampleRate).toBeUndefined();
    });

    it("runs the scrubber in beforeSend", () => {
        const sent = options.beforeSend?.(piiEvent(), { originalException: new Error("boom") });
        expect(JSON.stringify(sent)).not.toContain("juan@example.com");
    });
});

describe("prepareEvent", () => {
    it("drops user-cancelled rejections", () => {
        expect(prepareEvent(piiEvent(), { originalException: abortError() })).toBeNull();
    });

    it("drops the event when scrubbing throws instead of sending it raw", () => {
        const broken = piiEvent();
        Object.defineProperty(broken, "breadcrumbs", {
            get() {
                throw new Error("scrubber failure");
            },
        });
        expect(prepareEvent(broken, { originalException: new Error("boom") })).toBeNull();
    });
});

import { describe, expect, it } from "vitest";
import { scrubBreadcrumb, scrubEvent } from "../sentry-event-scrubber";
import { piiEvent } from "./sentry-fixtures";

const RAW_PII = [
    "Juan Pérez",
    "GARC800101HDFLRN05",
    "GARC800101AB1",
    "juan@example.com",
    "1234 5678",
    "ABC123456",
    "iVBORw0KGgo",
    "query-token",
    "header-token",
    "cookie-session",
    "198.51.100.23",
];

describe("scrubEvent", () => {
    it("leaves no raw PII anywhere in the serialized event", () => {
        const serialized = JSON.stringify(scrubEvent(piiEvent()));
        for (const secret of RAW_PII) {
            expect(serialized).not.toContain(secret);
        }
    });

    it("keeps only method and query-free url on the request", () => {
        const { request } = scrubEvent(piiEvent());
        expect(request).toEqual({ method: "POST", url: "https://app.example.invalid/api/sign" });
    });

    it("drops the user context", () => {
        expect(scrubEvent(piiEvent()).user).toBeUndefined();
    });

    it("drops frame variables and strips frame urls", () => {
        const [frame] = scrubEvent(piiEvent()).exception?.values?.[0].stacktrace?.frames ?? [];
        expect(frame.vars).toBeUndefined();
        expect(frame.filename).toBe("https://app.example.invalid/_next/app.js");
    });
});

describe("scrubBreadcrumb", () => {
    it("removes request bodies, headers and cookies from breadcrumb data", () => {
        const crumb = scrubBreadcrumb(piiEvent().breadcrumbs?.[0] ?? {});
        expect(crumb.data).toEqual({ url: "https://app.example.invalid/api/sign" });
    });

    it("redacts text in the breadcrumb message", () => {
        const crumb = scrubBreadcrumb({ message: "GET https://app.invalid/x?token=1 juan@example.com" });
        expect(crumb.message).toBe("GET https://app.invalid/x [email]");
    });
});

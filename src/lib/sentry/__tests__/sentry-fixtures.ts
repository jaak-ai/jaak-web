import type { ErrorEvent } from "@sentry/nextjs";
import type { SentryInput } from "../sentry-environment";

/** Fake DSN for specs only; a real DSN never lives in the repo. */
export const FAKE_DSN = "https://fake-public-key@example-host.invalid/1";

export const CONFIGURED_INPUT: SentryInput = {
    dsn: FAKE_DSN,
    environment: "development",
    release: "abc123",
};

/** Event carrying every PII class the scrubber must remove, in message, request, extra, frames and breadcrumbs. */
export function piiEvent(): ErrorEvent {
    const event: ErrorEvent = {
        type: undefined,
        message: "Fallo al firmar, CURP GARC800101HDFLRN05, RFC GARC800101AB1, juan@example.com, +52 55 1234 5678",
        request: {
            method: "POST",
            url: "https://app.example.invalid/api/sign?token=query-token&folio=42",
            data: '{"nombre":"Juan"}',
            headers: { Authorization: "Bearer header-token", Cookie: "session=abc" },
            cookies: { session: "cookie-session" },
        },
        user: { email: "juan@example.com", ip_address: "198.51.100.23" },
        extra: {
            nombre: "Juan Pérez",
            documento: "ABC123456",
            selfie: "data:image/png;base64,iVBORw0KGgo=",
        },
        exception: {
            values: [
                {
                    type: "Error",
                    value: "Fallo con RFC GARC800101AB1",
                    stacktrace: {
                        frames: [{ filename: "https://app.example.invalid/_next/app.js?v=1", vars: { draft: "borrador local" } }],
                    },
                },
            ],
        },
        breadcrumbs: [
            {
                message: "POST https://app.example.invalid/api/sign?token=query-token",
                data: {
                    url: "https://app.example.invalid/api/sign?token=query-token",
                    request_body: { curp: "GARC800101HDFLRN05" },
                    headers: { Authorization: "Bearer header-token" },
                    cookies: { session: "cookie-session" },
                },
            },
        ],
    };
    return event;
}

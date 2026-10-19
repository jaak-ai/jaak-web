# Sentry (error reporting)

Errors only. Tracing, Session Replay, profiling and logs stay off. Source: `src/lib/sentry/`, wired by
`src/instrumentation-client.ts` (browser) and `src/instrumentation.ts` (server and edge, plus `onRequestError`).

## Runtime contract

| Variable | Read by | Value |
|----------|---------|-------|
| `NEXT_PUBLIC_SENTRY_DSN` | browser | `https://<key>@<host>/<project>` |
| `SENTRY_DSN` | server and edge | `https://<key>@<host>/<project>` |

Set both in Vercel for **Preview** and **Development** only. An empty DSN keeps Sentry off. Production is not
enabled until the team decides so.

Derived by Vercel, not configured by hand:

| Vercel system variable | Sentry value |
|------------------------|--------------|
| `NEXT_PUBLIC_VERCEL_ENV` (browser), `VERCEL_ENV` (server) | `environment`: `development`, `preview` or `production`; anything else disables Sentry |
| `NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA` (browser), `VERCEL_GIT_COMMIT_SHA` (server) | `release`: `jaak-web@<sha>` |

## What is sent

- Uncaught browser errors and unhandled rejections (Sentry global handlers).
- No error boundary exists in this app, so render errors reach the Sentry global handlers.
- Server render and route errors via `captureRequestError`.
- Not sent: user-cancelled flows (`AbortError`, `NotAllowedError`), browser-extension frames, ResizeObserver noise.
- No user context and no `sendDefaultPii` (removed from SDK 11, so PII is never requested). `sampleRate` 1, `maxBreadcrumbs` 50.

## Scrubbing (before send)

`beforeSend` and `beforeBreadcrumb` run `sentry-event-scrubber.ts` and `sentry-redaction.ts`:

- Removed: request body, headers, cookies, user, frame variables, query strings and fragments everywhere.
- Keys dropped whatever they contain: token, password, secret, authorization, cookie, session, API key, CURP, RFC, email, phone, document, passport, image, selfie, biometric, names.
- Text: JWT, bearer tokens, base64 blobs of 120+ chars, email, CURP, RFC, phone.
- Nesting deeper than 10 levels is replaced, never sent raw. If scrubbing throws, the event is dropped.

Known gap: a name written in free text (not under a name key) is not detected. Do not log names or CURPs into messages.
is not path-scrubbed. Do not log names or slugs into messages.

## Source maps

Not uploaded. Uploading needs `SENTRY_AUTH_TOKEN`, `SENTRY_ORG` and `SENTRY_PROJECT` (new secrets), so the step is
not wired. To enable later: add those three as secrets in CI and wrap `next.config.js` with `withSentryConfig`.

## Local runs

Without the variables, Sentry does nothing. Tests: `npx vitest run src/lib/sentry`.

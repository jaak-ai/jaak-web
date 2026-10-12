export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs" || process.env.NEXT_RUNTIME === "edge") {
        const { initSentry } = await import("@/lib/sentry/sentry-bootstrap");
        const { serverSentryInput } = await import("@/lib/sentry/sentry-input");
        initSentry(serverSentryInput());
    }
}

export { captureRequestError as onRequestError } from "@sentry/nextjs";

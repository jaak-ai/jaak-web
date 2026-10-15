/** Browser and runtime noise a user cannot act on. */
export const SENTRY_IGNORED_ERRORS: readonly string[] = [
    "ResizeObserver loop limit exceeded",
    "ResizeObserver loop completed with undelivered notifications",
    "Script error.",
    "Non-Error promise rejection captured",
];

/** Frames that originate in browser extensions rather than in this app. */
export const SENTRY_DENIED_URLS: readonly RegExp[] = [
    /^chrome-extension:\/\//,
    /^moz-extension:\/\//,
    /^safari-(web-)?extension:\/\//,
];

/** DOM exceptions raised when the user cancels or declines a flow. */
const USER_CANCELLED_ERRORS = new Set(["AbortError", "NotAllowedError"]);

/** User-cancelled flows are not reported. */
export function isExpectedRejection(error: unknown): boolean {
    return error instanceof Error && USER_CANCELLED_ERRORS.has(error.name);
}

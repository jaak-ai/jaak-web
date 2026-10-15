import { getClient, init as initSentryClient } from "@sentry/nextjs";
import type { BrowserOptions } from "@sentry/nextjs";
import { resolveSentryConfig, SentryInput } from "./sentry-environment";
import { buildSentryOptions } from "./sentry-options";

type SentryInit = (options: BrowserOptions) => unknown;

/** Initializes Sentry once, only when configured. A failure is logged and never blocks the app. */
export function initSentry(input: SentryInput, init: SentryInit = initSentryClient): boolean {
    const config = resolveSentryConfig(input);
    if (!config || getClient()) {
        return false;
    }
    try {
        init(buildSentryOptions(config));
        return true;
    } catch (error) {
        console.warn("[Sentry] initialization failed, continuing without error reporting", error);
        return false;
    }
}

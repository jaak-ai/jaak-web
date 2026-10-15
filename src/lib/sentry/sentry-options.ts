import type { BrowserOptions, Breadcrumb, ErrorEvent, EventHint } from "@sentry/nextjs";
import type { SentryConfig } from "./sentry-environment";
import { scrubBreadcrumb, scrubEvent } from "./sentry-event-scrubber";
import { isExpectedRejection, SENTRY_DENIED_URLS, SENTRY_IGNORED_ERRORS } from "./sentry-filters";

const MAX_BREADCRUMBS = 50;

/** Errors only: no tracing, profiling, replay or logs. PII is never attached. */
export function buildSentryOptions(config: SentryConfig): BrowserOptions {
    return {
        dsn: config.dsn,
        environment: config.environment,
        release: config.release,
        sampleRate: 1,
        maxBreadcrumbs: MAX_BREADCRUMBS,
        ignoreErrors: [...SENTRY_IGNORED_ERRORS],
        denyUrls: [...SENTRY_DENIED_URLS],
        beforeSend: (event: ErrorEvent, hint: EventHint) => prepareEvent(event, hint),
        beforeBreadcrumb: (crumb: Breadcrumb): Breadcrumb => scrubBreadcrumb(crumb),
    };
}

/** Drops expected rejections; drops (never sends raw) an event whose scrubbing fails. */
export function prepareEvent(event: ErrorEvent, hint: EventHint): ErrorEvent | null {
    if (isExpectedRejection(hint.originalException)) {
        return null;
    }
    try {
        return scrubEvent(event);
    } catch {
        return null;
    }
}

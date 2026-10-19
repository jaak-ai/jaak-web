import type { Breadcrumb, ErrorEvent } from "@sentry/nextjs";
import { redactDeep, redactText, stripUrl } from "./sentry-redaction";

type ExceptionValue = NonNullable<NonNullable<ErrorEvent["exception"]>["values"]>[number];
type StackFrame = NonNullable<NonNullable<ExceptionValue["stacktrace"]>["frames"]>[number];

/** Breadcrumb data that can hold request or response payloads. */
const PAYLOAD_KEYS = new Set(["request_body", "response_body", "request", "response", "headers", "body", "cookies"]);
const URL_KEYS = new Set(["url", "from", "to"]);

/** Strips PII, payloads and URL query strings. Runs on every event before it leaves the process or browser. */
export function scrubEvent(event: ErrorEvent): ErrorEvent {
    const redacted = redactDeep(event) as ErrorEvent;
    return {
        ...redacted,
        request: redacted.request && {
            method: redacted.request.method,
            url: redacted.request.url && stripUrl(redacted.request.url),
        },
        user: undefined,
        exception: scrubException(redacted.exception),
        breadcrumbs: redacted.breadcrumbs?.map(scrubBreadcrumb),
    };
}

export function scrubBreadcrumb(crumb: Breadcrumb): Breadcrumb {
    return {
        ...crumb,
        message: crumb.message && redactText(crumb.message),
        data: crumb.data && scrubBreadcrumbData(crumb.data),
    };
}

function scrubBreadcrumbData(data: Record<string, unknown>): Record<string, unknown> {
    const redacted = redactDeep(data) as Record<string, unknown>;
    return Object.keys(redacted)
        .filter((key) => !PAYLOAD_KEYS.has(key))
        .reduce<Record<string, unknown>>((result, key) => ({ ...result, [key]: scrubBreadcrumbValue(key, redacted[key]) }), {});
}

function scrubBreadcrumbValue(key: string, value: unknown): unknown {
    return URL_KEYS.has(key) ? urlOnly(value) : value;
}

function scrubException(exception: ErrorEvent["exception"]): ErrorEvent["exception"] {
    if (!exception?.values) {
        return exception;
    }
    return { ...exception, values: exception.values.map(scrubExceptionValue) };
}

function scrubExceptionValue(value: ExceptionValue): ExceptionValue {
    const frames = value.stacktrace?.frames?.map(scrubFrame);
    return frames ? { ...value, stacktrace: { ...value.stacktrace, frames } } : value;
}

function scrubFrame(frame: StackFrame): StackFrame {
    return {
        ...frame,
        vars: undefined,
        filename: frame.filename && stripUrl(frame.filename),
        abs_path: frame.abs_path && stripUrl(frame.abs_path),
    };
}

function urlOnly(value: unknown): unknown {
    return typeof value === "string" ? stripUrl(value) : value;
}

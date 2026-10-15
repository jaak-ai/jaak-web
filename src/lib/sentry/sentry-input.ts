import type { SentryInput } from "./sentry-environment";

/** Browser bundle: Next.js inlines only literal NEXT_PUBLIC_ reads, so each variable is named here. */
export function clientSentryInput(): SentryInput {
    return {
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "",
        environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? "",
        release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ?? "",
    };
}

/** Server and edge runtimes read the unprefixed variables, which never reach the browser. */
export function serverSentryInput(): SentryInput {
    return {
        dsn: process.env.SENTRY_DSN ?? "",
        environment: process.env.VERCEL_ENV ?? "",
        release: process.env.VERCEL_GIT_COMMIT_SHA ?? "",
    };
}

export type SentryEnvironment = "development" | "preview" | "production";

/** Values injected by Vercel at build or run time; an empty DSN keeps Sentry disabled. */
export interface SentryInput {
    dsn: string;
    environment: string;
    release: string;
}

export interface SentryConfig {
    dsn: string;
    release: string | undefined;
    environment: SentryEnvironment;
}

const RELEASE_PREFIX = "jaak-web";
const SENTRY_ENVIRONMENTS = new Set<string>(["development", "preview", "production"]);
const DSN_PATTERN = /^https:\/\/[^@\s/]+@[^/\s]+\/\d+$/;
const UNREPLACED_PLACEHOLDER = /^__.+__$/;

/** Returns null (Sentry disabled) for unknown environments and missing or malformed DSNs. */
export function resolveSentryConfig(input: SentryInput): SentryConfig | null {
    if (!isSentryEnvironment(input.environment) || !DSN_PATTERN.test(input.dsn)) {
        return null;
    }
    return { dsn: input.dsn, environment: input.environment, release: releaseOrUndefined(input.release) };
}

function isSentryEnvironment(value: string): value is SentryEnvironment {
    return SENTRY_ENVIRONMENTS.has(value);
}

function releaseOrUndefined(commitSha: string): string | undefined {
    return commitSha && !UNREPLACED_PLACEHOLDER.test(commitSha) ? `${RELEASE_PREFIX}@${commitSha}` : undefined;
}

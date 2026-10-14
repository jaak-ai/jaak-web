/** Replacement rules applied in order: URLs and tokens first, so later patterns never see them. */
const REDACTION_RULES: ReadonlyArray<[RegExp, string]> = [
    [/(https?:\/\/[^\s?#]*)[?#][^\s]*/gi, "$1"],
    [/\/(verify|v)\/[^/\s?#"']+/g, "/$1/[redacted]"],
    [/eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]*/g, "[jwt]"],
    [/Bearer\s+[\w.~+/=-]+/gi, "Bearer [redacted]"],
    [/[\w+/-]{120,}={0,2}/g, "[base64]"],
    [/\b[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d\b/gi, "[curp]"],
    [/\b[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}\b/gi, "[rfc]"],
    [/\+?\d[\d\s-]{8,14}\d/g, "[phone]"],
];

/** Values under these keys are dropped whatever they contain: credentials, identity, names and documents. */
const SENSITIVE_KEY_PATTERNS: readonly RegExp[] = [
    /token|passw|secret|authorization|auth|cookie|session|api_?key/i,
    /curp|rfc|email|phone|dni|document|documento|pasaporte|passport|clave_?elector/i,
    /image|selfie|biometric/i,
    /nombre|apellido|first_?name|last_?name|full_?name|surname|user_?name/i,
];
const REDACTED = "[redacted]";

const MAX_DEPTH = 10;

/** Removes query strings and fragments, which carry tokens and session ids. */
export function stripUrl(url: string): string {
    return url.split(/[?#]/)[0];
}

/** Any whitespace-free token holding an "@" is an email address; token-based so no backtracking regex is needed. */
const WORD_TOKEN = /\S+/g;

export function redactText(text: string): string {
    const ruled = REDACTION_RULES.reduce((result, [pattern, replacement]) => result.replaceAll(pattern, replacement), text);
    return ruled.replace(WORD_TOKEN, (token) => (token.includes("@") ? "[email]" : token));
}

/** Fails closed: anything nested deeper than MAX_DEPTH is replaced, never sent raw. */
export function redactDeep(value: unknown, depth = 0): unknown {
    if (typeof value !== "object" || value === null) {
        return typeof value === "string" ? redactStringAt(value, depth) : value;
    }
    if (depth >= MAX_DEPTH) {
        return REDACTED;
    }
    if (Array.isArray(value)) {
        return value.map((item) => redactDeep(item, depth + 1));
    }
    const record = value as Record<string, unknown>;
    return Object.keys(record).reduce<Record<string, unknown>>(
        (result, key) => ({ ...result, [key]: redactEntry(key, record[key], depth) }),
        {},
    );
}

function redactStringAt(text: string, depth: number): string {
    return depth >= MAX_DEPTH ? REDACTED : redactText(text);
}

function redactEntry(key: string, value: unknown, depth: number): unknown {
    return isSensitiveKey(key) ? REDACTED : redactDeep(value, depth + 1);
}

function isSensitiveKey(key: string): boolean {
    return SENSITIVE_KEY_PATTERNS.some((pattern) => pattern.test(key));
}

import { describe, expect, it } from "vitest";
import { redactDeep, redactText, stripUrl } from "../sentry-redaction";

describe("stripUrl", () => {
    it("removes the query string and fragment", () => {
        expect(stripUrl("https://app.invalid/a/b?token=secret#frag")).toBe("https://app.invalid/a/b");
    });
});

describe("redactText", () => {
    it.each([
        ["email", "contact juan@example.com now", "contact [email] now"],
        ["CURP", "CURP GARC800101HDFLRN05", "CURP [curp]"],
        ["RFC", "RFC GARC800101AB1", "RFC [rfc]"],
        ["phone", "tel +52 55 1234 5678", "tel [phone]"],
        ["JWT", "token eyJhbGciOi.eyJzdWIiOi.c2ln", "token [jwt]"],
        ["bearer token", "Authorization: Bearer abc.def-ghi", "Authorization: Bearer [redacted]"],
        ["base64 blob", `img ${"A".repeat(130)}`, "img [base64]"],
        ["URL query", "GET https://app.invalid/x?token=1", "GET https://app.invalid/x"],
        ["signing link path", "GET https://app.invalid/verify/abc123", "GET https://app.invalid/verify/[redacted]"],
        ["signing view path", "GET https://app.invalid/v/slug-9", "GET https://app.invalid/v/[redacted]"],
    ])("redacts %s", (_label, input, expected) => {
        expect(redactText(input)).toBe(expected);
    });

    it("keeps plain text", () => {
        expect(redactText("Solicitud creada")).toBe("Solicitud creada");
    });

    it("redacts every occurrence of a pattern in one string", () => {
        expect(redactText("tel +52 55 1234 5678 y +52 55 8765 4321")).toBe("tel [phone] y [phone]");
    });
});

describe("redactDeep", () => {
    it.each([
        ["token", "token"],
        ["password", "password"],
        ["cookie", "cookie"],
        ["authorization", "Authorization"],
        ["curp", "curp"],
        ["rfc", "rfc"],
        ["email", "email"],
        ["phone", "telefono_phone"],
        ["document number", "numero_documento"],
        ["image", "image"],
        ["selfie", "selfie"],
        ["full name", "nombre"],
        ["surname", "apellido_paterno"],
    ])("drops values under a %s key", (_label, key) => {
        expect(redactDeep({ [key]: "valor" })).toEqual({ [key]: "[redacted]" });
    });

    it("redacts sensitive text inside nested values", () => {
        expect(redactDeep({ nested: { note: "mail juan@example.com" } })).toEqual({ nested: { note: "mail [email]" } });
    });

    it("replaces anything nested deeper than the limit", () => {
        const deep = { a: { b: { c: { d: { e: { f: { g: { h: { i: { j: { k: "leaf" } } } } } } } } } } };
        expect(JSON.stringify(redactDeep(deep))).toContain("[redacted]");
        expect(JSON.stringify(redactDeep(deep))).not.toContain("leaf");
    });
});

import { beforeEach, describe, expect, it, vi } from "vitest";
import { initSentry } from "../sentry-bootstrap";
import { CONFIGURED_INPUT } from "./sentry-fixtures";

const sentryState = vi.hoisted(() => ({ client: undefined as unknown }));
vi.mock("@sentry/nextjs", () => ({ getClient: () => sentryState.client }));

describe("initSentry", () => {
    beforeEach(() => {
        sentryState.client = undefined;
    });

    it("initializes once when configured", () => {
        const init = vi.fn();
        expect(initSentry(CONFIGURED_INPUT, init)).toBe(true);
        expect(init).toHaveBeenCalledWith(expect.objectContaining({ dsn: CONFIGURED_INPUT.dsn }));
    });

    it("stays off when the DSN is empty", () => {
        const init = vi.fn();
        expect(initSentry({ ...CONFIGURED_INPUT, dsn: "" }, init)).toBe(false);
        expect(init).not.toHaveBeenCalled();
    });

    it("does not initialize twice", () => {
        sentryState.client = {};
        const init = vi.fn();
        expect(initSentry(CONFIGURED_INPUT, init)).toBe(false);
        expect(init).not.toHaveBeenCalled();
    });

    it("logs and continues when init throws", () => {
        const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
        const init = () => {
            throw new Error("init failed");
        };
        expect(initSentry(CONFIGURED_INPUT, init)).toBe(false);
        expect(warn).toHaveBeenCalled();
        warn.mockRestore();
    });
});

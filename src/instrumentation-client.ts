import { initSentry } from "@/lib/sentry/sentry-bootstrap";
import { clientSentryInput } from "@/lib/sentry/sentry-input";

initSentry(clientSentryInput());

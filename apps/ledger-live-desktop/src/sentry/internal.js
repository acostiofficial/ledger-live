// @flow
import * as Sentry from "@sentry/node";
import "@sentry/tracing";
import { connectLogsToSentry } from "@ledgerhq/live-common/performance";
import { init, setShouldSendCallback } from "./install";

const available = init(Sentry, {
  integrations: [new Sentry.Integrations.Http({ tracing: true })],
});

if (available) {
  connectLogsToSentry(Sentry);
}

export default (shouldSendCallback: () => boolean, userId: string) => {
  if (!available) return;
  setShouldSendCallback(shouldSendCallback);
  Sentry.setUser({ id: userId, ip_address: null });
  return () => {
    setShouldSendCallback(() => false);
  };
};

export const captureException = (e: Error) => {
  Sentry.captureException(e);
};

export const captureBreadcrumb = (o: *) => {
  Sentry.addBreadcrumb(o);
};

export const setTags = (tags: *) => {
  Sentry.setTags(tags);
};

export const getSentryIfAvailable = (): typeof Sentry | null => {
  return available ? Sentry : null;
};

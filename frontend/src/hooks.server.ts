import { sequence } from "@sveltejs/kit/hooks";
import { handleErrorWithSentry, sentryHandle } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';
import { dev } from '$app/environment';


Sentry.init({
  dsn: 'https://a0952dbb331523cb3f6636b29021fb84@o4506702422409216.ingest.sentry.io/4506702423719936',
  tracesSampleRate: 1.0,
  debug: true,
  environment: dev ? 'development' : 'production',
  enabled: !dev,
});

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(sentryHandle());

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();

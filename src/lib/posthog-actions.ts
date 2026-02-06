import posthog from 'posthog-js';

// Session recording controls
export function startSessionRecording() {
  posthog.startSessionRecording();
}

export function stopSessionRecording() {
  posthog.stopSessionRecording();
}

export function capturePageView(path: string) {
  posthog.capture('$pageview', {
    path,
  });
}

export function captureEvent(event: string, properties?: Record<string, unknown>) {
  posthog.capture(event, properties);
}

export function identifyUser(userId: string, userProperties?: Record<string, unknown>) {
  posthog.identify(userId, userProperties);
}

export function setUserProperties(properties: Record<string, unknown>) {
  posthog.setPersonProperties(properties);
}

export function reset() {
  posthog.reset();
}

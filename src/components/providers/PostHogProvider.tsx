'use client';

import posthog from 'posthog-js';
import { useEffect } from 'react';

interface User {
  id: string;
  email?: string;
  name?: string;
}

export function PostHogProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: User;
}) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://app.posthog.com',
      capture_pageview: true,
      session_recording: {
        recordCrossOriginIframes: true,
      },
    });

    // Identify user if logged in
    if (user?.id) {
      posthog.identify(user.id, {
        email: user.email,
        name: user.name,
      });
    }
  }, [user]);

  return children;
}

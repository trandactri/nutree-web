import { Metadata } from 'next';
import Link from 'next/link';
import { ReleaseList } from '@/components/sections/ReleaseList';
import { getGitHubReleases } from '@/lib/github';

export const revalidate = 3600; // ISR: revalidate every 1 hour

export const metadata: Metadata = {
  title: 'Changelog | Nutree AI',
  description: 'Release notes and changelog for Nutree AI - Track features, improvements, and bug fixes.',
  openGraph: {
    title: 'Changelog | Nutree AI',
    description: 'Release notes and changelog for Nutree AI',
    type: 'website',
  },
};

export default async function Changelog() {
  const releases = await getGitHubReleases(20);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-white to-primary-teal/5">
      <div className="container mx-auto px-4 py-20">
        {/* Back to Home Link */}
        <Link
          href="/"
          aria-label="Back to home page"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-forest transition-colors hover:text-primary-teal mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display text-5xl font-bold text-foreground">
            Changelog
          </h1>
          <p className="mt-4 text-xl text-muted">
            Follow the latest updates, features, and improvements to Nutree AI.
          </p>
        </div>

        {/* Releases */}
        <ReleaseList releases={releases} />
      </div>
    </main>
  );
}

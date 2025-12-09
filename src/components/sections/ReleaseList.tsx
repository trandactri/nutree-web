import { ReleaseCard } from '@/components/ui/ReleaseCard';
import type { ParsedRelease } from '@/types';

interface ReleaseListProps {
  releases: ParsedRelease[];
}

export function ReleaseList({ releases }: ReleaseListProps) {
  if (releases.length === 0) {
    return (
      <div className="rounded-2xl border border-border/50 bg-white/50 p-12 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-auto h-12 w-12 text-muted"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
          No Releases Found
        </h3>
        <p className="mt-2 text-sm text-muted">
          Unable to fetch releases from GitHub. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {releases.map((release) => (
        <ReleaseCard key={release.id} release={release} />
      ))}
    </div>
  );
}

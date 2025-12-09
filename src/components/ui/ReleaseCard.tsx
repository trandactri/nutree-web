import Link from 'next/link';
import { formatReleaseDate } from '@/lib/github';
import type { ParsedRelease } from '@/types';
import { cn } from '@/lib/cn';

interface ReleaseCardProps {
  release: ParsedRelease;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <article
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm transition-all hover:border-border hover:shadow-lg',
        release.isLatest && 'ring-2 ring-primary-teal/20'
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 border-b border-border/50 p-6">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-display text-xl font-bold text-foreground">
              {release.version}
            </h3>
            {release.isLatest && (
              <span className="rounded-full bg-primary-teal/10 px-3 py-1 text-xs font-medium text-primary-teal">
                Latest
              </span>
            )}
            {release.isPrerelease && (
              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600">
                Pre-release
              </span>
            )}
          </div>
          {release.name !== release.version && (
            <p className="mt-1 text-sm text-muted">{release.name}</p>
          )}
        </div>
        <time
          dateTime={release.publishedAt.toISOString()}
          className="text-sm text-muted whitespace-nowrap"
        >
          {formatReleaseDate(release.publishedAt)}
        </time>
      </div>

      {/* Body */}
      {release.body && (
        <div className="p-6">
          <div className="whitespace-pre-wrap text-sm text-muted leading-relaxed break-words">
            {release.body}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/50 px-6 py-4">
        <Link
          href={release.htmlUrl}
          aria-label={`View ${release.version} release on GitHub`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-forest transition-colors hover:text-primary-teal"
        >
          View on GitHub
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
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>

        {release.downloadUrl && (
          <Link
            href={release.downloadUrl}
            aria-label={`Download ${release.version}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary-forest/10 px-4 py-2 text-sm font-medium text-primary-forest transition-colors hover:bg-primary-forest/20"
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download
          </Link>
        )}
      </div>
    </article>
  );
}

import { Octokit } from '@octokit/rest';
import { SITE_CONFIG } from './constants';
import type { GitHubRelease, ParsedRelease } from '@/types';

// Initialize Octokit (token optional but recommended for higher rate limits)
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

/**
 * Fetch releases from GitHub repository
 * @param limit - Maximum number of releases to fetch
 * @returns Array of parsed releases
 */
export async function getGitHubReleases(limit = 20): Promise<ParsedRelease[]> {
  try {
    const response = await octokit.repos.listReleases({
      owner: SITE_CONFIG.github.owner,
      repo: SITE_CONFIG.github.repoName,
      per_page: limit,
    });

    const releases = response.data as GitHubRelease[];

    // Filter out drafts and parse
    return releases
      .filter((release) => !release.draft)
      .map((release, index) => parseRelease(release, index === 0));
  } catch (error) {
    console.error('Failed to fetch GitHub releases:', error);
    return [];
  }
}

/**
 * Get the latest release
 * @returns Latest release or null
 */
export async function getLatestRelease(): Promise<ParsedRelease | null> {
  try {
    const response = await octokit.repos.getLatestRelease({
      owner: SITE_CONFIG.github.owner,
      repo: SITE_CONFIG.github.repoName,
    });

    return parseRelease(response.data as GitHubRelease, true);
  } catch (error) {
    console.error('Failed to fetch latest release:', error);
    return null;
  }
}

/**
 * Parse GitHub release into our format
 */
function parseRelease(release: GitHubRelease, isLatest: boolean): ParsedRelease {
  // Find APK or IPA asset for direct download
  const downloadAsset = release.assets.find(
    (asset) =>
      asset.name.endsWith('.apk') ||
      asset.name.endsWith('.ipa') ||
      asset.name.endsWith('.zip')
  );

  return {
    id: release.id,
    version: release.tag_name,
    name: release.name || release.tag_name,
    body: release.body || '',
    publishedAt: new Date(release.published_at),
    htmlUrl: release.html_url,
    isLatest,
    isPrerelease: release.prerelease,
    downloadUrl: downloadAsset?.browser_download_url,
  };
}

/**
 * Format date for display
 */
export function formatReleaseDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}


export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  assets: GitHubAsset[];
  prerelease: boolean;
  draft: boolean;
}

export interface GitHubAsset {
  id: number;
  name: string;
  browser_download_url: string;
  size: number;
  download_count: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  screenshotPlaceholder?: string;
}

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

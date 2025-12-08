import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Hero } from '@/components/sections/Hero';

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen">
      <Hero />
      {/* DemoVideo, Features, DownloadCTA added in Phase 3 */}
    </AuroraBackground>
  );
}

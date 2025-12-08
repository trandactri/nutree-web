import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Hero } from '@/components/sections/Hero';
import { DemoVideo } from '@/components/sections/DemoVideo';
import { Features } from '@/components/sections/Features';
import { DownloadCTA } from '@/components/sections/DownloadCTA';

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen">
      <Hero />
      <DemoVideo />
      <Features />
      <DownloadCTA />
    </AuroraBackground>
  );
}

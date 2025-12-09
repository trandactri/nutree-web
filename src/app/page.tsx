import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { Hero } from '@/components/sections/Hero';
import { DemoVideo } from '@/components/sections/DemoVideo';
import { FeaturesSlider } from '@/components/sections/FeaturesSlider';
import { DownloadCTA } from '@/components/sections/DownloadCTA';

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen">
      <Hero />
      <DemoVideo />
      <FeaturesSlider />
      <DownloadCTA />
    </AuroraBackground>
  );
}

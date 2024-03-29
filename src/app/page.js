import CreationsSection from '@/components/creations/CreationsSection';
import FeatureSection from '@/components/features/FeatureSection';
import Footer from '@/components/footer/Footer';
import HeroSection from '@/components/hero/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <CreationsSection />
      <Footer />
    </main>
  );
}

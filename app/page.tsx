import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactStrip from '@/components/ContactStrip';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <ContactStrip />
    </div>
  );
}
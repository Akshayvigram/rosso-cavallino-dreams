
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ModelsSection from '@/components/ModelsSection';
import WhyFerrariSection from '@/components/WhyFerrariSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <HeroSection />
      <ModelsSection />
      <WhyFerrariSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

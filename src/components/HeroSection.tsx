
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (carRef.current) {
      observer.observe(carRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-ferrari-darkGray to-black">
      {/* Background Road */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-2"></div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Animated Ferrari Car */}
      <div className="absolute top-1/2 left-0 w-full h-20 overflow-hidden">
        <div className="w-32 h-16 bg-gradient-to-r from-ferrari-red to-ferrari-darkRed rounded-lg animate-drive opacity-60"></div>
      </div>

      {/* Hero Content */}
      <div ref={carRef} className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-fade-in">
          FERRARI
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-white mb-8 animate-fade-in">
          Unleash the <span className="text-ferrari-red">Legend</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
          Experience the pinnacle of automotive excellence. Where passion meets performance, 
          and dreams become reality on four wheels.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button className="bg-ferrari-red hover:bg-ferrari-darkRed text-white px-8 py-4 text-lg rounded-lg animate-glow transform hover:scale-105 transition-all duration-300">
            Explore Collection
          </Button>
          <Button variant="outline" className="border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            Watch Heritage
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-ferrari-red w-8 h-8" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-ferrari-red rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-ferrari-gold rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-10 w-1 h-1 bg-ferrari-silver rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;

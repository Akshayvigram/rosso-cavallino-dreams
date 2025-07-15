
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

      {/* Animated Ferrari Car - SVG Car Shape */}
      <div className="absolute top-1/2 left-0 w-full h-20 overflow-hidden">
        <div className="animate-drive opacity-60">
          <svg width="120" height="60" viewBox="0 0 120 60" className="fill-ferrari-red">
            {/* Car Body */}
            <path d="M10 40 Q10 35 15 35 L25 35 Q30 30 35 30 L75 30 Q80 30 85 35 L105 35 Q110 35 110 40 L110 45 Q110 50 105 50 L95 50 Q95 55 90 55 L85 55 Q80 55 80 50 L40 50 Q40 55 35 55 L30 55 Q25 55 25 50 L15 50 Q10 50 10 45 Z"/>
            {/* Windshield */}
            <path d="M35 30 Q40 25 45 25 L70 25 Q75 25 75 30 L75 35 L35 35 Z" className="fill-gray-800"/>
            {/* Wheels */}
            <circle cx="30" cy="50" r="8" className="fill-gray-900"/>
            <circle cx="90" cy="50" r="8" className="fill-gray-900"/>
            <circle cx="30" cy="50" r="5" className="fill-ferrari-silver"/>
            <circle cx="90" cy="50" r="5" className="fill-ferrari-silver"/>
            {/* Headlight */}
            <circle cx="108" cy="42" r="3" className="fill-yellow-300"/>
            {/* Side details */}
            <path d="M35 38 L75 38 Q78 38 78 41 L78 44 Q78 47 75 47 L35 47 Q32 47 32 44 L32 41 Q32 38 35 38 Z" className="fill-ferrari-darkRed"/>
          </svg>
        </div>
      </div>

      {/* Ferrari Logo */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-20">
        <img 
          src="/lovable-uploads/3a181ea3-0aa0-42f8-857d-a525ee2ce288.png" 
          alt="Ferrari Logo" 
          className="w-32 h-auto"
        />
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
          <Button 
            className="bg-ferrari-red hover:bg-ferrari-darkRed text-white px-8 py-4 text-lg rounded-lg animate-glow transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Collection
          </Button>
          <Button 
            variant="outline" 
            className="border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('why-ferrari')?.scrollIntoView({ behavior: 'smooth' })}
          >
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

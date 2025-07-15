
import { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Palette, Lightbulb, Award, Wrench, Globe } from 'lucide-react';

const WhyFerrariSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: Zap,
      title: "Unmatched Performance",
      description: "Ferrari's racing heritage delivers power and precision that dominates both track and road, with cutting-edge technology in every vehicle.",
      stats: "340+ km/h top speeds"
    },
    {
      icon: Palette,
      title: "Iconic Design",
      description: "Every Ferrari is a masterpiece of Italian design, combining aerodynamic efficiency with breathtaking beauty that turns heads everywhere.",
      stats: "75+ years of design excellence"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "From Formula 1 to road cars, Ferrari pioneered hybrid technology, active aerodynamics, and advanced materials that define the future.",
      stats: "200+ patents and innovations"
    },
    {
      icon: Award,
      title: "Racing Legacy",
      description: "With over 240 victories in Formula 1, Ferrari's racing DNA flows through every vehicle, ensuring uncompromising performance.",
      stats: "240+ F1 victories"
    },
    {
      icon: Wrench,
      title: "Craftsmanship",
      description: "Hand-assembled by master craftsmen in Maranello, each Ferrari represents the pinnacle of Italian automotive artistry.",
      stats: "Hand-built precision"
    },
    {
      icon: Globe,
      title: "Exclusive Community",
      description: "Join an elite family of Ferrari owners worldwide, with exclusive events, track days, and experiences that money can't buy.",
      stats: "Global Ferrari family"
    }
  ];

  return (
    <section id="why-ferrari" ref={sectionRef} className="py-20 bg-gradient-to-b from-ferrari-darkGray to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-ferrari-red rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-ferrari-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-ferrari-silver rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold text-gradient mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Why Ferrari?
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            More than just a car manufacturer, Ferrari represents a legacy of passion, 
            innovation, and excellence that spans over seven decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card 
                key={reason.title}
                className={`bg-card/50 backdrop-blur-sm border-ferrari-lightGray hover:border-ferrari-red transition-all duration-500 card-hover group ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-ferrari-red to-ferrari-darkRed rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-float">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 mx-auto bg-ferrari-red/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-ferrari-red transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  
                  <div className="text-ferrari-gold font-semibold text-sm">
                    {reason.stats}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Heritage Timeline */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-transparent via-ferrari-red to-transparent h-px mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-ferrari-red mb-2">1947</div>
              <div className="text-white text-sm">Founded by Enzo Ferrari</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ferrari-red mb-2">1950</div>
              <div className="text-white text-sm">First F1 Championship</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ferrari-red mb-2">1988</div>
              <div className="text-white text-sm">Legendary F40 Launch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ferrari-red mb-2">2023</div>
              <div className="text-white text-sm">Hybrid Innovation Era</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFerrariSection;

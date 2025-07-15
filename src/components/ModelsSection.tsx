import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Gauge, DollarSign, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ModelsSection = () => {
  const [selectedModel, setSelectedModel] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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

  const ferrariModels = [
    {
      id: "sf90-stradale",
      name: "Ferrari SF90 Stradale",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800",
      engine: "4.0L V8 Hybrid",
      topSpeed: "340 km/h",
      acceleration: "2.5s 0-100km/h",
      price: "$625,000",
      features: ["Hybrid Technology", "All-Wheel Drive", "Carbon Fiber Body"]
    },
    {
      id: "f8-tributo",
      name: "Ferrari F8 Tributo",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76d35f3e?w=800",
      engine: "3.9L V8 Twin-Turbo",
      topSpeed: "340 km/h",
      acceleration: "2.9s 0-100km/h",
      price: "$280,000",
      features: ["Mid-Engine", "Aerodynamic Design", "Track-Tuned"]
    },
    {
      id: "roma",
      name: "Ferrari Roma",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800",
      engine: "3.9L V8 Twin-Turbo",
      topSpeed: "320 km/h",
      acceleration: "3.4s 0-100km/h",
      price: "$245,000",
      features: ["Grand Touring", "Retractable Hardtop", "Luxury Interior"]
    },
    {
      id: "812-superfast",
      name: "Ferrari 812 Superfast",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
      engine: "6.5L V12",
      topSpeed: "340 km/h",
      acceleration: "2.9s 0-100km/h",
      price: "$365,000",
      features: ["Natural V12", "Front-Engine", "Pure Performance"]
    },
    {
      id: "portofino-m",
      name: "Ferrari Portofino M",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      engine: "3.9L V8 Twin-Turbo",
      topSpeed: "320 km/h",
      acceleration: "3.45s 0-100km/h",
      price: "$230,000",
      features: ["Convertible", "2+2 Seating", "Daily Usability"]
    },
    {
      id: "296-gtb",
      name: "Ferrari 296 GTB",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
      engine: "3.0L V6 Hybrid",
      topSpeed: "330 km/h",
      acceleration: "2.9s 0-100km/h",
      price: "$320,000",
      features: ["Plug-in Hybrid", "Compact Design", "Electric Mode"]
    },
    {
      id: "daytona-sp3",
      name: "Ferrari Daytona SP3",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800",
      engine: "6.5L V12",
      topSpeed: "340 km/h",
      acceleration: "2.85s 0-100km/h",
      price: "$2,250,000",
      features: ["Limited Edition", "Icona Series", "Racing Heritage"]
    },
    {
      id: "purosangue",
      name: "Ferrari Purosangue",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
      engine: "6.5L V12",
      topSpeed: "310 km/h",
      acceleration: "3.3s 0-100km/h",
      price: "$390,000",
      features: ["Four-Door", "SUV Design", "Family Luxury"]
    },
    {
      id: "488-pista",
      name: "Ferrari 488 Pista",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
      engine: "3.9L V8 Twin-Turbo",
      topSpeed: "340 km/h",
      acceleration: "2.85s 0-100km/h",
      price: "$350,000",
      features: ["Track Focus", "Lightweight", "Aerodynamic Package"]
    },
    {
      id: "monza-sp2",
      name: "Ferrari Monza SP2",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800",
      engine: "6.5L V12",
      topSpeed: "300 km/h",
      acceleration: "2.9s 0-100km/h",
      price: "$1,750,000",
      features: ["Speedster Design", "Wind Screen", "Exclusive Series"]
    }
  ];

  return (
    <section id="models" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-ferrari-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold text-gradient mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Our Collection
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Discover the complete range of Ferrari supercars, each engineered to deliver 
            unparalleled performance and breathtaking beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ferrariModels.map((model, index) => (
            <Card 
              key={model.name} 
              className={`bg-card border-ferrari-lightGray hover:border-ferrari-red transition-all duration-500 card-hover group overflow-hidden ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <Button 
                  className="absolute top-4 right-4 bg-ferrari-red/80 hover:bg-ferrari-red text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  onClick={() => navigate(`/car/${model.id}`)}
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ferrari-red transition-colors">
                  {model.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Zap className="w-4 h-4 text-ferrari-red mr-2" />
                    {model.engine}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Gauge className="w-4 h-4 text-ferrari-red mr-2" />
                    {model.topSpeed} | {model.acceleration}
                  </div>
                  <div className="flex items-center text-ferrari-gold text-sm font-semibold">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {model.price}
                  </div>
                </div>

                <div className="mb-4">
                  {model.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="inline-block bg-ferrari-red/20 text-ferrari-red text-xs px-2 py-1 rounded-full mr-2 mb-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button 
                  className="w-full bg-ferrari-red hover:bg-ferrari-darkRed text-white transition-all duration-300 transform hover:scale-105"
                  onClick={() => navigate(`/car/${model.id}`)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;

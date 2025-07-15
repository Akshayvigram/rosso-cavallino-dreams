
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Zap, Gauge, DollarSign, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const ferrariModels = [
    {
      id: 'sf90-stradale',
      name: "Ferrari SF90 Stradale",
      images: [
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=1200",
        "https://images.unsplash.com/photo-1558618047-3c8c76d35f3e?w=1200",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200"
      ],
      engine: "4.0L V8 Hybrid",
      power: "1000 HP",
      topSpeed: "340 km/h",
      acceleration: "2.5s 0-100km/h",
      price: "$625,000",
      description: "The SF90 Stradale is Ferrari's first series-production plug-in hybrid supercar. It combines a 4.0-liter twin-turbo V8 with three electric motors to deliver unprecedented performance.",
      features: [
        "Hybrid Technology",
        "All-Wheel Drive", 
        "Carbon Fiber Body",
        "Advanced Aerodynamics",
        "Race-Derived Technology",
        "Manettino Dial"
      ],
      specifications: {
        "Engine": "4.0L V8 Twin-Turbo + 3 Electric Motors",
        "Power": "1000 HP",
        "Torque": "800 Nm",
        "Transmission": "8-Speed Dual-Clutch",
        "Drive": "All-Wheel Drive",
        "Weight": "1570 kg",
        "Top Speed": "340 km/h",
        "0-100 km/h": "2.5 seconds",
        "Electric Range": "25 km"
      }
    },
    {
      id: 'f8-tributo',
      name: "Ferrari F8 Tributo",
      images: [
        "https://images.unsplash.com/photo-1558618047-3c8c76d35f3e?w=1200",
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=1200",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200"
      ],
      engine: "3.9L V8 Twin-Turbo",
      power: "720 HP",
      topSpeed: "340 km/h",
      acceleration: "2.9s 0-100km/h",
      price: "$280,000",
      description: "The F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta.",
      features: [
        "Mid-Engine Layout",
        "Aerodynamic Excellence",
        "Track-Tuned Suspension",
        "Carbon Fiber Components",
        "Racing Heritage",
        "Advanced Electronics"
      ],
      specifications: {
        "Engine": "3.9L V8 Twin-Turbo",
        "Power": "720 HP",
        "Torque": "770 Nm",
        "Transmission": "7-Speed Dual-Clutch",
        "Drive": "Rear-Wheel Drive",
        "Weight": "1435 kg",
        "Top Speed": "340 km/h",
        "0-100 km/h": "2.9 seconds",
        "Fuel Economy": "11.4L/100km"
      }
    }
  ];

  const car = ferrariModels.find(model => model.id === id) || ferrariModels[0];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button 
            variant="outline" 
            className="mb-8 border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collection
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={car.images[selectedImage]} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-ferrari-red' : 'border-gray-600'
                    }`}
                  >
                    <img src={image} alt={`${car.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gradient mb-4">{car.name}</h1>
                <p className="text-gray-300 text-lg leading-relaxed">{car.description}</p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-ferrari-lightGray rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Zap className="w-5 h-5 text-ferrari-red mr-2" />
                    <span className="text-gray-400">Engine</span>
                  </div>
                  <p className="text-white font-semibold">{car.engine}</p>
                </div>
                <div className="bg-card border border-ferrari-lightGray rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Gauge className="w-5 h-5 text-ferrari-red mr-2" />
                    <span className="text-gray-400">Top Speed</span>
                  </div>
                  <p className="text-white font-semibold">{car.topSpeed}</p>
                </div>
                <div className="bg-card border border-ferrari-lightGray rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Gauge className="w-5 h-5 text-ferrari-red mr-2" />
                    <span className="text-gray-400">0-100 km/h</span>
                  </div>
                  <p className="text-white font-semibold">{car.acceleration}</p>
                </div>
                <div className="bg-card border border-ferrari-lightGray rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-5 h-5 text-ferrari-gold mr-2" />
                    <span className="text-gray-400">Price</span>
                  </div>
                  <p className="text-ferrari-gold font-semibold text-xl">{car.price}</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-ferrari-red rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-ferrari-red hover:bg-ferrari-darkRed text-white py-4 text-lg animate-glow"
                  onClick={() => navigate(`/book-test-drive/${car.id}`)}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Test Drive
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gradient mb-8">Technical Specifications</h2>
            <Card className="bg-card border-ferrari-lightGray">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-ferrari-lightGray pb-4">
                      <dt className="text-gray-400 text-sm mb-1">{key}</dt>
                      <dd className="text-white font-semibold">{value}</dd>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetails;

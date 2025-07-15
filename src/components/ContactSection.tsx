
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general'
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-ferrari-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold text-gradient mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Visit Our Showroom
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Experience Ferrari excellence in person. Schedule your private consultation 
            and test drive at our luxury showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`bg-card/80 backdrop-blur-sm border-ferrari-lightGray ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <CardHeader>
              <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-ferrari-lightGray border-ferrari-lightGray text-white placeholder-gray-400 focus:border-ferrari-red"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-ferrari-lightGray border-ferrari-lightGray text-white placeholder-gray-400 focus:border-ferrari-red"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-ferrari-lightGray border-ferrari-lightGray text-white placeholder-gray-400 focus:border-ferrari-red"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Interest
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full bg-ferrari-lightGray border-ferrari-lightGray text-white rounded-md px-3 py-2 focus:border-ferrari-red focus:outline-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="test-drive">Test Drive</option>
                    <option value="purchase">Purchase Consultation</option>
                    <option value="service">Service & Maintenance</option>
                    <option value="parts">Parts & Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-ferrari-lightGray border-ferrari-lightGray text-white placeholder-gray-400 focus:border-ferrari-red min-h-[120px]"
                    placeholder="Tell us about your Ferrari dreams..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-ferrari-red hover:bg-ferrari-darkRed text-white py-3 rounded-lg animate-glow flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {/* Contact Info */}
            <Card className="bg-card/80 backdrop-blur-sm border-ferrari-lightGray">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Showroom Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-ferrari-red mt-1" />
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-gray-300">
                        1234 Ferrari Boulevard<br />
                        Luxury Auto District<br />
                        Los Angeles, CA 90210
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-ferrari-red mt-1" />
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-300">+1 (555) FERRARI</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-ferrari-red mt-1" />
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-300">showroom@ferrari-la.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-ferrari-red mt-1" />
                    <div>
                      <div className="text-white font-semibold">Hours</div>
                      <div className="text-gray-300">
                        Mon-Fri: 9:00 AM - 7:00 PM<br />
                        Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-card/80 backdrop-blur-sm border-ferrari-lightGray">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-ferrari-darkGray to-black rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-ferrari-red/20"></div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center z-10">
                    <MapPin className="w-12 h-12 text-ferrari-red mx-auto mb-4 animate-bounce" />
                    <div className="text-white font-semibold">Ferrari Showroom</div>
                    <div className="text-gray-300 text-sm">Los Angeles, CA</div>
                    <Button className="mt-4 bg-ferrari-red hover:bg-ferrari-darkRed text-white px-6 py-2">
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BookTestDrive = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const ferrariModels = [
    { id: 'sf90-stradale', name: "Ferrari SF90 Stradale", image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400" },
    { id: 'f8-tributo', name: "Ferrari F8 Tributo", image: "https://images.unsplash.com/photo-1558618047-3c8c76d35f3e?w=400" }
  ];

  const selectedCar = ferrariModels.find(model => model.id === id) || ferrariModels[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test drive booking:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-card border border-ferrari-lightGray rounded-lg p-12">
                <CheckCircle className="w-16 h-16 text-ferrari-red mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-gradient mb-4">Booking Confirmed!</h1>
                <p className="text-gray-300 mb-8">
                  Thank you for your interest in the {selectedCar.name}. We'll contact you within 24 hours to confirm your test drive appointment.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/')}
                    className="bg-ferrari-red hover:bg-ferrari-darkRed text-white"
                  >
                    Back to Collection
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate(`/car/${selectedCar.id}`)}
                    className="border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white"
                  >
                    View Car Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button 
            variant="outline" 
            className="mb-8 border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white"
            onClick={() => navigate(`/car/${selectedCar.id}`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {selectedCar.name}
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Selected Car Info */}
            <div>
              <Card className="bg-card border-ferrari-lightGray">
                <CardHeader>
                  <CardTitle className="text-gradient">Your Selected Ferrari</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <img 
                      src={selectedCar.image} 
                      alt={selectedCar.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{selectedCar.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 text-ferrari-red mr-3" />
                      <div>
                        <p className="font-semibold">Ferrari Showroom</p>
                        <p className="text-sm">123 Luxury Drive, Beverly Hills, CA 90210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 text-ferrari-red mr-3" />
                      <div>
                        <p className="font-semibold">Test Drive Duration</p>
                        <p className="text-sm">45-60 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-300">
                      <User className="w-5 h-5 text-ferrari-red mr-3" />
                      <div>
                        <p className="font-semibold">Requirements</p>
                        <p className="text-sm">Valid driver's license required</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div>
              <Card className="bg-card border-ferrari-lightGray">
                <CardHeader>
                  <CardTitle className="text-gradient">Book Your Test Drive</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-ferrari-darkGray border border-ferrari-lightGray rounded-lg text-white focus:border-ferrari-red focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-ferrari-darkGray border border-ferrari-lightGray rounded-lg text-white focus:border-ferrari-red focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-ferrari-darkGray border border-ferrari-lightGray rounded-lg text-white focus:border-ferrari-red focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-ferrari-darkGray border border-ferrari-lightGray rounded-lg text-white focus:border-ferrari-red focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-ferrari-darkGray border border-ferrari-lightGray rounded-lg text-white focus:border-ferrari-red focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Preferred Time *</label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                          required
                          className="w-full px-4 py-3 bg-ferrari-darkGray border border-ferrari-lightGray rounded-lg text-white focus:border-ferrari-red focus:outline-none"
                        >
                          <option value="">Select Time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-ferrari-darkGray border border-ferrari-lightGray rounded-lg text-white focus:border-ferrari-red focus:outline-none resize-none"
                        placeholder="Any specific requests or questions..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-ferrari-red hover:bg-ferrari-darkRed text-white py-4 text-lg animate-glow"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Test Drive
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookTestDrive;

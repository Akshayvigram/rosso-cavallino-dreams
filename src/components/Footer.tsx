
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-ferrari-red to-ferrari-darkRed rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-white">FERRARI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the pinnacle of automotive excellence. Ferrari represents 
              75+ years of racing heritage, innovation, and Italian craftsmanship.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-ferrari-lightGray hover:bg-ferrari-red rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-ferrari-lightGray hover:bg-ferrari-red rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-ferrari-lightGray hover:bg-ferrari-red rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-ferrari-lightGray hover:bg-ferrari-red rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Models */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Models</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">SF90 Stradale</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">F8 Tributo</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">Roma</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">812 Superfast</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">Portofino M</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">296 GTB</li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">Test Drive</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">Financing</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">Service & Maintenance</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">Parts & Accessories</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">Insurance</li>
              <li className="hover:text-ferrari-red cursor-pointer transition-colors">Ferrari Approved</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-ferrari-red" />
                <span className="text-gray-400 text-sm">+1 (555) FERRARI</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-ferrari-red" />
                <span className="text-gray-400 text-sm">showroom@ferrari-la.com</span>
              </div>
              <div className="text-gray-400 text-sm">
                1234 Ferrari Boulevard<br />
                Los Angeles, CA 90210
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ferrari-lightGray mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ferrari Showroom. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-ferrari-red text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-ferrari-red text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-ferrari-red text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

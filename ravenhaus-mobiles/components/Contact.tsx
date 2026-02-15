import React from 'react';
import { Phone, MapPin, Clock, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter uppercase">
              Ravenhaus<span className="text-accent-500">.</span>Mobile
            </h3>
            <p className="text-gray-400 mb-6">
              Professional mobile auto repair and oil change service. Bringing the shop to your driveway in St. George, Utah.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              {/* TikTok Icon substitute using text or generic icon as Lucide doesn't have TikTok yet, using Facebook for placeholder/demo */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-500 transition-colors">
                <span className="font-bold text-xs">TT</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-accent-500 mt-1 flex-shrink-0" size={18} />
                <span>638 S 800 E St,<br/>St. George, UT 84770</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-accent-500 flex-shrink-0" size={18} />
                <a href="tel:8016038503" className="hover:text-white transition-colors">(801) 603-8503</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-white">By Appt</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-accent-500">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Book Now</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Ready for your service? Call us directly to schedule your appointment.
            </p>
             <a
              href="tel:8016038503"
              className="inline-block w-full text-center px-6 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent-500 hover:text-white transition-all duration-300"
            >
              (801) 603-8503
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Ravenhaus Mobile. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
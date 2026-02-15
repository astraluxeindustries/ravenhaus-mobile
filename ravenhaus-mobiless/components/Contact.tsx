import React from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { SectionId } from '../types';
import { ADDRESS, PHONE_NUMBER, GOOGLE_MAPS_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          
          {/* Contact Info */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-zinc-400 mb-10 text-lg">
              Ready for a service? We are just a call away.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-semibold uppercase tracking-wider mb-1">Phone</p>
                  <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="text-xl text-white font-medium hover:text-accent transition-colors">
                    {PHONE_NUMBER}
                  </a>
                  <p className="text-sm text-zinc-500 mt-1">Call or Text anytime</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-semibold uppercase tracking-wider mb-1">Base Location</p>
                  <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-accent transition-colors flex items-center gap-2">
                    {ADDRESS} <ExternalLink size={14} />
                  </a>
                  <p className="text-sm text-zinc-500 mt-1">Serving St. George & surrounding areas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-semibold uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-lg text-white font-medium">Monday - Saturday</p>
                  <p className="text-zinc-400">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
                className="w-full block text-center bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors"
              >
                Schedule Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] w-full relative bg-zinc-800">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.887648359567!2d-113.5707736!3d37.1009944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca5b3b55555555%3A0x123456789abcdef!2s638%20S%20800%20E%20St%2C%20St.%20George%2C%20UT%2084770!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
               title="Ravenhaus Mobile Location"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
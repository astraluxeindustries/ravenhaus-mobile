import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { SectionId } from '../types';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=2560" 
          alt="Mechanic working on car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent font-semibold text-sm mb-6 backdrop-blur-md">
            SERVING ST. GEORGE, UTAH
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Premium Auto Care,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
              Delivered to You.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light">
            Skip the waiting room. We bring professional oil changes and maintenance directly to your home or office.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              Book Now: {PHONE_NUMBER}
            </a>
            <Link 
              to={SectionId.SERVICES} 
              smooth={true} 
              duration={800}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm rounded-full font-medium text-lg transition-all cursor-pointer"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
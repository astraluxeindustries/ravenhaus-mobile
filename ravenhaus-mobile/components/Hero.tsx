import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop"
          alt="Mechanic working on car"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
              St. George, Utah
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-8">
              PREMIUM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                MOBILE CARE
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed"
          >
            We bring professional tools and high-quality oil directly to you, whether you're at home, work, or school. Experience the ultimate convenience in auto maintenance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:8016038503"
              className="group relative px-8 py-4 bg-accent-500 text-white font-bold uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Service <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Book Service <ArrowRight size={18} />
              </span>
            </a>
            
            <a
              href="#services"
              className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
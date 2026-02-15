import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Wrench, Truck, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Droplets className="w-10 h-10 text-accent-500" />,
    title: "Mobile Oil Change",
    description: "Premium synthetic or conventional oil changes performed right in your driveway. No waiting rooms, no hassle."
  },
  {
    icon: <Truck className="w-10 h-10 text-accent-500" />,
    title: "Fleet Maintenance",
    description: "Keep your work vans and business vehicles running smoothly. We come to your job site or office."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent-500" />,
    title: "On-Site Diagnostics",
    description: "Professional diagnostic tools to identify issues with your car, truck, or SUV without a tow truck."
  },
  {
    icon: <Wrench className="w-10 h-10 text-accent-500" />,
    title: "General Repair",
    description: "From filter replacements to fluid top-offs and battery checks. Comprehensive care for your vehicle."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-raven-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-500 font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            What We Do
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Expert Service. <span className="text-gray-500">Zero Inconvenience.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Ravenhaus Mobile is a mobile oil change service based in St. George, Utah, offering convenient, on-site maintenance for cars, trucks, and SUVs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border border-white/5 p-8 hover:border-accent-500/50 transition-colors duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
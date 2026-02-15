import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Austin",
    rating: 5,
    text: "Austin was super helpful and affordable! Really appreciate the quick response and professional service.",
    type: "Google Review"
  },
  {
    id: 2,
    author: "Local Business Owner",
    rating: 5,
    text: "Ravenhaus serviced one of our work vans. The convenience of having them come to us saved us hours of downtime.",
    type: "Google Review"
  },
  {
    id: 3,
    author: "Sarah J.",
    rating: 5,
    text: "Best oil change experience I've had in St. George. No waiting in a lobby, just great service at my house.",
    type: "Google Review"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-0 right-0 text-[20vw] leading-none font-bold text-white/[0.02] select-none pointer-events-none">
        5.0
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <h3 className="text-accent-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Testimonials
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Client Trust
            </h2>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={24} />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0 Star Rating on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-raven-800 p-8 relative rounded-sm"
            >
              <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
              <div className="flex gap-1 text-accent-500 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-8 italic">"{review.text}"</p>
              <div>
                <p className="text-white font-bold uppercase tracking-wide">{review.author}</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{review.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
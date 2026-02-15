import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve St. George, Utah and surrounding areas including Washington and Santa Clara. We come directly to your home or office."
  },
  {
    question: "What type of oil do you use?",
    answer: "We use high-quality synthetic and conventional oils that meet or exceed manufacturer specifications for your specific vehicle."
  },
  {
    question: "How long does a service take?",
    answer: "A standard oil change and inspection typically takes about 30-45 minutes. Since we come to you, you don't have to wait in a lobby."
  },
  {
    question: "Do you perform other services?",
    answer: "Yes! In addition to oil changes, we offer filter replacements, fluid top-offs, battery checks, and general maintenance for cars, trucks, and SUVs."
  }
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-raven-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our mobile service.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 bg-black/50 overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="text-accent-500 flex-shrink-0 ml-4" />
                ) : (
                  <Plus className="text-gray-500 flex-shrink-0 ml-4" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
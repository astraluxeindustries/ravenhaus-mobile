import React from 'react';
import { CalendarCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionId } from '../types';

const steps = [
  {
    icon: <CalendarCheck className="w-8 h-8 text-accent" />,
    title: "Book Your Time",
    description: "Call or text us to schedule a time that fits your schedule perfectly."
  },
  {
    icon: <MapPin className="w-8 h-8 text-accent" />,
    title: "We Come to You",
    description: "Whether you're at home, work, or school in St. George, we meet you there."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
    title: "Service & Go",
    description: "We complete the maintenance professionally, leaving no mess behind."
  }
];

const Process: React.FC = () => {
  return (
    <section id={SectionId.PROCESS} className="py-24 bg-zinc-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Maintenance Made <br/>
              <span className="text-zinc-500">Effortless.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Ravenhaus Mobile removes the hassle of traditional auto shops. No waiting rooms, no upselling, just honest work at your convenience.
            </p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent blur-[100px] opacity-10 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1530046339160-7115b3e03eb6?auto=format&fit=crop&q=80&w=1200" 
              alt="Mobile mechanic process" 
              className="relative rounded-3xl shadow-2xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
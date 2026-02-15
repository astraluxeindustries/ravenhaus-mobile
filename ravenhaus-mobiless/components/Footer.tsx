import React from 'react';
import { Link } from 'react-scroll';
import { SectionId } from '../types';
import { COMPANY_NAME, LOCATION_CITY } from '../constants';
import { Instagram, Music2 } from 'lucide-react'; // Music2 as generic replacement for TikTok in Lucide

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-tighter mb-2">
              RAVEN<span className="text-accent">HAUS</span>
            </h2>
            <p className="text-zinc-500 text-sm">{LOCATION_CITY}</p>
          </div>

          <div className="flex gap-8">
             <Link to={SectionId.HOME} smooth={true} className="text-zinc-400 hover:text-white cursor-pointer transition-colors text-sm">Home</Link>
             <Link to={SectionId.SERVICES} smooth={true} className="text-zinc-400 hover:text-white cursor-pointer transition-colors text-sm">Services</Link>
             <Link to={SectionId.FAQ} smooth={true} className="text-zinc-400 hover:text-white cursor-pointer transition-colors text-sm">FAQ</Link>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-music-2"
              >
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
            </a>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-xs">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
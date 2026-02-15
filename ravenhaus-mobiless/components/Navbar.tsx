import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to={SectionId.HOME} smooth={true} duration={500}>
              <h1 className="text-2xl font-bold text-white tracking-tighter">
                RAVEN<span className="text-accent">HAUS</span>
                <span className="text-xs font-medium text-zinc-400 block tracking-widest uppercase">Mobile</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                smooth={true}
                duration={500}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} 
              className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-zinc-200 transition-all transform hover:scale-105"
            >
              <Phone size={16} />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute w-full border-b border-white/10">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} 
              className="block w-full text-center mt-4 bg-accent text-white px-5 py-3 rounded-lg font-bold"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
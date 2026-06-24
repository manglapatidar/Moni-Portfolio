import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: '01. About', href: '#about' },
  { name: '02. Skills', href: '#skills' },
  { name: '03. Experience', href: '#experience' },
  { name: '04. Projects', href: '#projects' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 font-mono ${scrolled ? 'bg-[#0A0D12]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[var(--color-cyan-accent)]/10' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-xl font-bold tracking-wider hover:text-[var(--color-cyan-accent)] transition-colors flex items-center group">
              <span className="text-[var(--color-cyan-accent)] mr-1 group-hover:-translate-x-1 transition-transform">[</span>
              <span className="text-white lowercase">mp</span>
              <span className="text-[var(--color-cyan-accent)] ml-1 group-hover:translate-x-1 transition-transform">]</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-8 relative">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm text-gray-400 hover:text-white transition-colors group py-2"
                >
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--color-cyan-accent)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="text-gray-500">{link.name.split(' ')[0]}</span> {link.name.split(' ')[1]}
                </a>
              ))}
            </div>
            
            <a 
              href="/resume.pdf" 
              download="Mangla_Patidar_Resume.pdf"
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-2 border border-[var(--color-cyan-accent)] text-[var(--color-cyan-accent)] px-6 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-cyan-accent)] hover:text-black transition-all group"
            >
              <span>Resume</span>
              <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[var(--color-cyan-accent)] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0A0D12] border-b border-[var(--color-cyan-accent)]/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const targetId = link.href.replace('#', '');
                    const elem = document.getElementById(targetId);
                    if (elem) {
                      setTimeout(() => {
                        elem.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="block text-lg text-gray-400 hover:text-white transition-colors"
                >
                  <span className="text-gray-500">{link.name.split(' ')[0]}</span> {link.name.split(' ')[1]}
                </a>
              ))}
              <div className="pt-2">
                <a 
                  href="/resume.pdf" 
                  download="Mangla_Patidar_Resume.pdf"
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 border border-[var(--color-cyan-accent)] text-[var(--color-cyan-accent)] px-6 py-3 rounded-full text-base font-medium hover:bg-[var(--color-cyan-accent)] hover:text-black transition-all w-max mx-auto"
                >
                  <span>Resume</span>
                  <Download size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

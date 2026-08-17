import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, Sparkles, Terminal } from 'lucide-react';
import { sound } from '../utils/SoundEngine';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlight calculation
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const isNowOn = sound.toggleSound();
    setSoundEnabled(isNowOn);
    if (isNowOn) sound.playClick();
  };

  const handleLinkClick = (href) => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#07090E]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onMouseEnter={() => sound.playHover()}
          onClick={() => handleLinkClick('#home')}
          className="group flex items-center space-x-3 interactive"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-cyan-accent)] to-[var(--color-violet-accent)] p-[1px] shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all">
            <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center">
              <Terminal size={18} className="text-[var(--color-cyan-accent)] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg tracking-wider text-white group-hover:text-[var(--color-cyan-accent)] transition-colors">
              MANGLA<span className="text-[var(--color-cyan-accent)]">.</span>
            </span>
            <span className="text-[9px] font-mono text-gray-400 tracking-widest uppercase -mt-1">
              AI & Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => sound.playHover()}
                onClick={() => handleLinkClick(item.href)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 interactive ${
                  isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[var(--color-cyan-accent)]/20 to-[var(--color-violet-accent)]/20 rounded-full border border-[var(--color-cyan-accent)]/40 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Audio FX + Resume/Contact CTA) */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Audio FX Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => sound.playHover()}
            title={soundEnabled ? 'Mute UI Sound FX' : 'Enable UI Sound FX'}
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[var(--color-cyan-accent)] transition-all interactive flex items-center justify-center"
          >
            {soundEnabled ? (
              <Volume2 size={18} className="text-[var(--color-cyan-accent)]" />
            ) : (
              <VolumeX size={18} className="text-gray-500" />
            )}
          </button>

          {/* Hire Me / Contact CTA */}
          <a
            href="#contact"
            onMouseEnter={() => sound.playHover()}
            onClick={() => handleLinkClick('#contact')}
            className="relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-blue-accent)] text-black text-xs font-bold font-mono uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:scale-105 transition-all interactive"
          >
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Mobile Controls & Hamburger */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleAudio}
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-300"
          >
            {soundEnabled ? <Volume2 size={16} className="text-[var(--color-cyan-accent)]" /> : <VolumeX size={16} />}
          </button>
          
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Glass Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel border-t border-white/10 mt-3 px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className="text-base font-mono text-gray-300 hover:text-[var(--color-cyan-accent)] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex justify-center">
                <a
                  href="#contact"
                  onClick={() => handleLinkClick('#contact')}
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-blue-accent)] text-black font-bold font-mono text-xs uppercase tracking-wider"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

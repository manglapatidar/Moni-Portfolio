import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, ArrowUp, Terminal } from 'lucide-react';
import { personalInfo } from '../data/data';
import { sound } from '../utils/SoundEngine';

const Footer = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#07090E] relative overflow-hidden">
      
      {/* Glow Line Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-cyan-accent)]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <Terminal size={18} className="text-[var(--color-cyan-accent)]" />
          <span className="text-white text-sm font-bold tracking-wider">
            MANGLA PATIDAR <span className="text-[var(--color-cyan-accent)]">//</span> PORTFOLIO
          </span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 items-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="text-gray-400 hover:text-[var(--color-cyan-accent)] transition-colors interactive"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="text-gray-400 hover:text-[var(--color-cyan-accent)] transition-colors interactive"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            onMouseEnter={() => sound.playHover()}
            className="text-gray-400 hover:text-[var(--color-cyan-accent)] transition-colors interactive"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Back To Top Button */}
        <div className="flex items-center space-x-4">
          <span className="text-xs text-gray-500">© 2026 MANGLA PATIDAR</span>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[var(--color-cyan-accent)] transition-all interactive flex items-center space-x-2 text-xs"
          >
            <span>TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

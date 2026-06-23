import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/data';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-[var(--card-border)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-mono">
        
        <div className="flex space-x-6 mb-6">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[var(--color-cyan-accent)] transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[var(--color-cyan-accent)] transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-[var(--color-cyan-accent)] transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-xs text-gray-600 text-center">
          <p>© 2026 Mangla Patidar. All rights reserved.</p>
          <p className="mt-2 text-gray-700 select-none">SYS.STATUS: ONLINE</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

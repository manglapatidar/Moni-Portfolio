import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Giant faded background number */}
      <div className="absolute top-0 right-0 md:-right-10 text-[20rem] font-bold font-heading text-white opacity-[0.02] leading-none pointer-events-none select-none">
        05
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm border border-[var(--color-cyan-accent)]/30 bg-[var(--color-cyan-accent)]/10 mb-8 font-mono text-xs text-[var(--color-cyan-accent)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan-accent)] animate-pulse"></span>
            <span>SYSTEM.READY</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Let's build something amazing.
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-12">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="glass-card p-8 rounded-sm border border-[var(--card-border)] w-full max-w-xl mx-auto text-left font-mono text-sm md:text-base mb-12 relative group hover:border-[var(--color-cyan-accent)]/50 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-cyan-accent)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex">
                <span className="text-[var(--color-violet-accent)] w-24 shrink-0">Location:</span>
                <span className="text-gray-100">Sitamau, Mandsaur, Madhya Pradesh</span>
              </div>
              <div className="flex">
                <span className="text-[var(--color-violet-accent)] w-24 shrink-0">Phone:</span>
                <span className="text-gray-100">+91 7879536876</span>
              </div>
              <div className="flex">
                <span className="text-[var(--color-violet-accent)] w-24 shrink-0">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="text-[var(--color-cyan-accent)] hover:underline underline-offset-4">{personalInfo.email}</a>
              </div>
            </div>
          </div>
          
          <a href={`mailto:${personalInfo.email}`} className="inline-block border border-[var(--color-cyan-accent)] text-[var(--color-cyan-accent)] px-8 py-4 rounded-sm font-bold font-mono hover:bg-[var(--color-cyan-accent)]/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

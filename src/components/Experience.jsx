import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Giant faded background number */}
      <div className="absolute top-0 right-0 md:-right-10 text-[20rem] font-bold font-heading text-white opacity-[0.02] leading-none pointer-events-none select-none">
        03
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">Experience</h2>
          <div className="h-1 w-20 bg-[var(--color-cyan-accent)]"></div>
        </motion.div>

        <div className="relative pl-6 md:pl-8 border-l border-[var(--card-border)]">
          {/* Animated Glow Line on the border */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-[-1px] w-[2px] bg-[var(--color-cyan-accent)] shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          />

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative glass-card p-6 md:p-8 rounded-sm hover:border-[var(--color-cyan-accent)]/50 transition-colors group"
          >
            {/* Timeline Dot */}
            <div className="absolute top-8 -left-[31px] md:-left-[39px] w-4 h-4 rounded-full bg-[var(--bg-color)] border-2 border-[var(--color-cyan-accent)] z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:bg-[var(--color-cyan-accent)] transition-colors" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[var(--color-cyan-accent)] transition-colors">Software Developer Trainee (MERN)</h3>
                <h4 className="text-lg font-mono text-gray-400 mt-1">eSkill Indore</h4>
              </div>
              <div className="mt-2 md:mt-0 px-3 py-1 bg-[var(--color-cyan-accent)]/10 border border-[var(--color-cyan-accent)]/30 rounded-sm font-mono text-xs text-[var(--color-cyan-accent)] inline-block w-max">
                Jul 2025 – Present | Internship
              </div>
            </div>

            <ul className="space-y-3 text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-sans">
              <li className="flex items-start">
                <span className="text-[var(--color-cyan-accent)] mr-3 mt-1 font-mono">{">"}</span>
                <span>Built full-stack applications with React.js, Node.js, Express.js & MongoDB for better performance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-cyan-accent)] mr-3 mt-1 font-mono">{">"}</span>
                <span>Integrated AI APIs (Google Gemini, Claude) for intelligent content generation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-cyan-accent)] mr-3 mt-1 font-mono">{">"}</span>
                <span>Implemented JWT authentication, role-based access control & secure REST APIs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-cyan-accent)] mr-3 mt-1 font-mono">{">"}</span>
                <span>Managed file uploads via Multer and cloud media storage via Cloudinary.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-cyan-accent)] mr-3 mt-1 font-mono">{">"}</span>
                <span>Used Redux Toolkit for global state management across complex applications.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--card-border)]">
              {['React', 'Node.js', 'MongoDB', 'Redux', 'JWT', 'Gemini API', 'Claude API'].map((tech, i) => (
                <span key={i} className="text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
                  #{tech.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

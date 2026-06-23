import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Faded Background Number */}
      <div className="absolute top-0 right-0 md:-right-10 text-[20rem] font-bold font-heading text-white opacity-[0.02] leading-none pointer-events-none select-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center"
        >
          <span className="font-mono text-[var(--color-cyan-accent)] mr-4 md:mr-6 text-base md:text-lg font-bold">01</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white tracking-tighter whitespace-nowrap">Who I Am</h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent ml-6 md:ml-10"></div>
        </motion.div>

        <div className="flex flex-col space-y-6">
          
          {/* Top Row: Bio & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Bio Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#10131A] border border-[#232732] rounded-[1.5rem] p-8 md:p-10 hover:border-[#303542] transition-colors"
            >
              <div className="font-mono text-gray-500 text-sm mb-6">// bio.txt</div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I am a computer science student specializing in <span className="text-white font-bold">Full-Stack Development</span> from Mandsaur University. My journey blends the logic of software engineering with the power of <span className="text-white font-bold">AI integration</span>.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I build things that are fast, intelligent, and beautiful — from secure REST APIs to AI-driven web applications using Gemini & Claude.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#10131A] border border-[#232732] rounded-[1.5rem] p-8 md:p-10 hover:border-[#303542] transition-colors"
            >
              <div className="font-mono text-gray-500 text-sm mb-6">// education.json</div>
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-[#0a2520] rounded-xl flex items-center justify-center mr-6 shrink-0 border border-[#0d3b32]">
                  <GraduationCap className="text-[#00e5a0]" size={28} />
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold font-heading mb-1">BCA – Computer Apps</h3>
                  <p className="text-gray-400 text-base mb-1">Mandsaur University, Mandsaur</p>
                  <p className="font-mono text-gray-500 text-sm">2023 – Present</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <div className="px-4 py-1.5 bg-[#0a2520] border border-[#0d3b32] rounded-full">
                  <span className="font-mono text-[#00e5a0] text-sm font-bold tracking-widest">CGPA: 7.89</span>
                </div>
                <div className="flex-1 h-1.5 bg-[#1a1f2b] rounded-full overflow-hidden flex">
                  <div className="h-full bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-violet-accent)] w-[78.9%]"></div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Row: 4 Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#10131A] border border-[#232732] rounded-[1.5rem] py-10 flex flex-col items-center justify-center hover:border-[var(--color-cyan-accent)]/30 transition-colors group"
            >
              <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-violet-accent)] mb-3 group-hover:scale-110 transition-transform">
                MERN
              </h3>
              <span className="text-gray-500 text-sm font-medium">Stack</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#10131A] border border-[#232732] rounded-[1.5rem] py-10 flex flex-col items-center justify-center hover:border-[var(--color-cyan-accent)]/30 transition-colors group"
            >
              <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-violet-accent)] mb-3 group-hover:scale-110 transition-transform">
                AI/ML
              </h3>
              <span className="text-gray-500 text-sm font-medium">Enthusiast</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#10131A] border border-[#232732] rounded-[1.5rem] py-10 flex flex-col items-center justify-center hover:border-[var(--color-cyan-accent)]/30 transition-colors group"
            >
              <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tighter text-[var(--color-cyan-accent)] mb-3 group-hover:scale-110 transition-transform">
                &lt; 1
              </h3>
              <span className="text-gray-500 text-sm font-medium">Years Exp</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#10131A] border border-[#232732] rounded-[1.5rem] py-10 flex flex-col items-center justify-center hover:border-[var(--color-cyan-accent)]/30 transition-colors group"
            >
              <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tighter text-[var(--color-cyan-accent)] mb-3 group-hover:scale-110 transition-transform">
                5+
              </h3>
              <span className="text-gray-500 text-sm font-medium">Projects</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

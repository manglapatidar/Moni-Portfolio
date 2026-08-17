import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';
import { education, experience } from '../data/data';
import { sound } from '../utils/SoundEngine';

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--color-cyan-accent)]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-cyan-accent)]/30 bg-[var(--color-cyan-accent)]/10 mb-4">
            <Briefcase size={14} className="text-[var(--color-cyan-accent)]" />
            <span className="text-[var(--color-cyan-accent)] font-mono text-xs font-semibold tracking-widest uppercase">
              Career & Education
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tighter">
            Experience & <span className="text-gradient">Timeline</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto font-sans">
            Professional trajectory in full-stack engineering, academic milestones, and hands-on developer training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-7">
            <h3 className="font-heading text-2xl font-bold text-white mb-8 flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[var(--color-cyan-accent)]/10 border border-[var(--color-cyan-accent)]/30 text-[var(--color-cyan-accent)]">
                <Briefcase size={20} />
              </div>
              <span>Professional Experience</span>
            </h3>

            <div className="relative pl-6 md:pl-8 border-l border-white/15">
              {/* Glowing vertical line */}
              <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-[var(--color-cyan-accent)] via-[var(--color-blue-accent)] to-transparent shadow-[0_0_15px_#22d3ee]"></div>

              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => sound.playHover()}
                  className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[var(--color-cyan-accent)]/40 transition-all relative mb-8 group interactive"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute top-8 -left-[31px] md:-left-[41px] w-5 h-5 rounded-full bg-[#07090E] border-2 border-[var(--color-cyan-accent)] shadow-[0_0_15px_#22d3ee] group-hover:bg-[var(--color-cyan-accent)] transition-all"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold font-heading text-white group-hover:text-[var(--color-cyan-accent)] transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-gray-400 font-mono text-xs mt-1 flex items-center space-x-2">
                        <span className="text-white font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <MapPin size={12} />
                          <span>{exp.location}</span>
                        </span>
                      </p>
                    </div>

                    <div className="mt-2 sm:mt-0 px-3 py-1 rounded-full bg-[var(--color-cyan-accent)]/10 border border-[var(--color-cyan-accent)]/30 font-mono text-xs font-bold text-[var(--color-cyan-accent)] w-max">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <span className="text-[var(--color-cyan-accent)] font-mono font-bold mt-0.5">{`>`}</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 font-mono text-xs">
                    {['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Gemini API', 'Claude API', 'JWT'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Milestone Column */}
          <div className="lg:col-span-5">
            <h3 className="font-heading text-2xl font-bold text-white mb-8 flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[var(--color-violet-accent)]/10 border border-[var(--color-violet-accent)]/30 text-[var(--color-violet-accent)]">
                <GraduationCap size={20} />
              </div>
              <span>Education Journey</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => sound.playHover()}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[var(--color-violet-accent)]/40 transition-all interactive group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-violet-accent)]/10 border border-[var(--color-violet-accent)]/30 font-mono text-[10px] font-bold text-[var(--color-violet-accent)] uppercase">
                        {edu.status}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-white mt-2 group-hover:text-[var(--color-violet-accent)] transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-400 text-xs font-sans mt-1">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="text-right shrink-0 ml-4">
                      <span className="font-mono text-xs font-bold text-[var(--color-cyan-accent)] bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg inline-block">
                        {edu.score}
                      </span>
                      <span className="block text-[11px] font-mono text-gray-500 mt-1">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;

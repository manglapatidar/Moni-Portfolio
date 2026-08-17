import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, Award, Sparkles, Terminal, Code, Cpu, ShieldCheck, FileDown } from 'lucide-react';
import { sound } from '../utils/SoundEngine';

const highlights = [
  {
    title: 'Full Stack MERN',
    desc: 'Building modern, performant web applications with React, Node.js, Express, and MongoDB.',
    icon: Code,
  },
  {
    title: 'AI Integration',
    desc: 'Connecting web applications to Google Gemini and Anthropic Claude APIs for automated smart content generation.',
    icon: Sparkles,
  },
  {
    title: 'JWT & Security',
    desc: 'Implementing robust authentication, Bcrypt password hashing, role-based access control, and Cloudinary media pipelines.',
    icon: ShieldCheck,
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-[var(--color-cyan-accent)]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-cyan-accent)]/30 bg-[var(--color-cyan-accent)]/10 mb-4">
            <User size={14} className="text-[var(--color-cyan-accent)]" />
            <span className="text-[var(--color-cyan-accent)] font-mono text-xs font-semibold tracking-widest uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tighter">
            Architecting <span className="text-gradient">Digital Solutions</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto font-sans">
            Passionate software developer combining full-stack MERN expertise with modern AI APIs to build high-impact web products.
          </p>
        </div>

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Terminal size={20} className="text-[var(--color-cyan-accent)]" />
                  <h3 className="font-heading text-2xl font-bold text-white">Developer Story</h3>
                </div>

                <a
                  href="/resume.pdf"
                  download="Mangla_Patidar_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl border border-[var(--color-cyan-accent)]/40 bg-[var(--color-cyan-accent)]/10 text-[var(--color-cyan-accent)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--color-cyan-accent)] hover:text-black transition-all interactive"
                >
                  <FileDown size={14} />
                  <span>Resume PDF</span>
                </a>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6 font-sans">
                I am a <strong className="text-white">Software Developer Trainee</strong> at <span className="text-[var(--color-cyan-accent)] font-semibold">eSkill Indore</span> (since Jul 2025) and currently pursuing my <strong className="text-white">Master of Computer Applications (MCA)</strong> at Indore International College (RGPV).
              </p>

              <p className="text-gray-300 text-base leading-relaxed mb-6 font-sans">
                With a solid foundation from my <strong className="text-white">Bachelor of Computer Applications (BCA)</strong> (CGPA 7.96), I bridge the gap between complex backend systems and beautiful frontend user experiences. My focus is engineering secure, high-scale web platforms integrated with Generative AI APIs like Gemini & Claude.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-gray-400 block mb-1">LOCATION</span>
                <span className="text-white font-bold">Indore, MP</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-gray-400 block mb-1">DEGREE</span>
                <span className="text-[var(--color-cyan-accent)] font-bold">MCA Pursuing</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-gray-400 block mb-1">SPECIALTY</span>
                <span className="text-[var(--color-violet-accent)] font-bold">MERN + AI</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Stack */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => sound.playHover()}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[var(--color-cyan-accent)]/40 transition-all flex items-start space-x-4 interactive"
                >
                  <div className="p-3 rounded-xl bg-[var(--color-cyan-accent)]/10 border border-[var(--color-cyan-accent)]/30 text-[var(--color-cyan-accent)] shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

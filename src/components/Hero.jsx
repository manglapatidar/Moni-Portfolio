import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaJsSquare } from 'react-icons/fa';

const TypingEffect = ({ text }) => {
  return (
    <div className="font-mono text-xl md:text-2xl mt-4 mb-6 flex items-center">
      <span className="text-[var(--color-cyan-accent)] mr-3 font-bold">//</span>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "steps(40)" }}
        className="overflow-hidden whitespace-nowrap inline-block border-r-2 border-[var(--color-cyan-accent)] pr-1"
        style={{ display: "inline-block" }}
      >
        <span className="text-gray-300">Full Stack MERN Developer</span>
      </motion.span>
    </div>
  );
};

const FloatingIcon = ({ Icon, color, delay, top, left, right, bottom }) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute z-30 p-2 rounded-full bg-[#0A0D12] border border-[var(--color-cyan-accent)]/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center`}
    style={{ top, left, right, bottom }}
  >
    <Icon size={20} color={color} />
  </motion.div>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-10 lg:mt-0">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:col-span-7 z-20"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-cyan-accent)]/40 bg-[var(--color-cyan-accent)]/10 w-max mb-8 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan-accent)] animate-pulse"></span>
            <span className="text-[var(--color-cyan-accent)] font-mono text-xs font-semibold tracking-widest uppercase">Available for work</span>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm md:text-base font-mono text-gray-500 mb-2">
              {"> "}Hello, World! I'm
            </h2>
            
            {/* Huge Display Name */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] leading-none font-bold font-display text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] -ml-1">
              MANGLA
            </h1>
            
            <TypingEffect />
          </div>
          
          <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mb-10 font-sans">
            Passionate Full Stack <span className="text-white font-bold">MERN</span> Developer & AI Integration Enthusiast building high-performance, intelligent web applications.
          </p>

          <div className="flex">
            <a href="#projects" className="flex items-center space-x-3 bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-violet-accent)] text-black px-8 py-3.5 rounded-full font-bold shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(129,140,248,0.6)] hover:scale-105 transition-all">
              <span className="text-sm tracking-wider uppercase">View Work</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Photo Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center lg:justify-end h-[400px] md:h-[500px]"
        >
          <div className="relative w-full max-w-[400px] h-full flex items-end justify-center">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--color-cyan-accent)] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

            {/* Profile Image Container */}
            <div className="relative z-10 w-full h-full rounded-lg overflow-hidden border border-[var(--color-cyan-accent)]/20 shadow-[0_0_40px_rgba(34,211,238,0.15)] bg-[#0A0D12]">
              <img 
                src="/Monudii.png" 
                alt="Mangla Patidar" 
                className="w-full h-full object-cover object-bottom"
              />
              
              {/* Scanline Animation */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                className="absolute left-0 right-0 h-1 bg-[var(--color-cyan-accent)] shadow-[0_0_20px_2px_rgba(34,211,238,0.8)] z-20 opacity-80"
              />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-cyan-accent)]/50 z-20"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-cyan-accent)]/50 z-20"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-cyan-accent)]/50 z-20"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-cyan-accent)]/50 z-20"></div>
              
              {/* Bottom Label inside image box */}
              <div className="absolute bottom-4 right-4 bg-[#0A0D12]/80 backdrop-blur-sm border border-[var(--color-cyan-accent)]/30 px-2 py-1 rounded-sm font-mono text-[10px] text-[var(--color-cyan-accent)] font-bold z-20">
                AI_READY
              </div>
            </div>

            {/* Floating Icons */}
            <FloatingIcon Icon={FaReact} color="#61DAFB" delay={0} top="10%" right="-5%" />
            <FloatingIcon Icon={FaNodeJs} color="#339933" delay={1.5} bottom="30%" left="-10%" />
            <FloatingIcon Icon={FaJsSquare} color="#F7DF1E" delay={0.7} bottom="20%" right="-10%" />
            <FloatingIcon Icon={FaPython} color="#3776AB" delay={2} top="40%" left="-5%" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

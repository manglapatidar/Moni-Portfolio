import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Mic, Volume2 } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { sound } from '../utils/SoundEngine';

const roles = [
  'Full Stack MERN Developer',
  'AI Integration Specialist',
  'REST API & System Architect',
];

const MultiRoleTypewriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="font-mono text-xl sm:text-2xl md:text-3xl mt-4 mb-6 flex items-center h-10">
      <span className="text-[var(--color-cyan-accent)] mr-3 font-bold">{`//`}</span>
      <span className="text-gray-200 border-r-2 border-[var(--color-cyan-accent)] pr-1 font-semibold tracking-wide">
        {roles[index].substring(0, subIndex)}
      </span>
    </div>
  );
};

const TiltProfileCard = ({ isSpeaking, handlePlayVoice }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [15, -15]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-15, 15]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000 flex justify-center items-center w-full h-full">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handlePlayVoice}
        className={`relative w-full max-w-[380px] h-[480px] rounded-3xl p-3 glass-panel border transition-all duration-300 interactive cursor-pointer group ${
          isSpeaking
            ? 'border-pink-400 shadow-[0_0_65px_rgba(244,114,182,0.7)] ring-2 ring-pink-400/50'
            : 'border-[var(--color-cyan-accent)]/30 shadow-[0_0_50px_rgba(34,211,238,0.25)]'
        }`}
      >
        {/* Glow ambient layer */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br transition-all duration-500 blur-xl ${
          isSpeaking
            ? 'from-pink-500/40 via-purple-400/30 to-[var(--color-cyan-accent)]/30 opacity-100'
            : 'from-[var(--color-cyan-accent)]/20 via-transparent to-[var(--color-violet-accent)]/20 opacity-60 group-hover:opacity-100'
        }`}></div>

        {/* Floating Speech Bubble */}
        <AnimatePresence>
          {isSpeaking && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 z-40 bg-[#07090E]/95 border border-pink-400/80 px-4 py-2.5 rounded-2xl shadow-[0_0_30px_rgba(244,114,182,0.6)] backdrop-blur-md flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-pink-300 font-bold max-w-[320px] text-center"
            >
              <Mic size={14} className="text-pink-400 animate-pulse shrink-0" />
              <span>"Hi, welcome to my portfolio! I'm Mangla Patidar..."</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#07090E] border-r border-b border-pink-400/80 rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Inner Card Frame */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#07090E] border border-white/10">
          
          {/* Original Clean Profile Photo */}
          <img
            src="/Monudii.png"
            alt="Mangla Patidar"
            className="w-full h-full object-cover object-bottom filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
          />

          {/* Laser Scanline */}
          <motion.div
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 3.5, ease: 'linear', repeat: Infinity }}
            className={`absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[var(--color-cyan-accent)] to-transparent shadow-[0_0_15px_#22d3ee] z-20 pointer-events-none ${
              isSpeaking ? 'opacity-100 shadow-[0_0_20px_#f472b6]' : 'opacity-80'
            }`}
          />

          {/* Cyber Corner HUD */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[var(--color-cyan-accent)] z-20"></div>
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[var(--color-cyan-accent)] z-20"></div>
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[var(--color-cyan-accent)] z-20"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[var(--color-cyan-accent)] z-20"></div>

          {/* Status Overlay HUD & Voice Trigger */}
          <div className="absolute bottom-4 left-3 right-3 bg-[#07090E]/90 backdrop-blur-md border border-[var(--color-cyan-accent)]/40 p-2.5 rounded-xl flex items-center justify-between z-20 shadow-lg">
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePlayVoice();
              }}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all interactive ${
                isSpeaking
                  ? 'bg-pink-500 text-black shadow-[0_0_20px_rgba(244,114,182,0.9)] animate-pulse'
                  : 'bg-[var(--color-cyan-accent)]/15 text-[var(--color-cyan-accent)] border border-[var(--color-cyan-accent)]/40 hover:bg-[var(--color-cyan-accent)] hover:text-black'
              }`}
            >
              <Volume2 size={15} className={isSpeaking ? 'animate-bounce' : ''} />
              <span>{isSpeaking ? 'FEMALE GREETING ACTIVE' : 'PLAY FEMALE VOICE 🔊'}</span>
            </button>

            {/* Audio Waveform */}
            <div className="flex items-center space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  animate={isSpeaking ? { height: ['4px', '20px', '6px', '24px', '4px'] } : { height: '6px' }}
                  transition={isSpeaking ? { duration: 0.25, repeat: Infinity, delay: i * 0.06 } : {}}
                  className={`w-1 rounded-full ${isSpeaking ? 'bg-pink-400' : 'bg-gray-600'}`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* Floating Tech Stack Badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 -right-4 p-3 rounded-2xl glass-panel border border-[var(--color-cyan-accent)]/40 shadow-[0_0_20px_rgba(34,211,238,0.3)] z-30 flex items-center space-x-2"
        >
          <FaReact size={24} className="text-[#61DAFB] animate-spin-slow" />
          <span className="text-xs font-mono font-bold text-white">React 19</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-4 -left-4 p-3 rounded-2xl glass-panel border border-[var(--color-violet-accent)]/40 shadow-[0_0_20px_rgba(129,140,248,0.3)] z-30 flex items-center space-x-2"
        >
          <Sparkles size={20} className="text-[var(--color-violet-accent)]" />
          <span className="text-xs font-mono font-bold text-white">Gemini & Claude AI</span>
        </motion.div>

      </motion.div>
    </div>
  );
};

const Hero = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handlePlayVoice = useCallback(() => {
    // 100% Guaranteed Female Audio Voice Stream Engine
    const fullScript = "Hi, welcome to my portfolio! I'm Mangla Patidar, a Full Stack MERN Developer and AI Integration Specialist. Feel free to explore my work.";
    const textEncoded = encodeURIComponent(fullScript);
    const femaleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${textEncoded}&tl=en&client=tw-ob`;

    const femaleAudio = new Audio(femaleTtsUrl);
    femaleAudio.playbackRate = 0.98;

    femaleAudio.onplay = () => setIsSpeaking(true);
    femaleAudio.onended = () => setIsSpeaking(false);
    femaleAudio.onerror = () => {
      // Fallback Web Speech API with forced female pitch = 1.6
      if (!('speechSynthesis' in window)) {
        setIsSpeaking(false);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(fullScript);
      utterance.pitch = 1.65; // High pitch female tone
      utterance.rate = 0.95;

      const voices = window.speechSynthesis.getVoices();
      const femaleKeywords = ['zira', 'jenny', 'samantha', 'victoria', 'karen', 'veena', 'female', 'siri', 'hazel'];
      const maleKeywords = ['david', 'mark', 'george', 'james', 'richard', 'adam', 'alex', 'male', 'daniel', 'steve'];

      let fVoice = voices.find(v => {
        const n = v.name.toLowerCase();
        const isMale = maleKeywords.some(m => n.includes(m));
        return !isMale && femaleKeywords.some(kw => n.includes(kw));
      });

      if (fVoice) utterance.voice = fVoice;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    };

    femaleAudio.play().catch(() => {
      // Autoplay gesture policy fallback using pitch = 1.65
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(fullScript);
        utterance.pitch = 1.65;
        utterance.rate = 0.95;

        const voices = window.speechSynthesis.getVoices();
        const femaleKeywords = ['zira', 'jenny', 'samantha', 'victoria', 'karen', 'veena', 'female', 'siri', 'hazel'];
        const maleKeywords = ['david', 'mark', 'george', 'james', 'richard', 'adam', 'alex', 'male', 'daniel', 'steve'];

        let fVoice = voices.find(v => {
          const n = v.name.toLowerCase();
          const isMale = maleKeywords.some(m => n.includes(m));
          return !isMale && femaleKeywords.some(kw => n.includes(kw));
        });

        if (fVoice) utterance.voice = fVoice;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    });
  }, []);

  // Autoplay female greeting on site load / visitor gesture
  useEffect(() => {
    let triggered = false;

    const autoPlay = () => {
      if (triggered) return;
      triggered = true;
      handlePlayVoice();

      window.removeEventListener('pointerdown', autoPlay);
      window.removeEventListener('keydown', autoPlay);
      window.removeEventListener('mousemove', autoPlay);
    };

    const timer = setTimeout(() => {
      autoPlay();
    }, 600);

    window.addEventListener('pointerdown', autoPlay);
    window.addEventListener('keydown', autoPlay);
    window.addEventListener('mousemove', autoPlay);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', autoPlay);
      window.removeEventListener('keydown', autoPlay);
      window.removeEventListener('mousemove', autoPlay);
    };
  }, [handlePlayVoice]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Neon Spotlight Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[var(--color-cyan-accent)]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--color-violet-accent)]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Intro Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-[var(--color-cyan-accent)]/30 bg-[var(--color-cyan-accent)]/10 w-max mb-6 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan-accent)] animate-pulse"></span>
            <span className="text-[var(--color-cyan-accent)] font-mono text-xs font-semibold tracking-widest uppercase">
              Available for Full-Stack & AI Roles
            </span>
          </div>

          {/* Greeting */}
          <div className="flex flex-col">
            <h3 className="text-base font-mono text-gray-400 mb-1 flex items-center space-x-2">
              <Terminal size={16} className="text-[var(--color-cyan-accent)]" />
              <span>Hello, World! I'm</span>
            </h3>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-none font-extrabold font-display tracking-tighter text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.15)] -ml-1">
              MANGLA <span className="text-gradient">PATIDAR</span>
            </h1>

            <MultiRoleTypewriter />
          </div>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8 font-sans">
            Crafting scalable <span className="text-white font-bold border-b border-[var(--color-cyan-accent)]">MERN Stack</span> web applications integrated with cutting-edge <span className="text-gradient font-bold">Generative AI APIs</span>. Specializing in high-performance backends, JWT security, and interactive user interfaces.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mb-10 py-3.5 px-4 sm:px-6 rounded-2xl glass-panel border border-white/10">
            <div>
              <div className="text-xl sm:text-3xl font-extrabold font-display text-white text-gradient">3+</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">Production Apps</div>
            </div>
            <div>
              <div className="text-base sm:text-2xl md:text-3xl font-extrabold font-display text-white text-gradient">Gemini & Claude</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">AI Integration</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-extrabold font-display text-white text-gradient">MCA</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">Current Pursuing</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="group flex items-center space-x-3 bg-gradient-to-r from-[var(--color-cyan-accent)] via-[var(--color-blue-accent)] to-[var(--color-violet-accent)] text-black px-8 py-4 rounded-2xl font-bold font-mono text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(129,140,248,0.7)] hover:scale-105 transition-all interactive"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="#contact"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="flex items-center space-x-2 px-7 py-4 rounded-2xl border border-white/20 glass-panel hover:bg-white/10 text-white font-mono text-sm font-semibold tracking-wider uppercase hover:border-[var(--color-cyan-accent)] transition-all interactive"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>

        {/* Right Interactive 3D Card Column with Clean Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <TiltProfileCard
            isSpeaking={isSpeaking}
            handlePlayVoice={handlePlayVoice}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

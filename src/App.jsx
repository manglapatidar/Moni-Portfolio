import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AmbientBackground from './components/AmbientBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] font-sans relative selection:bg-[var(--color-cyan-accent)]/30 selection:text-white">
      
      {/* Custom Spring Magnet Cursor */}
      <CustomCursor />

      {/* HTML5 Canvas Dynamic Connected Particle Mesh & Glow Orbs */}
      <AmbientBackground />

      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-cyan-accent)] via-[var(--color-blue-accent)] to-[var(--color-violet-accent)] origin-left z-[100] shadow-[0_0_15px_#22d3ee]"
        style={{ scaleX }}
      />

      {/* Global Scanline HUD Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-scanline opacity-40 mix-blend-overlay"></div>

      {/* Vignette Shadow Frame */}
      <div className="fixed inset-0 pointer-events-none z-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.85)]"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;

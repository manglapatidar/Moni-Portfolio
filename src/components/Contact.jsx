import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import { sound } from '../utils/SoundEngine';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-28 relative">
      
      {/* Ambient background aura */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-cyan-accent)]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-cyan-accent)]/30 bg-[var(--color-cyan-accent)]/10 mb-4">
            <Mail size={14} className="text-[var(--color-cyan-accent)]" />
            <span className="text-[var(--color-cyan-accent)] font-mono text-xs font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tighter">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto font-sans">
            Open for full-time software developer opportunities, AI integration projects, and collaborative technical builds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Copy Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => sound.playHover()}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[var(--color-cyan-accent)]/40 transition-all flex items-center justify-between interactive"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-[var(--color-cyan-accent)]/10 border border-[var(--color-cyan-accent)]/30 text-[var(--color-cyan-accent)]">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-gray-400 font-mono text-xs uppercase block">Direct Email</span>
                  <span className="text-white font-mono text-sm font-bold">{personalInfo.email}</span>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[var(--color-cyan-accent)] transition-all interactive"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* Quick Copy Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onMouseEnter={() => sound.playHover()}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[var(--color-cyan-accent)]/40 transition-all flex items-center justify-between interactive"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-[var(--color-violet-accent)]/10 border border-[var(--color-violet-accent)]/30 text-[var(--color-violet-accent)]">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-gray-400 font-mono text-xs uppercase block">Phone / WhatsApp</span>
                  <span className="text-white font-mono text-sm font-bold">{personalInfo.phone}</span>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[var(--color-cyan-accent)] transition-all interactive"
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 border border-white/10 flex items-center space-x-4"
            >
              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-gray-400 font-mono text-xs uppercase block">Current Base</span>
                <span className="text-white font-mono text-sm font-bold">{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Social Connect Links */}
            <div className="pt-4 flex items-center space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="flex-1 glass-card rounded-xl py-3.5 px-4 border border-white/10 hover:border-[var(--color-cyan-accent)] flex items-center justify-center space-x-2 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all interactive"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="flex-1 glass-card rounded-xl py-3.5 px-4 border border-white/10 hover:border-[var(--color-cyan-accent)] flex items-center justify-center space-x-2 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all interactive"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Message Transmitted!</h3>
                <p className="text-gray-400 text-sm font-sans max-w-sm">
                  Thank you for reaching out. I will respond to your message as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    onFocus={() => sound.playHover()}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#07090E]/80 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-cyan-accent)] focus:ring-1 focus:ring-[var(--color-cyan-accent)] font-sans text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    onFocus={() => sound.playHover()}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#07090E]/80 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-cyan-accent)] focus:ring-1 focus:ring-[var(--color-cyan-accent)] font-sans text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project or opportunity..."
                    onFocus={() => sound.playHover()}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#07090E]/80 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-cyan-accent)] focus:ring-1 focus:ring-[var(--color-cyan-accent)] font-sans text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-gradient-to-r from-[var(--color-cyan-accent)] via-[var(--color-blue-accent)] to-[var(--color-violet-accent)] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:scale-[1.02] transition-all interactive"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

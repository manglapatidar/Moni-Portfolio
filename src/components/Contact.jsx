import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import { sound } from '../utils/SoundEngine';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  const whatsappMessage = encodeURIComponent(
    "Hi Mangla, I visited your portfolio and would like to connect!"
  );
  const whatsappUrl = `https://wa.me/917879536876?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      
      {/* Ambient background aura */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[var(--color-cyan-accent)]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-cyan-accent)]/30 bg-[var(--color-cyan-accent)]/10 mb-4">
            <MessageSquare size={14} className="text-[var(--color-cyan-accent)]" />
            <span className="text-[var(--color-cyan-accent)] font-mono text-xs font-semibold tracking-widest uppercase">
              Instant Connect
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tighter">
            Let's Chat On <span className="text-gradient">WhatsApp</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Skip the forms! Click below to send a direct message on WhatsApp or reach out via Email.
          </p>
        </div>

        {/* Main Connect Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Direct WhatsApp Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden group interactive"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex items-start space-x-4 mb-6">
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                <FaWhatsapp size={36} />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  Fastest Response
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Direct WhatsApp Message
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-sans">
              Have an opportunity, project, or technical question? Send a direct message and get an instant response.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="flex-1 inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] hover:scale-105 transition-all interactive"
              >
                <FaWhatsapp size={20} />
                <span>Message on WhatsApp</span>
                <ExternalLink size={16} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl border border-white/20 glass-panel hover:bg-white/10 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:border-[var(--color-cyan-accent)] transition-all interactive"
              >
                <Mail size={18} />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Info Badges */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => sound.playHover()}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-[var(--color-cyan-accent)]/40 transition-all flex items-center justify-between interactive"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-[var(--color-cyan-accent)]/10 border border-[var(--color-cyan-accent)]/30 text-[var(--color-cyan-accent)]">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-gray-400 font-mono text-[11px] uppercase block">Email Address</span>
                  <span className="text-white font-mono text-xs sm:text-sm font-bold truncate block">{personalInfo.email}</span>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[var(--color-cyan-accent)] transition-all interactive shrink-0 ml-2"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onMouseEnter={() => sound.playHover()}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-[var(--color-cyan-accent)]/40 transition-all flex items-center justify-between interactive"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-[var(--color-violet-accent)]/10 border border-[var(--color-violet-accent)]/30 text-[var(--color-violet-accent)]">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-gray-400 font-mono text-[11px] uppercase block">Phone / Call</span>
                  <span className="text-white font-mono text-xs sm:text-sm font-bold">{personalInfo.phone}</span>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[var(--color-cyan-accent)] transition-all interactive shrink-0 ml-2"
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-5 border border-white/10 flex items-center space-x-3.5"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-gray-400 font-mono text-[11px] uppercase block">Location</span>
                <span className="text-white font-mono text-xs sm:text-sm font-bold">{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Social Connect Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="glass-card rounded-xl py-3 px-4 border border-white/10 hover:border-[var(--color-cyan-accent)] flex items-center justify-center space-x-2 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all interactive"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="glass-card rounded-xl py-3 px-4 border border-white/10 hover:border-[var(--color-cyan-accent)] flex items-center justify-center space-x-2 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all interactive"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

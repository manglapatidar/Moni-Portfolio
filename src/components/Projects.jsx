import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, X, Maximize2, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { sound } from '../utils/SoundEngine';

const projects = [
  {
    id: '01',
    title: 'ImagineX',
    category: 'AI Powered',
    tag: 'Featured Project',
    description: 'A next-generation AI social media platform. Users receive intelligent AI-generated captions via Google Gemini API. Includes a full admin dashboard to manage users (ban/unban) and moderate posts, powered by a secure JWT-authenticated, Cloudinary-backed image pipeline.',
    tech: ['React', 'Vite', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Gemini API', 'JWT', 'Cloudinary'],
    github: 'https://github.com/manglapatidar',
    live: 'https://imaginex-1-h2ln.onrender.com/',
    images: ['/imaginex-1.png', '/imaginex-2.png', '/imaginex-3.png'],
    highlights: [
      'Google Gemini API Integration for automated caption synthesis',
      'Full-featured Admin moderation panel with User ban/unban capabilities',
      'Optimized Cloudinary image upload pipeline with bcrypt encryption'
    ]
  },
  {
    id: '02',
    title: 'NoteNest',
    category: 'AI Powered',
    tag: 'Featured Project',
    description: 'A comprehensive study notes sharing platform. Students upload PDF/text notes for admin-moderated publishing. Claude API automatically generates concise 5-point AI summaries for every note, complete with ratings, saved collections, and subject-wise filtering.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Claude API', 'JWT', 'Multer'],
    github: 'https://github.com/manglapatidar',
    live: 'https://notenest-9m18.onrender.com/',
    images: ['/notenest-1.png', '/notenest-2.png', '/notenest-3.png'],
    highlights: [
      'Anthropic Claude API engine producing 5-point instant document digests',
      'Admin approval workflow before public note listing',
      'Saved note collections & dynamic aggregation filtering'
    ]
  },
  {
    id: '03',
    title: 'Interior Hub',
    category: 'Full Stack',
    tag: 'Client Project',
    description: 'A full-stack business portfolio built for an interior designer. It features a public gallery for designs and a real-time inquiry system powered by Nodemailer that emails the designer directly. Includes a secure admin dashboard to upload and manage portfolio designs.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Nodemailer', 'JWT', 'Cloudinary'],
    github: 'https://github.com/manglapatidar',
    live: 'https://interior-hub.onrender.com',
    images: ['/interior-1.png', '/interior-2.png', '/interior-3.png'],
    highlights: [
      'Real-time inquiry system forwarding client emails via Nodemailer',
      'Secure interior design gallery management dashboard',
      'Responsive gallery lightbox with fluid image transitions'
    ]
  }
];

const categories = ['All Projects', 'AI Powered', 'Full Stack'];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass-panel border border-[var(--color-cyan-accent)]/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-[0_0_80px_rgba(34,211,238,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center space-x-3 mb-2">
          <span className="px-3 py-1 rounded-full bg-[var(--color-cyan-accent)]/10 border border-[var(--color-cyan-accent)]/30 font-mono text-xs text-[var(--color-cyan-accent)] font-bold">
            {project.category}
          </span>
          <span className="font-mono text-xs text-gray-400">{project.tag}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
          {project.title}
        </h2>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Feature Highlights */}
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan-accent)] mb-3 font-bold flex items-center space-x-2">
            <Sparkles size={14} />
            <span>Key Architectures & Features</span>
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                <span className="text-[var(--color-cyan-accent)] mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Badges */}
        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-3 font-bold">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg font-mono text-xs text-[var(--color-cyan-accent)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-blue-accent)] text-black font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-all"
            >
              <span>Visit Live Website</span>
              <ExternalLink size={16} />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClick()}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
          >
            <FaGithub size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeTab === 'All Projects'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-28 relative">
      
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-cyan-accent)]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-cyan-accent)]/30 bg-[var(--color-cyan-accent)]/10 mb-4">
            <Layers size={14} className="text-[var(--color-cyan-accent)]" />
            <span className="text-[var(--color-cyan-accent)] font-mono text-xs font-semibold tracking-widest uppercase">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tighter">
            Featured <span className="text-gradient">Architectures</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto font-sans">
            Full-stack web applications engineered with AI integration, secure JWT workflows, and responsive UI design.
          </p>

          {/* Filter Categories */}
          <div className="flex justify-center flex-wrap gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 interactive ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-blue-accent)] text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                    : 'glass-panel border border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-6 md:p-10 relative overflow-hidden border border-white/10 hover:border-[var(--color-cyan-accent)]/40 transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Text Info */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="font-display text-4xl font-extrabold text-[var(--color-cyan-accent)] tracking-wider">
                      {project.id}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4 group-hover:text-[var(--color-cyan-accent)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg font-mono text-xs text-[var(--color-cyan-accent)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 items-center">
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => sound.playHover()}
                        onClick={() => sound.playClick()}
                        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-blue-accent)] text-black font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all interactive"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={15} />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => sound.playHover()}
                      onClick={() => sound.playClick()}
                      className="flex items-center space-x-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all interactive"
                    >
                      <FaGithub size={16} />
                      <span>Code</span>
                    </a>

                    <button
                      onClick={() => {
                        sound.playClick();
                        setSelectedProject(project);
                      }}
                      onMouseEnter={() => sound.playHover()}
                      className="flex items-center space-x-1.5 px-4 py-3 rounded-xl border border-[var(--color-cyan-accent)]/30 text-[var(--color-cyan-accent)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--color-cyan-accent)]/10 transition-all interactive ml-auto"
                    >
                      <Maximize2 size={14} />
                      <span>Details</span>
                    </button>
                  </div>

                </div>

                {/* Right Visual Image Mockup */}
                <div
                  className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-[#07090E] border border-white/10 aspect-video group-hover:border-[var(--color-cyan-accent)]/30 transition-all cursor-pointer interactive"
                  onClick={() => {
                    sound.playClick();
                    setSelectedProject(project);
                  }}
                >
                  {project.images[0] && (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col space-y-2">
                    <Maximize2 size={24} className="text-[var(--color-cyan-accent)]" />
                    <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                      Click to Expand Project
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

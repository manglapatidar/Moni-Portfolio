import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: "01",
    title: "ImagineX",
    tag: "Client",
    description: "A next-generation AI social media platform. Users receive intelligent AI-generated captions via Google Gemini API. Includes a full admin dashboard to manage users and moderate posts, powered by a secure JWT-authenticated, Cloudinary-backed image pipeline.",
    tech: ["React", "Vite", "Redux", "Node.js", "MongoDB", "Gemini API", "JWT", "Cloudinary"],
    github: "https://github.com/manglapatidar",
    live: "#",
    images: ["/imaginex-1.png", "/imaginex-2.png", "/imaginex-3.png"]
  },
  {
    id: "02",
    title: "NoteNest",
    tag: "Client",
    description: "A comprehensive study notes sharing platform. Students upload PDF/text notes for admin-moderated publishing. Claude API automatically generates concise 5-point AI summaries for every note, complete with ratings, saved collections, and smart filtering.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Claude API", "JWT", "Multer"],
    github: "https://github.com/manglapatidar",
    live: "https://notenest-9m18.onrender.com/",
    images: ["/notenest-1.png", "/notenest-2.png", "/notenest-3.png"]
  },
  {
    id: "03",
    title: "Interior Hub",
    tag: "Client",
    description: "A full-stack business portfolio built for an interior designer. It features a public gallery for designs and a real-time inquiry system powered by Nodemailer that emails the designer directly. Includes a secure admin dashboard to easily upload and manage the design portfolio.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Nodemailer", "JWT", "Cloudinary"],
    github: "https://github.com/manglapatidar",
    live: "https://interior-hub.onrender.com",
    images: ["/interior-1.png", "/interior-2.png", "/interior-3.png"]
  }
];

const ProjectCard = ({ project, index, total }) => {
  return (
    <div 
      className="sticky w-full transition-all duration-500"
      style={{ 
        top: `calc(6rem + ${index * 1.5}rem)`, 
        zIndex: index * 10,
        marginBottom: index === total - 1 ? '0' : '50vh'
      }}
    >
      <div className="bg-[#0b0e14] border border-[#2a2e38] rounded-[2rem] overflow-hidden shadow-2xl p-6 md:p-8 w-full max-w-6xl mx-auto backdrop-blur-sm relative flex flex-col h-[85vh] min-h-[600px] max-h-[900px]">
        
        {/* Card Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 shrink-0">
          <div className="flex items-center space-x-6">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mix-blend-difference">
              {project.id}
            </h2>
            <div className="flex flex-col justify-center mt-2">
              <span className="font-mono text-gray-500 text-xs tracking-wider uppercase mb-1">{project.tag}</span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-200">{project.title}</h3>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-2 border border-gray-700 text-gray-300 px-5 py-2.5 rounded-full text-[10px] font-bold hover:bg-gray-800 hover:text-white transition-all uppercase tracking-wider"
            >
              <span>GitHub</span>
            </a>
            {project.live !== "#" && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center space-x-2 border border-gray-700 text-gray-300 px-6 py-3 rounded-full text-xs font-bold hover:bg-gray-800 hover:text-white transition-all group uppercase tracking-wider"
              >
                <span>Live Project</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <div className="relative w-full rounded-xl overflow-hidden bg-[#161a22] border border-[#2a2e38] flex-1 min-h-0 flex items-center justify-center p-4 mb-6">
          
          {/* Main Image */}
          {project.images[0] && (
            <img 
              src={project.images[0]} 
              alt={`${project.title} Main`}
              className="w-full h-full object-contain rounded-lg drop-shadow-2xl z-10"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}

          {/* Secondary Floating Image */}
          {project.images[1] && (
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-[40%] md:w-[35%] rounded-lg border border-[#2a2e38] shadow-2xl z-20 bg-[#0b0e14] overflow-hidden"
            >
              <img 
                src={project.images[1]} 
                alt={`${project.title} secondary`}
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>
          )}
          
          {/* Third Floating Image (if exists) */}
          {project.images[2] && (
            <motion.div 
              initial={{ y: -50, opacity: 0, x: -50 }}
              whileInView={{ y: 0, opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="hidden md:block absolute top-8 left-8 w-[25%] rounded-lg border border-[#2a2e38] shadow-2xl z-30 bg-[#0b0e14] overflow-hidden"
            >
              <img 
                src={project.images[2]} 
                alt={`${project.title} tertiary`}
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>
          )}

        </div>

        {/* Project Description (Below Images) */}
        <div className="shrink-0 pt-2 border-t border-white/5">
          <p className="text-gray-400 text-sm md:text-base mb-3 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded-sm font-mono text-[10px] text-[var(--color-cyan-accent)]">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Featured Work</h2>
          <div className="h-1 w-20 bg-[var(--color-cyan-accent)] mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">A selection of my best client and personal projects.</p>
        </div>

        {/* Stack Container */}
        <div className="relative pb-[10vh]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

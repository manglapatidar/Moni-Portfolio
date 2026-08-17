import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Server, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/SoundEngine';

const skillCategories = [
  {
    id: 'all',
    name: 'All Skills',
    icon: Code,
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Code,
    items: [
      { name: 'React.js', level: 90, desc: 'Component Architecture, Hooks, Custom State' },
      { name: 'Redux Toolkit', level: 85, desc: 'Global State Management, Async Thunks' },
      { name: 'Tailwind CSS', level: 92, desc: 'Responsive Glassmorphism & Custom Themes' },
      { name: 'JavaScript (ES6+)', level: 90, desc: 'Promises, Async/Await, Closures, DOM' },
      { name: 'React Router DOM', level: 88, desc: 'Client Routing, Protected Routes' },
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', level: 88, desc: 'Event Loop, Streams, NPM Libraries' },
      { name: 'Express.js', level: 90, desc: 'Middleware, Routing, Error Handling' },
      { name: 'MongoDB', level: 85, desc: 'Schema Design, Aggregations, Indexing' },
      { name: 'Mongoose', level: 88, desc: 'ORM, Population, Pre/Post Hooks' },
      { name: 'JWT Authentication', level: 92, desc: 'Token Auth, Bcrypt, Role Access' },
      { name: 'REST API Design', level: 90, desc: 'Clean Controllers, Modular Routes' },
    ]
  },
  {
    id: 'ai',
    name: 'AI & APIs',
    icon: Sparkles,
    highlight: true,
    items: [
      { name: 'Google Gemini API', level: 90, desc: 'Prompt Engineering, Multimodal Captions' },
      { name: 'Claude (Anthropic) API', level: 88, desc: 'Document Digests & Summaries' },
      { name: 'Cloudinary API', level: 85, desc: 'Image Upload, CDN Optimization' },
      { name: 'Nodemailer API', level: 82, desc: 'SMTP Email Delivery Systems' },
    ]
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    icon: Wrench,
    items: [
      { name: 'Git & GitHub', level: 88, desc: 'Branching, Merge Conflict Resolution' },
      { name: 'Multer', level: 85, desc: 'Multipart Form Data & File Uploads' },
      { name: 'Axios', level: 90, desc: 'HTTP Interceptors, Error Handling' },
      { name: 'Postman', level: 88, desc: 'API Endpoint Testing & Documentation' },
      { name: 'VS Code', level: 95, desc: 'Extensions, Debugging, Custom Config' },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return skillCategories.filter((c) => c.id !== 'all').flatMap((c) => c.items);
    }
    const cat = skillCategories.find((c) => c.id === activeCategory);
    return cat ? cat.items : [];
  };

  const displayedSkills = getSkillsToDisplay();

  return (
    <section id="skills" className="py-28 relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[var(--color-violet-accent)]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-cyan-accent)]/30 bg-[var(--color-cyan-accent)]/10 mb-4">
            <Cpu size={14} className="text-[var(--color-cyan-accent)]" />
            <span className="text-[var(--color-cyan-accent)] font-mono text-xs font-semibold tracking-widest uppercase">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tighter">
            Skills & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto font-sans">
            Specialized toolkit spanning full-stack web engineering, database architecture, and generative AI APIs.
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-3 mt-8">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveCategory(cat.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-mono text-xs tracking-wider transition-all duration-300 interactive ${
                    isActive
                      ? 'bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-blue-accent)] text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                      : 'glass-panel border border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => sound.playHover()}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[var(--color-cyan-accent)]/40 transition-all group interactive"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-[var(--color-cyan-accent)] group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[var(--color-cyan-accent)] transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-white transition-colors">
                  {skill.level}%
                </span>
              </div>

              <p className="text-gray-400 text-xs mb-4 font-sans leading-relaxed">
                {skill.desc}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-violet-accent)] rounded-full shadow-[0_0_10px_#22d3ee]"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

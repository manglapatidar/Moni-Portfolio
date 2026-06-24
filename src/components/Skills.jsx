import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "JavaScript (ES6+)", "React Router DOM"],
      isAi: false
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API Design", "JWT Authentication"],
      isAi: false
    },
    {
      title: "AI & APIs",
      skills: ["Google Gemini API", "Claude (Anthropic) API", "Prompt Engineering", "AI Content Generation"],
      isAi: true
    },
    {
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "Cloudinary", "Multer", "Axios", "Postman", "VS Code"],
      isAi: false
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Giant faded background number */}
      <div className="absolute top-0 right-0 md:-right-10 text-[20rem] font-bold font-heading text-white opacity-[0.02] leading-none pointer-events-none select-none">
        02
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-[var(--color-cyan-accent)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Skills List */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 border-b border-[var(--card-border)] pb-2">
                  {cat.isAi ? (
                    <span className="w-2 h-2 bg-[var(--color-violet-accent)] rounded-sm"></span>
                  ) : (
                    <span className="w-2 h-2 bg-[var(--color-cyan-accent)] rounded-sm"></span>
                  )}
                  <h3 className={`font-mono font-bold ${cat.isAi ? 'text-[var(--color-violet-accent)]' : 'text-gray-200'}`}>
                    {cat.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className={`px-3 py-1 text-xs md:text-sm font-medium border rounded-sm transition-all cursor-default
                        ${cat.isAi 
                          ? 'bg-[var(--color-violet-accent)]/10 text-[var(--color-violet-accent)] border-[var(--color-violet-accent)]/30 hover:border-[var(--color-violet-accent)] hover:shadow-[0_0_10px_rgba(129,140,248,0.4)] hover:-translate-y-0.5' 
                          : 'bg-[#0f172a]/50 text-gray-300 border-[var(--card-border)] hover:border-[var(--color-cyan-accent)] hover:text-[var(--color-cyan-accent)] hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:-translate-y-0.5'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Graph Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center items-center min-h-[300px]"
          >
            {/* Status Badges */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 z-20 flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#0A0D12] border border-[var(--color-cyan-accent)]/50 shadow-lg font-mono text-xs font-bold text-[var(--color-cyan-accent)]"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-cyan-accent)] animate-pulse"></span>
              <span>MERN.STACK // ACTIVE</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 md:left-10 z-20 flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#0A0D12] border border-[var(--color-violet-accent)]/50 shadow-lg font-mono text-xs font-bold text-[var(--color-violet-accent)]"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-violet-accent)] animate-pulse"></span>
              <span>AI // INTEGRATED</span>
            </motion.div>

            {/* SVG Network Graph */}
            <div className="relative w-full aspect-square max-w-[350px]">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-cyan-accent)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--color-violet-accent)" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Connecting Lines */}
                <motion.g stroke="url(#lineGrad)" strokeWidth="0.5" fill="none">
                  {[
                    "M50,50 L20,30", "M50,50 L80,30", "M50,50 L20,70", "M50,50 L80,70",
                    "M20,30 L50,15", "M80,30 L50,15", "M20,70 L50,85", "M80,70 L50,85",
                    "M20,30 L20,70", "M80,30 L80,70"
                  ].map((d, i) => (
                    <motion.path 
                      key={i} 
                      d={d}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: "easeInOut" }}
                    />
                  ))}
                </motion.g>

                {/* Nodes */}
                <motion.g filter="url(#glow)">
                  {[
                    { cx: 50, cy: 50, r: 4, c: "var(--color-violet-accent)" },
                    { cx: 20, cy: 30, r: 2.5, c: "var(--color-cyan-accent)" },
                    { cx: 80, cy: 30, r: 2.5, c: "var(--color-cyan-accent)" },
                    { cx: 20, cy: 70, r: 2.5, c: "var(--color-cyan-accent)" },
                    { cx: 80, cy: 70, r: 2.5, c: "var(--color-cyan-accent)" },
                    { cx: 50, cy: 15, r: 2, c: "var(--color-cyan-accent)" },
                    { cx: 50, cy: 85, r: 2, c: "var(--color-cyan-accent)" }
                  ].map((node, i) => (
                    <motion.circle 
                      key={i}
                      cx={node.cx} cy={node.cy} r={node.r} fill={node.c}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                      animate={ i === 0 ? { 
                        r: [4, 5, 4],
                        opacity: [1, 0.8, 1]
                      } : {
                        r: [node.r, node.r + 0.5, node.r],
                        opacity: [0.7, 1, 0.7]
                      }}
                    />
                  ))}
                </motion.g>
              </svg>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle,var(--color-violet-accent)_0%,transparent_70%)] opacity-20 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

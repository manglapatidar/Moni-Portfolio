import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/data';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between border border-[var(--card-border)] hover:border-[var(--color-indigo-accent)]/30 transition-colors shadow-sm hover:shadow-md group"
            >
              <div className="flex items-start space-x-4 mb-4 md:mb-0">
                <div className="p-3 rounded-full bg-[var(--color-indigo-accent)]/10 text-[var(--color-indigo-accent)] group-hover:bg-[var(--color-indigo-accent)] group-hover:text-white transition-colors">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.institution}</p>
                </div>
              </div>
              
              <div className="md:text-right pl-16 md:pl-0 w-full md:w-auto">
                <span className="inline-block px-3 py-1 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full text-sm font-medium mb-2">
                  {edu.score}
                </span>
                <p className="text-sm text-gray-500 block">{edu.status} • {edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

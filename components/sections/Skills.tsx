'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Next.js',
    ],
  },
  {
    icon: Terminal,
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication (JWT)',
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: [
      'MongoDB',
      'Mongoose',
      'Data Modeling',
    ],
  },
  {
    icon: Layout,
    title: 'Full-Stack',
    skills: [
      'MERN Stack',
      'API Integration',
      'State Management',
      'Component Architecture',
    ],
  },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg border border-border
                           hover:border-foreground/20 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4
                             bg-muted"
                >
                  <Icon className="w-6 h-6 text-muted-foreground" />
                </div>

                <h3 className="mb-4">{category.title}</h3>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

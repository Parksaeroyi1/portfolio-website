'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Relievio – Wellness & Recovery App',
    description:
      'A full-stack MERN wellness app that provides personalized stretch and massage recommendations based on user-selected symptoms and body areas, with session tracking, scheduling, and notifications.',
    tags: [
      'React Native',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT Auth',
    ],
    image: 'project.jpg',
    github: 'https://github.com/Parksaeroyi1/relievio-app',
    demo: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, focused on clean UI, performance, and smooth animations.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
    image: 'project2.jpg',
    github: 'https://github.com/yourusername/portfolio-website',
    demo: '#',
  },
  {
    title: 'Next Project',
    description:
      'Currently in development. A new project focused on solving real-world problems using modern full-stack technologies.',
    tags: ['Coming Soon'],
    image: 'coming-soon',
    comingSoon: true,
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg ${
                project.comingSoon
                  ? 'opacity-80'
                  : 'hover:border-slate-300'
              }`}
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <Image
                  src={`/images/${project.image}`}
                  alt={project.title}
                  width={800}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.comingSoon ? (
                    <span className="text-sm text-gray-400 italic">
                      Coming Soon
                    </span>
                  ) : (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 hover:text-slate-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

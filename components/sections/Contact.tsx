'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Parksaeroyi1' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/elijahsuyat/' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', href: 'mailto:elijahsuyatt@gmail.com' },
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

    return (
    <section id="contact" className="py-20 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="mb-6">Let's Connect</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out!
        </p>
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-slate-500 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>
        <a
          href="mailto:hello@example.com"
          className="inline-block px-8 py-3 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors"
        >
          Send Me an Email
        </a>
      </motion.div>
      <footer className="text-center text-gray-500 mt-20">
        <p>© 2025 Elijah. Built with passion and React.</p>
      </footer>
    </section>
  );
}

export default Contact

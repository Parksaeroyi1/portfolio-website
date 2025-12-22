'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  children,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      {children}
    </motion.h2>
  );
}

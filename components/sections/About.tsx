'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 px-6 bg-muted bg-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-muted-foreground">
            <p>
              My journey to tech wasn't the traditional route... I didn't follow some predetermined path. I was 
              a kid building sites on Piczo and Tumblr, learning by doing, figuring out workarounds when the 
              obvious solution didn't exist. Mastery, I've learned, isn't about being the smartest person in 
              the room; it's about adapting, problem-solving, and finding unconventional paths forward. Bruce 
              Lee said it best: "Absorb what is useful, discard what is not, add what is uniquely your own."
            </p>

            <p>
              To me, coding is less about syntax and more about transformation, taking something abstract, 
              intangible, just an idea floating in your head, and giving it form, function, life. It's the 
              same thrill I get from the financial markets, where every trade is a hypothesis tested against 
              reality. Both pursuits require you to see patterns others miss, to trust your intuition while 
              respecting the data, to understand that the path from concept to execution is never linear, and 
              that's exactly what makes it worth pursuing.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/profile.jpg"
              alt="Elijah's Profile"
              width={320}
              height={480}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

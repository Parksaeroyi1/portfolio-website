// app/page.tsx
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const HomePage = () => {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
};

export default HomePage;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Matrix Rain Component
const MatrixRain = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const newDrops = [];
    
    for (let i = 0; i < 50; i++) {
      newDrops.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        char: characters[Math.floor(Math.random() * characters.length)],
        speed: Math.random() * 3 + 1,
      });
    }
    setDrops(newDrops);
  }, []);

  return (
    <div className="matrix-bg">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-cyber-green opacity-30 font-glitch text-sm"
          style={{ left: drop.x }}
          animate={{
            y: [drop.y, window.innerHeight + 50],
          }}
          transition={{
            duration: 10 / drop.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {drop.char}
        </motion.div>
      ))}
    </div>
  );
};

// Loading Screen Component
const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.div
          className="text-4xl font-cyber text-cyber-blue mb-4"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          INITIALIZING...
        </motion.div>
        <motion.div
          className="w-64 h-2 bg-dark-panel rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ duration: 3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-blue to-cyber-pink"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-cyber-blue relative scanlines">
      <MatrixRain />
      
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;

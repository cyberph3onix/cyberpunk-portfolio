import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// 3D Particle Field
const ParticleField = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Hero = () => {
  const [text, setText] = React.useState('');
  const fullText = 'RAAJ_GUPTA.EXE';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-bg w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,245,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}
        />
      </div>

      {/* Scanning Line */}
      <motion.div
        className="absolute left-0 w-full h-0.5 bg-cyber-blue opacity-50"
        animate={{ y: [0, window.innerHeight] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-cyber font-bold mb-4">
            <span className="glitch-text" data-text={text}>
              {text}
            </span>
            <motion.span
              className="text-cyber-pink"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl text-cyber-green font-glitch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            &gt; B.Tech CSE 2nd Year
          </motion.p>
          
          <motion.p
            className="text-lg text-cyber-yellow mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            &gt; AI/ML & DevOpS Enthusiast
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >

          <a href= "https://www.linkedin.com/in/shreshta-raaj-gupta"
          target="_blank"
          rel="noopener noreferrer">


          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-cyber-blue text-cyber-blue font-cyber font-bold uppercase tracking-wider hover:bg-cyber-blue hover:text-dark-bg transition-all duration-300 neon-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            GITHUB_PROFILE
          </motion.button>
          </a>

          <a href = "https://drive.google.com/file/d/1m_nmneR1WWsi0zXVky4oSY2SJg4BPQTA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-cyber-pink text-cyber-pink font-cyber font-bold uppercase tracking-wider hover:bg-cyber-pink hover:text-dark-bg transition-all duration-300 neon-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD_RESUME
          </motion.button>
          </a>
        </motion.div>

        {/* Stats Display */}
        <motion.div
          className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          {[
            { label: 'PROJECTS', value: '5+' },
            { label: 'SKILLS', value: '10+' },
            { label: 'UPTIME', value: '99.9%' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-cyber-green">{stat.value}</div>
              <div className="text-sm text-cyber-blue font-glitch">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

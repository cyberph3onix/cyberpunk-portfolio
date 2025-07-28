import React from 'react';
import { motion } from 'framer-motion';
import { User, Brain, Code, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Creativity', value: 95, color: 'cyber-pink' },
    { label: 'Problem Solving', value: 80, color: 'cyber-blue' },
    { label: 'Adaptability', value: 92, color: 'cyber-green' },
    { label: 'Innovation', value: 90, color: 'cyber-yellow' },
  ];

  const traits = [
    { icon: Brain, label: 'AI/ML', description: 'AI cant take my job' },
    { icon: Code, label: 'DevOps', description: 'lemme deploy that shi' },
    { icon: Zap, label: 'Dangerous', description: 'Do Not Come Closer' },
    { icon: User, label: 'CHILL GUY', description: 'CAN DO ANYTHING TECH' },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-cyber font-bold text-cyber-blue mb-4">
            &gt; SYSTEM_PROFILE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-pink to-cyber-blue mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="neon-border bg-dark-panel p-8 rounded-lg relative overflow-hidden">
              {/* Scanning effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-cyber-blue opacity-50"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto relative">
                  <div className="w-full h-full rounded-full border-4 border-cyber-blue overflow-hidden">
                    {/* Replace with your actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-cyber-blue to-cyber-pink flex items-center justify-center text-4xl font-bold">
                      no pic yet
                    </div>
                  </div>
                  
                  {/* Rotating HUD Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyber-green rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{
                      borderStyle: 'dashed',
                      borderSpacing: '10px',
                    }}
                  />
                </div>
              </div>

              {/* Bio Text */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-cyber font-bold text-cyber-green mb-2">
                  SHRESHTA RAAJ GUPTA
                </h3>
                <p className="text-cyber-blue font-glitch">
                  AVG TECH ENJOYER
                </p>
                <p className="text-cyber-yellow font-glitch">
                  CLEARANCE_LEVEL: MAXIMUM
                </p>
              </div>

              {/* Bio Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                About me? Damn Even I dont know much but I-
                <ul>Love Cats</ul>
                <ul>Hate people</ul>
                <ul>Have an Immaculate music taste</ul>
                <ul>Certified CSS hater (I hate alligning stuffs)</ul>
              </p>

              {/* Status Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-cyber-green font-bold">ONLINE</div>
                  <div className="text-sm text-gray-400">Status</div>
                </div>
                <div className="text-center">
                  <div className="text-cyber-blue font-bold">24/7</div>
                  <div className="text-sm text-gray-400">Availability</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats & Traits */}
          <div className="space-y-8">
            {/* Animated Stats */}
            <motion.div
              className="neon-border bg-dark-panel p-6 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-cyber font-bold text-cyber-blue mb-6">
                SKILL_METRICS
              </h4>
              
              {stats.map((stat, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-cyber text-gray-300">{stat.label}</span>
                    <span className={`text-sm font-bold text-${stat.color}`}>{stat.value}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r from-${stat.color} to-${stat.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      style={{
                        boxShadow: `0 0 10px var(--${stat.color})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Traits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={index}
                  className="neon-border bg-dark-panel p-4 rounded-lg text-center hover:bg-opacity-80 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <trait.icon className="w-8 h-8 mx-auto mb-2 text-cyber-blue" />
                  <h5 className="font-cyber font-bold text-sm text-cyber-green mb-1">
                    {trait.label}
                  </h5>
                  <p className="text-xs text-gray-400">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

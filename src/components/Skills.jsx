import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Zap, Shield, Brain } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      label: 'FRONTEND_SYSTEMS',
      color: 'cyber-blue',
      skills: [
        { name: 'React/Next.js', level: 95, experience: '5+ years' },
        { name: 'Vue.js/Nuxt.js', level: 88, experience: '3+ years' },
        { name: 'TypeScript', level: 92, experience: '4+ years' },
        { name: 'Three.js/WebGL', level: 85, experience: '2+ years' },
        { name: 'Tailwind CSS', level: 90, experience: '3+ years' },
        { name: 'Framer Motion', level: 87, experience: '2+ years' }
      ]
    },
    backend: {
      icon: Database,
      label: 'BACKEND_PROTOCOLS',
      color: 'cyber-green',
      skills: [
        { name: 'Node.js/Express', level: 90, experience: '4+ years' },
        { name: 'Python/Django', level: 85, experience: '3+ years' },
        { name: 'PostgreSQL/MongoDB', level: 88, experience: '4+ years' },
        { name: 'GraphQL/REST APIs', level: 92, experience: '3+ years' },
        { name: 'Docker/Kubernetes', level: 80, experience: '2+ years' },
        { name: 'AWS/Google Cloud', level: 85, experience: '3+ years' }
      ]
    },
    design: {
      icon: Palette,
      label: 'DESIGN_INTERFACE',
      color: 'cyber-pink',
      skills: [
        { name: 'UI/UX Design', level: 88, experience: '4+ years' },
        { name: 'Figma/Adobe XD', level: 90, experience: '3+ years' },
        { name: 'Motion Graphics', level: 82, experience: '2+ years' },
        { name: 'Brand Identity', level: 85, experience: '3+ years' },
        { name: 'Prototyping', level: 87, experience: '3+ years' },
        { name: 'User Research', level: 80, experience: '2+ years' }
      ]
    },
    ai: {
      icon: Brain,
      label: 'AI_NEURAL_NETS',
      color: 'cyber-yellow',
      skills: [
        { name: 'TensorFlow/PyTorch', level: 85, experience: '2+ years' },
        { name: 'Machine Learning', level: 88, experience: '3+ years' },
        { name: 'Computer Vision', level: 80, experience: '2+ years' },
        { name: 'NLP Processing', level: 82, experience: '2+ years' },
        { name: 'Deep Learning', level: 85, experience: '2+ years' },
        { name: 'MLOps', level: 78, experience: '1+ years' }
      ]
    }
  };

  const tools = [
      { name: 'C', category: 'Code' },
    { name: 'C++', category: 'Code' },
    { name: 'JAVA', category: 'Code' },
    { name: 'PYTHON', category: 'Code' },
    { name: 'Git/GitHub', category: 'Version Control' },
    { name: 'Figma', category: 'Design' },
    { name: 'Canva', category: 'Design' },
    { name: 'Docker', category: 'DevOps' },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-cyber font-bold text-cyber-blue mb-4">
            &gt; SKILL_MATRIX
          </h2>
          <p className="text-xl text-cyber-green font-glitch">
            TECHNICAL_CAPABILITIES_OVERVIEW
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-pink to-cyber-blue mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="neon-border bg-dark-panel p-6 rounded-lg">
              <h3 className="text-xl font-cyber font-bold text-cyber-blue mb-6">
                SYSTEM_MODULES
              </h3>
              
              <div className="space-y-3">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <motion.button
                    key={key}
                    className={`w-full flex items-center gap-3 p-3 rounded border-2 transition-all duration-300 ${
                      activeCategory === key
                        ? `border-${category.color} bg-${category.color} bg-opacity-10 text-${category.color}`
                        : 'border-gray-600 text-gray-400 hover:border-gray-400'
                    }`}
                    onClick={() => setActiveCategory(key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-cyber text-sm">{category.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-600">
                <h4 className="text-lg font-cyber font-bold text-cyber-green mb-4">
                  QUICK_STATS
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Total Skills</span>
                    <span className="text-sm font-bold text-cyber-blue">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Years Experience</span>
                    <span className="text-sm font-bold text-cyber-green">4+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Proficiency Avg</span>
                    <span className="text-sm font-bold text-cyber-pink">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            className="lg:col-span-2"
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="neon-border bg-dark-panel p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                {React.createElement(skillCategories[activeCategory].icon, {
                  className: `w-6 h-6 text-${skillCategories[activeCategory].color}`
                })}
                <h3 className={`text-xl font-cyber font-bold text-${skillCategories[activeCategory].color}`}>
                  {skillCategories[activeCategory].label}
                </h3>
              </div>

              <div className="grid gap-4">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-cyber text-gray-300">{skill.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">{skill.experience}</span>
                        <span className={`text-sm font-bold text-${skillCategories[activeCategory].color}`}>
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r from-${skillCategories[activeCategory].color} to-${skillCategories[activeCategory].color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      >
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-${skillCategories[activeCategory].color} opacity-50 blur-sm`}></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tools & Technologies */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="neon-border bg-dark-panel p-6 rounded-lg">
            <h3 className="text-xl font-cyber font-bold text-cyber-blue mb-6">
              DEVELOPMENT_TOOLKIT
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="text-center p-4 border border-gray-600 rounded hover:border-cyber-green transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg font-cyber font-bold text-cyber-green group-hover:text-cyber-blue transition-colors">
                    {tool.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {tool.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

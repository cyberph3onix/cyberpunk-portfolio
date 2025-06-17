import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CALCULATOR_V1',
      description: 'Come on now, we all made it',
      tech: ['Python','tkinter'],
      status: 'DEPLOYED',
      progress: 100,
      image: '/api/placeholder/400/250',
      links: {
        demo: '#',
        github: 'https://github.com/cyberph3onix/calc',
        live: '#'
      }
    },
    {
      id: 2,
      title: 'SECURE_LOCK',
      description: 'A DOOR LOCK THAT CAN BE UNLOCKED USING YOUR FINGERPRINT',
      tech: ['Arduino',],
      status: 'ACTIVE',
      progress: 90,
      image: '/api/placeholder/400/250',
      links: {
        demo: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 3,
      title: 'HOMESERVER_0.2.2',
      description: 'A Server that works like a google drive, backs up your photos automatically and is your own personal Netflix',
      tech: ['Ubuntu'],
      status: 'DEPLOYED',
      progress: 100,
      image: '/api/placeholder/400/250',
      links: {
        demo: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 4,
      title: 'AI_BUILDER_V#',
      description: 'shhh! cant tell you anything about it, YET.',
      tech: ['React', 'Three.js', 'WebXR', 'MediaPipe'],
      status: 'BETA',
      progress: 10,
      image: '/api/placeholder/400/250',
      links: {
        demo: '#',
        github: '#',
        live: '#'
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'CLASSIFIED': return 'text-red-500';
      case 'ACTIVE': return 'text-cyber-green';
      case 'DEPLOYED': return 'text-cyber-blue';
      case 'BETA': return 'text-cyber-yellow';
      default: return 'text-gray-400';
    }
  };

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
            &gt; PROJECT_ARCHIVE
          </h2>
          <p className="text-xl text-cyber-green font-glitch">
            CLASSIFIED_DIGITAL_OPERATIONS
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-pink to-cyber-blue mx-auto mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="neon-border bg-dark-panel rounded-lg overflow-hidden relative">
                {/* Scanning Line */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-cyber-blue opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Project Image/Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-dark-bg to-dark-panel overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-cyber text-cyber-blue opacity-20">
                      {project.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-panel via-transparent to-transparent opacity-80"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-cyber font-bold border rounded ${getStatusColor(project.status)} border-current`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-cyber font-bold text-cyber-green mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-cyber text-cyber-blue">COMPLETION</span>
                      <span className="text-xs font-cyber text-cyber-yellow">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="text-xs font-cyber text-cyber-blue mb-2">TECH_STACK:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-dark-bg border border-cyber-pink text-cyber-pink rounded font-glitch"
                          whileHover={{ scale: 1.1, boxShadow: '0 0 10px #ff0080' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-bg transition-all duration-300 text-sm font-cyber"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-4 h-4" />
                      DEMO
                    </motion.button>
                    
                    <motion.button
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-transparent border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-dark-bg transition-all duration-300 text-sm font-cyber"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      CODE
                    </motion.button>
                    
                    <motion.button
                      className="py-2 px-4 bg-transparent border border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-dark-bg transition-all duration-300 text-sm font-cyber"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-cyber-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-cyber-green text-cyber-green font-cyber font-bold uppercase tracking-wider hover:bg-cyber-green hover:text-dark-bg transition-all duration-300 neon-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ACCESS_FULL_ARCHIVE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Terminal } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      color: 'cyber-blue'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'cyber-green'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      color: 'cyber-pink'
    },
    {
      icon: Mail,
      href: 'mailto:your.email@cybernet.com',
      label: 'Email',
      color: 'cyber-yellow'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative py-12 px-4 bg-dark-bg border-t border-cyber-blue">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,245,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* City Silhouette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-panel to-transparent opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Terminal className="w-6 h-6 text-cyber-blue" />
              <h3 className="text-xl font-cyber font-bold text-cyber-blue">
                CYBER_DEV
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Neural network architect specializing in immersive digital experiences. 
              Building the future, one line of code at a time.
            </p>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
              <span className="text-xs font-cyber text-cyber-green">ONLINE</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-cyber font-bold text-cyber-green mb-4">
              NAVIGATION
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyber-blue transition-colors duration-300 font-glitch"
                  whileHover={{ x: 5 }}
                >
                  &gt; {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-cyber font-bold text-cyber-pink mb-4">
              CONNECT
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-3 border-2 border-${social.color} text-${social.color} rounded-full hover:bg-${social.color} hover:text-dark-bg transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-600 pt-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm font-glitch">
                © 2025 CYBER_PORTFOLIO. ALL RIGHTS RESERVED.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                NEURAL_NETWORK_VERSION: 2.1.0
              </p>
            </div>

            {/* Made with love */}
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-400"
              animate={{ opacity: [0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-glitch">CRAFTED WITH</span>
              <Heart className="w-4 h-4 text-cyber-pink" />
              <span className="font-glitch">& CAFFEINE</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-cyber-blue opacity-30"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [terminalText, setTerminalText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const terminalMessages = [
    '> Initializing secure communication channel...',
    '> Encryption protocols: ACTIVE',
    '> Neural link established',
    '> Ready to receive transmission',
    '> Awaiting your input...'
  ];

  useEffect(() => {
    let messageIndex = 0;
    let charIndex = 0;
    
    const typeMessage = () => {
      if (messageIndex < terminalMessages.length) {
        if (charIndex < terminalMessages[messageIndex].length) {
          setTerminalText(prev => prev + terminalMessages[messageIndex][charIndex]);
          charIndex++;
          setTimeout(typeMessage, 50);
        } else {
          setTerminalText(prev => prev + '\n');
          messageIndex++;
          charIndex = 0;
          setTimeout(typeMessage, 1000);
        }
      } else {
        setIsTyping(false);
      }
    };

    typeMessage();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'NEURAL_LINK',
      value: 'guptaraaj0505@gmail.com',
      color: 'cyber-blue'
    },
    {
      icon: Phone,
      label: 'COMM_FREQUENCY',
      value: '+91 90383 12273',
      color: 'cyber-green'
    },
    {
      icon: MapPin,
      label: 'COORDINATES',
      value: 'Dunlop, Ambrosia Restaurant',
      color: 'cyber-pink'
    }
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
            &gt; ESTABLISH_CONNECTION
          </h2>
          <p className="text-xl text-cyber-green font-glitch">
            INITIATE_SECURE_COMMUNICATION_PROTOCOL
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-pink to-cyber-blue mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Terminal Interface */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Terminal Header */}
            <div className="neon-border bg-dark-panel rounded-lg overflow-hidden">
              <div className="bg-dark-bg p-4 border-b border-cyber-blue">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
                  <span className="ml-4 text-sm font-cyber text-cyber-blue">
                    SECURE_TERMINAL_v2.1.0
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-64 overflow-y-auto bg-dark-bg font-glitch text-sm">
                <pre className="text-cyber-green whitespace-pre-wrap">
                  {terminalText}
                </pre>
                {isTyping && (
                  <motion.span
                    className="text-cyber-blue"
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    █
                  </motion.span>
                )}
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="neon-border bg-dark-panel p-4 rounded-lg flex items-center gap-4 hover:bg-opacity-80 transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-3 rounded-full border-2 border-${info.color} text-${info.color}`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-sm font-cyber font-bold text-${info.color}`}>
                      {info.label}
                    </div>
                    <div className="text-gray-300">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-transparent border-2 border-cyber-pink text-cyber-pink font-cyber font-bold uppercase tracking-wider hover:bg-cyber-pink hover:text-dark-bg transition-all duration-300 neon-border"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                DOWNLOAD_NEURAL_PROFILE
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="neon-border bg-dark-panel p-8 rounded-lg relative overflow-hidden">
              {/* Scanning effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-cyber-blue opacity-50"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <h3 className="text-2xl font-cyber font-bold text-cyber-blue mb-6">
                TRANSMISSION_FORM
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-cyber text-cyber-green mb-2">
                    IDENTITY_CODE:
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-dark-bg border-2 border-gray-600 rounded text-cyber-blue font-glitch focus:border-cyber-blue focus:outline-none transition-all duration-300"
                    placeholder="Enter your designation..."
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-cyber text-cyber-green mb-2">
                    NEURAL_ADDRESS:
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-dark-bg border-2 border-gray-600 rounded text-cyber-blue font-glitch focus:border-cyber-blue focus:outline-none transition-all duration-300"
                    placeholder="your@neural.link"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <label className="block text-sm font-cyber text-cyber-green mb-2">
                    TRANSMISSION_SUBJECT:
                  </label>
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-dark-bg border-2 border-gray-600 rounded text-cyber-blue font-glitch focus:border-cyber-blue focus:outline-none transition-all duration-300"
                    placeholder="Mission briefing..."
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-cyber text-cyber-green mb-2">
                    DATA_PAYLOAD:
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 bg-dark-bg border-2 border-gray-600 rounded text-cyber-blue font-glitch focus:border-cyber-blue focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Transmit your message through the neural network..."
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-transparent border-2 border-cyber-blue text-cyber-blue font-cyber font-bold uppercase tracking-wider hover:bg-cyber-blue hover:text-dark-bg transition-all duration-300 neon-border"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  TRANSMIT_DATA
                </motion.button>
              </form>

              {/* Status Indicator */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-cyber-green rounded-full"
                  animate={{ opacity: [0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-xs font-cyber text-cyber-green">
                  SECURE_CONNECTION_ACTIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

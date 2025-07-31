/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-cyber-blue',
    'text-cyber-pink',
    'text-cyber-green',
    'text-cyber-yellow',
    'bg-cyber-blue',
    'bg-cyber-pink',
    'bg-cyber-green',
    'bg-cyber-yellow',
    'from-cyber-blue',
    'from-cyber-pink',
    'from-cyber-green',
    'from-cyber-yellow',
    'to-cyber-blue',
    'to-cyber-pink',
    'to-cyber-green',
    'to-cyber-yellow',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f5ff',
        'cyber-pink': '#ff0080',
        'cyber-green': '#39ff14',
        'cyber-purple': '#8a2be2',
        'cyber-yellow': '#ffff00',
        'dark-bg': '#0a0a0a',
        'dark-panel': '#1a1a2e',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'glitch': ['VT323', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s infinite',
        'scan': 'scan 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff' },
          '100%': { boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}

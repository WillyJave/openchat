import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#06010E',
          secondary: '#121213',
          elevated: '#1A1A1C',
        },
        accent: {
          DEFAULT: '#25D366',
          hover: '#1EBE5A',
        },
        muted: {
          DEFAULT: '#656569',
          foreground: '#A1A1A6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1320px',
      },
      backgroundImage: {
        'glow-green': 'radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%)',
        'glow-green-strong': 'radial-gradient(circle, rgba(37, 211, 102, 0.25) 0%, transparent 60%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config

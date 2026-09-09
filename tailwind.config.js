module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4CAF50',
          DEFAULT: '#2E7D32',
          dark: '#1B5E20',
        },
        accent: {
          light: '#FFE566',
          DEFAULT: '#FFD700',
          dark: '#F9A825',
        },
        secondary: {
          light: '#F1F8E9',
          DEFAULT: '#E8F5E9',
          dark: '#C8E6C9',
        },
        school: {
          green: '#2E7D32',
          'green-light': '#4CAF50',
          'green-dark': '#1B5E20',
          'green-deeper': '#145214',
          yellow: '#FFD700',
          'yellow-light': '#FFF9C4',
          'yellow-dark': '#F9A825',
          white: '#FFFFFF',
          'off-white': '#F8FBF8',
          'off-white-2': '#F1F8F1',
          muted: '#5A7A5C',
          border: '#C8E6C9',
          card: '#FFFFFF',
          foreground: '#1A2E1A',
          'foreground-light': '#2D4A2D',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Plus Jakarta Sans Fallback', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) both',
        'fade-in': 'fadeIn 0.8s ease both',
        'slide-in-left': 'slideInLeft 0.65s cubic-bezier(0.25, 1, 0.5, 1) both',
        'slide-in-right': 'slideInRight 0.65s cubic-bezier(0.25, 1, 0.5, 1) both',
        'scroll-left': 'scrollLeft 32s linear infinite',
        'scroll-right': 'scrollRight 32s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      boxShadow: {
        'card': '0 2px 16px rgba(46, 125, 50, 0.06)',
        'card-hover': '0 16px 48px rgba(46, 125, 50, 0.16)',
        'btn': '0 8px 24px rgba(46, 125, 50, 0.3)',
        'btn-yellow': '0 8px 24px rgba(255, 215, 0, 0.4)',
        'hero': '0 24px 64px rgba(27, 94, 32, 0.35)',
        'nav': '0 2px 20px rgba(0,0,0,0.08)',
        'section': '0 4px 32px rgba(46, 125, 50, 0.08)',
        'float': '0 20px 60px rgba(27, 94, 32, 0.2)',
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
};

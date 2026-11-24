/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0877B9',
          'blue-dark': '#065b8e',
          'blue-light': '#38a2e5',
          cyan: '#08A9E0',
          'cyan-light': '#44c5f5',
          charcoal: '#29292D',
          'charcoal-dark': '#1c1c1f',
          'charcoal-light': '#3b3b42',
          light: '#F2F4F6',
          'light-gray': '#E5E8EC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -10px rgba(8, 119, 185, 0.2)',
        'brand-lg': '0 20px 40px -15px rgba(8, 119, 185, 0.3)',
        'premium': '0 10px 40px -15px rgba(0, 0, 0, 0.07)',
        'card': '0 4px 20px -2px rgba(41, 41, 45, 0.05)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        infinityFlow: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        infinityFlow: 'infinityFlow 12s linear infinite',
      }
    },
  },
  plugins: [],
}

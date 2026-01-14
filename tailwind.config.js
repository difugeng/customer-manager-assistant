/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2b7cee",
        "primary-dark": "#0b57d0",
        "secondary": "#F59E0B", 
        "background-light": "#f6f7f8",
        "background-dark": "#101822",
      },
      fontFamily: {
        "display": ["Inter", "Noto Sans SC", "sans-serif"],
        "sans": ["Inter", "Noto Sans SC", "sans-serif"],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(43, 124, 238, 0.3)',
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      animation: {
          'fade-in-down': 'fade-in-down 0.3s ease-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'design-cyan': '#66D9EF',
        'ecomm-yellow': '#FFD700',
        'motion-orange': '#FFA500',
        'ux-pink': '#FF69B4',
        'marketing-red': '#9b1d20', // Wine Red for Communication
        'terra-green': '#7CB342', // Vine Green for Terra Hominis
        'grid-bg': '#F0F0F0',
        'card-bg': '#1a1a1a', // Dark gray for cards
        'border-dark': '#1a1a1a', // Dark gray for borders
        'text-secondary': '#F0F0F0', // Light gray for secondary text
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '64': '64px',
      },
      boxShadow: {
        'btn': '4px 4px 0px #000', // Button hover shadow
        'card': '8px 8px 0px rgba(0,0,0,1)', // Card shadow
      }
    },
  },
  plugins: [],
}

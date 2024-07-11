/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': 'linear-gradient(45deg, #3b82f6, #10b981)',
      },
      colors:{
        'primary' : '#3b82f6',
        'secondary' : '#10b981',
      }
     
    },
  },
  plugins: [],
}


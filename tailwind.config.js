/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'violet-app': 'hsl(264, 64%, 52%)',
        'blue-app': 'hsl(246, 80%, 60%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'pale-blue': 'hsl(236, 100%, 87%)',
        'light-red-work': 'hsl(15, 100%, 70%)',
        'soft-blue-play': 'hsl(195, 74%, 62%)',
        'light-red-study': 'hsl(348, 100%, 68%)',
        'lime-green-exercise': 'hsl(145, 58%, 55%)',
        'soft-orange-self-care': 'hsl(43, 84%, 65%)',
        'very-dark-blue': 'hsl(226, 43%, 10%)',
      },
    },
  },
  plugins: [],
}

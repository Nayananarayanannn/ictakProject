module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut 4s ease-in-out',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      
      // that is actual animation
      keyframes:theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.black') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }),
    },
  },
  variants: {},
  plugins: [require('tw-elements/dist/plugin'),
  require('flowbite/plugin')
],
  
}
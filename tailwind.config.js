module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        display: ['Fredoka One', 'sans-serif'],
      },
      zIndex: {
        '-10': '-10',
      },
      colors: {
        'orange': '#ffa91e',
        'dark-orange': '#ea7000',
        'leaf-green': '#62b333',
        'dark-leaf-green': '#308800',
        'brown': '#4e2e00',
        'sky-blue': '#87ceeb',
        'midnight-blue': '#003366',
        'haze-grey': '#333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

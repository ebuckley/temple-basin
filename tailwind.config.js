module.exports = {
  purge: [
      "./*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/images/White-room-Photo-Master-bowater-1200x450_c.jpeg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

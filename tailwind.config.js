module.exports = {
  mode: 'jit',
  content: [
    './*.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/img/heroPattern.png')",
       })
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

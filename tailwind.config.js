module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/img/heroPattern.avif')",
      }),
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

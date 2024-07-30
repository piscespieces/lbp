const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    colors: {
      gray: {
        DEFAULT: "#d4d4d4",
        dark: "#1A1A1A",
        light: "#b10000"
      },
      brown: {
        DEFAULT: "#78513D"
      },
      blue: {
        DEFAULT: "#3A5D9F"
      },
      yellow: colors.yellow,
      zinc: colors.zinc
    }
  },
  plugins: []
}

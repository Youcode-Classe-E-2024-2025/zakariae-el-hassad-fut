/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'stade-img': "url('/img/tiran.png')",
        'main-img': "url('/img/c.jpg')",
        'carte-img':"url('/img/carte2.jpg')"
    },
  },
  plugins: [],
}
}


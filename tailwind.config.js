/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          green: "#A7B3A1",
          blue: "#A1A4B3",
          red: "#B3A1A1",
          orange: "#B3ACA1",
          yellow: "#B3B3A1",
          purple: "#ACA1B3"
        },
        pastel: {
          green: "#CEE3C3",
          blue: "#C3C8E3",
          red: "#E3C3C3",
          orange: "#E3D6C3",
          yellow: "#E3E3C3",
          purple: "#D6C3E3"
        },
        earth: {
          green: "#97C47E",
          blue: "#7E8AC4",
          red: "#C47E7E",
          orange: "#C4A77E",
          yellow: "#C4C47E",
          purple: "#A77EC4"
        },
        jewel: {
          green: "#4B8F27",
          blue: "#27388F",
          red: "#8F2727",
          orange: "#8F6427",
          yellow: "#8F8F27",
          purple: "#64278F"
        },
        neon: {
          green: "#59FF00",
          blue: "#002BFF",
          red: "#FF0000",
          orange: "#FF9500",
          yellow: "#FFFF00",
          purple: "#9500FF"
        },
        shade: {
          black: "#1A1A1A",
          white: "#E6E6E6"
        }
      }
    },
  },
  plugins: [],
}

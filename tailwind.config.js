module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("./plugins/css-grid")({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: "0",
        4: "1rem",
        8: "2rem",
      },
      variants: ["responsive"],
    }),
  ],
}

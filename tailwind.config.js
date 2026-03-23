module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    container: {
     width: "900px  "
    },
    extend: {
      colors: {
        primary: "#050021",
        secondary: "#EC9023",
        dark: "#0f172a",
      },
      fontFamily: {
        Gilroy: ["Gilroy"],
      },
      fontSize: {
        responsive: "clamp(1rem, 2vw + 1.3rem, 4rem)",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
    },
  },
};

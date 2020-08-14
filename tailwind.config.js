module.exports = {
  purge: [],
  theme: {
    letterSpacing: {
       tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      huge: '.35em',
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    inset: {
      "0": 0,
      auto: "auto",
      "4":"1rem",
      "8": "2rem",
      "-8": "-2rem",
      "1/5" : "20%",
      "1/4" : "25%",
      "3/4":"75%",
      "3/5":"60%",
      "12":"3rem",
      "14":"3.5rem",
      "32":"8rem",
      "36":"9rem",
      "40":"10rem",
      "42":"10.5rem"
    },
    extend: {
      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      width:{
        "9/20": "45%",
      },
      zIndex: {
        "-10": "-10",
      },
      colors: {
        palette: {
          manatee: "#9194A1",
          royalBlue: "#5368DF",
          luckyPoint: "#252A46",
          tomato: "#FA5757"
        },
      },
    },
  },
  variants: {},
  plugins: [require("./node_modules/tailwind-percentage-heights-plugin")()],
};

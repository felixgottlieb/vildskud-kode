module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '150px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
   
    },
    extend: {
      colors: {
        red: {
          pr: "#D02120",
        },
        blue: {
          sc: "#0E66D7",
        },
      
      },
      backgroundImage: {
        'act-1': "url('./img/wish.jpeg')",
        'act-2': "url('./img/billede_JUKS.jpeg')",
        'act-3': "url('./img/mona-lisa-natten.jpeg')",
        'act-4': "url('./img/skammerdudignuPLAKAT-scaled.jpeg')",
        'act-5': "url('./img/confront-collective.png')",
        'act-6': "url('./img/panta-reje.jpeg')",
        'act-7': "url('./img/bg-bg-01.svg')",
      
      },
      fontFamily: {
        courier: ["Courier Prime", "monospace"],
        opensans: ["Open Sans", "sans-serif"],
      },

    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
      },
      colors: {
        "space-content": "#D0D6F9",
      },
      fontFamily: {
        sans: ["var(--font-barlow)"],
        sansCondensed: ["var(--font-barlow-condensed)"],
        serif: ["var(--font-bellefair)"],
      },
      gridTemplateAreas: {
        home: [
          ".  .  .  .",
          "nav  nav  nav  nav",
          ".  .  .  .",
          ". content button .",
          ".  .  .  .",
        ],
      },
      phone: [
        ".  .   .   .",
        "nav  nav   nav   nav",
        ".  .   .   .",
        "content content content content",
      ],
      variants: {
        gridTemplateAreas: ["responsive"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};

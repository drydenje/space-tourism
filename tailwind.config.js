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
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",

        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",

        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",

        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
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
        mobile: [".  .   .   .", ".  .   .   .", ".  .   .   ."],
        tablet: [".  .   .   .", ".  .   .   .", ".  .   .   ."],
        desktop: ["nav nav", "content visual"],
      },
      gridTemplateColumns: {
        mobile: "1fr 1fr 1fr",
        tablet: "1fr 1fr 1fr",
        desktop: "1fr 1fr",
      },
      gridTemplateRows: {
        mobile: ` auto
                    1fr
                    1fr
                  `,
        tablet: ` auto
                    1fr
                    1fr
                  `,
        desktop: `96px
                  auto
                  `,
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};

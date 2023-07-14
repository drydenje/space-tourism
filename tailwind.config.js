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
      },
      fontFamily: {
        sans: ["var(--font-barlow)"],
        sansCondensed: ["var(--font-barlow-condensed)"],
        serif: ["var(--font-bellefair)"],
      },
    },
  },
  plugins: [],
};

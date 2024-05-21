import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FF611A",
        secondary: "#666666",
        "custom-dark-gray": "#262626", // rgb(38, 38, 38)
        "custom-white": "#FFFFFF", // rgb(255, 255, 255)
        "custom-dark-gray-rgba": "rgba(79, 79, 79, 0.25)", // rgba(79, 79, 79, .25)
        "custom-black": "#000000", // rgb(0, 0, 0)
        "custom-orange": "#FF611A", // rgb(255, 97, 26)
        "custom-light-gray": "#F7F7F7", // rgb(247, 247, 247)
      },
      boxShadow: {
        header: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
        "contact-button": "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;

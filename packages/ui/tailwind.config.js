import tailwindConfig from "@sneg240/tailwind";

export default {
  ...tailwindConfig,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
};

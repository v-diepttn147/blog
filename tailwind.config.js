/** @type {import('tailwindcss').Config} */
module.exports = {
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
      animation: {
        flash: "flash 3s linear infinite",
      },
      keyframes: {
        flash: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      primary: "Zen Maru Gothic",
    },
    fontSize: {
      s1: ["0.875rem", "1.5rem"], // 14px, 24px
      base: ["1rem", "1.625rem"], // 16px, 26px
      m1: ["1.125rem", "1.5rem"], // 18px, 24px
      m2: ["1.25rem", "1.5625rem"], // 20px, 25px
      m3: ["1.5625rem", "2rem"], // 25px, 32px
      l1: ["1.875rem", "2.3125rem"], // 30px, 37px
      l2: ["2.125rem", "2.625rem"], // 34px, 42px
      xl1: ["2.5rem", "3rem"], // 40px, 48px
      xl2: ["3.75rem", "4.375rem"], // 60px, 70px
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        section: "2px 4px 15px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
}

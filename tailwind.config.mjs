/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        RobotoFlex: ['Roboto Flex', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
        NotoSerif: ['Noto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

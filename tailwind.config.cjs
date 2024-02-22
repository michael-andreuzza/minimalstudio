/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'astro-code-text': 'black', // Directly use Tailwind color name
        'astro-code-background': 'gray.100', // Use Tailwind's color system
        // Example mappings using Tailwind color names
        'astro-code-token-constant': 'gray.800',
        'astro-code-token-string': 'gray.500',
        'astro-code-token-comment': 'gray.600',
        'astro-code-token-keyword': 'black', // Reusing 'astro-code-text'
        'astro-code-token-parameter': 'black',
        'astro-code-token-function': 'gray.700',
        'astro-code-token-string-expression': 'gray.800',
        'astro-code-token-punctuation': 'gray.500',
        'astro-code-token-link': 'gray.800',
        // Add more mappings as needed
        black:"#151515",
        white:"#f5f5f5",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
       require('@tailwindcss/forms'),
    // ...
  ],
}

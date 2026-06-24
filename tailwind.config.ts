import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        qs: {
          brown:      '#46281e',
          'brown-deep': '#341a12',
          terracotta: '#cc4f2b',
          orange:     '#e8915f',
          cream:      '#faf8f4',
          sand:       '#e7ddcf',
          'border-warm':  '#e7e5e0',
          'border-input': '#d9d6cf',
          body:       '#4c515d',
          label:      '#8a8e98',
          dark:       '#16181f',
          yellow:     '#f4c430',
        },
      },
      fontFamily: {
        sans:    ['var(--font-assistant)', 'sans-serif'],
        heading: ['var(--font-merriweather-sans)', 'sans-serif'],
        mono:    ['var(--font-anonymous-pro)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },

        'light-text': '#1f2937',           // Light mode text color
        'light-text-secondary': '#6b7280', // Light mode secondary text
        'dark-text': '#f1f5f9',            // Dark mode text color
        'dark-text-secondary': '#94a3b8',  // Dark mode secondary text

        // Light mode colors
        light: {
          bg: '#ffffff',           // Main background
          surface: '#f8fafc',      // Cards, navbar, footer
          text: '#1f2937',         // Primary text
          'text-secondary': '#6b7280', // Secondary text
        },

        // Dark mode colors  
        dark: {
          bg: '#0f172a',           // Main background
          surface: '#1e293b',      // Cards, navbar, footer
          text: '#f1f5f9',         // Primary text
          'text-secondary': '#94a3b8', // Secondary text
        },

        // Semantic colors (adjust for both themes)
        success: {
          light: '#10b981',
          dark: '#34d399',
        },
        warning: {
          light: '#f59e0b',
          dark: '#fbbf24',
        },
        error: {
          light: '#ef4444',
          dark: '#f87171',
        },
        info: {
          light: '#3b82f6',
          dark: '#60a5fa',
        },
      },

      // Custom shadows for light/dark modes
      boxShadow: {
        'light': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'light-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'dark': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      },

      // Typography customizations
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },

      // Animation and transitions
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },

      // Spacing for consistent layout
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },

      // Screen breakpoints (if you want to customize)
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins you want to use
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asdvc': {
          'navy': '#143c6c',
          'gold': '#DDC53B',
          'forest': '#1c7454',
          'navy-light': '#1e4a7a',
          'navy-dark': '#0f2a4a',
          'gold-light': '#e6d15a',
          'gold-dark': '#c4a832',
          'forest-light': '#2a8a6a',
          'forest-dark': '#155a42',
          'white': '#ffffff',
          'gray-50': '#f9fafb',
          'gray-100': '#f3f4f6',
          'gray-200': '#e5e7eb',
          'gray-300': '#d1d5db',
          'gray-400': '#9ca3af',
          'gray-500': '#6b7280',
          'gray-600': '#4b5563',
          'gray-700': '#374151',
          'gray-800': '#1f2937',
          'gray-900': '#111827',
        }
      },
      fontFamily: {
        'sans': ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
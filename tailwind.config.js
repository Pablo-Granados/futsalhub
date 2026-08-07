/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        cancha:   '#0B0F14',
        surface:  '#121821',
        elevado:  '#1A2230',
        borde:    'rgba(255,255,255,0.06)',
        accent:   '#35D07F',
        live:     '#FF4B55',
        warning:  '#FFC93C',
        texto:    '#F2F5F8',
        muted:    '#8894A3',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}


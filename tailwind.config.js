/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎯 Fondo principal
        "custom-background": '#0f0c29',      // Negro azulado profundo
        "custom-darkGray": '#1c1c1e',        // Gris oscuro casi negro
        "custom-softGray": '#2e2e30',        // Gris medio para inputs, bordes

        // ✅ Neon Green Variants
        "custom-neonGreen": '#39ff14',       // Verde neón principal
        "custom-neonGreen-soft": '#6bff56',  // Verde lima brillante (hover, sombras)
        "custom-neonGreen-deep": '#1bbf00',  // Verde intenso profundo (texto o subtítulos)

        // ✨ Acentos compatibles
        "custom-cyberBlue": '#00f0ff',       // Azul cian brillante
        "custom-electricPurple": '#a259ff',  // Púrpura neón
        "custom-acidYellow": '#eaff00',      // Amarillo ácido
        "custom-mutedWhite": '#d3d3d3',      // Blanco desaturado para texto

        // 🔳 Base
        "custom-black": '#000000',
        "custom-white": '#ffffff',
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.4s ease-out',
        'fade-out-up': 'fadeOutUp 0.4s ease-in',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
         fadeOutUp: {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}


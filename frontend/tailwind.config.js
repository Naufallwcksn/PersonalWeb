/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#a69777', // Warna utama earthy tan
        'brand-text': '#232323',   // Warna teks utama (hitam pekat)
        'brand-subtext': '#707070', // Warna teks sekunder (abu-abu)
        'brand-bg': '#f8f8f8',      // Warna latar belakang utama (abu-abu sangat terang)
        'brand-bg-light': '#ffffff', // Warna latar belakang kartu (putih)
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'aurora-earthy': "radial-gradient(ellipse 50% 40% at 20% 40%, hsla(43, 20%, 80%, 0.5), transparent), " +
                         "radial-gradient(ellipse 50% 40% at 80% 60%, hsla(41, 25%, 85%, 0.5), transparent), " +
                         "radial-gradient(ellipse 40% 30% at 50% 95%, hsla(40, 30%, 88%, 0.6), transparent), " +
                         "radial-gradient(ellipse 60% 50% at 50% 50%, hsla(45, 20%, 90%, 0.4), transparent)",
      },
      keyframes: {
        'slide-in-left': { '0%': { transform: 'translateX(-100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' }, },
        'slide-in-right': { '0%': { transform: 'translateX(100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' }, },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' }, },
        // Membuat animasi 'shake' yang lebih jelas untuk debugging
        'shake': {
          '0%, 100%': { transform: 'translateX(0) rotate(0)' },
          '25%': { transform: 'translateX(-5px) rotate(-3deg)' },
          '75%': { transform: 'translateX(5px) rotate(3deg)' },
        }
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        // Menambahkan utilitas animasi 'shake'
        'shake': 'shake 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}

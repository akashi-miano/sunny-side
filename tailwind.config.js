/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroDesktopBg: "url('./assets/desktop/image-header.jpg')",
        heroMobileBg: "url('./assets/mobile/image-header.jpg')",
        transformDesktopBg: "url('./assets/desktop/image-transform.jpg')",
        transformMobileBg: "url('./assets/mobile/image-transform.jpg')",
        standOutDesktopBg: "url('./assets/desktop/image-stand-out.jpg')",
        standOutMobileBg: "url('./assets/mobile/image-stand-out.jpg')",
        cherryDesktopBg: "url('./assets/desktop/image-graphic-design.jpg')",
        cherryMobileBg: "url('./assets/mobile/image-graphic-design.jpg')",
        orangeDesktopBg: "url('./assets/desktop/image-photography.jpg')",
        orangeMobileBg: "url('./assets/mobile/image-photography.jpg')",
      },
    },
  },
  plugins: [],
};

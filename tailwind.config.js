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
        coneDesktopBg: "url('./assets/desktop/image-gallery-cone.jpg')",
        coneMobileBg: "url('./assets/mobile/image-gallery-cone.jpg')",
        bottleDesktopBg:
          "url('./assets/desktop/image-gallery-milkbottles.jpg')",
        bottleMobileBg: "url('./assets/mobile/image-gallery-milkbottles.jpg')",
        orangeGalleryDesktopBg:
          "url('./assets/desktop/image-gallery-orange.jpg')",
        orangeGalleryMobileBg:
          "url('./assets/mobile/image-gallery-orange.jpg')",
        cubeDesktopBg: "url('./assets/desktop/image-gallery-sugarcubes.jpg')",
        cubeMobileBg: "url('./assets/mobile/image-gallery-sugarcubes.jpg')",
      },
    },
  },
  plugins: [],
};

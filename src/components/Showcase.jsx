const Showcase = () => {
  return (
    <section id="projects">
      <div className="grid md:grid-cols-4  min-h-[100vh] md:min-h-[60vh]">
        <div
          className="bg-center bg-no-repeat bg-cover bg-bottleDesktopBg"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
        <div
          className="bg-center bg-no-repeat bg-cover bg-orangeGalleryDesktopBg"
          data-aos="zoom-in"
          data-aos-delay="400"
        ></div>
        <div
          className="bg-center bg-no-repeat bg-cover bg-coneDesktopBg"
          data-aos="zoom-in"
          data-aos-delay="600"
        ></div>
        <div
          className="bg-center bg-no-repeat bg-cover bg-cubeDesktopBg"
          data-aos="zoom-in"
          data-aos-delay="800"
        ></div>
      </div>
    </section>
  );
};

export default Showcase;

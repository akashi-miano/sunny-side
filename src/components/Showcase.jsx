const Showcase = () => {
  return (
    <section id="projects">
      <div className="grid md:grid-cols-4  min-h-[100vh] md:min-h-[60vh]">
        <div className="bg-center bg-no-repeat bg-cover bg-bottleDesktopBg"></div>
        <div className="bg-center bg-no-repeat bg-cover bg-orangeGalleryDesktopBg"></div>
        <div className="bg-center bg-no-repeat bg-cover bg-coneDesktopBg"></div>
        <div className="bg-center bg-no-repeat bg-cover bg-cubeDesktopBg"></div>
      </div>
    </section>
  );
};

export default Showcase;

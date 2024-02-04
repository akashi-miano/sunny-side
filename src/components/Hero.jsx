import arrowImg from "../assets/icon-arrow-down.svg";
const Hero = () => {
  return (
    <section className="md:min-h-screen py-16 text-white bg-center bg-no-repeat bg-cover md:bg-heroDesktopBg bg-heroMobileBg min-h-[90vh]">
      <div className="container">
        <header className="py-24" data-aos="zoom-in" data-aos-delay="200">
          <h1 className="text-6xl font-bold tracking-widest text-center uppercase">
            we are creatives
          </h1>
        </header>
        <a href="#about">
          <img
            src={arrowImg}
            alt="Arrow down icon"
            className="absolute -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2 animate-bounce"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

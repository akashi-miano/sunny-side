import arrowImg from "../assets/icon-arrow-down.svg";
const Hero = () => {
  return (
    <section className="py-16 min-h-screen bg-heroDesktopBg bg-no-repeat bg-cover bg-center text-white">
      <div className="container">
        <header className="py-24">
          <h1 className="uppercase text-6xl text-center tracking-widest font-bold">
            we are creatives
          </h1>
        </header>
        <img
          src={arrowImg}
          alt="Arrow down icon"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default Hero;

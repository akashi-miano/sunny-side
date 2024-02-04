const Transform = () => {
  return (
    <section className="" id="about">
      <div className="grid md:grid-cols-2">
        <div
          className="text-section flow-content--m flex flex-col justify-center max-w-[500px] mx-auto p-6"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <header>
            <h2 className="text-5xl font-bold text-[#212529]">
              Transform your brand
            </h2>
          </header>
          <p className="max-w-[450px] mx-auto text-[#818498] font-bold">
            {" "}
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.{" "}
          </p>
          <a
            href=""
            className="uppercase text-[#212529] font-bold tracking-wider learn-more relative w-fit duration-300"
          >
            learn more
          </a>
        </div>
        <div
          className="img-bg bg-transformDesktopBg bg-center bg-cover bg-no-repeat min-h-[35vh] md:min-h-[85vh] order-[-1] md:order-[0]"
          data-aos="fade-left"
          data-aos-delay="400"
        ></div>
      </div>
    </section>
  );
};

export default Transform;

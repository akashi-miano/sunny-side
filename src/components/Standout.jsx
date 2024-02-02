const Standout = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2">
        <div className="img-bg bg-standOutDesktopBg bg-center bg-cover bg-no-repeat min-h-[35vh] md:min-h-[85vh] order-[-1] md:order-[0]"></div>
        <div className="text-section flow-content--m flex flex-col justify-center max-w-[500px] mx-auto p-6">
          <header>
            <h2 className="text-5xl font-bold text-[#212529]">
              Stand out to the right audience
            </h2>
          </header>
          <p className="max-w-[450px] mx-auto text-[#818498] font-bold">
            {" "}
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{" "}
          </p>
          <a
            href=""
            className="uppercase text-[#212529] font-bold tracking-wider learn-more-2 relative w-fit duration-300"
          >
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Standout;

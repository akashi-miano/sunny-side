const Design = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 text-center">
        <div className="cherry bg-cherryDesktopBg bg-center bg-cover bg-no-repeat min-h-[80vh] flex items-end pb-8">
          <header className="text-center w-full flow-content--m">
            <h2 className="text-4xl font-bold text-[#25564b] ">
              Graphic design
            </h2>
            <p className="max-w-[450px] mx-auto text-[#25564b]  font-medium">
              {" "}
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.{" "}
            </p>
          </header>
        </div>
        <div className="orange bg-orangeDesktopBg bg-center bg-cover bg-no-repeat flex items-end pb-12">
          <header className="text-center  w-full flow-content--m">
            <h2 className="text-4xl font-bold text-[#25564b]">Photography</h2>
            <p className="max-w-[450px] mx-auto text-[#25564b] font-medium">
              {" "}
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.{" "}
            </p>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Design;

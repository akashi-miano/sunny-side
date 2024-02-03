const Design = () => {
  return (
    <section id="services">
      <div className="grid text-center md:grid-cols-2">
        <div className="cherry bg-cherryDesktopBg bg-center bg-cover bg-no-repeat md:min-h-[80vh] flex items-end pb-8 min-h-[50vh] p-6">
          <header className="w-full text-center flow-content--m">
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
        <div className="flex items-end pb-12 bg-center bg-no-repeat bg-cover orange bg-orangeDesktopBg min-h-[50vh] p-6">
          <header className="w-full text-center flow-content--m">
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

import card from "../../public/data/Card";
const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container">
        <header className="mb-6" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="#a7abae text-center text-3xl text-[#a7abae] font-bold tracking-widest capitalize">
            {" "}
            Client testimonials{" "}
          </h2>
        </header>
        <div className="grid md:grid-cols-3 cards-wrapper">
          {card.map(({ id, imgURL, text, person, position, delay }) => (
            <div
              className="flex flex-col items-center justify-center p-4 text-center card text-[#818498]"
              key={id}
              data-aos="zoom-in"
              data-aos-delay={delay}
            >
              <img
                src={imgURL}
                alt={`${person}'s image`}
                className="w-[72px] h-[72px] rounded-full mb-8"
              />
              <p className="text-lg font-bold ">{text}</p>
              <div className="flex flex-col items-center gap-4 mt-8">
                <span className="font-bold text-[#23303e] author">
                  {person}
                </span>
                <span className="text-[#a7abae] text-md font-bold">
                  {position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

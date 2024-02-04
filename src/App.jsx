import Design from "./components/Design";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Showcase from "./components/Showcase";
import Standout from "./components/Standout";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Transform />
      <Standout />
      <Design />
      <Testimonials />
      <Showcase />
      <Footer />
    </>
  );
}

export default App;

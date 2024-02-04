import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer
      className="bg-[#8ed0c4] py-16"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      <div className="container flex flex-col items-center justify-center">
        <header className="mb-10">
          <img src={logo} alt="Logo image" className="logo w-[170px]" />
        </header>
        <nav className="mb-16">
          <ul className="flex items-center gap-12">
            <li>
              <a
                href="#about"
                className="text-lg capitalize text-[#458c7e] duration-300 hover:text-white"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-lg capitalize text-[#458c7e] duration-300 hover:text-white"
              >
                services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg capitalize text-[#458c7e] duration-300 hover:text-white"
              >
                projects
              </a>
            </li>
          </ul>
        </nav>
        <nav className="mb-8">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href=""
                className="capitalize text-2xl text-[#458c7e] hover:text-white duration-300"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-2xl capitalize text-[#458c7e] hover:text-white duration-300"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-2xl capitalize text-[#458c7e] hover:text-white duration-300"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-2xl capitalize text-[#458c7e] hover:text-white duration-300"
              >
                <FaPinterest />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

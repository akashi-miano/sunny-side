import { useState } from "react";
import burgerMenu from "../assets/icon-hamburger.svg";
import { IoClose } from "react-icons/io5";
import close from "../assets/icon-hamburger.svg";

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="absolute top-0 left-0 right-0 py-6 text-white">
      <div className="container flex items-center justify-between">
        <a href="" className="text-3xl font-bold logo">
          sunnyside
        </a>
        <ul className="items-center hidden gap-8 md:flex">
          <li>
            <a
              href="#about"
              className="text-lg duration-300 hover:text-zinc-800"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-lg duration-300 hover:text-zinc-800"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg duration-300 hover:text-zinc-800"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="px-8 py-2 text-xl duration-300 bg-white rounded-full btn text-zinc-700 hover:bg-cyan-500 hover:text-white"
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          className="mobile-toggle md:hidden"
          onClick={() => setNav(!nav)}
        >
          <img src={burgerMenu} alt="mobile menu toggle" />
        </button>
        <ul
          className={
            nav
              ? "fixed inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-[#fad400] to-orange-500 fle-col z-[999] translate-x-[0] duration-300"
              : "fixed inset-0 flex flex-col items-center justify-center gap-   bg-gradient-to-t from-[#fad400] to-orange-500 z-[999] translate-x-[100%] duration-300"
          }
        >
          <IoClose
            size={35}
            className="absolute top-6 right-10"
            onClick={() => setNav(!nav)}
          />
          <li>
            <a href="#about" className="text-3xl" onClick={() => setNav(!nav)}>
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-3xl"
              onClick={() => setNav(!nav)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-3xl"
              onClick={() => setNav(!nav)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="px-8 py-2 text-xl bg-white rounded-full btn text-zinc-700"
              onClick={() => setNav(!nav)}
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

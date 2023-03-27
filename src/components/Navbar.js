import React, { useState } from "react";
import { navbardata } from "../data";

const Navbar = () => {
  const { Logo, btnText, Hamburger, Close } = navbardata;
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="font-Quicksand lg:px-40  bg-white w-full  h-[44px] lg:h-[65px] px-12  py-6  fixed flex flex-row justify-between z-10 drop-shadow-2xl place-items-center ">
      <div className="ml-0 z-20">
        <Logo />
      </div>
      <div className=" font-bold text-xl ">
        <ul
          className={
            "py-5 lg:flex lg:flex-row text-center lg:items-center z-[1]  lg:z-auto lg:static absolute right-4 left-4 top-32" +
            (navbarOpen ? " flex flex-col bg-white  " : " hidden")
          }
        >
          <button
            className="lg:invisible mx-auto"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Close />
          </button>
          <a
            href="/"
            className="mx-4 my-6 lg:my-0  hover:underline transition transform hover:-translate-y-1 "
          >
            Home
          </a>
          <a
            href="/about"
            className="mx-4 my-6 lg:my-0 hover:underline transition transform hover:-translate-y-1"
          >
            About
          </a>
          <a
            href="/contact"
            className="mx-4 my-6 lg:my-0 hover:underline transition transform hover:-translate-y-1"
          >
            Contact
          </a>
          <a
            href="/blog"
            className="mx-4 my-6 lg:my-0 hover:underline transition transform hover:-translate-y-1"
          >
            Blog
          </a>
          <a
            href="/careers"
            className="mx-4 my-6 lg:my-0 hover:underline transition transform hover:-translate-y-1"
          >
            Careers
          </a>
        </ul>
      </div>

      <button className="mr-24 invisible lg:visible transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300 lg:absolute right-8 lg:items-right  font-bold rounded-full py-2 px-4 text-white bg-gradient-to-l from-cyan-400 to-green-400">
        {btnText}
      </button>
      <div className="lg:invisible  flex items-center ">
        <button type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
          <Hamburger />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

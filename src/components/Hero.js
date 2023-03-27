import React from "react";
import { herodata } from "../data";
const Hero = () => {
  const { btnText, bgimage, phone } = herodata;
  return (
    <div className="lg:h-[900px] py-12 w-screen ">
      <div className="container mx-auto  ">
        <div className=" flex flex-col  lg:flex-row items-center   h-full  lg:pt-24 relative">
          <div className="flex flex-col lg:mx-auto lg:h-screen">
            <div className=" absolute top-0 left-0  lg:left-[800px] lg:top-0 ">
              <img className="w-full" src={bgimage} alt="bgimg" />
            </div>
            <div className="absolute -top-56 left-0    lg:left-[900px] lg:top-0">
              <img
                className="w-full"
                data-aos="fade-down"
                src={phone}
                alt="phone"
              />
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="flex-row lg:pl-8 justify-center mt-0 pt-[500px] md:pr-[800px] xl:mt-[-300px]    lg:mb-0  lg:py-40    lg:mt-[600px]  lg:text-left   font-Quicksand font-bold"
          >
            <h1 className="text-center sm:text-start mx-1 lg:mt-0 text-[36px] lg:text-[48px] text-slate-600   lg:max-w-[700px] mb-4 lg:mb-12">
              Next generation digital banking
            </h1>
            <h2 className="text-center sm:text-start mx-8 lg:mx-0  pb-4 lg:pb-8 text-slate-400 leading-loose">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </h2>
            <button className="ml-44 sm:ml-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300  rounded-full py-2 px-4 text-white bg-gradient-to-l from-cyan-300 to-green-300">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

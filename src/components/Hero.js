import React from "react";
import { herodata } from "../data";
const Hero = () => {
  const { btnText, bgimage, phone } = herodata;
  return (
    <div className="lg:h-[900px] py-12 w-screen ">
      <div className="container mx-auto  ">
        <div className=" flex flex-col  lg:flex-row items-center   h-full  lg:pt-24 relative">
          <div className="flex flex-col lg:mx-auto lg:h-screen">
            <div className="absolute top-0 left-0  lg:left-[800px] lg:top-0 ">
              <img src={bgimage} alt="bgimg" />
            </div>
            <div className="absolute -top-56 left-0    lg:left-[1060px] lg:top-0">
              <img data-aos="fade-down" src={phone} alt="phone" />
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="pt-[500px] xl:pr-[800px] xl:mt-[-300px]    lg:mb-0  lg:py-40  text-center  lg:mt-[600px]  lg:text-left   font-Quicksand font-bold"
          >
            <h1 className="mx-1 lg:mt-0 text-[36px] lg:text-[48px] text-slate-600   lg:max-w-[700px] mb-4 lg:mb-12">
              Next generation digital banking
            </h1>
            <h2 className="mx-8 lg:mx-0 lg:max-w-[380px] mb-4 lg:mb-12 text-slate-400 leading-loose">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </h2>
            <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300  rounded-full py-2 px-4 text-white bg-gradient-to-l from-cyan-300 to-green-300">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

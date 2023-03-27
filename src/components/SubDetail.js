import React from "react";
import { detaildata } from "../data";
const SubDetial = () => {
  const { online, budget, onboard, api } = detaildata;
  return (
    <div className="px-4 flex flex-col justify-center text-center pb-20 space-y-8  lg:flex lg:flex-row lg:w-full lg:space-x-20 font-Quicksand ">
      <div data-aos="zoom-in" data-aos-duration="1000">
        <img className="mx-auto lg:mx-0 mt-8" src={online} alt="" />
        <h1 className="py-4 mt-2  font-bold text-slate-600 text-lg">
          Online Banking
        </h1>
        <p className="font-bold text-slate-400 text-md leading-relaxed ">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1200">
        <img className="mx-auto lg:mx-0" src={budget} alt="" />
        <h1 className="py-4 mt-2 font-bold text-slate-600 text-lg ">
          Simple Budgeting
        </h1>
        <p className="font-bold text-slate-400 text-md leading-relaxed ">
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.
        </p>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1400">
        <img className="mx-auto lg:mx-0" src={onboard} alt="" />
        <h1 className="py-4 mt-2 font-bold text-slate-600 text-lg">
          Fast Onboarding
        </h1>
        <p className="font-bold text-slate-400 text-md leading-relaxed ">
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1600">
        <img className="mx-auto lg:mx-0" src={api} alt="" />
        <h1 className="py-4 mt-2 font-bold text-slate-600 text-lg">Open API</h1>
        <p className="font-bold text-slate-400 text-md leading-relaxed ">
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </p>
      </div>
    </div>
  );
};

export default SubDetial;

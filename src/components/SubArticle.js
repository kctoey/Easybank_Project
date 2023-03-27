import React from "react";
import { articledata } from "../data";
const SubArticle = () => {
  const { money, restaurant, plane, confetti } = articledata;
  return (
    <div className="flex flex-col lg:h-full mx-auto lg:flex  lg:flex-row lg:w-full lg:space-x-8 font-Quicksand lg:pt-0 font-bold">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className=" bg-white m-8 lg:m-0"
      >
        <img
          className=" rounded-lg w-full   lg:h-48   mx-auto"
          loading="lazy"
          src={money}
          alt="money"
        />
        <div className="p-8">
          <h2 className="text-slate-400 text-xs lg:mb-4">By Claire Robinson</h2>
          <h3 className="text-lg text-slate-700 lg:mb-4">
            Receive money in any currency with no fees
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="bg-white m-8 lg:m-0"
      >
        <img
          className=" rounded-lg  w-full lg:h-48 mx-auto"
          loading="lazy"
          src={restaurant}
          alt="restaurant"
        />
        <div className="p-8">
          <h2 className="text-slate-400 text-xs mb-4">By Wilson Hutton</h2>
          <h3 className="text-lg text-slate-700 mb-4">
            Treat yourself without worrying about money
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1400"
        className="bg-white m-8 lg:m-0"
      >
        <img
          className=" rounded-lg w-full lg:h-48  mx-auto"
          loading="lazy"
          src={plane}
          alt="plane"
        />
        <div className="p-8">
          <h2 className="text-slate-400 text-xs mb-4">By Wilson Hutton</h2>
          <h3 className="text-lg text-slate-700 mb-4">
            Take your Easybank card wherever you go
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1600"
        className="bg-white m-8 lg:m-0"
      >
        <img
          className="rounded-lg  w-full lg:h-48  mx-auto"
          loading="lazy"
          src={confetti}
          alt="confetti"
        />
        <div className="p-8">
          <h2 className="text-slate-400 text-xs mb-4">By Claire Robinson</h2>
          <h3 className="text-lg text-slate-700 mb-4">
            Our invite-only Beta accounts are now live!
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubArticle;

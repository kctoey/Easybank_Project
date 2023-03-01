import React from "react";
import SubDetial from "./SubDetail";
const Detail = () => {
  return (
    <div className=" bg-[#FAFAFA] lg:w-screen lg:h-screen mx-auto lg:px-48  ">
      <div className="py-20 text-center xl:text-left  font-Quicksand font-bold">
        <h1 className="px-2 lg:px-0 text-[36px] lg:max-w-[360px] lg:mb-10 lg:text-[48px] text-slate-600 xl:max-w-[700px] ">
          Why choose Easybank?
        </h1>
        <p className="px-2 py-4 lg:px-0 lg:py-10 text-slate-400 lg:p-0 mt-4">
          We leverage Open Banking to turn your bank account into your financial
          hub.
          <br />
          Control your finances like never before.
        </p>
      </div>
      <SubDetial />
    </div>
  );
};

export default Detail;

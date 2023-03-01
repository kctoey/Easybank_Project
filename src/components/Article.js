import React from "react";

import SubArticle from "./SubArticle";

const Article = ({ scrollToTop, showButton }) => {
  return (
    <div>
      <div className="lg:flex flex-col  lg:min-h-screen  lg:w-screen py-10 lg:h-screen  lg:px-48  bg-[#FAFAFA]">
        <h1 className=" text-center pb-10 lg:text-start mx-auto font-Quicksand font-bold  lg:py-24 lg:mb-10 text-[36px] lg:text-[48px] text-slate-600 ">
          Lastest Article
        </h1>
        <SubArticle />
      </div>
      <div className="lg:invisible text-center   bg-[#FAFAFA]">
        {showButton && (
          <button
            onClick={scrollToTop}
            className="  bg-gradient-to-l from-cyan-400 to-green-400 text-white  rounded-full py-2 px-4 mb-4 lg:m-0 lg:p-0 font-Quicksand"
          >
            Back to top
          </button>
        )}
      </div>
    </div>
  );
};

export default Article;

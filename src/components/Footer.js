import React from "react";
import { footerdata } from "../data";

const Footer = () => {
  const { facebook, youtube, instagram, pinterest, twitter, Logo } = footerdata;
  return (
    <div className="bg-[#2D314D]  w-screen lg:h-48  ">
      <div className=" p-10 lg:flex lg:flex-row lg:justify-between lg:px-40 lg:py-10 ">
        <div className="lg:flex flex-row lg:space-x-40 ">
          <div className="flex  justify-center items-center space-y-8 lg:flex flex-col lg:justify-between ">
            <Logo className=" stroke-white " />
            <ul className="flex flex-row justify-center space-x-4 lg:justify-between">
              <li>
                <img src={facebook} alt="facebook" />
              </li>
              <li>
                <img src={youtube} alt="youtube" />
              </li>
              <li>
                <img src={twitter} alt="twitter" />
              </li>
              <li>
                <img src={pinterest} alt="pinterest" />
              </li>
              <li>
                <img src={instagram} alt="instagram" />
              </li>
            </ul>
          </div>
          <div className="pt-4 leading-8 font-Quicksand text-[#FAFAFA] lg:font-medium flex flex-row justify-center  text-center lg:mt-0 font-semibold">
            <ul>
              <li>About us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="md:pt-4  leading-8 font-Quicksand text-[#FAFAFA] font-semibold lg:font-medium flex flex-row justify-center text-center">
            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div className="text-center lg:text-right font-medium font-Quicksand ">
          <button className=" rounded-full my-8 mb-4 lg:mb-0 py-2 px-4 text-white bg-gradient-to-l from-cyan-400 to-green-400">
            Request Invite
          </button>
          <p className=" text-[#9698A6] font-semibold">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

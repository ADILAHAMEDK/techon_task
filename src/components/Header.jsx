import React from "react";
import logo from "../assets/images/logo1.png";
import email from "../assets/images/email.png";
import location from "../assets/images/location.png";
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import p from "../assets/images/p.png";
import insta from "../assets/images/instagram.png";
import log3 from "../assets/images/log3.png";
import message from "../assets/images/messenge.png";
import search from "../assets/images/search.png";
import bar from "../assets/images/bar.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="text-white">
      <div className="bg-[#262626] px-5 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={logo} alt="img" />
            <span className="font-semibold text-xl">
              envato<span className="font-normal text-lg">market</span>
            </span>
          </div>
          <button className="px-3 py-1 bg-[#82B440] text-white rounded">
            Buy now
          </button>
        </div>
      </div>

      <div className="hidden lg:flex justify-between bg-[#1d1729] px-5 py-3 text-[#8D869D]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src={email} alt="img" className="w-[20px] h-[20px]" />
            <span>needhelp@company.com</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={location} alt="img" className="w-[20px] h-[20px]" />
            <span>88 Broklyn Golden Street. New York</span>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="flex items-center gap-4">
            <span>Help</span>
            <span>/</span>
            <span>Support</span>
            <span>/</span>
            <span>Contact</span>
          </div>
          <div className="flex items-center gap-5 pr-5">
            <img src={twitter} alt="img" className="w-[15px] h-[15px]" />
            <img src={facebook} alt="img" className="w-[15px] h-[15px]" />
            <img src={p} alt="img" className="w-[15px] h-[15px]" />
            <img src={insta} alt="img" className="w-[15px] h-[15px]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-black">
        <div className="flex items-center gap-10">
          <div className="flex items-center bg-[#1d1729] text-white px-12 xl:px-16 py-2 lg:py-6 border-r-4 border-[#7243f2] ">
            <img src={log3} alt="img" className="w-[50px] h-[50px]" />
            <span className="text-2xl font-semibold">MIZOX</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 mr-4 xl:mr-0">
            <div className="group flex flex-col">
              <div className="flex items-center">
                <span className="text-lg font-semibold group-hover:text-[#7243f2]">
                  Home
                </span>
                <MdKeyboardArrowDown className="text-lg group-hover:text-[#7243f2]" />
              </div>
              <span className="group-hover:border border-[#7243f2] font-bold  w-14"></span>
            </div>

            <div className="group flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-lg group-hover:text-[#7243f2]">
                  Pages
                </span>
                <MdKeyboardArrowDown className="text-lg group-hover:text-[#7243f2]" />
              </div>
              <span className="group-hover:border border-[#7243f2] font-bold  w-12"></span>
            </div>

            <div className="group flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-lg group-hover:text-[#7243f2]">
                  Services
                </span>
                <MdKeyboardArrowDown className="text-lg group-hover:text-[#7243f2]" />
              </div>
              <span className="group-hover:border border-[#7243f2] font-bold  w-[70px]"></span>
            </div>

            <div className="group flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-lg group-hover:text-[#7243f2]">
                  Projects
                </span>
                <MdKeyboardArrowDown className="text-lg group-hover:text-[#7243f2]" />
              </div>
              <span className="group-hover:border border-[#7243f2] font-bold  w-[70px]"></span>
            </div>

            <div className="group flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-lg group-hover:text-[#7243f2]">News</span>
                <MdKeyboardArrowDown className="text-lg group-hover:text-[#7243f2]" />
              </div>
              <span className="group-hover:border border-[#7243f2] font-bold  w-12"></span>
            </div>
            <div className="flex items-center">
              <span className="text-lg">Contact</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pr-7">
          <img
            src={message}
            alt="img"
            className="w-[40px] h-[40px] hidden xl:block"
          />
          <div className="hidden xl:flex flex-col pr-5">
            <span className="text-[#8D869D] font-normal">
              Have any questions?
            </span>
            <span className="text-lg font-medium">
              <span className="text-[#8D869D] text-base">Free</span>+92(8800) -
              9850
            </span>
          </div>
          <img src={search} alt="img" lassName="w-[25px] h-[25px]" />
          <div className="lg:hidden">
            <img src={bar} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import banner from "../assets/images/girlBanner.jpg";
import correct from "../assets/images/correct.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <img
        src={banner}
        alt="img"
        className="w-full object-cover h-[50vh] sm:h-[70vh] lg:h-[90vh]"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center px-6 sm:px-12 lg:px-28 text-center">
        {/* Quality Indicators */}
        <div className="flex flex-wrap items-center gap-3 bg-[#FFFFFF1A] justify-center py-2 px-4 border rounded-md mt-5">
          <div className="flex items-center gap-2">
            <img src={correct} alt="Quality" className="w-5 h-5" />
            <span className="text-white text-sm sm:text-base">
              Quality Results
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={correct} alt="Success" className="w-5 h-5" />
            <span className="text-white text-sm sm:text-base">
              Success Rates
            </span>
          </div>
        </div>

        {/* Main Text */}
        <div className="mt-8 text-white">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
            Cost Effective
            <span className="block">Digital Marketing</span>
            <span className="block">Agency</span>
          </h1>
          {/* Buttons */}
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#7243f2] text-white font-bold rounded-md">
              Explore Now
            </button>
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-black font-semibold rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <button className="px-3 py-3 bg-[#00000080] text-white rounded-full">
          <IoIosArrowBack size={24} />
        </button>
        <button className="px-3 py-3 bg-[#00000080] text-white rounded-full">
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";

const Third = () => {
  return (
    <div className="px-3 lg:px-12 mt-16">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
        <div className="relative group w-full h-[300px] lg:h-[400px]">
          <img src={first} alt="img" className="w-full h-full" />
          <div className="absolute inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-bold">
              Leader in Digital Marketing
            </span>
          </div>
        </div>
        <div className="relative group w-full h-[300px] lg:h-[400px]">
          <img src={second} alt="img" className="w-full h-full" />
          <div className="absolute inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-bold">
              Highest Sucess Rates
            </span>
          </div>
        </div>
        <div className="relative group w-full h-[300px] lg:h-[400px]">
          <img src={third} alt="img" className="w-full h-full" />
          <div className="absolute inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-bold">
              Quality Marketing Solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;

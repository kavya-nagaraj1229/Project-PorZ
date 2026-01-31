import React from "react";
import { FaArrowLeft } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 md:px-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-start gap-12">

        <div className="flex justify-center relative">
          <div className="w-96 h-96 md:w-[25rem] md:h-[25rem] bg-[#FECFD0] rounded-full relative flex items-end justify-center">

            <div className="w-44 md:w-52 h-64 bg-white pb-2  rounded-xl shadow-lg flex flex-col justify-between p-4 mb-4 absolute z-10">

              <div className="absolute top-3 left-3 text-gray-900">
                <FaArrowLeft size={20} />
              </div>

              <div className="flex flex-col items-center justify-center mt-4">
                <div className="text-yellow-400 text-5xl md:text-6xl">🍌</div>
                <p className="text-gray-900 text-lg md:text-xl font-bold mt-2">Banana</p>
                <p className="text-gray-500 text-sm md:text-base">Without skin</p>
              </div>

<div className="flex justify-around mt-4 gap-2">
  <div className="relative flex flex-col items-center border border-gray-300 rounded-lg px-3 py-2 w-24 md:w-28 bg-violet-700 text-white">
    
    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 h-2/3 w-1 bg-green-400 rounded-l-lg"></div>
    
    <p className="text-sm font-semibold text-center z-10 mt-1">Kid Size</p>
    <span className="text-xs z-10">2x65g</span>
  </div>

  <div className="flex flex-col items-center border border-gray-300 rounded-lg px-3 py-2 w-24 md:w-28 bg-gray-50">
    <p className="text-gray-900 text-sm font-semibold text-center">Small</p>
    <span className="text-gray-500 text-xs">80g</span>
  </div>
</div>


            </div>

          </div>
        </div>
   <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-4">
            Set your <br /> own Targets.
          </h1>

          <p className="text-gray-500 max-w-md mb-6 text-xl">
            Our Well Balanced goal is the one <br />
            we recommend for most people.<br />
            However, if you have specific<br />
            dietary requirements.
          </p>

          <div className="flex justify-center md:justify-start mt-6">
            
<button className="flex items-center gap-4 bg-[#CCE8FD]   rounded-xl shadow-lg px-4 py-2">
  <FontAwesomeIcon icon={faApple} className="text-2xl text-black" />
  <div className="flex flex-col text-left">
    <p className="text-xs text-gray-400">Get on the</p>
    <p className="text-sm font-semibold text-gray-900">App Store</p>
  </div>
</button>

          </div>
        </div>

        </div>
      </div>
    
  );
}

import React from "react";
import image1 from "./images/image 1.svg"; 
import bg3 from "./images/bg 3.svg"; 
import image4 from "./images/image 4.svg"; 
import { PiDotsNineBold } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-white">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center 
                      px-6 sm:px-10 md:px-20">

        <div className="relative 
                        ml-0 md:ml-2
                        -mt-0 md:-mt-10
                        text-center md:text-left">

          <div className="absolute 
                          top-4 left-4 
                          md:-top-24 md:-left-14 
                          flex items-center gap-6 md:gap-9">
            <span className="font-bold text-gray-900">nutra</span>
            <button className="flex items-center font-bold gap-1 px-4 py-1.5 border rounded-full text-sm text-gray-900">
              <PiDotsNineBold className="w-4 h-4 text-gray-900" />Our app
            </button>
          </div>

          <h1 className="mt-20 sm:mt-24 md:mt-0
               text-4xl sm:text-5xl md:text-7xl
               font-extrabold leading-tight text-[#1E1B4B]">

            Life <br />
            Changing <br />
            weight loss.
          </h1>

          <p className="mt-5 text-gray-900 flex items-center justify-center md:justify-start gap-2">
            Tracking made
            <span className="border-b-2 border-yellow-400">
              easy
            </span>
            <img
              src={image4}
              alt="banana"
              className="w-[18px] sm:w-[22px] md:w-[30px]"
            />
          </p>

          <button className="mt-7 bg-[#1E1B4B] text-white px-7 py-3 rounded-xl shadow-md hover:scale-105 transition">
            Start Now
          </button>
        </div>

        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          <img
            src={bg3}
            alt="bg"
            className="w-[320px] sm:w-[450px] md:w-[600px] lg:w-[820px]"
          />

          <img
            src={image1}
            alt="hero"
            className="absolute 
                       w-[260px] sm:w-[380px] md:w-[690px]"
          />
        </div>

      </div>
    </div>
  );
}

import React from "react";
import muffin from "./images/image 4.svg";
import milk from "./images/image 41.svg";
import banana from "./images/image 42.svg";
import image5 from "./images/image 5.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 md:px-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="text-center md:text-left ">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-4 ">
            Calories <br /> tracking.
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

        <div className="flex justify-center">
          <div className="relative w-[430px] h-[430px] rounded-full bg-gradient-to-b from-yellow-100 to-yellow-300 flex items-center justify-center">

            <div className="w-[230px] h-[340px] bg-white rounded-3xl shadow-xl relative -top-[4%]">
              <div className="bg-gray-700 h-[60px] rounded-t-3xl flex items-center justify-center text-white text-sm">
                1,297 kcal
              </div>

              <div className="p-4 text-sm">
                <div className="flex justify-between text-gray-400 mb-2">
                  <span className="font-medium text-gray-700">Breakfast</span>
                  <span>384 kcal</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <img src={milk} alt="" className="w-8 h-8 rounded-lg" />
                  <div>
                    <p className="font-medium">Muffin</p>
                    <p className="text-xs text-gray-400">100g</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <img src={banana} alt="" className="w-8 h-8 rounded-lg" />
                  <div>
                    <p className="font-medium">Flavour Milk</p>
                    <p className="text-xs text-gray-400">300ml</p>
                  </div>
                </div>

                <div className="flex justify-between text-gray-400 mb-2 mt-4">
                  <span className="font-medium text-gray-700">Lunch</span>
                  <span>590 kcal</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <img src={muffin} alt="" className="w-8 h-8 rounded-lg" />
                  <div>
                    <p className="font-medium">Banana</p>
                    <p className="text-xs text-gray-400">80g</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-1">Remaining</p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-[40%] h-2 bg-green-400 rounded-full"></div>
                </div>

                <p className="text-center mt-2 text-xs text-gray-500">
                  1,297 kcal
                </p>
              </div>

              <button className="absolute bottom-4 right-4 w-10 h-10 bg-green-400 text-white rounded-full text-2xl flex items-center justify-center shadow-lg">
                +
              </button>
            </div>

          </div>
        </div>
   


      </div>
    </div>
  );
}

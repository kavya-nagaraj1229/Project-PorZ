import React from "react";
import phone from "./images/bg 31.svg";
import icon1 from "./images/image 4.svg";
import icon2 from "./images/image 41.svg";
import icon3 from "./images/image 42.svg";
import icon4 from "./images/Rectangle 5.svg";
import icon5 from "./images/Rectangle 51.svg";
import { FaPercentage } from "react-icons/fa";
import { TbBarcode } from "react-icons/tb";

export default function Track() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 md:px-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        <div className="relative flex justify-center items-center">
          <img
            src={phone}
            alt="bg"
            className="w-[480px] sm:w-[560px] md:w-[620px] lg:w-[700px] h-auto md:h-[800px] lg:h-[850px]"
          />

          <h2 className="absolute top-7 left-1/2 -translate-x-1/2
                         text-3xl sm:text-4xl md:text-5xl
                         font-bold leading-tight text-center z-10">
            Track <br /> anywhere, <br /> anytime.
          </h2>

          <div className="absolute inset-0 z-10 overflow-hidden">

            <div className="absolute top-[27%] left-[45%] w-28 h-40 max-sm:w-20 max-sm:h-28
                            bg-white rounded-2xl shadow-md flex flex-col items-center justify-center gap-1 scale-90 max-sm:scale-75">
              <img src={icon1} className="w-13 max-sm:w-9" alt="" />
              <p className="text-[12px] max-sm:text-[10px] font-semibold text-gray-700">Banana</p>
              <p className="text-[10px] max-sm:text-[8px] text-gray-400">Without skin</p>
            </div>

            <div className="absolute top-[31%] right-[12%] w-28 h-40 max-sm:w-20 max-sm:h-28
                            bg-white rounded-2xl shadow-md flex flex-col items-center justify-center gap-1 scale-90 max-sm:scale-75">
              <img src={icon1} className="w-13 max-sm:w-9" alt="" />
              <p className="text-[12px] max-sm:text-[10px] font-semibold text-gray-700">Banana Bread</p>
              <p className="text-[10px] max-sm:text-[8px] text-gray-400">Backing Mix</p>
            </div>
            <div className="absolute top-[46%] left-[45%] w-28 h-40 max-sm:w-20 max-sm:h-28
                            bg-white rounded-2xl shadow-md flex flex-col items-center justify-center gap-1 scale-90 max-sm:scale-75">
              <img src={icon2} className="w-13 max-sm:w-9" alt="" />
              <p className="text-[12px] max-sm:text-[10px] font-semibold text-gray-700">Taco 5 Ripe</p>
              <p className="text-[10px] max-sm:text-[8px] text-gray-400">Ready Bananas</p>
            </div>

            <div className="absolute top-[50%] right-[12%] w-28 h-40 max-sm:w-20 max-sm:h-28
                            bg-white rounded-2xl shadow-md flex flex-col items-center justify-center gap-1 scale-90 max-sm:scale-75">
              <img src={icon3} className="w-13 max-sm:w-9" alt="" />
              <p className="text-[12px] max-sm:text-[10px] font-semibold text-gray-700">Flavour Mild</p>
              <p className="text-[10px] max-sm:text-[8px] text-gray-400">Plant based</p>
            </div>

          </div>
        </div>

        <div className="text-center md:text-left space-y-10 relative
                        -top-[30px] sm:-top-[60px] md:-top-[90px] lg:-top-[120px]
                        left-0 sm:left-[5%] md:left-[15%] justify-center">

          <p className="text-gray-500 text-xl sm:text-2xl max-w-md mx-auto md:mx-0">
            Over 250,000 foods <br /> with photos. Plus <br />
            barcode scanning <br />App.
          </p>
          <div className="flex items-start gap-4 w-full">
  <div className="relative flex-shrink-0">
    <img
      src={icon4}
      className="w-10 sm:w-8 mt-1"
      alt=""
    />
    <div className="absolute top-[11%] left-1 w-7 h-7 flex items-center justify-center ">
      <FaPercentage className="w-4 h-4 text-gray-900" />
    </div>
  </div>

  <div className="flex-1 text-left">
    <p className="font-bold text-xl sm:text-2xl">
      Our Well Balanced
    </p>
    <p className="text-gray-500 mt-2 text-sm sm:text-base">
      Goal is the one we recommended <br />
      for most people. However, if you <br />
      have specific dietary <br />
      requirements.
    </p>
  </div>
</div>


          <div className="flex items-start gap-4">
            <div className="relative">
              <img src={icon5} className="w-10 sm:w-8 mt-1" alt="" />
              <div className="absolute top-2 right-1 w-6 h-6 flex items-center justify-center rounded-full shadow ">
                <TbBarcode className="w-4 h-4 text-gray-900" />
              </div>
            </div>

            <div>
              <p className="font-bold text-xl sm:text-2xl">Barcode Scanner</p>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                App on your phone or tablet. Or<br />
                keep a food diary online via the <br />
                Website – whichever suits you <br />best.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

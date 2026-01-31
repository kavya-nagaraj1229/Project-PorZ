import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function BlankPage() {
  return (
    <div className="w-full flex items-center justify-center bg-white">
      
      <div className="w-full h-[300px] md:h-[350px] 
                      bg-[#CCE8FD] flex flex-col justify-center 
                      px-6 md:px-20 shadow-xl">

        <h1 className="text-3xl sm:text-4xl md:text-6xl 
                       font-extrabold leading-tight text-[#1E1B4B] text-left">
          Join free<br />
          for 7 days
        </h1> 

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
  );
}

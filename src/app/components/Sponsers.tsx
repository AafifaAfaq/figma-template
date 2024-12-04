import React from 'react'
import Image from "next/image";
import sponsers from "@/app/assets/sponsors.png"

const Sponsers = () => {
  return (
    <div className="w-full h-auto px-4 sm:px-8 md:px-[120px] lg:px-[220px] py-8 sm:py-12 md:py-[100px] lg:py-[140px] bg-white mx-auto">
      <div>
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2 font-bold leading-tight text-[#212529] text-center">
          Our Sponsors
        </h1>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around py-8 sm:py-12 md:py-16">
          <Image
            src={sponsers}
            alt="Work Management Software"
            width={900}
            height={500}
            className="w-full sm:w-3/4 md:w-2/3 lg:w-[900px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsers;

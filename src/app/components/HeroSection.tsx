import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full h-auto px-4 md:px-16 lg:px-[220px] py-10 md:py-20 lg:py-[140px] bg-[#043873]">
      {/* Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="hidden lg:block w-[400px] h-[351px] bg-[#043873]"></div>

        {/* Hero Content Section */}
        <div className="w-full lg:w-9/12 flex flex-col gap-6 text-white text-center lg:text-left">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Get More<span className="text-white"> Done </span>with <br className="hidden md:block" /> whitepace
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base lg:text-lg leading-relaxed font-inter tracking-tight">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>

          {/* Call to Action Button */}
          <button className="w-fit h-[50px] md:h-[60px] lg:h-[63px] px-4 md:px-6 lg:px-6 py-2 bg-[#29C8FF] text-[#043873] text-sm font-medium rounded hover:bg-[#23B0F0] transition duration-300">
            Try Whitepace free →
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full h-[100px] md:h-[200px] lg:h-[300px] bg-[#C4DEFD] mt-6 lg:mt-0"></div>
      </div>
    </div>
  );
};

export default HeroSection;

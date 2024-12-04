import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full w-fit h-[729px] px-[220px] py-[140px] bg-[#043873]">
      {/* Main Content Wrapper */}
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="w-[1400px] h-[351px] bg-[#043873]"></div>

        {/* Hero Content Section */}
        <div className="w-[656px] flex flex-col gap-6 text-white w-9/12">
          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight">
            Get More<span className="text-white"> Done </span>with <br /> whitepace
          </h1>

          {/* Subtitle */}
          <p className="text-base leading-relaxed font-inter text-lg font-normal leading-custom tracking-tight text-left no-underline">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>

          {/* Call to Action Button */}
          <button className="w-fit  h-[63px] w-[219px] px-6 py-3 bg-[#29C8FF] text-[#043873] text-sm font-medium rounded hover:bg-[#23B0F0] transition duration-300">
            Try Whitepace free →
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full h-[350px] bg-[#C4DEFD] gap-4 ml-auto"></div>

      </div>
    </div>
  );
};

export default HeroSection;

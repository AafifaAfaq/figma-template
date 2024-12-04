import React from "react";
import Image from "next/image";
import img1 from "@/app/assets/img1.png";

const WorkManagement = () => {
  return (
    <div className="w-full h-auto px-6 md:px-12 lg:px-[220px] py-8 md:py-12 lg:py-[140px] bg-white">
      {/* Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
        {/* Hero Content Section */}
        <div className="w-full lg:w-6/12 flex flex-col gap-4 lg:gap-6 text-black">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Project<span className="text-black"></span><br />Management
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base lg:text-lg leading-relaxed font-inter font-normal tracking-tight text-left">
            Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>

          {/* Call to Action Button */}
          <button className="w-fit h-[50px] md:h-[55px] lg:h-[63px] px-4 md:px-6 lg:px-8 bg-[#4F9CF9] text-white text-xs md:text-sm font-medium rounded hover:bg-[#23B0F0] transition duration-300">
            Get Started →
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-4/12 h-[200px] md:h-[300px] lg:h-[400px] bg-[#C4DEFD]"></div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8 md:gap-6 lg:gap-12">
        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center">
          <Image
            src={img1}
            alt="Work Management Software"
            width={300}
            height={300}
            className="md:w-[80%] lg:w-[90%] h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[50%] flex flex-col gap-4">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
            Work<span className="text-black"> together</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base lg:text-lg leading-relaxed font-inter font-normal tracking-tight text-left text-black">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>

          {/* Call to Action Button */}
          <button className="w-fit h-[50px] md:h-[55px] lg:h-[63px] px-4 md:px-6 lg:px-8 bg-[#4F9CF9] text-white text-xs md:text-sm font-medium rounded hover:bg-[#23B0F0] transition duration-300">
            Try it now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkManagement;

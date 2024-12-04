import React from "react";
import Image from "next/image";
import img1 from  "@/app/assets/img1.png"

const WorkManagement = () => {
  return (
    <div className="w-[1800px] w-fit h-[1000px] px-[220px] py-[140px] bg-white">
    {/* Main Content Wrapper */}
    <div className="flex justify-between items-center">

      {/* Hero Content Section */}
      <div className="w-[656px] flex flex-col gap-6 text-black w-6/12">
        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight">
          Project<span className="text-black"></span><br />Management
        </h1>

        {/* Subtitle */}
        <p className="text-base leading-relaxed font-inter text-lg font-normal leading-custom tracking-tight text-left no-underline">
        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
        </p>

        {/* Call to Action Button */}
        <button className="w-fit  h-[63px] w-[219px] px-6 py-3 bg-[#4F9CF9] text-white text-sm font-medium rounded hover:bg-[#23B0F0] transition duration-300">
          Get Started →
        </button>
      </div>

      {/* Right Section */}
      <div className="w-4/12 h-[400px] bg-[#C4DEFD] gap-3"></div>

    </div>
    <div className="flex justify-between items-center">

        {/* Hero Content Section */}
<div className="flex justify-between items-center w-full  text-white">
  {/* Right Section */}
  <div className="w-[90%] h-[350px]">
    <Image src={img1} alt="Work Management Software" width={400} height={400} />
  </div>

  {/* Title and Content Section */}
  <div className="w-[70%] flex flex-col gap-4">
    {/* Title */}
    <h1 className="text-5xl font-bold leading-tight text-black">
      Work<span className="text-black"> together</span>
    </h1>

    {/* Subtitle */}
    <p className="text-base leading-relaxed font-inter text-lg font-normal leading-custom tracking-tight text-left no-underline text-black">
      Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
    </p>

    {/* Call to Action Button */}
    <button className="w-fit h-[63px] w-[219px] px-6 py-3 bg-[#4F9CF9] text-white text-sm font-medium rounded hover:bg-[#23B0F0] transition duration-300">
      Try it now →
    </button>
  </div>
</div>



</div>
  </div>
);
};
export default WorkManagement;

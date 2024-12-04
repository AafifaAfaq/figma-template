import React from 'react';

const YourWork = () => {
  return (
    <div className="w-full h-auto px-4 py-8 sm:px-6 md:px-12 lg:w-full lg:h-[500px] lg:px-[220px] lg:py-[140px] bg-[#043873]">
      <div>
        <div className="flex flex-col items-center justify-center text-justify sm:text-justify md:text-center space-y-4">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl py-2 font-bold leading-tight text-[#FFFFFF]">
            Your work, everywhere you are
          </h1>
          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#FFFFFF] py-2 leading-relaxed font-inter font-normal tracking-tight">
            Access your notes from your computer, phone, or tablet by synchronizing with various services, including
            whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app
            is also available!
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center py-4">
          <button className="h-[50px] sm:h-[55px] md:h-[63px] w-fit px-4 sm:px-5 md:px-6 py-3 bg-[#4F9CF9] text-[#043873] text-sm sm:text-base font-medium rounded hover:bg-[#23B0F0] transition duration-300">
            Try Tasky →
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourWork;

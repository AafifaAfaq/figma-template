import React from 'react'

const YourWork = () => {
  return (
    <div className="w-[1920px] h-[500px] px-[220px] py-[140px] bg-[#043873]">
    <div>
        {/* Title */}
        <h1 className="text-5xl  py-2 font-bold leading-tight text-[#FFFFFF] text-center">
        Your work, everywhere you are
          </h1>

          {/* Subtitle */}
          <p className="text-base text-[#FFFFFF] py-2 text-center leading-relaxed font-inter text-lg font-normal leading-custom tracking-tight text-left no-underline">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>

          {/* Call to Action Button */}
          <div className='flex justify-center py-4'>
          <button className="w-fit text-center items-center  h-[63px] w-[219px] px-6 py-3 bg-[#4F9CF9] text-[#043873] text-sm font-medium rounded hover:bg-[#23B0F0] transition duration-300">
            Try Tasky →
          </button>
          </div>
    </div>
        
        

    </div>
  )
}

export default YourWork
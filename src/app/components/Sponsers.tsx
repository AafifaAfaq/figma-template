import React from 'react'
import Image from "next/image";
import sponsers from  "@/app/assets/sponsors.png"

const Sponsers = () => {
  return (
    <div className="w-[1920px] h-[500px] px-[220px] py-[140px] bg-white">
    <div>
        {/* Title */}
        <h1 className="text-5xl  py-2 font-bold leading-tight text-[#212529] text-center">
       Our Sponsers
          </h1>
        <div className="flex justify-around py-16">
            <Image src={sponsers} alt="Work Management Software" width={900} height={500} />
            </div>

         
          </div>
    </div>
        
        

  )
}

export default Sponsers
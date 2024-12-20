import React from 'react';
import Image from "next/image";
import logo from "@/app/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#043873] text-white py-[60px] px-[20px] lg:py-[140px] lg:px-[220px]">
      <div className="flex flex-wrap lg:flex-nowrap justify-around items-start lg:items-center gap-10 lg:gap-[20px]">
        {/* Logo and Description */}
        <div className="flex justify-center w-full lg:w-auto">
          <div className="w-full lg:w-6/12 text-justify leading-8">
            <Image src={logo} alt="logo" width={191} height={34} />
            <p className="text-sm leading-relaxed font-sans text-[16px] lg:text-[18px] font-normal leading-[24px] lg:leading-[30px] tracking-[-0.02em] text-left underline decoration-slice mt-4">
              Whitepace was created for the new ways we live and work. 
              We make a better workspace around the world.
            </p>
          </div>
        </div>

        {/* Product Links */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h2 className="text-lg font-semibold mb-4">Product</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Overview</a></li>
            <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-300">Customer stories</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h2 className="text-lg font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">Guides & tutorials</a></li>
            <li><a href="#" className="hover:text-gray-300">Help center</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">About us</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300">Media kit</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">© 2021 Whitepace LLC.</p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="w-full h-[92px] bg-[#043873] py-4 px-4 md:px-12 lg:px-[220px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={191} height={34} />
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex md:w-[737.5px] h-[60px] justify-between items-center">
          <div className="w-[549px]">
            <ul className="text-[16px] md:text-[18px] font-semibold leading-[23px] flex justify-between text-white">
              <li>Products</li>
              <li>Services</li>
              <li>Resources</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <button className="py-2 px-6 md:py-4 md:px-10 rounded-lg bg-[#FFE492] hover:bg-[#FFD65E] transition duration-300">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white text-[18px] font-semibold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Toggle visibility based on state */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#043873] py-4 px-4">
          <ul className="text-white text-center text-[16px] font-semibold">
            <li className="py-2">Products</li>
            <li className="py-2">Services</li>
            <li className="py-2">Resources</li>
            <li className="py-2">Contact</li>
          </ul>
          <div className="text-center">
            <button className="py-2 px-8 rounded-lg bg-[#FFE492] mt-4 hover:bg-[#FFD65E] transition duration-300">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

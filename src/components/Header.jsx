import React from "react";
import logo from "../assets/images/logo.png";
import NFT from "../assets/images/NFT Marketplace.png";
import { LuUser2 } from "react-icons/lu";
import { HiMiniBars4 } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <header className="bg-[#2B2B2B] px-4 py-5 md:px-[50px] flex justify-between">
        <div className="flex gap-3 items-center">
          <img src={logo} className="h-[8px] w-[10px]" alt="logo" />
          <img src={NFT} alt="NFT" />
        </div>
        <div className="flex items-center gap-5">
          <nav className=" hidden md:block">
            <ul className="flex gap-10">
              <li className="text-base font-semibold text-white">
                Marketplace
              </li>
              <li className="text-base font-semibold text-white">Rankings</li>
              <li className="text-base font-semibold text-white">
                Connect a wallet
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <button className="bg-[#A259FF] text-sm flex text-white items-center gap-2 py-4 px-7 rounded-2xl">
              <LuUser2 />
              Sign Up
            </button>
          </div>
          <div className="text-white text-4xl md:hidden cursor-pointer">
            <HiMiniBars4 />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

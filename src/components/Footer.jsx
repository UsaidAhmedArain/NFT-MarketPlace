import React from "react";
import NFT from "../assets/images/NFT Marketplace.png";
import { TbBrandDiscord } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#3B3B3B]">
      <footer className="py-10 px-20 ">
        <div className="flex md:gap-24 gap-12 md:flex-row flex-col">
          <div className="flex flex-col gap-5 mt-1">
            <div>
              <img src={NFT} alt="footer-logo" />
            </div>
            <div>
              <p className="text-[#CCCCCC] font-normal text-base">
                NFT marketplace UI created with Anima for Figma.
              </p>
            </div>
            <p className="text-[#CCCCCC] font-normal text-base">
              Join our community
            </p>
            <div className="flex gap-3">
              <TbBrandDiscord className="text-[#858584] text-2xl" />
              <AiOutlineYoutube className="text-[#858584] text-2xl" />
              <FiTwitter className="text-[#858584] text-2xl" />
              <FaInstagram className="text-[#858584] text-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-white text-[22px]">Explore</h1>
            <p className="text-base font-normal text-[#CCCCCC]">Marketplace</p>
            <p className="text-base font-normal text-[#CCCCCC]">Rankings</p>
            <p className="text-base font-normal text-[#CCCCCC]">
              Connect wallet
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-white text-[22px]">
              Join Our Weekly Digest
            </h1>
            <p className="text-base font-normal text-[#CCCCCC]">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="flex md:flex-row flex-col">
              <input
                type="text"
                className="w-full outline-none rounded-xl p-3"
                placeholder="Enter Your Email Here"
              />
              <button className="bg-[#A259FF] md:mt-0 mt-5  text-sm  text-white  py-3 px-12 rounded-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="md:mt-4 mt-8"></hr>
        <p className="text-base font-normal text-[#CCCCCC] md:mt-4 mt-4">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

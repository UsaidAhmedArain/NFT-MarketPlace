import React from "react";
import hero from "../assets/images/hero.png";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
const Hero = () => {
  return (
    <>
      <section className="bg-[#2B2B2B]">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div>
            <img src={hero} alt="Hero" className="max-w-full  md:h-auto h-[400px] w-full" />
          </div>
          <div className="bg-[#2B2B2B] px-10  md:py-12 py-12">
            <h1 className="text-5xl text-white font-semibold text-center md:text-left">
              Create Account
            </h1>
            <p className="text-white font-normal text-[22px] mt-5 text-center md:text-left">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
            <div className="mt-8">
              <form className="flex flex-col gap-8">
                <div className="bg-white flex gap-2 items-center py-4 md:w-[60%] w-full rounded-full">
                  <LuUser2 className="ml-2 text-2xl text-gray-500 " />
                  <input
                    type="text"
                    placeholder="Username"
                    className="placeholder:text-xl outline-none w-full rounded-lg "
                  />
                </div>
                <div className="bg-white flex gap-2 items-center py-4 md:w-[60%] w-full rounded-full">
                  <MdOutlineMail className="ml-2 text-2xl text-gray-500 " />
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="outline-none w-full rounded-lg placeholder:text-xl"
                  />
                </div>

                <div className="bg-white flex gap-2 items-center py-4 md:w-[60%] w-full rounded-full">
                  <CiLock className="ml-2 text-2xl text-gray-500 " />
                  <input
                    type="text"
                    placeholder="Password"
                    className="outline-none w-full rounded-lg placeholder:text-xl"
                  />
                </div>
                <div className="bg-white flex gap-2 items-center py-4 md:w-[60%] w-full rounded-full">
                  <CiLock className="ml-2 text-2xl text-gray-500 " />
                  <input
                    type="text"
                    placeholder="Confirm Passsword"
                    className="outline-none w-full rounded-lg placeholder:text-xl"
                  />
                </div>
                <div className="mt-4">
                  <button className="bg-[#A259FF] text-white font-semibold text-base py-4 md:w-[60%] w-full rounded-full">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from "react";
import { BaseInfo } from "@/Data/data";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 m-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 ">
          <div className="">
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-300 font-semibold"
            >
              {" "}
              I am {BaseInfo.name}
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl   font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
            >
              {BaseInfo.position}
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white text-opacity-60"
            >
              {BaseInfo.description}
            </p>
            <a
              href="https://drive.google.com/file/d/1O2i9LsokRYeOjg6S4Dp0vLVihcDxQJpg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                data-aos="fade-right"
                data-aos-delay="200"
                className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer"
              >
                <span>Download CV</span>
                <FaDownload />
              </button>
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3px] border-blue-950 overflow-x-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

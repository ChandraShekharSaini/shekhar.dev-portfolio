"use client"
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

type Props = {
  skills: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skills }: Props) => {
  const { title, image, percent } = skills;
  return (
    <div className="p-6 hover:bg-blue-900 duration-300 trasition-all cursor-pointer text-center flex flex-col  justify-center items-center rounded-lg bg-gray-900">
      <Tilt className="multiple-tilt">
        <Image
          src={image}
          alt="image"
          height={80}
          width={80}
          className="object-cover"
        />
      </Tilt>
      <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
      <div className="bg-black mt-4 rounded-lg p-2 text-white text-center opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;

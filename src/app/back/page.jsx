import Image from "next/image";
import React from "react";
import { INFO } from "../constans";

export default function page() {
  return (
    <div className="  container grid grid-cols-2 gap-6 mt-4 w-max  ">
      {INFO.map((up, index) => (
        <div className=" relative" key={index}>
          <Image src={up.img} width={600} height={600} className="relative" />
          <div>
            <span className="absolute top-10 left-1/4  text-white text-3xl font-bold ">
              {up.label}
            </span>
            <span className=" absolute top-1/4 left-1/3 text-white text-xs  ">
              {up.dis}
            </span>
            <button className="absolute bottom-2 bg-black text-white text-sm rounded-xl px-2 left-2 outline-double">
              {up.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

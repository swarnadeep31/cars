import {
  FOOTER,
  FOOTER1,
  FOOTER2,
  FOOTER3,
  FOOTER4,
  HEAD,
  SCICAL,
} from "@/app/constans";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <div className="container mt-4">
      <div className="flex justify-between">
        <div className="flex justify-between items-center gap-6">
          <span className="text-xs font-bold">Axcessibility</span>
          <span className="text-xs text-red-600">YOUR ORIVACY CHOICES</span>
        </div>
        <div className="flex justify-between gap-8 mt-4">
          <button className=" bg-red-600 rounded-3xl px-4  outline text-xs font-bold">
            Manage preferences
          </button>
          {SCICAL.map((sc, index) => (
            <div key={index}>{sc.icon}</div>
          ))}
        </div>
      </div>

      <div className="mt-4 p-2 grid grid-cols-5 mb-6">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xs">SHOPPING TOOLS</span>
          {FOOTER.map((fo, index) => (
            <button key={index} className="text-xs flex">
              {fo.data}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xs">VEHICLES</span>
          {FOOTER1.map((fo1, index) => (
            <button key={index} className="text-xs flex">
              {fo1.data}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xs">HELPFUL LINKS</span>
          {FOOTER2.map((fo2, index) => (
            <button key={index} className="text-xs flex">
              {fo2.data}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xs">OWNERS</span>
          {FOOTER3.map((fo3, index) => (
            <button key={index} className="text-xs flex">
              {fo3.data}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xs">ABOUT TOYOTA</span>
          {FOOTER4.map((fo4, index) => (
            <button key={index} className="text-xs flex">
              {fo4.data}
            </button>
          ))}
        </div>
      </div>
      <Separator className="w-full " />
      <div className="container mt-4 mb-6">
        <div className="flex justify-center items-center gap-2 text-xs">
          <span>Contact Us</span>
          <span>FAQs</span>
          <span>English</span>
        </div>
        <div className="flex flex-col justify-center items-center text-xs ">
          <span>
            ©2024 Toyota Motor Sales, U.S.A., Inc. All information applies to
            U.S. vehicles only.
          </span>
          <span>
            The use of Olympic Marks, Terminology and Imagery is authorized by
            the U.S. Olympic & Paralympic Committee pursuant to Title 36 U.S.
            Code Section 220506.
          </span>
        </div>
      </div>
    </div>
  );
}

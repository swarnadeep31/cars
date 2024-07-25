"use client";
import { CgProfile } from "react-icons/cg";
import { CAR } from "@/app/constans";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    if (dropdownIndex === index) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
      setDropdownIndex(index);
    }
  };

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/car.jpg" alt="Toyota Logo" width={100} height={100} />
          </div>
          <div className="flex space-x-10">
            {CAR.map((ca, index) => (
              <div className="p-4" key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center  text-black hover:outline rounded-2xl px-2"
                >
                  <span>{ca.label}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {isOpen && dropdownIndex === index && (
                  <div className="absolute p-4 right-0 h-dvh mt-10 w-screen bg-white rounded-md shadow-lg z-20">
                    <div className="p-4">
                      <a
                        href="#"
                        className="  block p-2 text-black hover:bg-gray-100"
                      >
                        <div>{ca.name}</div>
                      </a>
                      <a
                        href="#"
                        className="  block p-2 text-black hover:bg-gray-100"
                      >
                        <div>{ca.name2}</div>
                      </a>
                      <a
                        href="#"
                        className="  block p-2 text-black hover:bg-gray-100"
                      >
                        <div>{ca.name3}</div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="flex items-center space-x-4">
            <CgProfile size={30} className="h-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}

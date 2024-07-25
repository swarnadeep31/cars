"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";
import {
  DATA,
  features,
  FOOT,
  HERO,
  INFO,
  STYLE,
  STYLE1,
  STYLE2,
} from "@/app/constans";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Box } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const plugin1 = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const plugin2 = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="">
      <div className="py-2">
        <AspectRatio
          ratio={25 / 9}
          className=" relative w-full overflow-hidden "
        >
          <Image
            src="/supra.jpg"
            height={1200}
            width={1200}
            className="w-full "
          />
          <div className=" sticky top-0 flex space-x-6 justify-end left-6 p-2 bottom-6 right-6  font-bold">
            {FOOT.map((ca, label) => (
              <button
                className="  hover:bg-white outline rounded-2xl px-2"
                key={label}
              >
                {ca.lable}
              </button>
            ))}
          </div>
          <div className=" absolute left-6 top-3/4 -translate-y-1/2  ">
            <span className="text-5xl  font-semibold">SUPRA 2010</span>
            <br />
            <span className="text-3xl ">STARTING MARP</span>
            <br />
            <span className="text-3xl">$ 42000</span>
          </div>
        </AspectRatio>
      </div>
      <div className="p-4 mt-5 space-x-5 flex justify-between container mx-auto bg-gray-300 ">
        <div className=" p-4 ">
          <div className="text-5xl font-bold flex justify-center items-center p-4 ">
            Supra Higlights
          </div>
          <div className="mt-4 p-4">
            <button className="flex rounded-2xl px-4 py-2 font-bold text-white bg-black text-xs">
              see all Spces
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {DATA.map((da, index) => (
            <div className="border-t border-gray-400 pt-4" key={index}>
              <span className="font-semibold">{da.title}</span>
              <p>{da.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 container">
        <div className="flex justify-center items-center text-5xl font-bold">
          <span>Styled to stun</span>
        </div>
        <div className="flex items-center justify-center gap-6 p-6 ">
          <div className="  grid grid-cols-1">
            <div className=" p-2 text-sm font-bold flex justify-center items-center">
              Exterior
            </div>
            <Carousel plugins={[plugin.current]}>
              <CarouselContent className="w-full">
                {STYLE.map((st, index) => (
                  <CarouselItem key={index}>{st.img}</CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className=" grid grid-cols-1">
            <div className="p-2 text-sm font-bold flex justify-center items-center">
              Interior
            </div>
            <Carousel plugins={[plugin1.current]}>
              <CarouselContent className="w-full">
                {STYLE1.map((st, index) => (
                  <CarouselItem key={index}>{st.img}</CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 ">
        <div className=" mt-4 container mx-auto ">
          <div className="container text-5xl font-bold flex justify-center items-center p-4">
            <span>On the fast track to exhilaration</span>
          </div>
          <div className="flex justify-center items-center text-xl p-4">
            <span>See what makes supra stand out</span>
          </div>
        </div>
        <div className=" container mt-4space-y-2">
          <div className="text-sm font-bold border-b w-28 text-black pb-4">
            PERFORMANCE
          </div>
          <div className="text-4xl p-2 font-bold">Always come in clutch</div>

          <div className="  flex  justify-between gap-4 mt-4 ">
            <div>
              <Image
                src="/supra5.jpeg"
                width={400}
                height={400}
                className="w-full  rounded-2xl"
              />
            </div>
            <div>
              <Image
                src="/inside4.jpg"
                width={450}
                height={450}
                className="w-full  rounded-2xl"
              />
            </div>
          </div>
          <div className="  flex gap-16 mt-4 ">
            <div className="text-xl font-bold ">
              Relentless power. Lightning-speed agility.
            </div>
            <div className="grid grid-cols-1 ">
              <span className="text-xs ">
                Take the reins and steer through every coner while the g-forces
                make feel like you're sinking into your seat. Feel the power
                course to the rear wheels as your revs start to sync up to your
                heartbeat.
              </span>

              <button className="flex text-xs mt-2 font-bold hover:bg-white outline rounded-2xl w-max p-2">
                Explore Performance
              </button>
            </div>
          </div>
          <div className=" mt-4">
            <div className="text-5xl font-bold flex items-center justify-center p-2">
              Comfortable cruiser to track bruiser.
            </div>

            <Carousel plugins={[plugin2.current]} className="p-4">
              <CarouselContent>
                {STYLE2.map((co, index) => (
                  <CarouselItem className="" key={index}>
                    <Image
                      src={co}
                      width={1200}
                      height={1200}
                      className="w-full rounded-2xl "
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div>
          <div className=" container flex p-6 gap-6">
            <div>
              <div className="max-w-md  bg-gray-300 p-10 rounded-lg ">
                <h2 className="  text-xl font-bold mb-4">
                  A Sensuous Silhouette
                </h2>
                <span className="mb-4 text-xs ">
                  Each and every aspect of GR Supra's design is defined by its
                  contribution to driving performance. Generous curves and
                  daring shapes come together in a silhouette that provides
                  optimum aerodynamics.
                </span>
              </div>
              <Image
                src="/supra6.jpg"
                width={450}
                height={500}
                className="rounded-lg"
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex">
                <div className="max-w-md  bg-gray-300 p-6 rounded-lg shadow-md">
                  <h2 className=" w-max text-xl font-bold mb-4">
                    19-in. Forged Aolly Wheels
                  </h2>
                  <span className="mb-4 text-xs">
                    Sleek,strong and lightweight 19-in.forged-aluminum wheels
                    are wrapped in michelin pilot Super Sport tires,to help
                    further optimize acceleration, cornering and braking
                    capabilites.
                  </span>
                </div>

                <Image
                  src="/supra7.jpg"
                  width={450}
                  height={450}
                  className=" aspect-auto rounded-lg"
                />
              </div>
              <div className="flex gap-6">
                <div className="max-w-md  bg-gray-300 p-6 rounded-lg shadow-md">
                  <h2 className=" w-max text-xl font-bold mb-4">
                    LED Headlights
                  </h2>
                  <span className="mb-4 text-xs">
                    GR Supra's sculpted front end is punctuated by its signatute
                    headlights. Each housing features a two-level, 6-lens LED
                    light cluster to bring optimal brightness and clarity to
                    your drives.
                  </span>
                </div>
                <div className="max-w-md  bg-gray-300 p-6 rounded-lg shadow-md">
                  <h2 className=" w-max text-xl font-bold mb-4">
                    Dynamic Rear LED Taillights
                  </h2>
                  <span className="mb-4 text-xs">
                    chiseled into GR Supra's rear,LED taillights are designed to
                    clearly illuminate turn, tail and stop funtions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <img
          src="/speed.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className=" container">
          <Card className="relative bg-black bg-opacity-50 p-8 rounded-lg max-w-md w-full text-white">
            <CardHeader className="text-sm font-semibold uppercase tracking-wider">
              Technology
            </CardHeader>
            <CardHeader className="text-3xl font-bold mt-2">
              Race-bred innovation.
            </CardHeader>
            <CardContent className="mt-6 space-y-4">
              <CardTitle className="text-xl font-semibold  ">
                Digital Display
              </CardTitle>
              <CardDescription className="text-sm">
                Keep your vitals in view.
              </CardDescription>
              <CardTitle className="text-xl font-semibold">
                Supra Connect
              </CardTitle>
              <CardTitle className="text-xl font-semibold">
                Integrated Navigation
              </CardTitle>
            </CardContent>
            <button className="mt-8 py-2 px-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200">
              Explore More
            </button>
          </Card>
        </div>
      </div>

      <div className=" container mt-4">
        <div className="flex justify-center items-center text-5xl font-bold p-4">
          Technology that keeps up with you
        </div>

        <div className="flex justify-between gap-6 p-8">
          {HERO.map((he, index) => (
            <div className=" relative ">
              <div key={index}>
                <Image
                  src={he.img}
                  width={600}
                  height={600}
                  className="   rounded-md"
                />
              </div>
              <span className=" absolute text-white font-bold text-3xl top-0 inset-x-0 flex justify-center p-4 ">
                {he.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className=" container">
        <div className="text-5xl font-bold flex justify-center items-center mt-4">
          <span>Discover Your Supra</span>
        </div>
        <div className="flex justify-center items-center text-xl">
          <span>2 unique grades to choose from</span>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2 p-4">
            <div>
              <div className="flex justify-center items-center">
                <Image
                  src="/supra11.png"
                  width={400}
                  height={400}
                  className="p-6"
                />
              </div>
              <div className="container">
                <div className="font-bold w-max  text-2xl ">3.0</div>
                <div className=" mb-2 flex justify-between gap-6 ">
                  <div className="flex w-max">
                    <span className="font-bold flex justify-center items-center">
                      $56,250
                    </span>
                    <span className="p-1 text-xs">base MSRP</span>
                  </div>
                  <div className="flex w-max">
                    <span className="font-bold flex justify-center items-center">
                      23/31
                    </span>
                    <span className="p-1 text-xs">EPA-Est.MPG</span>
                  </div>
                </div>
                <div className="grid   grid-cols-1 gap-y-4 mt-6">
                  <span className="text-xs max-w-md">
                    3.0L twin-scroll single-turbo inline 6-cylinder engine
                  </span>
                  <span className="text-xs max-w-md">
                    Adaptive Variable Sport (AVS) suspension
                  </span>
                  <span className="text-xs max-w-md ">
                    Complimentary 1-year NASA membership, * including one
                    High-Performance Driving Experience (HPDE) *
                  </span>
                </div>
                <div className=" flex justify-between p-2 mt-4">
                  <button className="outline  rounded-2xl px-2">
                    See More Features
                  </button>
                  <button className="outline  rounded-2xl px-2">Build</button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <Image
                  src="/supra13.png"
                  width={350}
                  height={350}
                  className="p-6"
                />
              </div>
              <div className="container">
                <div className="font-bold w-max  text-2xl ">3.0 Premium</div>
                <div className=" mb-2 flex justify-between gap-6 ">
                  <div className="flex w-max">
                    <span className="font-bold flex justify-center items-center">
                      $59,400
                    </span>
                    <span className="p-1 text-xs">base MSRP</span>
                  </div>
                  <div className="flex w-max">
                    <span className="font-bold flex justify-center items-center">
                      23/31
                    </span>
                    <span className="p-1 text-xs">EPA-Est.MPG</span>
                  </div>
                </div>
                <div className="grid   grid-cols-1 gap-y-4 mt-2">
                  <span className="text-xs max-w-md">
                    14-way heated power-adjustable Black leather-trimmed sport
                    seats with driver's-seat memory function
                  </span>
                  <span className="text-xs max-w-md">
                    12-speaker JBL® * HiFi Surround Sound system (500W)
                  </span>
                  <span className="text-xs max-w-md ">
                    Complimentary 1-year NASA membership, * including one
                    High-Performance Driving Experience (HPDE) *
                  </span>
                </div>
                <div className=" flex justify-between p-2 mt-4">
                  <button className="outline  rounded-2xl px-2">
                    See More Features
                  </button>
                  <button className="outline  rounded-2xl px-2">Build</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  container grid grid-cols-2 gap-6 mt-4 w-max  ">
        {INFO.map((up, index) => (
          <div className=" relative" key={index}>
            <Image
              src={up.img}
              width={600}
              height={600}
              className="relative rounded-md"
            />
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
    </div>
  );
}

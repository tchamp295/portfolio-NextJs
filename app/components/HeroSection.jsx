"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-etrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from bg-purple-400 to-pink-600">
              Hello,I am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Victor Ndemo",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            I am a seasoned JavaScript Developer specializing in React.js,
            Next.js, and Node.js. My mission is to empower businesses by
            crafting dynamic, responsive, and SEO-optimized web solutions that
            elevate online presence and drive success.As a dedicated
            professional.
          </p>
          <div className="mb-6 ">
            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full sm:w-fit px-6 py-3 rounded-full mr-4 hover:bg-slate-200 text-white ">
              Hire Me
            </button>
            <button className=" px-1 w-full sm:w-fit py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative">
            {/* <Image
              src=""
              alt="hro image"
              className="absolute transform  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

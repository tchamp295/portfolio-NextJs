"use client";
import CountUp from "react-countup";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import {
  FaNode,
  FaReact,
 
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className=" pl-6 flex flex-wrap ">
          <li className="flex items-center mb-2 mr-2 ">
            <FaNode className="mr-2" style={{ color: "orange" }} /> Node.js
          </li>
          <li className="flex items-center mb-2 mr-2 ">
            <SiExpress className="mr-2" style={{ color: "purple" }} /> Express.js
          </li>
          <li className="flex items-center mb-2 mr-2 ">
            <FaReact className="mr-2" style={{ color: "blue" }} /> React.js
          </li>
          <li className="flex items-center mb-2 mr-2">
            <SiRedux className="mr-2" style={{ color: "yellow" }} /> Redux
          </li>
          <li className="flex items-center mb-2 mr-4 ">
            <SiMongodb className="mr-2" style={{ color: "green" }} /> MongoDB
          </li>
          <li className="flex items-center mb-2  mr-2">
            <TbBrandNextjs className="mr-2" style={{ color: "teal" }} /> Next.js
          </li>
          <li className="flex items-center mb-2  ">
            <SiTypescript className="mr-2" style={{ color: "blueviolet" }} />{" "}
            TypeScript
          </li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Computer Science - Kibabii University</li>
     
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>Web Developer</li>
          <li>Web Designer</li>
          <li>UI/UX Designer</li>
        </ul>
      ),
    },
  ];

const About = () => {
    const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="padding-container max-container flex flex-col gap-8 py-8  lg:flex-row xl:gap-32 ">
      <div className="flex flex-1 flex-col lg:justify-start ">
        <h3 className="  text-white text-2xl sm:text-4xl lg:text-5xl  font-extrabold mb-4">
          UI/UX <span className="text-secondary-500 ">Designer </span> & Web
          Developer
        </h3>
        <p className="hidden sm:block text-center lg:text-start text-white mb-4">
          I am a{" "}
          <span className="text-primary-400">full stack web developer</span>{" "}
          with a passion for creating interactive and responsive web
          applications. I am a quick learner and I am always eager to expand my
          knowledge and skill set. As a team player, I am excited to collaborate
          with others to craft amazing applications.
        </p>

        <div>
          <div className="hidden lg:flex flex-1 mt-8 gap-2">
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary-500 font-extrabold text-2xl">
                <CountUp start={10} end={50} duration={5} delay={1} />
                K+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 text-white pt-2">
                happy clients
              </p>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary-500 font-extrabold text-2xl">
                <CountUp start={10} end={50} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4 text-white pt-2">
                Projects done
              </p>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary-500 font-extrabold text-2xl">
                <CountUp start={10} end={50} duration={5} delay={1} />
                K+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4  text-white pt-2">
                Client Reviews
              </p>
            </div>
            <div className="relative flex-1 px-4 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <h4 className="text-secondary-500 font-extrabold text-2xl">
                <CountUp start={10} end={50} duration={5} delay={1} />+
              </h4>
              <p className="uppercase text-[13px] font-bold leading-4  text-white pt-2">
                Year experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className=" flex flex-col w-full xl:max-w-[47%] ">
        <div className="mb-4 lg:mb-1 flex flex-col gap-3 mx-auto min-w-[90%] xl:ml-0">
          <div>
            <div className="text-sm text-gray-50 flex flex-row justify-between ">
              <span>HTML CSS JAVASCRIPT</span>
              <span>90%</span>
            </div>
            <div className="relative bg-gray-50 h-3 w-full rounded-full">
              <span className="absolute top-0 left-0  h-full w-[95%] bg-secondary-500 rounded-full animate-pulse"></span>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-50 flex flex-row justify-between ">
              <span>REACT JS</span>
              <span>90%</span>
            </div>
            <div className="relative bg-gray-50 h-3 w-full rounded-full">
              <span className="absolute top-0 left-0  h-full w-[95%] bg-blue-500 rounded-full animate-pulse"></span>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-50 flex flex-row justify-between ">
              <span>NODE JS</span>
              <span>90%</span>
            </div>
            <div className="relative bg-gray-50 h-3 w-full rounded-full">
              <span className="absolute top-0 left-0  h-full w-[95%]  rounded-full animate-pulse bg-green-500"></span>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-50 flex flex-row justify-between ">
              <span>NEXT JS</span>
              <span>90%</span>
            </div>
            <div className="relative bg-gray-50 h-3 w-full rounded-full">
              <span className="absolute top-0 left-0  h-full w-[95%]  rounded-full animate-pulse bg-black"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8 text-white ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
      </div>
    </section>
  );
};

export default About;

"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import {
  FaNode,
  FaReact,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className=" pl-6 flex flex-wrap">
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
        <li>Computer Science</li>
        <li>Kibabii University</li>
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

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-0 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-full mb-4 lg:mb-0">
            <Image
              src="/images/user.jpg"
              alt="hero image"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex mb-2">
              <span className="font-bold mr-2 ">Name:</span>
              <span>Victor Ndemo</span>
            </div>
            <div className="flex mb-2">
              <span className="font-bold mr-2">Email:</span>
              <span>nyakundivictorn@gmail.com</span>
            </div>
            <div className="flex mb-2">
              <span className="font-bold mr-2">Phone:</span>
              <span>+254736601691</span>
            </div>
            <div className="flex">
              <span className="font-bold mr-2">Social:</span>
              <a
                href="https://twitter.com/yourTwitterHandle"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/yourLinkedinProfile"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourGithubUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            I am a{" "}
            <span className="text-primary-400">full stack web developer</span>{" "}
            with a passion for creating interactive and responsive web
            applications. I have extensive experience working with{" "}
            <span className="text-primary-400">
              JavaScript, Next.js, TypeScript, React, Redux, Node.js, Express,
              PostgreSQL, Sequelize, MongoDB, HTML, CSS, and Git
            </span>
            . I am a quick learner and I am always eager to expand my knowledge
            and skill set. As a team player, I am excited to collaborate with
            others to craft amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

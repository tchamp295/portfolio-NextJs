"use client";

import React, { useState } from "react";
import { SiGithub, SiLinktree, SiUpwork } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";

import Link from "next/link";

const ContactSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
  
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };
  
      try {
        const response = await fetch(endpoint, options);
  
        if (!response.ok) {
          throw new Error('Network response was not ok.'); 
        }
  
        const resData = await response.json();
        console.log(resData);
  
        if (response.status === 200) {
          console.log("Message sent.");
          setEmailSubmitted(true);
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
  return (
    <section className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 ">
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}

      <div>
        <h5 className="text-xl font-bold text-white my-2">Lets connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Fell free to contact me in case of any question
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <CiLinkedin />
          </Link>
          <Link href="linkedin.com">
            <SiGithub />
          </Link>
          <Link href="linkedin.com">
            <SiLinktree />
          </Link>
          <Link href="linkedin.com">
            <SiUpwork />
          </Link>
          <Link href="linkedin.com">
            <RiTwitterXLine />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col  ">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              {" "}
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="victor ndemo"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              {" "}
              Your Email Address
            </label>

            <input
            name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              {" "}
              Subject
            </label>
            <input
            name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium "
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Lets talk about..."
              rows={3}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>
          {
            emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                  Thank you for contacting me. I will get back to you soon.
                </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

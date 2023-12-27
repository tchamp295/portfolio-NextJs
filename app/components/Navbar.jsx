"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { CloseOutlined, GridViewOutlined } from "@mui/icons-material";
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap justify-between  items-center mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="  text-2xl md:text-5xl text-white font-semibold"
        >
          Victor Ndemo{" "}
        </Link>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)} // Toggle the state value
            className="flex items-center px-3 py2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <CloseOutlined className="h-5 w-5" />
            ) : (
              <GridViewOutlined className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className=" flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;

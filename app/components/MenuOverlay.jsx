import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center space-y-4 py-8 bg-gray-900 text-white rounded-lg shadow-lg">
      {links.map((link, index) => {
        return (
          <li key={index} className="transform transition duration-300 ease-in-out hover:scale-105">
            <NavLink href={link.path} title={link.title} className="text-lg font-semibold hover:text-yellow-300" />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { Context } from "../../context/UserContext";
import { Navlinks } from "./Navlinks";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-slate-900 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-white tracking-wide text-5xl font-bold font-workbench">
          My Shop
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <TiThMenu className="text-2xl" />
          </button>
        </div>

        <Navlinks />

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-4 bg-gray-800 text-white p-2 space-y-2">
            <Navlinks />
          </div>
        )}
      </nav>
    </div>
  );
};

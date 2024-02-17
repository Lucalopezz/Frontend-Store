import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
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

        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white text-xl">
            Home
          </Link>
          <Link to="/register" className="text-white text-xl">
            Registrar
          </Link>
          <Link to="/login" className="text-white text-xl">
            Entrar
          </Link>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-4 bg-gray-800 text-white p-2 space-y-2">
            <Link to="/" className="block">
              Home
            </Link>
            <Link to="/register" className="block">
              Registrar
            </Link>
            <Link to="/login" className="text-white text-xl">
              Entrar
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

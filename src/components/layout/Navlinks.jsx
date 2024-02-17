import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/UserContext";

export const Navlinks = () => {
  const { authenticated, logout } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="hidden lg:flex space-x-4">
      <Link to="/" className="text-white text-xl hover:text-stone-300">
        Home
      </Link>
      {!authenticated && (
        <>
          <Link to="/register" className="text-white text-xl hover:text-stone-300">
            Registrar
          </Link>
          <Link to="/login" className="text-white text-xl hover:text-stone-300">
            Entrar
          </Link>
        </>
      )}
      {authenticated && (
        <button
          onClick={(e) => logout(navigate)}
          className="bg-transparent  text-white text-xl px-3  hover:border-transparent rounded hover:text-stone-300"
        >
          Sair
        </button>
      )}
    </div>
  );
};

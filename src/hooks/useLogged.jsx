import { useToast } from "./useToast";
import { Context } from "../context/UserContext";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useLoggedIn = () => {
  const { authenticated } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!authenticated) {
      useToast("Faça login para entrar aqui!");

      navigate("/login");
    }
  }, [authenticated, navigate, location]);

  return null;
};

export default useLoggedIn;

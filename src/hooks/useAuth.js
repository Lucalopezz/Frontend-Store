import api from "../utils/api";

import { useState, useEffect } from "react";
import { useToast } from "./useToast";




export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  async function register(user, navigate) {
    try {
      const data = await api.post("/users/register", user).then((resp) => {
        return resp.data;
      });
      await authUser(data, navigate)
      useToast(data.message)
    } catch (error) {
      useToast(error.response.data.message , "error");
    }
  }

  async function authUser(data, navigate) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    navigate('/')
  }
  async function login(user, navigate){
    try {
      
    } catch (error) {
      useToast(error.response.data.message , "error");
      
    }
  }

  return { authenticated, register };
}

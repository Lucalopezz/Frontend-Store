import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import api from "../../utils/api";
import { useToast } from "../../hooks/useToast";

export const PrivateRoute = ({ children }) => {
  const [token] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState({});

  if (!token) {
    useToast("Login necessario!", "error");
    window.location.href = "/login";
  }

  useEffect(() => {
    api
      .get("/users/currentUser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);
  return user ? children : <Navigate to="/login" />;
};

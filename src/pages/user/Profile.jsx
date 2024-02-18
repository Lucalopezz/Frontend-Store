import { useEffect, useState } from "react";

import api from "../../utils/api";

export const Profile = () => {

  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");


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
  }, [token]);

  return (
    <section>
      <h1 className="text-5xl font-bold text-slate-800 mt-16 border-l-4 border-neutral-500 py-2 my-6">
        Olá, {user.username}!
      </h1>
    </section>
  );
};

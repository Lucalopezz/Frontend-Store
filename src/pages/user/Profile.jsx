import { useEffect, useState } from "react";
import api from "../../utils/api";
import { RoundedImage } from "../../components/layout/RoundedImage";
import { ImgUrl } from "../../../url";
import { Input } from "../../components/form/Input";
import { SubmitButton } from "../../components/form/SubmitButton";

import { useForm } from "react-hook-form";
import { useToast } from "../../hooks/useToast";

export const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

  if (!user.image) {
    user.image = "userImage.png";
  }
  const formData = new FormData();
  const onSubmitImage = async (imageData) => {

    if (imageData.image[0] instanceof File) {
      formData.append("image", imageData.image[0]);
    }
    const data = await api
      .patch(`/users/${user.id}/image`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log(res);
        useToast(res.data.message)
        return
      }).catch((err) =>{
        console.log(err)
        useToast(err.response.data.message, "error")
        return
      })
  };
  return (
    <section>
      <h1 className="text-5xl font-bold text-slate-800 mt-16 border-l-4 border-neutral-500 py-2 my-6 mx-12">
        Olá, {user.username}!
      </h1>
      <div className="flex">
        <div className="flex-1">
          <div className="mt-28 mx-32 border-x-4 border-neutral-400 p-8 inline-block rounded-2xl bg-neutral-100">
            <RoundedImage
              src={`${ImgUrl}img/users/${user.image}`}
              alt={`${user.username}`}
              width="w-60"
            />
          </div>
          <form className="pe-64 mt-12" onSubmit={handleSubmit(onSubmitImage)}>
            <Input
              type="file"
              text="Escolher uma Imagem"
              accept="image/png,image/jpeg"
              {...register("image")}
            />
            <SubmitButton btnValue="Alterar Imagem"/>
          </form>
        </div>
        <div className="flex-1">
          <h2>edit</h2>
        </div>
      </div>
    </section>
  );
};

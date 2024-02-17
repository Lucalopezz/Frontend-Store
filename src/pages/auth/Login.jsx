import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Context } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoginFormSchema } from "../../schemas/UserSchema";
import { Input } from "../../components/form/Input";
import { SubmitButton } from "../../components/form/SubmitButton";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  const { login } = useContext(Context);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    login(data, navigate)
  };
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-5xl font-bold text-slate-800 mt-16 border-l-4 border-neutral-500 py-2 my-6">
        Entre na sua conta
      </h1>
      <div className="mt-8 w-full max-w-lg">
        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <Input
            text="E-mail"
            type="email"
            name="email"
            placeholder="Digite seu E-mail"
            {...register("email")}
            helperText={errors?.email?.message}
          />
          <Input
            text="Senha"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            {...register("password")}
            helperText={errors?.password?.message}
          />
          <Input
            text="Confirme a senha"
            type="password"
            name="confirmpassword"
            placeholder="Digite sua senha novamente"
            {...register("confirmpassword")}
            helperText={errors?.confirmpassword?.message}
          />
          <div className="text-center">
            <SubmitButton btnValue="Entrar" />
          </div>
        </form>
        <h3 className="mt-5">
          Não tem uma conta?{" "}
          <strong>
            <Link to="/register">Clique aqui</Link>
          </strong>
        </h3>
      </div>
    </section>
  );
};

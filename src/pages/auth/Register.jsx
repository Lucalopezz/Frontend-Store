import React, { useContext } from "react";
import { Input } from "../../components/form/Input";
import { SubmitButton } from "../../components/form/SubmitButton";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Context } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

import { RegisterFormSchema } from "../../schemas/UserSchema";


export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterFormSchema),
  });

  const { register: registerContext } = useContext(Context);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    registerContext(data, navigate);
  };

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-5xl font-bold text-slate-800 mt-16 border-l-4 border-neutral-500 py-2 my-6">
        Faça seu cadastro
      </h1>
      <div className="mt-8 w-full max-w-lg">
        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)} >
          <Input
            text="Nome"
            type="text"
            name="firstName"
            placeholder="Digite seu nome"
            {...register("firstName")}
            helperText={errors?.firstName?.message}
          />
          <Input
            text="Sobrenome"
            type="text"
            name="lastName"
            placeholder="Digite seu sobrenome"
            {...register("lastName")}
            helperText={errors?.lastName?.message}
          />
          <Input
            text="Nome de usuário"
            type="text"
            name="username"
            placeholder="Digite seu nome de usuário"
            {...register("username")}
            helperText={errors?.username?.message}
          />
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
            <SubmitButton btnValue="Registrar" />
          </div>
        </form>
        <h3 className="mt-5">
          Já tem uma conta?{" "}
          <strong>
            <Link to="/login">Clique aqui</Link>
          </strong>
        </h3>
      </div>
    </section>
  );
};

import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    username: z.string(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string(),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "As senhas não conferem!",
    path: ["confirmpassword"],
  });
export const LoginFormSchema = z
  .object({
    email: z.string(),
    password: z.string(),
  })
  

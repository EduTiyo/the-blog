import z from "zod";

export const LoginSchema = z.object({
  email: z.email({ error: "Email inválido" }).trim(),
  password: z
    .string()
    .trim()
    .min(3, "Senha precisa ter no mínimo 3 caracteres"),
});

"use server";

import { createUserSession, verifyPassword } from "@/lib/login/manage-login";
import { asyncDelay } from "@/utils/async-delay";
import { redirect } from "next/navigation";

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return {
      username: "",
      error: "Login not allowed",
    };
  }

  await asyncDelay(3000);

  if (!(formData instanceof FormData))
    return {
      username: "",
      error: "Dados inválidos.",
    };

  const username = formData.get("username")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";

  if (!username || !password) {
    return {
      username: "",
      error: "Digite o usuário e a senha",
    };
  }

  const isUsernameValid = process.env.LOGIN_USER === username;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASS || "",
  );

  if (!isUsernameValid && !isPasswordValid) {
    return {
      username,
      error: "Credenciais inválidas",
    };
  }

  if (!isUsernameValid)
    return {
      username: "",
      error: "Credenciais inválidas.",
    };

  await createUserSession(username);
  redirect("/admin/post/");
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import LoginForm from "./components/LoginForm";
import ErrorMessage from "@/components/ErrorMessage";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return (
      <ErrorMessage
        contentTitle="403"
        content="Libere o sistema de login usando ALLOW_LOGIN"
      />
    );
  }

  return (
    <Card className="w-full max-w-sm mx-auto mb-32 mt-16">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Coloque seu usuário e senha para acessar o painel administrativo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default LoginPage;

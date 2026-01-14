import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import LoginForm from "./components/LoginForm";

export const dynamic = "force-dynamic";

const LoginPage = () => {
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

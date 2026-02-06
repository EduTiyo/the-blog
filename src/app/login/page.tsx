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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateUserForm from "@/components/CreateUserForm";

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
    <Tabs defaultValue="login" className="w-100 mx-auto mb-16">
      <TabsList>
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Cadastrar</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Coloque seu usuário e senha para acessar o painel administrativo.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            <LoginForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Cadastrar</CardTitle>
            <CardDescription>Insira os dados para se cadastrar</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            <CreateUserForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginPage;

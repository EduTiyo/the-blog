"use client";

import { loginAction } from "@/actions/login/login-action";
import { showMessage } from "@/adapters/showMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogInIcon } from "lucide-react";
import { useActionState, useEffect } from "react";

const LoginForm = () => {
  const initialState = {
    username: "",
    error: "",
  };
  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.error) {
      showMessage.dismiss();
      showMessage.error(state.error);
    }
  }, [state]);

  return (
    <form action={action}>
      <div className="flex flex-col gap-6 mb-6">
        <div className="grid gap-2">
          <Label htmlFor="username">Usuário</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Seu usuário"
            required
            disabled={isPending}
            defaultValue={state.username}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            placeholder="**********"
            disabled={isPending}
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        <LogInIcon />
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;

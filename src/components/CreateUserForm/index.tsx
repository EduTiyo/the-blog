"use client";

import { UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useActionState, useEffect } from "react";
import { createUserAction } from "@/actions/user/create-user-action";
import { PublicUserSchema } from "@/lib/user/schemas";
import { showMessage } from "@/adapters/showMessage";
import SpinLoader from "../SpinLoader";

const CreateUserForm = () => {
  const initialState = {
    user: PublicUserSchema.parse({}),
    errors: [],
    success: false,
  };

  const [state, action, isPending] = useActionState(
    createUserAction,
    initialState,
  );

  useEffect(() => {
    showMessage.dismiss();
    if (state.errors.length > 0) {
      state.errors.forEach((error) => showMessage.error(error));
    }
  }, [state]);

  return (
    <form action={action}>
      <div className="flex flex-col gap-6 mb-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            disabled={isPending}
            defaultValue={state.user.name}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Usuário</Label>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Seu email"
            required
            disabled={isPending}
            defaultValue={state.user.email}
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
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password2">Confirme a senha</Label>
          </div>
          <Input
            id="password2"
            name="password2"
            type="password"
            required
            placeholder="**********"
            disabled={isPending}
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {!isPending && (
          <>
            <UserIcon />
            Criar conta
          </>
        )}
        {isPending && (
          <>
            <SpinLoader containerClasses="w-5 h-5" />
            Criando...
          </>
        )}
      </Button>
    </form>
  );
};

export default CreateUserForm;

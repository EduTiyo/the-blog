import { UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const CreateUserForm = () => {
  return (
    <form action={""}>
      <div className="flex flex-col gap-6 mb-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            disabled={false}
            defaultValue={""}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username">Usuário</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Seu usuário"
            required
            disabled={false}
            defaultValue={""}
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
            disabled={false}
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
            disabled={false}
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={false}>
        <UserIcon />
        Entrar
      </Button>
    </form>
  );
};

export default CreateUserForm;

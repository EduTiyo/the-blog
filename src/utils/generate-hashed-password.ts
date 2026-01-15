import { hashPassword } from "@/lib/login/manage-login";

(async () => {
  const minhaSenha = "";
  const hashDaMinhaSenhaEmBase64 = await hashPassword(minhaSenha);

  console.log(hashDaMinhaSenhaEmBase64);
})();

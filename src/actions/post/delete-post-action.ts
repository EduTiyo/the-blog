"use server";

import { postRepository } from "@/repositories/post";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: "post não existe na base de dados",
    };
  }

  try {
    await postRepository.delete(post.id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }
    return {
      error: "Erro desconhecido",
    };
  }

  revalidateTag("posts");
  revalidateTag(`post-${post.slug}`);

  return {
    error: "",
  };
}

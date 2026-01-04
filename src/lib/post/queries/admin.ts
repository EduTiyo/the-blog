import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const findPostByIdAdmin = cache(async (id: string) => {
  return postRepository.findById(id);
});

export const findAllPostAdmin = cache(
  unstable_cache(
    async () => {
      return postRepository.findAll();
    },
    [],
    {
      tags: [],
    }
  )
);

import { PostModel } from "@/models/post/post-model";

export type PublicPost = Omit<PostModel, "updatedAt">;

export const makePublicPost = (post: PostModel): PublicPost => {
  return {
    id: post.id,
    slug: post.slug,
    author: post.author,
    content: post.content,
    title: post.title,
    coverImageUrl: post.coverImageUrl,
    excerpt: post.excerpt,
    published: post.published,
    createdAt: post.createdAt,
  };
};

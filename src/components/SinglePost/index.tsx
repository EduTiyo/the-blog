import { findPublicPostBySlugCached } from "@/lib/post/queries/public";
import Image from "next/image";
import PostDate from "../PostDate";
import SafeMarkdown from "../SafeMarkdown";

interface SinglePostProps {
  slug: string;
}

const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPublicPostBySlugCached(slug);
  return (
    <article className="mb-16">
      <header className="flex flex-col gap-4 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
          priority
        />
        <h1 className="text-2xl sm:text-3xl font-bold">{post.title}</h1>
        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>
      <p className="text-lg sm:text-xl mb-4 text-slate-700">{post.excerpt}</p>
      <SafeMarkdown markdown={post.content} />
    </article>
  );
};

export default SinglePost;

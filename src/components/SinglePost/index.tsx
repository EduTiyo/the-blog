import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import PostHeading from "../PostHeading";
import PostDate from "../PostDate";

interface SinglePostProps {
  slug: string;
}

const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPostBySlugCached(slug);
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
      <div>{post.content}</div>
    </article>
  );
};

export default SinglePost;

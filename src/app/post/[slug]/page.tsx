import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PostSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.author}</h1>
    </div>
  );
};

export default PostSlugPage;

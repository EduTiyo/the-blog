import SinglePost from "@/components/SinglePost";
import SpinLoader from "@/components/SpinLoader";
import {
  findAllPublicPostsCached,
  findPostBySlugCached,
} from "@/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

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

export async function generateStaticParams() {
  const posts = await findAllPublicPostsCached();
  return {
    slug: posts.map((post) => {
      slug: post.slug;
    }),
  };
}

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader containerClasses="min-h-20 mb-16" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
};

export default PostSlugPage;

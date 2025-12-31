import { findPostBySlugCached } from "@/lib/post/queries";

interface SinglePostProps {
  slug: string;
}

const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPostBySlugCached(slug);
  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
};

export default SinglePost;

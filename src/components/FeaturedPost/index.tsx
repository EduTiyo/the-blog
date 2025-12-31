import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries";

const FeaturedPost = async () => {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        imageProps={{
          alt: post.title,
          src: post.coverImageUrl,
          width: 1200,
          height: 720,
          priority: true,
        }}
        linkProps={{ href: postLink }}
      />
      <PostSummary
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        postHeading="h1"
        postLink={postLink}
        title={post.title}
      />
    </section>
  );
};

export default FeaturedPost;

import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

const PostsList = async () => {
  const posts = await findAllPublicPosts();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              imageProps={{
                alt: "Título do post",
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
              }}
              linkProps={{ href: postLink }}
            />

            <PostSummary
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              postHeading="h2"
              postLink={postLink}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;

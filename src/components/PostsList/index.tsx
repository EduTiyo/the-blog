import { postRepository } from "@/repositories/post";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";
import { formatDate } from "@/utils/format-datetime";

const PostsList = async () => {
  const posts = await postRepository.findAll();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
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

            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-muted-foreground block text-xs/tight"
                dateTime={post.createdAt}
              >
                {formatDate(post.createdAt)}
              </time>

              <PostHeading url={postLink}>{post.title}</PostHeading>

              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;

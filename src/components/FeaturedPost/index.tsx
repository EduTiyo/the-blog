import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";

const FeaturedPost = () => {
  const slug = "123";
  const postLink = `post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        imageProps={{
          alt: "Título do post",
          src: "/images/bryen_8.png",
          width: 1200,
          height: 720,
          priority: true,
        }}
        linkProps={{ href: postLink }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-muted-foreground block text-xs/tight"
          dateTime="2025-29-12"
        >
          29/12/2025 20:22
        </time>
        <PostHeading as="h1" url={postLink}>
          Sit, alias nemo ab
        </PostHeading>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, alias
          nemo ab, vel aspernatur molestias fugit blanditiis quas natus at, a
          deleniti soluta odit maxime laudantium aliquid nam unde mollitia.
        </p>
      </div>
    </section>
  );
};

export default FeaturedPost;

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface PostCoverImageProps {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
}

const PostCoverImage = ({ imageProps, linkProps }: PostCoverImageProps) => {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full",
        "h-full",
        "overflow-hidden",
        "rounded-xl",
        linkProps.className
      )}
      href="#"
    >
      <Image
        {...imageProps}
        className={clsx(
          "w-full",
          "h-full",
          "object-cover",
          "group-hover:scale-105",
          "transition",
          imageProps.className
        )}
      />
    </Link>
  );
};

export default PostCoverImage;

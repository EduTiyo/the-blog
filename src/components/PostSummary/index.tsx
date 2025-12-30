import { formatDate } from "@/utils/format-datetime";
import PostHeading from "../PostHeading";

interface PostSummaryProps {
  postLink: string;
  postHeading: "h1" | "h2";
  createdAt: string;
  title: string;
  excerpt: string;
}

const PostSummary = ({
  createdAt,
  excerpt,
  postHeading,
  postLink,
  title,
}: PostSummaryProps) => {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-muted-foreground block text-xs/tight"
        dateTime={createdAt}
      >
        {formatDate(createdAt)}
      </time>

      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
};

export default PostSummary;

import { formatDate } from "@/utils/format-datetime";

interface PostDateProps {
  dateTime: string;
}

const PostDate = ({ dateTime }: PostDateProps) => {
  return (
    <time className="text-muted-foreground text-xs/tight" dateTime={dateTime}>
      {formatDate(dateTime)}
    </time>
  );
};

export default PostDate;

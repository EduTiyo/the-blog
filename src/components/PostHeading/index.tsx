import Link from "next/link";

interface PostHeadingProps {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
}

const PostHeading = ({ children, url, as: Tag = "h2" }: PostHeadingProps) => {
  const headingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl/tight font-extrabold",
    h2: "text-2xl/tight font-bold",
  };

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link className="hover:text-slate-700 transition" href={url}>
        {children}
      </Link>
    </Tag>
  );
};

export default PostHeading;

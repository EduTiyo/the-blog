import { findAllPostFromApiAdmin } from "@/lib/post/queries/admin";
import { DataTable } from "../../DataTable";
import { columns } from "@/app/admin/post/columns";
import ErrorMessage from "../../ErrorMessage";

const PostsListAdmin = async () => {
  const postRes = await findAllPostFromApiAdmin();

  if (!postRes.success) {
    console.log(postRes.errors);
    return (
      <ErrorMessage
        contentTitle="Ei 😅"
        content="Tente fazer login novamente."
      />
    );
  }

  const posts = postRes.data;

  if (posts.length <= 0) {
    return (
      <ErrorMessage contentTitle="Ei 😅" content="Bora criar algum post?" />
    );
  }

  return (
    <div className="container mx-auto pb-10">
      <DataTable columns={columns} data={posts} />
    </div>
  );
};

export default PostsListAdmin;

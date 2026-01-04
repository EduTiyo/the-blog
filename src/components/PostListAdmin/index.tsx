import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { DataTable } from "../DataTable";
import { columns } from "@/app/admin/post/columns";

const PostsListAdmin = async () => {
  const posts = await findAllPostAdmin();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={posts} />
    </div>
  );
};

export default PostsListAdmin;

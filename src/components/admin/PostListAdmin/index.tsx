import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { DataTable } from "../../DataTable";
import { columns } from "@/app/admin/post/columns";
import ErrorMessage from "../../ErrorMessage";

const PostsListAdmin = async () => {
  const posts = await findAllPostAdmin();
  if (posts.length <= 0)
    return (
      <ErrorMessage
        contentTitle="Lista de posts vazia"
        content="Nenhum post público ou privado foi encontrado na base de dados."
      />
    );
  return (
    <div className="container mx-auto pb-10">
      <DataTable columns={columns} data={posts} />
    </div>
  );
};

export default PostsListAdmin;

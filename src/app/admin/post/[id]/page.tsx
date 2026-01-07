import ManagePostForm from "@/components/admin/ManagePostForm";
import { makePublicPostFromDb } from "@/dto/post/dto";
import { findPostByIdAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Editar post",
};

interface AdminPostIdPageProps {
  params: Promise<{ id: string }>;
}

const AdminPostIdPage = async ({ params }: AdminPostIdPageProps) => {
  const { id } = await params;
  const post = await findPostByIdAdmin(id);

  if (!post) notFound();

  const publicPost = makePublicPostFromDb(post);

  return (
    <div className="flex flex-col py-4 gap-6">
      <h1 className="text-xl font-bold">Criar post</h1>
      <ManagePostForm publicPost={publicPost} />
    </div>
  );
};

export default AdminPostIdPage;

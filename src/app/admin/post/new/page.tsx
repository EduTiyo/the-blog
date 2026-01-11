import ManagePostForm from "@/components/admin/ManagePostForm";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Criar post",
};

const AdminPostNewPage = () => {
  return (
    <div className="flex flex-col py-4 gap-6">
      <h1 className="text-xl font-bold">Criar post</h1>
      <ManagePostForm mode="create" />
    </div>
  );
};

export default AdminPostNewPage;

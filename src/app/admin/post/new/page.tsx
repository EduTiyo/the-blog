import ManagePostForm from "@/components/admin/ManagePostForm";

export const dynamic = "force-dynamic";

const AdminPostNewPage = () => {
  return (
    <>
      <h1>criar post</h1>
      <ManagePostForm />
    </>
  );
};

export default AdminPostNewPage;

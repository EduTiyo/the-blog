import PostsListAdmin from "@/components/admin/PostListAdmin";
import SpinLoader from "@/components/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Post",
};

const AdminPostPage = async () => {
  return (
    <Suspense fallback={<SpinLoader containerClasses="mb-16" />}>
      <PostsListAdmin />
    </Suspense>
  );
};

export default AdminPostPage;

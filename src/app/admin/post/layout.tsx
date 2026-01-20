import MenuAdmin from "@/components/admin/MenuAdmin";
import { requireLoginSessionOrRedirect } from "@/lib/login/manage-login";

interface AdminPostLayoutProps {
  children: React.ReactNode;
}

export default async function AdminPostLayout({
  children,
}: AdminPostLayoutProps) {
  await requireLoginSessionOrRedirect();

  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}

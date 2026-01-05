import MenuAdmin from "@/components/admin/MenuAdmin";

interface AdminPostLayoutProps {
  children: React.ReactNode;
}

export default function AdminPostLayout({ children }: AdminPostLayoutProps) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}

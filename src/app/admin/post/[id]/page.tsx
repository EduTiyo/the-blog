export const dynamic = "force-dynamic";

interface AdminPostIdPageProps {
  params: Promise<{ id: string }>;
}

const AdminPostIdPage = async ({ params }: AdminPostIdPageProps) => {
  const { id } = await params;
  return (
    <div className="py-16 text-6xl/tight mx-auto text-center">
      AdminPostIdPage {id}
    </div>
  );
};

export default AdminPostIdPage;

import ErrorMessage from "@/components/ErrorMessage";

const NotFoundPage = () => {
  return (
    <ErrorMessage
      pageTitle="Página não encontrada"
      contentTitle="404"
      content="Erro 404 - A página que está tentando acessar não existe."
    />
  );
};

export default NotFoundPage;

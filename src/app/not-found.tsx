import clsx from "clsx";

const NotFoundPage = () => {
  return (
    <>
      <title>Página não encontrada | The Blog</title>
      <div
        className={clsx(
          "text-slate-900 border-2 border-dashed",
          "mb-16 p-8 sm:p-16 md:p-32 rounded-xl",
          "flex items-center justify-center",
          "text-center"
        )}
      >
        <div>
          <h1 className="text-7xl/tight mb-4 font-bold">404</h1>
          <p>Erro 404 - A página que está tentando acessar não existe.</p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

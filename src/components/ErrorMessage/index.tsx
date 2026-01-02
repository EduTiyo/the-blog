import clsx from "clsx";

interface ErrorMessageProps {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
}

const ErrorMessage = ({
  pageTitle,
  contentTitle,
  content,
}: ErrorMessageProps) => {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          "text-slate-900 border-2 border-dashed",
          "mb-16 p-8 sm:p-16 md:p-32 rounded-xl",
          "flex items-center justify-center",
          "text-center"
        )}
      >
        <div>
          <h1 className="text-7xl/tight mb-4 font-bold">{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;

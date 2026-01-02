"use client";

import ErrorMessage from "@/components/ErrorMessage";

interface RootErrorPageProps {
  error: Error;
  reset: () => void;
}

const RootErrorPage = ({ error, reset }: RootErrorPageProps) => {
  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="501"
      content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Tente novamente mais tarde."
    />
  );
};

export default RootErrorPage;

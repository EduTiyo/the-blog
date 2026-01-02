"use client";

import ErrorMessage from "@/components/ErrorMessage";

const RootErrorPage = () => {
  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="501"
      content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Tente novamente mais tarde."
    />
  );
};

export default RootErrorPage;

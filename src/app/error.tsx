"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { use, useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.error("An unexpected error occurred:", error);
  }, [error]);
  return (
    <ErrorMessage
      content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Tente recarregar a página ou volte mais tarde."
      contentTitle="501"
      pageTitle="Internal Server Error"
    />
  );
}

"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { useEffect } from "react";

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
      content="Infelizmente, nossas receitas espaciais estão temporariamente indisponíveis. Aconselhamos não entrar em pânico e tentar recarregar a página."
      contentTitle="501"
      pageTitle="Internal Server Error"
    />
  );
}

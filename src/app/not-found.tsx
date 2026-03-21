import { ErrorMessage } from "@/components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <ErrorMessage
      content={
        <p>
          Parece que a página que você procura foi demolida para dar lugar a uma
          nova via expressa hiperspacial. Infelizmente, os planos estavam em
          exposição no departamento de planejamento local em Alpha Centauri há
          50 anos terrestres, então você deveria saber.
        </p>
      }
      contentTitle="404"
      pageTitle="404 - Página Demolida"
    />
  );
}

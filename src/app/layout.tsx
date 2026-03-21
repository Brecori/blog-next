import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Pantry 42",
    template: "%s | Pantry 42",
  },
  description: "Pantry 42 - receitas criativas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}

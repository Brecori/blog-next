import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({
  subsets: ["latin"],
});

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
      <body className={font.className}>
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}

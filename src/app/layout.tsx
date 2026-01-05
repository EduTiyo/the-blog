import type { Metadata } from "next";
import Container from "@/components/Container";
import Header from "@/components/Header";

import "./globals.css";
import Footer from "@/components/Footer";
import MessagesContainer from "@/components/MessagesContainer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Descrição",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <MessagesContainer>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </MessagesContainer>
      </body>
    </html>
  );
}

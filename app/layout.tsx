import React from "react";
import type { Metadata, Viewport } from "next";
import StyledComponentsRegistry from "./providers/StyledComponentsRegistry";
import GlobalStylesWrapper from "./providers/GlobalStylesWrapper";

export const metadata: Metadata = {
  title: {
    default: "Lacrei Saúde – Saúde LGBTQIA+ com segurança e respeito",
    template: "%s | Lacrei Saúde",
  },
  description:
    "Encontre profissionais de saúde capacitados para atender a comunidade LGBTQIA+. Segurança, respeito e cuidado em cada consulta.",
  keywords: ["saúde LGBTQIA+", "profissionais de saúde", "saúde trans", "Lacrei Saúde"],
  authors: [{ name: "Lacrei Saúde" }],
  creator: "Lacrei Saúde",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lacrei.health",
    siteName: "Lacrei Saúde",
    title: "Lacrei Saúde – Saúde LGBTQIA+ com segurança e respeito",
    description: "Encontre profissionais de saúde capacitados para atender a comunidade LGBTQIA+.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lacrei Saúde",
    description: "Saúde LGBTQIA+ com segurança e respeito",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#22C55E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStylesWrapper />
          <a href="#main-content" className="skip-link">
            Pular para o conteúdo principal
          </a>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

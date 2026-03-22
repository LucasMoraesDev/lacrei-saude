import type { Metadata, Viewport } from "next";
import StyledComponentsRegistry from "./providers/StyledComponentsRegistry";
import GlobalStylesWrapper from "./providers/GlobalStylesWrapper";

export const metadata: Metadata = {
  title: { default: "Lacrei Saude", template: "%s | Lacrei Saude" },
  description: "Saude LGBTQIA+ com seguranca e respeito.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#22C55E",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStylesWrapper />
          <a href="#main-content" className="skip-link">Pular para o conteudo principal</a>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
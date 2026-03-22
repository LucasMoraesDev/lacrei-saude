import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Footer from "@/app/components/Footer/Footer";

describe("Footer Component", () => {
  it("renders the contentinfo landmark", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders the Lacrei Saúde logo link", () => {
    render(<Footer />);
    const logo = screen.getByRole("link", { name: /lacrei saúde – página inicial/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });

  it("renders brand description", () => {
    render(<Footer />);
    expect(screen.getByText(/conectando pessoas lgbtqia\+/i)).toBeInTheDocument();
  });

  it("renders social media navigation", () => {
    render(<Footer />);
    expect(screen.getByRole("navigation", { name: /redes sociais/i })).toBeInTheDocument();
  });

  it("renders Instagram social link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /instagram da lacrei saúde/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders Twitter social link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /twitter da lacrei saúde/i })).toBeInTheDocument();
  });

  it("renders LinkedIn social link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /linkedin da lacrei saúde/i })).toBeInTheDocument();
  });

  it("renders Plataforma column heading", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: /plataforma/i })).toBeInTheDocument();
  });

  it("renders Como funciona link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /como funciona/i })).toBeInTheDocument();
  });

  it("renders Encontrar profissional link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /encontrar profissional/i })).toBeInTheDocument();
  });

  it("renders Criar conta link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /criar conta/i })).toBeInTheDocument();
  });

  it("renders Empresa column heading", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: /empresa/i })).toBeInTheDocument();
  });

  it("renders Sobre nós link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /sobre nós/i })).toBeInTheDocument();
  });

  it("renders Suporte column heading", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: /suporte/i })).toBeInTheDocument();
  });

  it("renders Fale conosco with correct mailto", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /fale conosco/i });
    expect(link).toHaveAttribute("href", "mailto:contato@lacreisaude.com.br");
  });

  it("renders copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument();
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument();
  });

  it("renders Privacidade legal link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /privacidade/i })).toBeInTheDocument();
  });

  it("renders Termos de uso legal link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /termos de uso/i })).toBeInTheDocument();
  });

  it("renders Cookies legal link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /cookies/i })).toBeInTheDocument();
  });

  it("all external links have noopener noreferrer", () => {
    render(<Footer />);
    screen.getAllByRole("link")
      .filter((l) => l.getAttribute("target") === "_blank")
      .forEach((l) => expect(l).toHaveAttribute("rel", "noopener noreferrer"));
  });
});

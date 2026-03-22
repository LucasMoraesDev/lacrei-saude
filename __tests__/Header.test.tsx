import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

jest.mock("next/navigation");

import Header from "@/app/components/Header/Header";
import { usePathname } from "next/navigation";

const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

describe("Header Component", () => {
  beforeEach(() => { mockUsePathname.mockReturnValue("/"); });
  afterEach(() => { jest.clearAllMocks(); });

  it("renders the header landmark", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders the Lacrei Saúde logo link", () => {
    render(<Header />);
    const logo = screen.getByRole("link", { name: /lacrei saúde – página inicial/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });

  it("renders main navigation", () => {
    render(<Header />);
    expect(screen.getByRole("navigation", { name: /navegação principal/i })).toBeInTheDocument();
  });

  it("renders Início nav link", () => {
    render(<Header />);
    const links = screen.getAllByRole("link", { name: /^início$/i });
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders Profissionais nav link", () => {
    render(<Header />);
    const links = screen.getAllByRole("link", { name: /^profissionais$/i });
    expect(links.length).toBeGreaterThan(0);
  });

  it("marks current page link with aria-current", () => {
    mockUsePathname.mockReturnValue("/");
    render(<Header />);
    const activeLinks = screen.getAllByRole("link").filter(
      (l) => l.getAttribute("aria-current") === "page"
    );
    expect(activeLinks.length).toBeGreaterThan(0);
  });

  it("renders Entrar CTA button", () => {
    render(<Header />);
    const btns = screen.getAllByRole("button", { name: /entrar/i });
    expect(btns.length).toBeGreaterThan(0);
  });

  it("renders Cadastrar CTA button", () => {
    render(<Header />);
    const btns = screen.getAllByRole("button", { name: /cadastrar/i });
    expect(btns.length).toBeGreaterThan(0);
  });

  it("renders mobile menu toggle button in DOM", () => {
    render(<Header />);
    // Use getByLabelText — jsdom hides CSS display:none elements from getByRole
    const btn = screen.getByLabelText(/abrir menu de navegação/i);
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(btn).toHaveAttribute("aria-controls", "mobile-menu");
  });

  it("mobile menu toggle has correct aria-controls", () => {
    render(<Header />);
    const btn = screen.getByLabelText(/abrir menu de navegação/i);
    expect(btn).toHaveAttribute("aria-controls", "mobile-menu");
    expect(document.getElementById("mobile-menu")).toBeInTheDocument();
  });

  it("mobile menu toggle changes aria-expanded on click", async () => {
    render(<Header />);
    const btn = screen.getByLabelText(/abrir menu de navegação/i);
    expect(btn).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });

  it("mobile menu toggle label changes to Fechar after click", async () => {
    render(<Header />);
    const btn = screen.getByLabelText(/abrir menu de navegação/i);
    await userEvent.click(btn);
    expect(screen.getByLabelText(/fechar menu/i)).toBeInTheDocument();
  });

  it("closes mobile menu on Escape key", async () => {
    render(<Header />);
    const btn = screen.getByLabelText(/abrir menu de navegação/i);
    await userEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => {
      expect(screen.getByLabelText(/abrir menu de navegação/i))
        .toHaveAttribute("aria-expanded", "false");
    });
  });

  it("logo link is keyboard accessible", () => {
    render(<Header />);
    const logo = screen.getByRole("link", { name: /lacrei saúde – página inicial/i });
    logo.focus();
    expect(document.activeElement).toBe(logo);
  });

  it("renders correct aria-current on /profissionais", () => {
    mockUsePathname.mockReturnValue("/profissionais");
    render(<Header />);
    const activeLinks = screen.getAllByRole("link").filter(
      (l) => l.getAttribute("aria-current") === "page"
    );
    const profLink = activeLinks.find((l) => l.getAttribute("href") === "/profissionais");
    expect(profLink).toBeDefined();
  });

  it("home link has no aria-current on /profissionais", () => {
    mockUsePathname.mockReturnValue("/profissionais");
    render(<Header />);
    const links = screen.getAllByRole("link");
    const homeLink = links.find((l) => l.getAttribute("href") === "/");
    expect(homeLink).not.toHaveAttribute("aria-current", "page");
  });
});

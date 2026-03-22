"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styled, { css, keyframes } from "styled-components";
import { colors, typography, shadows, transitions } from "@/styles/tokens";
import Button from "@/app/components/Button/Button";

const LacreiLogo = () => (
  <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 8C13.3 8 11 10.1 11 12.8C11 15.6 13 17.9 16 20.5C19 17.9 21 15.6 21 12.8C21 10.1 18.7 8 16 8Z" fill="#22C55E"/>
    <path d="M14.5 11H17.5V13.5H20V16.5H17.5V19H14.5V16.5H12V13.5H14.5V11Z" fill="white"/>
    <text x="28" y="22" fontFamily="Nunito, sans-serif" fontWeight="800" fontSize="18" fill="#111827">lacrei</text>
    <text x="28" y="32" fontFamily="Nunito, sans-serif" fontWeight="600" fontSize="10" fill="#22C55E" letterSpacing="0.05em">SAÚDE</text>
  </svg>
);

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledHeader = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background-color: ${colors.white};
  transition: box-shadow ${transitions.base};
  ${({ $scrolled }) => $scrolled
    ? css`box-shadow: ${shadows.md};`
    : css`border-bottom: 1px solid ${colors.gray100};`}
`;

const HeaderInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) { height: 64px; padding: 0 1rem; }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  padding: 4px;
  margin: -4px;
  text-decoration: none;
  &:focus-visible { outline: 3px solid ${colors.primary}; outline-offset: 2px; }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  @media (max-width: 768px) { display: none; }
`;

const NavLink = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.875rem;
  font-size: ${typography.base};
  font-weight: ${({ $active }) => ($active ? typography.semiBold : typography.medium)};
  color: ${({ $active }) => ($active ? colors.primary : colors.gray700)};
  border-radius: 8px;
  transition: all ${transitions.fast};
  text-decoration: none;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => ($active ? "80%" : "0")};
    height: 2px;
    background-color: ${colors.primary};
    border-radius: 1px;
    transition: width ${transitions.base};
  }
  &:hover { color: ${colors.primary}; background-color: ${colors.primaryXLight}; &::after { width: 80%; } }
  &:focus-visible { outline: 3px solid ${colors.primary}; outline-offset: 2px; }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  @media (max-width: 768px) { display: none; }
`;

const MobileMenuButton = styled.button<{ $open: boolean }>`
  display: none;
  width: 44px; height: 44px;
  align-items: center; justify-content: center;
  border-radius: 8px;
  color: ${colors.gray700};
  transition: all ${transitions.fast};
  background: none; border: none; cursor: pointer;
  &:hover { background-color: ${colors.gray100}; color: ${colors.gray900}; }
  &:focus-visible { outline: 3px solid ${colors.primary}; outline-offset: 2px; }
  @media (max-width: 768px) { display: flex; }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    padding: 1rem;
    gap: 0.25rem;
    border-top: 1px solid ${colors.gray100};
    animation: ${slideDown} 200ms ease;
    background: ${colors.white};
  }
`;

const MobileNavLink = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  font-size: ${typography.base};
  font-weight: ${({ $active }) => ($active ? typography.semiBold : typography.medium)};
  color: ${({ $active }) => ($active ? colors.primary : colors.gray700)};
  border-radius: 10px;
  background-color: ${({ $active }) => ($active ? colors.primaryXLight : "transparent")};
  transition: all ${transitions.fast};
  text-decoration: none;
  &:hover { background-color: ${colors.primaryXLight}; color: ${colors.primary}; }
`;

const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.75rem;
  margin-top: 0.25rem;
  border-top: 1px solid ${colors.gray100};
`;

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {open ? (
      <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
    ) : (
      <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
    )}
  </svg>
);

const navItems = [
  { label: "Início", href: "/" },
  { label: "Profissionais", href: "/profissionais" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Sobre", href: "/#sobre" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <StyledHeader $scrolled={scrolled} role="banner" ref={menuRef}>
      <HeaderInner>
        <LogoLink href="/" aria-label="Lacrei Saúde – página inicial">
          <LacreiLogo />
        </LogoLink>

        <Nav aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              $active={pathname === item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <HeaderActions>
          <Button
            variant="outline"
            size="sm"
            onClick={() => document.querySelector("#cadastro")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Entrar na plataforma Lacrei Saúde"
          >
            Entrar
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => document.querySelector("#cadastro")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Cadastrar na plataforma Lacrei Saúde"
          >
            Cadastrar
          </Button>
        </HeaderActions>

        <MobileMenuButton
          $open={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu de navegação"}
        >
          <HamburgerIcon open={mobileOpen} />
        </MobileMenuButton>
      </HeaderInner>

      <MobileMenu $open={mobileOpen} id="mobile-menu" role="navigation" aria-label="Menu mobile">
        {navItems.map((item) => (
          <MobileNavLink
            key={item.href}
            href={item.href}
            $active={pathname === item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </MobileNavLink>
        ))}
        <MobileActions>
          <Button variant="outline" size="md" fullWidth aria-label="Entrar na plataforma">Entrar</Button>
          <Button variant="primary" size="md" fullWidth aria-label="Cadastrar na plataforma">Cadastrar</Button>
        </MobileActions>
      </MobileMenu>
    </StyledHeader>
  );
};

export default Header;

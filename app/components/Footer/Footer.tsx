"use client";

import React , { FC } from "react";
import styled from "styled-components";
import { colors, typography } from "@/styles/tokens";

const StyledFooter = styled.footer`
  background-color: ${colors.gray900};
  color: ${colors.gray300};
`;

const FooterTop = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1.5rem 3rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1rem 2rem;
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLogoLink = styled.a`
  display: inline-flex;
  border-radius: 8px;
  padding: 4px;
  margin: -4px;
  &:focus-visible { outline: 3px solid ${colors.primary}; outline-offset: 2px; }
`;

const FooterLogo = () => (
  <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 8C13.3 8 11 10.1 11 12.8C11 15.6 13 17.9 16 20.5C19 17.9 21 15.6 21 12.8C21 10.1 18.7 8 16 8Z" fill="#22C55E"/>
    <path d="M14.5 11H17.5V13.5H20V16.5H17.5V19H14.5V16.5H12V13.5H14.5V11Z" fill="white"/>
    <text x="28" y="22" fontFamily="Nunito, sans-serif" fontWeight="800" fontSize="18" fill="white">lacrei</text>
    <text x="28" y="32" fontFamily="Nunito, sans-serif" fontWeight="600" fontSize="10" fill="#22C55E" letterSpacing="0.05em">SAÚDE</text>
  </svg>
);

const BrandDescription = styled.p`
  font-size: ${typography.sm};
  line-height: 1.7;
  color: ${colors.gray400};
  max-width: 280px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.08);
  border-radius: 8px;
  color: ${colors.gray400};
  transition: all 150ms ease;
  &:hover { background-color: ${colors.primary}; color: white; transform: translateY(-2px); }
  &:focus-visible { outline: 3px solid ${colors.primary}; outline-offset: 2px; }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ColumnTitle = styled.h3`
  font-size: ${typography.sm};
  font-weight: ${typography.bold};
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
`;

const FooterLinkItem = styled.li`
  a {
    font-size: ${typography.sm};
    color: ${colors.gray400};
    transition: color 150ms ease;
    display: inline-flex;
    align-items: center;
    padding: 2px 0;
    text-decoration: none;
    &:hover { color: ${colors.primary}; }
    &:focus-visible { outline: 3px solid ${colors.primary}; outline-offset: 2px; border-radius: 4px; }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.08);
`;

const FooterBottomInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem 1rem;
  }
`;

const Copyright = styled.p`
  font-size: ${typography.xs};
  color: ${colors.gray500};
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: ${typography.xs};
    color: ${colors.gray500};
    text-decoration: none;
    transition: color 150ms ease;
    &:hover { color: ${colors.gray300}; }
    &:focus-visible { outline: 3px solid ${colors.primary}; outline-offset: 2px; border-radius: 4px; }
  }
`;

const PrideBar = styled.div`
  height: 4px;
  background: linear-gradient(90deg,#e40303 0%,#ff8c00 16.66%,#ffed00 33.33%,#008026 50%,#004dff 66.66%,#750787 83.33%,#e40303 100%);
`;

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter role="contentinfo">
      <PrideBar aria-hidden="true" />
      <FooterTop>
        <FooterBrand>
          <FooterLogoLink href="/" aria-label="Lacrei Saúde – página inicial">
            <FooterLogo />
          </FooterLogoLink>
          <BrandDescription>
            Conectando pessoas LGBTQIA+ a profissionais de saúde capacitados. Segurança, respeito e cuidado em cada consulta.
          </BrandDescription>
          <SocialLinks role="navigation" aria-label="Redes sociais da Lacrei Saúde">
            <SocialLink href="https://instagram.com/lacreisaude" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Lacrei Saúde (abre em nova aba)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com/lacreisaude" target="_blank" rel="noopener noreferrer" aria-label="Twitter da Lacrei Saúde (abre em nova aba)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://linkedin.com/company/lacrei-saude" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Lacrei Saúde (abre em nova aba)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterBrand>

        <FooterColumn>
          <ColumnTitle>Plataforma</ColumnTitle>
          <FooterLinks>
            <FooterLinkItem><a href="/#como-funciona">Como funciona</a></FooterLinkItem>
            <FooterLinkItem><a href="/profissionais">Encontrar profissional</a></FooterLinkItem>
            <FooterLinkItem><a href="/#cadastro">Criar conta</a></FooterLinkItem>
            <FooterLinkItem><a href="/#cadastro">Para profissionais</a></FooterLinkItem>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Empresa</ColumnTitle>
          <FooterLinks>
            <FooterLinkItem><a href="/#sobre">Sobre nós</a></FooterLinkItem>
            <FooterLinkItem><a href="https://lacreisaude.com.br/blog" target="_blank" rel="noopener noreferrer">Blog</a></FooterLinkItem>
            <FooterLinkItem><a href="https://lacreisaude.com.br/imprensa" target="_blank" rel="noopener noreferrer">Imprensa</a></FooterLinkItem>
            <FooterLinkItem><a href="https://lacreisaude.com.br/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Trabalhe conosco</a></FooterLinkItem>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Suporte</ColumnTitle>
          <FooterLinks>
            <FooterLinkItem><a href="mailto:contato@lacreisaude.com.br">Fale conosco</a></FooterLinkItem>
            <FooterLinkItem><a href="/profissionais#faq">FAQ</a></FooterLinkItem>
            <FooterLinkItem><a href="#acessibilidade">♿ Acessibilidade</a></FooterLinkItem>
          </FooterLinks>
        </FooterColumn>
      </FooterTop>

      <FooterBottom>
        <FooterBottomInner>
          <Copyright>© {currentYear} Lacrei Saúde. Todos os direitos reservados.</Copyright>
          <LegalLinks>
            <a href="/privacidade">Privacidade</a>
            <a href="/termos">Termos de uso</a>
            <a href="/cookies">Cookies</a>
          </LegalLinks>
        </FooterBottomInner>
      </FooterBottom>
    </StyledFooter>
  );
};

export default Footer;

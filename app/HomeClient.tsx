"use client";
import React from "react";

import React, { useState, useRef } from "react";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { colors, typography, borderRadius, shadows, transitions } from "@/styles/tokens";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Button from "@/app/components/Button/Button";
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
const Main = styled.main`
  flex: 1;
  padding-top: 72px;
  @media (max-width: 768px) { padding-top: 64px; }
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media (max-width: 640px) { padding: 0 1rem; }
const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: ${colors.white};
  padding: 5rem 0 6rem;
  @media (max-width: 768px) { padding: 3rem 0 4rem; }
const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 70% 50%, ${colors.primaryXLight} 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 10% 80%, #F5F3FF 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
const HeroInner = styled(Container)`
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
const HeroContent = styled.div`
  animation: ${fadeUp} 600ms ease both;
const HeroEyebrow = styled.p`
  display: inline-flex;
  gap: 0.5rem;
  font-size: ${typography.sm};
  font-weight: ${typography.semiBold};
  color: ${colors.primary};
  background: ${colors.primaryXLight};
  border: 1px solid ${colors.primaryLight};
  padding: 0.375rem 0.875rem;
  border-radius: ${borderRadius.full};
  margin-bottom: 1.5rem;
const HeroTitle = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: ${typography.extraBold};
  color: ${colors.gray900};
  line-height: 1.1;
  em {
    font-style: normal;
    color: ${colors.primary};
const HeroSubtitle = styled.p`
  font-size: ${typography.xl};
  color: ${colors.gray600};
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
const HeroActions = styled.div`
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 1024px) { justify-content: center; }
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
const HeroStats = styled.div`
  gap: 2rem;
  margin-top: 2.5rem;
const StatItem = styled.div`
  gap: 0.125rem;
const StatNumber = styled.span`
  font-size: ${typography["2xl"]};
  line-height: 1.2;
const StatLabel = styled.span`
  font-size: ${typography.xs};
  color: ${colors.gray500};
  font-weight: ${typography.medium};
const HeroVisual = styled.div`
  justify-content: center;
  animation: ${fadeUp} 600ms 200ms ease both;
  @media (max-width: 1024px) { order: -1; }
const HeroIllustration = styled.div`
  width: 100%;
  max-width: 480px;
const IllustrationCard = styled.div<{ $index: number }>`
  border-radius: ${borderRadius.xl};
  padding: 1.25rem 1.5rem;
  box-shadow: ${shadows.xl};
  border: 1.5px solid ${colors.gray100};
  animation: ${float} ${({ $index }) => 3 + $index * 0.5}s ease-in-out infinite;
  animation-delay: ${({ $index }) => $index * 0.3}s;
const MainCard = styled(IllustrationCard)`
const CardAvatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primaryLight}, ${colors.primaryXLight});
  font-size: 1.5rem;
  flex-shrink: 0;
const CardText = styled.div`flex: 1;`;
const CardName = styled.p`
  font-size: ${typography.base};
  font-weight: ${typography.bold};
const CardMeta = styled.p`
const CardBadge = styled.span`
  padding: 0.25rem 0.625rem;
const FloatingBadge = styled.div`
  border-radius: ${borderRadius.lg};
  padding: 0.625rem 0.875rem;
  box-shadow: ${shadows.lg};
  margin-top: 0.75rem;
  margin-right: 0.5rem;
const Section = styled.section<{ $bg?: string }>`
  padding: 5rem 0;
  background: ${({ $bg }) => $bg || colors.white};
  @media (max-width: 768px) { padding: 3.5rem 0; }
const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
const SectionEyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
const SectionSubtitle = styled.p`
  font-size: ${typography.lg};
  max-width: 560px;
const StepsGrid = styled.div`
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    gap: 1.5rem;
const StepCard = styled.div`
  padding: 2rem 1.5rem;
  transition: all ${transitions.base};
  &:hover {
    border-color: ${colors.primaryLight};
    box-shadow: ${shadows.md};
    transform: translateY(-4px);
    flex-direction: row;
    text-align: left;
    gap: 1.25rem;
    padding: 1.5rem;
const StepNumber = styled.div`
  width: 56px;
  height: 56px;
  border: 2px solid ${colors.primaryLight};
  margin-bottom: 1.25rem;
  @media (max-width: 768px) { margin-bottom: 0; }
const StepContent = styled.div``;
const StepTitle = styled.h3`
  margin-bottom: 0.5rem;
const StepDescription = styled.p`
const SpecialtiesGrid = styled.div`
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 640px) { grid-template-columns: repeat(2, 1fr); }
const SpecialtyCard = styled(Link)`
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  cursor: pointer;
    border-color: ${colors.primary};
    background: ${colors.primaryXLight};
    transform: translateY(-3px);
  &:focus-visible {
    outline: 3px solid ${colors.primary};
    outline-offset: 2px;
const SpecialtyEmoji = styled.span`
  font-size: 2rem;
  line-height: 1;
const SpecialtyName = styled.span`
  color: ${colors.gray800};
const CTASection = styled.section`
  background: linear-gradient(135deg, ${colors.gray900} 0%, #1a1a2e 100%);
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%);
    pointer-events: none;
const CTAInner = styled(Container)`
    gap: 2.5rem;
const CTAContent = styled.div``;
const CTATitle = styled.h2`
  color: ${colors.white};
  em { font-style: normal; color: ${colors.primary}; }
const CTASubtitle = styled.p`
  color: rgba(255,255,255,0.65);
const CTAActions = styled.div`
  @media (max-width: 768px) { justify-content: center; }
const CTAForm = styled.div`
  background: rgba(255,255,255,0.05);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: ${borderRadius["2xl"]};
  padding: 2rem;
  @media (max-width: 768px) { padding: 1.5rem; }
const FormTitle = styled.h3`
const FormGroup = styled.div`
  gap: 0.375rem;
const FormLabel = styled.label`
  color: rgba(255,255,255,0.8);
const FormInput = styled.input`
  padding: 0.75rem 1rem;
  background: rgba(255,255,255,0.08);
  border: 1.5px solid rgba(255,255,255,0.15);
  border-radius: ${borderRadius.md};
  font-family: inherit;
  transition: border-color ${transitions.fast};
  &::placeholder { color: rgba(255,255,255,0.3); }
  &:focus { outline: none; border-color: ${colors.primary}; }
  &:focus-visible { outline: 3px solid ${colors.primary}; outline-offset: 2px; }
const FormToggle = styled.div`
const ToggleBtn = styled.button<{ $active: boolean }>`
  padding: 0.625rem;
  transition: all ${transitions.fast};
  border: 1.5px solid;
  ${({ $active }) =>
    $active
      ? css`background: ${colors.primary}; border-color: ${colors.primary}; color: white;`
      : css`background: transparent; border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.6);
            &:hover { border-color: ${colors.primary}; color: ${colors.primary}; }`}
const specialtiesData = [
  { id: "psicologia", nome: "Psicologia", icone: "🧠" },
  { id: "endocrinologia", nome: "Endocrinologia", icone: "⚗️" },
  { id: "clinico-geral", nome: "Clínico Geral", icone: "🩺" },
  { id: "ginecologia", nome: "Ginecologia", icone: "💊" },
  { id: "infectologia", nome: "Infectologia", icone: "🔬" },
  { id: "dermatologia", nome: "Dermatologia", icone: "🌿" },
  { id: "nutricao", nome: "Nutrição", icone: "🥗" },
  { id: "urologia", nome: "Urologia", icone: "💙" },
];
export default function HomeClient() {
  const [userType, setUserType] = useState<"paciente" | "profissional">("paciente");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  return (
    <PageWrapper>
      <Header />
      <Main id="main-content">
        <HeroSection aria-labelledby="hero-heading">
          <HeroBg aria-hidden="true" />
          <HeroInner>
            <HeroContent>
              <HeroEyebrow aria-hidden="true">🏳️‍🌈 Saúde inclusiva e respeitosa</HeroEyebrow>
              <HeroTitle id="hero-heading">
                Cuide da sua saúde com <em>segurança e respeito</em>
              </HeroTitle>
              <HeroSubtitle>
                Encontre profissionais de saúde capacitados para atender a comunidade LGBTQIA+. Sem julgamentos, com acolhimento.
              </HeroSubtitle>
              <HeroActions>
                <Button variant="primary" size="lg" onClick={scrollToForm} aria-label="Comece gratuitamente na Lacrei Saúde">
                  Comece gratuitamente
                </Button>
                <Link href="/profissionais" passHref legacyBehavior>
                  <Button as="a" variant="outline" size="lg" aria-label="Encontrar profissional de saúde">
                    Encontrar profissional
                  </Button>
                </Link>
              </HeroActions>
              <HeroStats aria-label="Números da Lacrei Saúde">
                <StatItem><StatNumber>+500</StatNumber><StatLabel>Profissionais</StatLabel></StatItem>
                <StatItem><StatNumber>+20k</StatNumber><StatLabel>Pacientes</StatLabel></StatItem>
                <StatItem><StatNumber>4.9★</StatNumber><StatLabel>Avaliação média</StatLabel></StatItem>
              </HeroStats>
            </HeroContent>
            <HeroVisual>
              <HeroIllustration>
                <MainCard $index={0}>
                  <CardAvatar aria-hidden="true">👩‍⚕️</CardAvatar>
                  <CardText>
                    <CardName>Dra. Ana Luiza</CardName>
                    <CardMeta>Psicologia • São Paulo, SP</CardMeta>
                  </CardText>
                  <CardBadge>🏳️‍🌈 Friendly</CardBadge>
                </MainCard>
                <div>
                  <FloatingBadge style={{ color: colors.primary }} aria-hidden="true">✅ Consulta confirmada!</FloatingBadge>
                  <FloatingBadge style={{ color: "#F59E0B" }} aria-hidden="true">⭐ 4.9 / 5</FloatingBadge>
                </div>
              </HeroIllustration>
            </HeroVisual>
          </HeroInner>
        </HeroSection>
        <Section id="como-funciona" $bg={colors.gray50} aria-labelledby="como-funciona-heading">
          <Container>
            <SectionHeader>
              <SectionEyebrow>Como funciona</SectionEyebrow>
              <SectionTitle id="como-funciona-heading">Simples assim: 3 passos para o cuidado</SectionTitle>
              <SectionSubtitle>Do cadastro à consulta, tudo pensado para sua comodidade e segurança.</SectionSubtitle>
            </SectionHeader>
            <StepsGrid>
              {[
                { n: "1", title: "Crie sua conta", desc: "Cadastro rápido e seguro. Seus dados são protegidos pela LGPD." },
                { n: "2", title: "Escolha o profissional", desc: "Filtre por especialidade, localização e modalidade de atendimento." },
                { n: "3", title: "Agende sua consulta", desc: "Presencial ou telemedicina, no horário que for melhor para você." },
              ].map((step) => (
                <StepCard key={step.n}>
                  <StepNumber aria-hidden="true">{step.n}</StepNumber>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.desc}</StepDescription>
                  </StepContent>
                </StepCard>
              ))}
            </StepsGrid>
          </Container>
        </Section>
        <Section aria-labelledby="especialidades-heading">
              <SectionEyebrow>Especialidades</SectionEyebrow>
              <SectionTitle id="especialidades-heading">Cuidado completo para você</SectionTitle>
              <SectionSubtitle>Profissionais capacitados em diversas áreas para atender todas as suas necessidades.</SectionSubtitle>
            <SpecialtiesGrid role="list" aria-label="Especialidades disponíveis">
              {specialtiesData.map((esp) => (
                <SpecialtyCard key={esp.id} href={`/profissionais?especialidade=${esp.id}`} role="listitem" aria-label={`Ver profissionais de ${esp.nome}`}>
                  <SpecialtyEmoji aria-hidden="true">{esp.icone}</SpecialtyEmoji>
                  <SpecialtyName>{esp.nome}</SpecialtyName>
                </SpecialtyCard>
            </SpecialtiesGrid>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/profissionais" passHref legacyBehavior>
                <Button as="a" variant="outline" size="lg" aria-label="Ver todos os profissionais disponíveis">
                  Ver todos os profissionais
              </Link>
            </div>
        <CTASection id="sobre" aria-labelledby="cta-heading">
          <CTAInner>
            <CTAContent>
              <CTATitle id="cta-heading">Sua saúde merece <em>cuidado de verdade</em></CTATitle>
              <CTASubtitle>Junte-se a mais de 20 mil pessoas que encontraram cuidado com respeito na Lacrei Saúde.</CTASubtitle>
              <CTAActions>
                <Button variant="primary" size="lg" onClick={scrollToForm} aria-label="Criar minha conta">Criar minha conta</Button>
                <Button variant="ghost" size="lg" style={{ color: "rgba(255,255,255,0.8)" }} aria-label="Saber mais">Saber mais</Button>
              </CTAActions>
            </CTAContent>
            <CTAForm id="cadastro" ref={formRef} role="form" aria-labelledby="form-title">
              <FormTitle id="form-title">{userType === "paciente" ? "Crie sua conta" : "Cadastre-se como profissional"}</FormTitle>
              <FormToggle role="group" aria-label="Tipo de cadastro">
                <ToggleBtn $active={userType === "paciente"} onClick={() => setUserType("paciente")} aria-pressed={userType === "paciente"}>👤 Paciente</ToggleBtn>
                <ToggleBtn $active={userType === "profissional"} onClick={() => setUserType("profissional")} aria-pressed={userType === "profissional"}>👩‍⚕️ Profissional</ToggleBtn>
              </FormToggle>
              <form onSubmit={handleSubmit} noValidate>
                <FormGroup>
                  <FormLabel htmlFor="signup-name">Nome completo</FormLabel>
                  <FormInput id="signup-name" type="text" placeholder="Seu nome" autoComplete="name" required aria-required="true" />
                </FormGroup>
                  <FormLabel htmlFor="signup-email">E-mail</FormLabel>
                  <FormInput id="signup-email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required aria-required="true" />
                <Button type="submit" variant="primary" size="lg" fullWidth aria-live="polite" aria-label={submitted ? "Cadastro enviado" : "Criar conta gratuita"}>
                  {submitted ? "✓ Enviado! Verifique seu e-mail" : "Criar conta gratuita"}
              </form>
              <p style={{ fontSize: typography.xs, color: "rgba(255,255,255,0.4)", textAlign: "center", marginTop: "0.75rem" }}>
                Ao criar uma conta você concorda com nossos{" "}
                <Link href="/termos" style={{ color: colors.primary }}>Termos de Uso</Link>{" "}e{" "}
                <Link href="/privacidade" style={{ color: colors.primary }}>Política de Privacidade</Link>.
              </p>
            </CTAForm>
          </CTAInner>
        </CTASection>
      </Main>
      <Footer />
    </PageWrapper>
  );
}

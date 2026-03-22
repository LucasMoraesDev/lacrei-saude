import React from "react";
"use client";

import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { colors, typography, borderRadius, shadows, transitions } from "@/styles/tokens";
import Button from "../Button/Button";
import type { Profissional } from "@/lib/mockApi";
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;
const CardWrapper = styled.article`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  border: 1.5px solid ${colors.gray100};
  box-shadow: ${shadows.card};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition:
    transform ${transitions.base},
    box-shadow ${transitions.base},
    border-color ${transitions.base};
  animation: ${fadeIn} 400ms ease both;
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${shadows.xl};
    border-color: ${colors.primaryLight};
  }
  @media (max-width: 640px) {
    padding: 1.25rem;
const CardHeader = styled.div`
  align-items: flex-start;
const AvatarWrapper = styled.div`
  flex-shrink: 0;
  position: relative;
const Avatar = styled.div<{ $name: string }>`
  width: 64px;
  height: 64px;
  border-radius: ${borderRadius.full};
  background: linear-gradient(
    135deg,
    ${colors.primaryLight} 0%,
    ${colors.primaryXLight} 100%
  );
  align-items: center;
  justify-content: center;
  font-size: ${typography["xl"]};
  font-weight: ${typography.bold};
  color: ${colors.primaryDark};
  border: 2px solid ${colors.primaryLight};
  font-family: ${typography.fontPrimary};
  user-select: none;
const OnlineBadge = styled.span<{ $online: boolean }>`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ $online }) => ($online ? colors.primary : colors.gray300)};
  border: 2px solid ${colors.white};
const DoctorInfo = styled.div`
  flex: 1;
  min-width: 0;
const DoctorName = styled.h3`
  font-size: ${typography.lg};
  color: ${colors.gray900};
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
const Specialty = styled.p`
  font-size: ${typography.sm};
  font-weight: ${typography.semiBold};
  color: ${colors.primary};
const Location = styled.p`
  font-size: ${typography.xs};
  color: ${colors.gray500};
  gap: 0.25rem;
const BadgesRow = styled.div`
  flex-wrap: wrap;
  gap: 0.375rem;
const Badge = styled.span<{ $variant: "green" | "purple" | "blue" | "gray" }>`
  display: inline-flex;
  padding: 0.2rem 0.6rem;
  line-height: 1.6;
  ${({ $variant }) => {
    switch ($variant) {
      case "green":
        return css`
          background: ${colors.primaryXLight};
          color: ${colors.primaryDark};
          border: 1px solid ${colors.primaryLight};
        `;
      case "purple":
          background: ${colors.secondaryLight};
          color: ${colors.secondary};
          border: 1px solid #DDD6FE;
      case "blue":
          background: ${colors.infoLight};
          color: ${colors.info};
          border: 1px solid #BFDBFE;
      case "gray":
          background: ${colors.gray100};
          color: ${colors.gray600};
          border: 1px solid ${colors.gray200};
    }
  }}
const StarRating = styled.div`
const Stars = styled.span`
  color: #F59E0B;
  letter-spacing: -1px;
const RatingText = styled.span`
  color: ${colors.gray700};
const RatingCount = styled.span`
  color: ${colors.gray400};
const Description = styled.p`
  color: ${colors.gray600};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${colors.gray100};
const CardFooter = styled.div`
  justify-content: space-between;
  gap: 0.75rem;
const Availability = styled.div`
  gap: 0.125rem;
const AvailabilityLabel = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.05em;
const AvailabilityTime = styled.span`
const CardActions = styled.div`
  gap: 0.5rem;
const Modalidades = styled.div`
const getInitials = (nome: string) => {
  const parts = nome.replace(/^Dr[a]?\.\s*/, "").split(" ");
  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
};
const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - (half ? 1 : 0));
interface DoctorCardProps {
  profissional: Profissional;
  animationDelay?: number;
}
const DoctorCard: React.FC<DoctorCardProps> = ({ profissional, animationDelay = 0 }) => {
  const [agendado, setAgendado] = useState(false);
  const handleAgendar = () => {
    setAgendado(true);
    setTimeout(() => setAgendado(false), 3000);
  };
  const isOnline = profissional.modalidades.includes("telemedicina");
  return (
    <CardWrapper
      aria-label={`Profissional: ${profissional.nome}, ${profissional.especialidade}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <CardHeader>
        <AvatarWrapper>
          <Avatar $name={profissional.nome} aria-hidden="true">
            {getInitials(profissional.nome)}
          </Avatar>
          <OnlineBadge
            $online={isOnline}
            aria-label={isOnline ? "Disponível para telemedicina" : "Presencial"}
            title={isOnline ? "Disponível para telemedicina" : "Somente presencial"}
          />
        </AvatarWrapper>
        <DoctorInfo>
          <DoctorName>{profissional.nome}</DoctorName>
          <Specialty>{profissional.especialidade}</Specialty>
          <Location>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {profissional.cidade}, {profissional.estado}
          </Location>
        </DoctorInfo>
        <StarRating aria-label={`Avaliação: ${profissional.avaliacao} de 5`}>
          <Stars aria-hidden="true">★</Stars>
          <RatingText>{profissional.avaliacao.toFixed(1)}</RatingText>
          <RatingCount>({profissional.totalAvaliacoes})</RatingCount>
        </StarRating>
      </CardHeader>
      <BadgesRow>
        {profissional.lgbtqiaFriendly && (
          <Badge $variant="purple">🏳️‍🌈 LGBTQIA+ Friendly</Badge>
        )}
        {profissional.transCompetente && (
          <Badge $variant="blue">🏳️‍⚧️ Trans Competente</Badge>
        {profissional.modalidades.includes("telemedicina") && (
          <Badge $variant="green">📱 Telemedicina</Badge>
        {profissional.modalidades.includes("presencial") && (
          <Badge $variant="gray">🏥 Presencial</Badge>
      </BadgesRow>
      <Description>{profissional.descricao}</Description>
      <Divider />
      <CardFooter>
        <Availability>
          <AvailabilityLabel>Próxima consulta</AvailabilityLabel>
          <AvailabilityTime>{profissional.proximaDisponibilidade}</AvailabilityTime>
        </Availability>
        <CardActions>
          <Button
            variant="outline"
            size="sm"
            aria-label={`Ver perfil completo de ${profissional.nome}`}
          >
            Ver perfil
          </Button>
            variant="primary"
            onClick={handleAgendar}
            aria-label={
              agendado
                ? `Consulta solicitada com ${profissional.nome}`
                : `Agendar consulta com ${profissional.nome}`
            }
            aria-live="polite"
            {agendado ? "✓ Solicitado!" : "Agendar"}
        </CardActions>
      </CardFooter>
    </CardWrapper>
export default DoctorCard;

"use client";

import React, { useState, useEffect, useCallback, useRef, RefObject } from "react";
import styled, { keyframes, css } from "styled-components";
import { colors, typography, borderRadius, shadows, transitions } from "@/styles/tokens";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Button from "@/app/components/Button/Button";
import DoctorCard from "@/app/components/DoctorCard/DoctorCard";
import { api, type Profissional } from "@/lib/mockApi";

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const shimmerBg = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

// ─── Layout ───────────────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 72px;
  background: ${colors.gray50};

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`;

// ─── Page Header ──────────────────────────────────────────────────────────────

const PageHero = styled.div`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.gray100};
  padding: 3rem 0 2rem;
`;

const HeroContent = styled(Container)``;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${typography.sm};
  color: ${colors.gray400};
  margin-bottom: 1rem;

  a {
    color: ${colors.primary};
    &:hover { text-decoration: underline; }
    &:focus-visible {
      outline: 2px solid ${colors.primary};
      border-radius: 2px;
    }
  }
`;

const PageTitle = styled.h1`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: ${typography.extraBold};
  color: ${colors.gray900};
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  font-size: ${typography.lg};
  color: ${colors.gray500};
  margin-bottom: 1.5rem;
`;

// ─── Search Bar ───────────────────────────────────────────────────────────────

const SearchRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.gray400};
  pointer-events: none;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  background: ${colors.white};
  border: 1.5px solid ${colors.gray200};
  border-radius: ${borderRadius.lg};
  font-size: ${typography.base};
  font-family: inherit;
  color: ${colors.gray900};
  transition: border-color ${transitions.fast}, box-shadow ${transitions.fast};

  &::placeholder {
    color: ${colors.gray400};
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.12);
  }

  &:focus-visible {
    outline: 3px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

// ─── Main Content ─────────────────────────────────────────────────────────────

const ContentArea = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

// ─── Sidebar Filters ──────────────────────────────────────────────────────────

const Sidebar = styled.aside`
  background: ${colors.white};
  border: 1.5px solid ${colors.gray100};
  border-radius: ${borderRadius.xl};
  padding: 1.5rem;
  position: sticky;
  top: 88px;

  @media (max-width: 1024px) {
    position: static;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FilterSection = styled.div`
  & + & {
    padding-top: 1.25rem;
    margin-top: 1.25rem;
    border-top: 1px solid ${colors.gray100};

    @media (max-width: 1024px) {
      border-top: none;
      padding-top: 0;
      margin-top: 0;
    }
  }
`;

const FilterTitle = styled.h2`
  font-size: ${typography.sm};
  font-weight: ${typography.bold};
  color: ${colors.gray700};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.875rem;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

const FilterOption = styled.label<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.625rem;
  border-radius: ${borderRadius.md};
  cursor: pointer;
  font-size: ${typography.sm};
  font-weight: ${({ $active }) => ($active ? typography.semiBold : typography.medium)};
  color: ${({ $active }) => ($active ? colors.primary : colors.gray700)};
  background: ${({ $active }) => ($active ? colors.primaryXLight : "transparent")};
  transition: all ${transitions.fast};

  &:hover {
    background: ${colors.primaryXLight};
    color: ${colors.primary};
  }

  input {
    accent-color: ${colors.primary};
    width: 16px;
    height: 16px;
  }
`;

const ClearButton = styled.button`
  font-size: ${typography.xs};
  color: ${colors.gray400};
  padding: 2px 4px;
  border-radius: 4px;
  margin-top: 0.5rem;
  transition: color ${transitions.fast};

  &:hover { color: ${colors.error}; }
  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

// ─── Results ──────────────────────────────────────────────────────────────────

const ResultsArea = styled.div``;

const ResultsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const ResultsCount = styled.p`
  font-size: ${typography.base};
  color: ${colors.gray600};
  
  strong {
    color: ${colors.gray900};
    font-weight: ${typography.bold};
  }
`;

const SortSelect = styled.select`
  padding: 0.5rem 2rem 0.5rem 0.875rem;
  border: 1.5px solid ${colors.gray200};
  border-radius: ${borderRadius.md};
  font-size: ${typography.sm};
  font-family: inherit;
  color: ${colors.gray700};
  background: ${colors.white};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }

  &:focus-visible {
    outline: 3px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const LoadingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SkeletonCard = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  border: 1.5px solid ${colors.gray100};
  padding: 1.5rem;
  height: 280px;
  
  background: linear-gradient(
    90deg,
    ${colors.gray100} 25%,
    ${colors.gray50} 50%,
    ${colors.gray100} 75%
  );
  background-size: 400px 100%;
  animation: ${shimmerBg} 1.5s ease-in-out infinite;
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  background: ${colors.white};
  border-radius: ${borderRadius.xl};
  border: 1.5px solid ${colors.gray100};
`;

const EmptyEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const EmptyTitle = styled.h3`
  font-size: ${typography.xl};
  font-weight: ${typography.bold};
  color: ${colors.gray800};
  margin-bottom: 0.5rem;
`;

const EmptyText = styled.p`
  font-size: ${typography.base};
  color: ${colors.gray500};
  margin-bottom: 1.5rem;
`;

// Active filters chips
const ActiveFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const FilterChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  background: ${colors.primaryXLight};
  border: 1px solid ${colors.primaryLight};
  border-radius: ${borderRadius.full};
  font-size: ${typography.xs};
  font-weight: ${typography.semiBold};
  color: ${colors.primaryDark};
  transition: all ${transitions.fast};

  &:hover {
    background: ${colors.primaryLight};
  }

  &:focus-visible {
    outline: 3px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

const especialidadesOptions = [
  { value: "todos", label: "Todas" },
  { value: "Psicologia", label: "Psicologia" },
  { value: "Endocrinologia", label: "Endocrinologia" },
  { value: "Clínico Geral", label: "Clínico Geral" },
  { value: "Ginecologia", label: "Ginecologia" },
  { value: "Infectologia", label: "Infectologia" },
  { value: "Dermatologia", label: "Dermatologia" },
];

const modalidadesOptions = [
  { value: "todos", label: "Todas" },
  { value: "telemedicina", label: "Telemedicina" },
  { value: "presencial", label: "Presencial" },
];

export default function ProfissionaisClient() {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  const [especialidade, setEspecialidade] = useState("todos");
  const [modalidade, setModalidade] = useState("todos");
  const [sort, setSort] = useState("relevancia");
  const searchRef = useRef<HTMLInputElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);

  const fetchProfissionais = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.getProfissionais({ especialidade, modalidade, busca });
      // Apply sort
      const sorted = [...data].sort((a, b) => {
        if (sort === "avaliacao") return b.avaliacao - a.avaliacao;
        if (sort === "avaliacoes") return b.totalAvaliacoes - a.totalAvaliacoes;
        return 0;
      });
      setProfissionais(sorted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [especialidade, modalidade, busca, sort]);

  useEffect(() => {
    const timeout = setTimeout(fetchProfissionais, 300);
    return () => clearTimeout(timeout);
  }, [fetchProfissionais]);

  const clearFilters = () => {
    setBusca("");
    setEspecialidade("todos");
    setModalidade("todos");
    setSort("relevancia");
  };

  const hasFilters = busca || especialidade !== "todos" || modalidade !== "todos";

  return (
    <PageWrapper>
      <Header />

      <Main id="main-content">
        {/* ── Page Hero / Search ─────────────────────────────────────── */}
        <PageHero>
          <HeroContent>
            <Breadcrumb aria-label="Navegação estrutural">
              <a href="/">Início</a>
              <span aria-hidden="true">›</span>
              <span aria-current="page">Profissionais</span>
            </Breadcrumb>

            <PageTitle>Encontre seu profissional de saúde</PageTitle>
            <PageSubtitle>
              Profissionais capacitados para atender a comunidade LGBTQIA+ com
              respeito e acolhimento.
            </PageSubtitle>

            <SearchRow role="search">
              <SearchInputWrapper>
                <SearchIcon aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </SearchIcon>
                <SearchInput
                  ref={searchRef}
                  type="search"
                  placeholder="Buscar por nome, especialidade ou cidade..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  aria-label="Buscar profissional de saúde"
                  aria-controls="results-region"
                  autoComplete="off"
                />
              </SearchInputWrapper>
              <Button
                variant="primary"
                size="md"
                onClick={fetchProfissionais}
                aria-label="Buscar profissionais"
              >
                Buscar
              </Button>
            </SearchRow>
          </HeroContent>
        </PageHero>

        {/* ── Content ──────────────────────────────────────────────── */}
        <ContentArea>
          {/* Sidebar */}
          <Sidebar aria-label="Filtros de busca">
            <FilterSection>
              <FilterTitle id="filter-especialidade">Especialidade</FilterTitle>
              <FilterOptions
                role="radiogroup"
                aria-labelledby="filter-especialidade"
              >
                {especialidadesOptions.map((opt) => (
                  <FilterOption
                    key={opt.value}
                    $active={especialidade === opt.value}
                  >
                    <input
                      type="radio"
                      name="especialidade"
                      value={opt.value}
                      checked={especialidade === opt.value}
                      onChange={() => setEspecialidade(opt.value)}
                      aria-label={`Filtrar por ${opt.label}`}
                    />
                    {opt.label}
                  </FilterOption>
                ))}
              </FilterOptions>
            </FilterSection>

            <FilterSection>
              <FilterTitle id="filter-modalidade">Modalidade</FilterTitle>
              <FilterOptions
                role="radiogroup"
                aria-labelledby="filter-modalidade"
              >
                {modalidadesOptions.map((opt) => (
                  <FilterOption
                    key={opt.value}
                    $active={modalidade === opt.value}
                  >
                    <input
                      type="radio"
                      name="modalidade"
                      value={opt.value}
                      checked={modalidade === opt.value}
                      onChange={() => setModalidade(opt.value)}
                      aria-label={`Filtrar por ${opt.label}`}
                    />
                    {opt.label}
                  </FilterOption>
                ))}
              </FilterOptions>
            </FilterSection>

            {hasFilters && (
              <FilterSection>
                <ClearButton
                  onClick={clearFilters}
                  aria-label="Limpar todos os filtros"
                >
                  ✕ Limpar filtros
                </ClearButton>
              </FilterSection>
            )}
          </Sidebar>

          {/* Results */}
          <ResultsArea>
            {/* Active filter chips */}
            {hasFilters && (
              <ActiveFilters aria-label="Filtros ativos">
                {busca && (
                  <FilterChip
                    onClick={() => setBusca("")}
                    aria-label={`Remover filtro: busca por "${busca}"`}
                  >
                    🔍 "{busca}" ✕
                  </FilterChip>
                )}
                {especialidade !== "todos" && (
                  <FilterChip
                    onClick={() => setEspecialidade("todos")}
                    aria-label={`Remover filtro de especialidade: ${especialidade}`}
                  >
                    {especialidade} ✕
                  </FilterChip>
                )}
                {modalidade !== "todos" && (
                  <FilterChip
                    onClick={() => setModalidade("todos")}
                    aria-label={`Remover filtro de modalidade: ${modalidade}`}
                  >
                    {modalidade} ✕
                  </FilterChip>
                )}
              </ActiveFilters>
            )}

            <ResultsHeader>
              <ResultsCount
                aria-live="polite"
                aria-atomic="true"
                ref={liveRef as RefObject<HTMLParagraphElement>}
              >
                {loading ? (
                  "Buscando..."
                ) : (
                  <>
                    <strong>{profissionais.length}</strong>{" "}
                    {profissionais.length === 1
                      ? "profissional encontrado"
                      : "profissionais encontrados"}
                  </>
                )}
              </ResultsCount>

              <label htmlFor="sort-select" className="sr-only">
                Ordenar resultados
              </label>
              <SortSelect
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Ordenar profissionais por"
              >
                <option value="relevancia">Mais relevantes</option>
                <option value="avaliacao">Maior avaliação</option>
                <option value="avaliacoes">Mais avaliações</option>
              </SortSelect>
            </ResultsHeader>

            {/* Skeleton loading */}
            {loading && (
              <LoadingGrid aria-label="Carregando resultados" aria-busy="true">
                {[1, 2, 3, 4].map((i) => (
                  <SkeletonCard key={i} aria-hidden="true" />
                ))}
              </LoadingGrid>
            )}

            {/* Results Grid */}
            {!loading && profissionais.length > 0 && (
              <ResultsGrid
                id="results-region"
                role="list"
                aria-label={`${profissionais.length} profissionais encontrados`}
              >
                {profissionais.map((p, idx) => (
                  <div key={p.id} role="listitem">
                    <DoctorCard
                      profissional={p}
                      animationDelay={idx * 60}
                    />
                  </div>
                ))}
              </ResultsGrid>
            )}

            {/* Empty state */}
            {!loading && profissionais.length === 0 && (
              <EmptyState role="status" aria-live="polite">
                <EmptyEmoji aria-hidden="true">🔍</EmptyEmoji>
                <EmptyTitle>Nenhum profissional encontrado</EmptyTitle>
                <EmptyText>
                  Tente ajustar os filtros ou pesquisar por outro termo.
                </EmptyText>
                <Button
                  variant="outline"
                  size="md"
                  onClick={clearFilters}
                  aria-label="Limpar filtros e ver todos os profissionais"
                >
                  Limpar filtros
                </Button>
              </EmptyState>
            )}
          </ResultsArea>
        </ContentArea>
      </Main>

      <Footer />
    </PageWrapper>
  );
}

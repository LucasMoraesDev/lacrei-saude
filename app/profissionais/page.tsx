import type { Metadata } from "next";
import ProfissionaisClient from "./ProfissionaisClient";

export const metadata: Metadata = {
  title: "Encontrar Profissionais de Saúde LGBTQIA+",
  description:
    "Busque e filtre profissionais de saúde capacitados para atender a comunidade LGBTQIA+. Psicólogos, médicos, endocrinologistas e mais.",
};

export default function ProfissionaisPage() {
  return <ProfissionaisClient />;
}

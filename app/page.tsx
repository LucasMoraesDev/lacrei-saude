import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Lacrei Saúde – Saúde LGBTQIA+ com segurança e respeito",
  description:
    "Encontre profissionais de saúde capacitados para atender a comunidade LGBTQIA+. Segurança, respeito e cuidado em cada consulta.",
};

export default function HomePage() {
  return <HomeClient />;
}

import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

jest.mock("next/link");

import DoctorCard from "@/app/components/DoctorCard/DoctorCard";
import type { Profissional } from "@/lib/mockApi";

const mockProfissional: Profissional = {
  id: "1",
  nome: "Dra. Ana Luiza Ferreira",
  especialidade: "Psicologia",
  crm: "CRP 06/123456",
  cidade: "São Paulo",
  estado: "SP",
  avatarUrl: "",
  avaliacao: 4.9,
  totalAvaliacoes: 142,
  aceitaPlanos: ["Unimed", "Particular"],
  modalidades: ["presencial", "telemedicina"],
  lgbtqiaFriendly: true,
  transCompetente: true,
  descricao: "Especialista em saúde mental LGBTQIA+, com foco em identidade de gênero.",
  proximaDisponibilidade: "Hoje, 14h",
};

const mockPresencialOnly: Profissional = {
  ...mockProfissional,
  id: "2",
  nome: "Dr. João Silva",
  modalidades: ["presencial"],
  lgbtqiaFriendly: false,
  transCompetente: false,
  avaliacao: 4.0,
  totalAvaliacoes: 10,
};

describe("DoctorCard Component", () => {
  it("renders the doctor name", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByText("Dra. Ana Luiza Ferreira")).toBeInTheDocument();
  });

  it("renders specialty", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByText("Psicologia")).toBeInTheDocument();
  });

  it("renders location", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByText("São Paulo, SP")).toBeInTheDocument();
  });

  it("renders rating with accessibility label", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByLabelText(/avaliação: 4\.9 de 5/i)).toBeInTheDocument();
  });

  it("renders rating number and count", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByText("4.9")).toBeInTheDocument();
    expect(screen.getByText("(142)")).toBeInTheDocument();
  });

  it("renders LGBTQIA+ Friendly badge when applicable", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByText(/lgbtqia\+ friendly/i)).toBeInTheDocument();
  });

  it("does not render LGBTQIA+ badge when not applicable", () => {
    render(<DoctorCard profissional={mockPresencialOnly} />);
    expect(screen.queryByText(/lgbtqia\+ friendly/i)).not.toBeInTheDocument();
  });

  it("renders Trans Competente badge when applicable", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByText(/trans competente/i)).toBeInTheDocument();
  });

  it("renders Telemedicina badge", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByText(/telemedicina/i)).toBeInTheDocument();
  });

  it("does not render Telemedicina badge for presencial only", () => {
    render(<DoctorCard profissional={mockPresencialOnly} />);
    expect(screen.queryByText(/telemedicina/i)).not.toBeInTheDocument();
  });

  it("renders next availability", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByText("Hoje, 14h")).toBeInTheDocument();
    expect(screen.getByText(/próxima consulta/i)).toBeInTheDocument();
  });

  it("renders Ver perfil and Agendar buttons", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(
      screen.getByRole("button", { name: /ver perfil completo de/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /agendar consulta com/i })
    ).toBeInTheDocument();
  });

  it("shows confirmation after clicking Agendar", async () => {
    render(<DoctorCard profissional={mockProfissional} />);
    const agendarBtn = screen.getByRole("button", {
      name: /agendar consulta com/i,
    });
    await userEvent.click(agendarBtn);
    await waitFor(() => {
      expect(screen.getByText(/✓ solicitado!/i)).toBeInTheDocument();
    });
  });

  it("reverts Agendar button after 3 seconds", async () => {
    jest.useFakeTimers();
    render(<DoctorCard profissional={mockProfissional} />);
    fireEvent.click(
      screen.getByRole("button", { name: /agendar consulta com/i })
    );
    expect(screen.getByText(/✓ solicitado!/i)).toBeInTheDocument();
    await act(async () => { jest.advanceTimersByTime(3100); });
    await waitFor(() => {
      expect(screen.getByText(/^agendar$/i)).toBeInTheDocument();
    });
    jest.useRealTimers();
  });

  it("has article landmark with correct aria-label", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    const card = screen.getByRole("article");
    expect(card).toHaveAttribute(
      "aria-label",
      "Profissional: Dra. Ana Luiza Ferreira, Psicologia"
    );
  });

  it("renders avatar initials correctly", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(screen.getByText("AL")).toBeInTheDocument();
  });

  it("online badge has accessibility label", () => {
    render(<DoctorCard profissional={mockProfissional} />);
    expect(
      screen.getByLabelText(/disponível para telemedicina/i)
    ).toBeInTheDocument();
  });
});

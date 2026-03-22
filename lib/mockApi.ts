// Mock API data - simula integração com back-end
// Em produção, substituir pelas chamadas reais à API

export interface Profissional {
  id: string;
  nome: string;
  especialidade: string;
  crm: string;
  cidade: string;
  estado: string;
  avatarUrl: string;
  avaliacao: number;
  totalAvaliacoes: number;
  aceitaPlanos: string[];
  modalidades: ("presencial" | "telemedicina")[];
  lgbtqiaFriendly: boolean;
  transCompetente: boolean;
  descricao: string;
  proximaDisponibilidade: string;
}

export interface Especialidade {
  id: string;
  nome: string;
  icone: string;
  descricao: string;
}

export const especialidades: Especialidade[] = [
  {
    id: "clinico-geral",
    nome: "Clínico Geral",
    icone: "🩺",
    descricao: "Atendimento geral e preventivo",
  },
  {
    id: "psicologia",
    nome: "Psicologia",
    icone: "🧠",
    descricao: "Saúde mental e bem-estar",
  },
  {
    id: "ginecologia",
    nome: "Ginecologia",
    icone: "💊",
    descricao: "Saúde ginecológica",
  },
  {
    id: "endocrinologia",
    nome: "Endocrinologia",
    icone: "⚗️",
    descricao: "Hormonioterapia e metabolismo",
  },
  {
    id: "dermatologia",
    nome: "Dermatologia",
    icone: "🌿",
    descricao: "Cuidados com a pele",
  },
  {
    id: "nutrição",
    nome: "Nutrição",
    icone: "🥗",
    descricao: "Alimentação saudável",
  },
  {
    id: "infectologia",
    nome: "Infectologia",
    icone: "🔬",
    descricao: "ISTs, HIV e saúde sexual",
  },
  {
    id: "urologia",
    nome: "Urologia",
    icone: "💙",
    descricao: "Saúde urológica",
  },
];

export const profissionais: Profissional[] = [
  {
    id: "1",
    nome: "Dra. Ana Luiza Ferreira",
    especialidade: "Psicologia",
    crm: "CRP 06/123456",
    cidade: "São Paulo",
    estado: "SP",
    avatarUrl: "",
    avaliacao: 4.9,
    totalAvaliacoes: 142,
    aceitaPlanos: ["Unimed", "Bradesco Saúde", "Particular"],
    modalidades: ["presencial", "telemedicina"],
    lgbtqiaFriendly: true,
    transCompetente: true,
    descricao:
      "Especialista em saúde mental LGBTQIA+, com foco em questões de identidade de gênero e orientação sexual. Abordagem acolhedora e sem julgamentos.",
    proximaDisponibilidade: "Hoje, 14h",
  },
  {
    id: "2",
    nome: "Dr. Carlos Mendes",
    especialidade: "Endocrinologia",
    crm: "CRM 12/98765",
    cidade: "São Paulo",
    estado: "SP",
    avatarUrl: "",
    avaliacao: 4.8,
    totalAvaliacoes: 98,
    aceitaPlanos: ["Amil", "SulAmérica", "Particular"],
    modalidades: ["presencial", "telemedicina"],
    lgbtqiaFriendly: true,
    transCompetente: true,
    descricao:
      "Especialista em hormonioterapia para pessoas trans e não-binárias. Experiência de 10 anos acompanhando processos de transição.",
    proximaDisponibilidade: "Amanhã, 10h",
  },
  {
    id: "3",
    nome: "Dra. Beatriz Santos",
    especialidade: "Clínico Geral",
    crm: "CRM 35/54321",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    avatarUrl: "",
    avaliacao: 4.7,
    totalAvaliacoes: 203,
    aceitaPlanos: ["Unimed", "Particular"],
    modalidades: ["telemedicina"],
    lgbtqiaFriendly: true,
    transCompetente: false,
    descricao:
      "Atendimento clínico geral com escuta ativa e respeito à identidade de cada paciente. Disponível via telemedicina para todo o Brasil.",
    proximaDisponibilidade: "Hoje, 17h",
  },
  {
    id: "4",
    nome: "Dr. Rafael Costa",
    especialidade: "Infectologia",
    crm: "CRM 06/77889",
    cidade: "São Paulo",
    estado: "SP",
    avatarUrl: "",
    avaliacao: 5.0,
    totalAvaliacoes: 67,
    aceitaPlanos: ["Bradesco Saúde", "Particular"],
    modalidades: ["presencial"],
    lgbtqiaFriendly: true,
    transCompetente: true,
    descricao:
      "Especialista em ISTs, PrEP e PEP. Acompanhamento de pessoas HIV+ com abordagem humanizada e sem estigma.",
    proximaDisponibilidade: "Quinta-feira, 9h",
  },
  {
    id: "5",
    nome: "Dra. Mariana Lima",
    especialidade: "Ginecologia",
    crm: "CRM 26/33445",
    cidade: "Belo Horizonte",
    estado: "MG",
    avatarUrl: "",
    avaliacao: 4.9,
    totalAvaliacoes: 115,
    aceitaPlanos: ["Amil", "Unimed", "Particular"],
    modalidades: ["presencial", "telemedicina"],
    lgbtqiaFriendly: true,
    transCompetente: true,
    descricao:
      "Ginecologia inclusiva para mulheres cis, trans e pessoas não-binárias. Ambiente seguro e acolhedor.",
    proximaDisponibilidade: "Amanhã, 15h",
  },
  {
    id: "6",
    nome: "Dr. Paulo Rodrigues",
    especialidade: "Dermatologia",
    crm: "CRM 06/55673",
    cidade: "São Paulo",
    estado: "SP",
    avatarUrl: "",
    avaliacao: 4.6,
    totalAvaliacoes: 89,
    aceitaPlanos: ["SulAmérica", "Particular"],
    modalidades: ["presencial"],
    lgbtqiaFriendly: true,
    transCompetente: false,
    descricao:
      "Dermatologista com experiência em cuidados de pele para pessoas em hormonioterapia. Tratamento de acne, cicatrizes e cuidados estéticos.",
    proximaDisponibilidade: "Sexta-feira, 11h",
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API functions
export const api = {
  async getProfissionais(filters?: {
    especialidade?: string;
    modalidade?: string;
    cidade?: string;
    busca?: string;
  }): Promise<Profissional[]> {
    await delay(400); // simulate network

    let result = [...profissionais];

    if (filters?.especialidade && filters.especialidade !== "todos") {
      result = result.filter(
        (p) =>
          p.especialidade.toLowerCase() === filters.especialidade!.toLowerCase()
      );
    }

    if (filters?.modalidade && filters.modalidade !== "todos") {
      result = result.filter((p) =>
        p.modalidades.includes(filters.modalidade as "presencial" | "telemedicina")
      );
    }

    if (filters?.busca) {
      const q = filters.busca.toLowerCase();
      result = result.filter(
        (p) =>
          p.nome.toLowerCase().includes(q) ||
          p.especialidade.toLowerCase().includes(q) ||
          p.descricao.toLowerCase().includes(q)
      );
    }

    return result;
  },

  async getEspecialidades(): Promise<Especialidade[]> {
    await delay(200);
    return especialidades;
  },

  async getProfissionalById(id: string): Promise<Profissional | null> {
    await delay(300);
    return profissionais.find((p) => p.id === id) || null;
  },
};

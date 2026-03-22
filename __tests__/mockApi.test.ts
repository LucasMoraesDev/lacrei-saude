import { api, profissionais, especialidades } from "@/lib/mockApi";

describe("Mock API", () => {
  it("returns all profissionais without filters", async () => {
    const result = await api.getProfissionais();
    expect(result).toHaveLength(profissionais.length);
  });

  it("filters by especialidade", async () => {
    const result = await api.getProfissionais({ especialidade: "Psicologia" });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) =>
      expect(p.especialidade.toLowerCase()).toBe("psicologia")
    );
  });

  it("returns empty array for non-existent especialidade", async () => {
    const result = await api.getProfissionais({
      especialidade: "Especialidade Inexistente",
    });
    expect(result).toHaveLength(0);
  });

  it("filters by modalidade telemedicina", async () => {
    const result = await api.getProfissionais({ modalidade: "telemedicina" });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) =>
      expect(p.modalidades).toContain("telemedicina")
    );
  });

  it("filters by modalidade presencial", async () => {
    const result = await api.getProfissionais({ modalidade: "presencial" });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) =>
      expect(p.modalidades).toContain("presencial")
    );
  });

  it("filters by busca (nome)", async () => {
    const result = await api.getProfissionais({ busca: "Ana" });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) =>
      expect(p.nome.toLowerCase()).toContain("ana")
    );
  });

  it("filters by busca (especialidade)", async () => {
    const result = await api.getProfissionais({ busca: "psicologia" });
    expect(result.length).toBeGreaterThan(0);
  });

  it("returns empty array for busca with no matches", async () => {
    const result = await api.getProfissionais({
      busca: "zzznãoexiste999",
    });
    expect(result).toHaveLength(0);
  });

  it("returns all especialidades", async () => {
    const result = await api.getEspecialidades();
    expect(result).toHaveLength(especialidades.length);
    expect(result[0]).toHaveProperty("id");
    expect(result[0]).toHaveProperty("nome");
    expect(result[0]).toHaveProperty("icone");
  });

  it("returns profissional by id", async () => {
    const result = await api.getProfissionalById("1");
    expect(result).not.toBeNull();
    expect(result?.id).toBe("1");
  });

  it("returns null for non-existent id", async () => {
    const result = await api.getProfissionalById("9999");
    expect(result).toBeNull();
  });

  it("profissional data has required fields", async () => {
    const result = await api.getProfissionais();
    result.forEach((p) => {
      expect(p).toHaveProperty("id");
      expect(p).toHaveProperty("nome");
      expect(p).toHaveProperty("especialidade");
      expect(p).toHaveProperty("avaliacao");
      expect(p).toHaveProperty("lgbtqiaFriendly");
      expect(p).toHaveProperty("modalidades");
      expect(Array.isArray(p.modalidades)).toBe(true);
    });
  });
});

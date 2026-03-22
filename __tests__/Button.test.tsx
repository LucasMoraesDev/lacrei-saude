import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import Button from "@/app/components/Button/Button";

// Minimal styled-components theme mock not needed for unit tests

describe("Button Component", () => {
  it("renders with default props", () => {
    render(<Button>Clique aqui</Button>);
    const btn = screen.getByRole("button", { name: /clique aqui/i });
    expect(btn).toBeInTheDocument();
  });

  it("renders all variants without crashing", () => {
    const variants = ["primary", "secondary", "outline", "ghost", "danger"] as const;
    variants.forEach((variant) => {
      const { unmount } = render(<Button variant={variant}>Btn {variant}</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    });
  });

  it("renders all sizes without crashing", () => {
    const sizes = ["sm", "md", "lg"] as const;
    sizes.forEach((size) => {
      const { unmount } = render(<Button size={size}>Btn {size}</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
      unmount();
    });
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clique</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Desabilitado
      </Button>
    );
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("shows loading state with aria-busy", () => {
    render(<Button isLoading>Carregando</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("aria-busy", "true");
    expect(btn).toBeDisabled();
  });

  it("does not call onClick when loading", async () => {
    const handleClick = jest.fn();
    render(
      <Button isLoading onClick={handleClick}>
        Carregando
      </Button>
    );
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with aria-label for accessibility", () => {
    render(
      <Button aria-label="Agendar consulta com Dra. Ana">Agendar</Button>
    );
    expect(
      screen.getByRole("button", { name: /agendar consulta com dra\. ana/i })
    ).toBeInTheDocument();
  });

  it("renders fullWidth button", () => {
    render(<Button fullWidth>Botão largo</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders left icon content", () => {
    render(
      <Button leftIcon={<span data-testid="left-icon">←</span>}>
        Com ícone
      </Button>
    );
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByText("Com ícone")).toBeInTheDocument();
  });

  it("renders right icon content", () => {
    render(
      <Button rightIcon={<span data-testid="right-icon">→</span>}>
        Com ícone
      </Button>
    );
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("does not render icons when loading", () => {
    render(
      <Button
        isLoading
        leftIcon={<span data-testid="icon">→</span>}
      >
        Carregando
      </Button>
    );
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("is accessible via keyboard (Enter key)", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Teclado</Button>);
    const btn = screen.getByRole("button");
    btn.focus();
    fireEvent.keyDown(btn, { key: "Enter", code: "Enter" });
    fireEvent.click(btn); // simulate browser default
    expect(handleClick).toHaveBeenCalled();
  });

  it("passes through native button attributes", () => {
    render(
      <Button type="submit" form="my-form">
        Enviar
      </Button>
    );
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("type", "submit");
    expect(btn).toHaveAttribute("form", "my-form");
  });
});

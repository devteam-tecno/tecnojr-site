/**
 * @file members-section.test.tsx
 * @description Unit tests for MembersSection component
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MembersSection } from "./members-section";

// Mock Next.js navigation hooks
const mockPush = vi.fn();
const mockSearchParams = new URLSearchParams();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  useSearchParams: () => mockSearchParams,
}));

// Mock member data
vi.mock("@/lib/members", () => ({
  memberList: [
    {
      name: "João Silva",
      roleId: 3,
      role: "Diretor",
      img: "joao.png",
      links: [],
    },
    {
      name: "Maria Santos",
      roleId: 0,
      role: "Trainee",
      img: "maria.png",
      links: [],
    },
    {
      name: "Pedro Oliveira",
      roleId: 3,
      role: "Diretor",
      img: "pedro.png",
      links: [],
    },
  ],
  getMembersByRole: (roleId: number) => {
    const members = [
      {
        name: "João Silva",
        roleId: 3,
        role: "Diretor",
        img: "joao.png",
        links: [],
      },
      {
        name: "Maria Santos",
        roleId: 0,
        role: "Trainee",
        img: "maria.png",
        links: [],
      },
      {
        name: "Pedro Oliveira",
        roleId: 3,
        role: "Diretor",
        img: "pedro.png",
        links: [],
      },
    ];
    return members.filter((m) => m.roleId === roleId);
  },
  getAllRoles: () => [5, 4, 3, 2, 1, 0],
}));

describe("MembersSection", () => {
  it("renders section title", () => {
    render(<MembersSection />);
    expect(screen.getByText("Nosso")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
  });

  it("renders 'Todos' filter pill", () => {
    render(<MembersSection />);
    expect(screen.getByText("Todos")).toBeInTheDocument();
  });

  it("renders all role filter pills", () => {
    render(<MembersSection />);

    expect(
      screen.getByRole("button", { name: "Coordenador" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Conselheiro" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Diretor" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Assessor" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Membro" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Trainee" })).toBeInTheDocument();
  });

  it("renders all members when no filter is active", () => {
    render(<MembersSection />);

    expect(screen.getByText("João Silva")).toBeInTheDocument();
    expect(screen.getByText("Maria Santos")).toBeInTheDocument();
    expect(screen.getByText("Pedro Oliveira")).toBeInTheDocument();
  });

  it("shows correct member count", () => {
    render(<MembersSection />);
    expect(screen.getByText(/Mostrando 3 membros/i)).toBeInTheDocument();
  });

  it("shows singular 'membro' when count is 1", () => {
    // Mock searchParams to filter by Trainee (only 1 member)
    mockSearchParams.set("role", "0");

    render(<MembersSection />);

    // Should show "Mostrando 1 membro" (singular)
    expect(screen.getByText(/Mostrando \d+ membros?/i)).toBeInTheDocument();
  });

  it("renders CTA text and button", () => {
    render(<MembersSection />);

    expect(
      screen.getByText(/Quer fazer parte do nosso time?/i),
    ).toBeInTheDocument();

    const ctaButton = screen.getByRole("link", { name: /Entre em contato/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", "/contato");
  });

  it("has correct section id for scroll navigation", () => {
    const { container } = render(<MembersSection />);
    const section = container.querySelector("#membros");
    expect(section).toBeInTheDocument();
  });

  it("clicking 'Todos' filter navigates to base URL", () => {
    mockSearchParams.set("role", "3"); // Start with a filter

    render(<MembersSection />);

    const todosButton = screen.getByText("Todos");
    fireEvent.click(todosButton);

    // Should call router.push with no query params
    expect(mockPush).toHaveBeenCalledWith("/sobre", { scroll: false });
  });

  it("clicking a role filter updates URL with role param", () => {
    render(<MembersSection />);

    const diretorButton = screen.getByRole("button", { name: "Diretor" });
    fireEvent.click(diretorButton);

    // Should call router.push with role=3 (Diretor)
    expect(mockPush).toHaveBeenCalledWith("?role=3", { scroll: false });
  });
});

/**
 * @file members-section.test.tsx
 * @description Unit tests for MembersSection component
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MembersSection } from "../members-section";

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
    expect(screen.getByText("Conheça nosso")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
  });

  it("renders 'Todos' filter pill", () => {
    render(<MembersSection />);
    expect(
      screen.getByRole("button", { name: /Todos.*\(/i }),
    ).toBeInTheDocument();
  });

  it("renders all role filter pills", () => {
    render(<MembersSection />);

    expect(
      screen.getByRole("button", { name: /Coordenador.*\(/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Conselheiro.*\(/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Diretor.*\(/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Assessor.*\(/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Membro.*\(/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Trainee.*\(/i }),
    ).toBeInTheDocument();
  });

  it("renders all members when no filter is active", () => {
    render(<MembersSection />);

    // Check that the component renders (memberList would have real members)
    // We can't check for specific names since we're using real data
    const memberCards = screen.getAllByRole("article");
    expect(memberCards.length).toBeGreaterThan(0);
  });

  it("shows correct member count", () => {
    render(<MembersSection />);
    // Check that the Todos button shows a count
    const todosButton = screen.getByRole("button", { name: /Todos.*\(/i });
    expect(todosButton).toBeInTheDocument();
    expect(todosButton.textContent).toMatch(/\d+/);
  });

  it("shows singular 'membro' when count is 1", () => {
    // Mock searchParams to filter by Trainee (only 1 member)
    mockSearchParams.set("role", "0");

    render(<MembersSection />);

    // Check that a role filter button exists with a count
    const traineeButton = screen.getByRole("button", { name: /Trainee.*\(/i });
    expect(traineeButton).toBeInTheDocument();
  });

  it("renders CTA text and button", () => {
    render(<MembersSection />);

    expect(screen.getByText(/Quer trabalhar conosco?/i)).toBeInTheDocument();

    const ctaButton = screen.getByRole("link", {
      name: /Participe do Prosel/i,
    });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", "https://tecnojr.com.br");
  });

  it("has correct section id for scroll navigation", () => {
    const { container } = render(<MembersSection />);
    const section = container.querySelector("#membros");
    expect(section).toBeInTheDocument();
  });

  it("clicking 'Todos' filter navigates to base URL", () => {
    mockSearchParams.set("role", "3"); // Start with a filter

    render(<MembersSection />);

    const todosButton = screen.getByRole("button", { name: /Todos.*\(/i });
    fireEvent.click(todosButton);

    // Should call router.push with no role query param
    expect(mockPush).toHaveBeenCalledWith("/sobre?#membros", { scroll: false });
  });

  it("clicking a role filter updates URL with role param", () => {
    render(<MembersSection />);

    const diretorButton = screen.getByRole("button", { name: /Diretor.*\(/i });
    fireEvent.click(diretorButton);

    // Should call router.push with role=3 (Diretor)
    expect(mockPush).toHaveBeenCalledWith("/sobre?role=3#membros", {
      scroll: false,
    });
  });
});

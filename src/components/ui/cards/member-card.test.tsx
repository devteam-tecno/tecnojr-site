/**
 * @file member-card.test.tsx
 * @description Unit tests for MemberCard component
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Member } from "@/lib/types";
import { ROLE_ID } from "@/lib/types";
import { MemberCard } from "./member-card";

// ============================================================================
// TEST DATA
// ============================================================================

const mockMember: Member = {
  name: "João Silva",
  roleId: ROLE_ID.Diretor,
  role: "Diretor de Projetos",
  img: "joao_silva.png",
  links: [
    {
      icon: "linkedin",
      url: "https://linkedin.com/in/joaosilva",
    },
    {
      icon: "github",
      url: "https://github.com/joaosilva",
    },
    {
      icon: "envelope",
      url: "mailto:joao@tecnojr.com.br",
    },
  ],
};

const mockMemberWithoutLinks: Member = {
  name: "Maria Santos",
  roleId: ROLE_ID.Trainee,
  role: "Trainee",
  img: "maria_santos.png",
  links: [],
};

// ============================================================================
// TESTS
// ============================================================================

describe("MemberCard", () => {
  it("renders member name", () => {
    render(<MemberCard member={mockMember} />);
    expect(screen.getByText("João Silva")).toBeInTheDocument();
  });

  it("renders member role", () => {
    render(<MemberCard member={mockMember} />);
    expect(screen.getByText("Diretor de Projetos")).toBeInTheDocument();
  });

  it("renders active status badge", () => {
    render(<MemberCard member={mockMember} />);
    expect(screen.getByText("Ativo")).toBeInTheDocument();
  });

  it("renders member photo with correct src", () => {
    render(<MemberCard member={mockMember} />);
    const img = screen.getByAltText("Foto de João Silva");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("joao_silva.png"),
    );
  });

  it("renders all social links", () => {
    render(<MemberCard member={mockMember} />);

    const linkedinLink = screen.getByLabelText("linkedin de João Silva");
    const githubLink = screen.getByLabelText("github de João Silva");
    const emailLink = screen.getByLabelText("envelope de João Silva");

    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/joaosilva",
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/joaosilva");

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:joao@tecnojr.com.br");
  });

  it("does not render social links section when links array is empty", () => {
    render(<MemberCard member={mockMemberWithoutLinks} />);

    // Check that no links are rendered
    expect(screen.queryByLabelText(/linkedin de/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/github de/i)).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <MemberCard member={mockMember} className="custom-class" />,
    );

    const card = container.firstChild;
    expect(card).toHaveClass("custom-class");
  });

  it("applies required styling classes", () => {
    const { container } = render(<MemberCard member={mockMember} />);

    const card = container.firstChild;
    expect(card).toHaveClass("glass-card");
    expect(card).toHaveClass("card-interactive");
    expect(card).toHaveClass("group");
  });
});

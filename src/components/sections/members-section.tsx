/**
 * @file members-section.tsx
 * @description Section displaying team members with role-based filtering
 * Refactored to use shared components (BackgroundPattern, CTASection)
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/section-container";
import { BackgroundPattern } from "@/components/sections/shared/background-pattern";
import { CTASection } from "@/components/sections/shared/cta-section";
import { MemberCard } from "@/components/ui/cards/member-card";
import { FilterPill } from "@/components/ui/filter-pill";
import { getAllRoles, getMembersByRole, memberList } from "@/lib/data/members";
import { type ROLE_ID, ROLE_LABELS } from "@/lib/types";
import { SectionTitle } from "./section-title";

/**
 * MembersSection - Displays team members with filterable role categories
 */
export function MembersSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");

  const activeRole =
    roleParam && roleParam !== "all" ? Number(roleParam) : null;
  const filteredMembers =
    activeRole !== null ? getMembersByRole(activeRole as ROLE_ID) : memberList;

  const handleFilterChange = (roleId: ROLE_ID | "all") => {
    const params = new URLSearchParams(searchParams.toString());

    if (roleId === "all") {
      params.delete("role");
    } else {
      params.set("role", String(roleId));
    }

    router.push(`/sobre?${params.toString()}#membros`, { scroll: false });
  };

  const roles = getAllRoles();

  return (
    <Section
      id="membros"
      className="bg-linear-to-b from-gray-900/50 to-brand-dark"
    >
      {/* Background Pattern */}
      <BackgroundPattern />

      <SectionContainer>
        <SectionTitle
          firstLine="Conheça nosso"
          secondLine="Time"
          subtitle="A força por trás de cada projeto, unidos por paixão e inovação"
        />

        {/* Filter Pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <FilterPill
            active={activeRole === null}
            onClick={() => handleFilterChange("all")}
          >
            Todos ({memberList.length})
          </FilterPill>
          {roles.map((roleId) => (
            <FilterPill
              key={roleId}
              active={activeRole === roleId}
              onClick={() => handleFilterChange(roleId)}
            >
              {ROLE_LABELS[roleId as ROLE_ID]} (
              {getMembersByRole(roleId).length})
            </FilterPill>
          ))}
        </div>

        {/* Members Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole === null ? "all" : activeRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredMembers.map((member, index) => (
              <StaggerFadeUp key={member.name} index={index}>
                <MemberCard member={member} />
              </StaggerFadeUp>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <CTASection
          title="Quer trabalhar conosco?"
          buttonText="Participe do Prosel"
          buttonHref="https://tecnojr.com.br"
        />
      </SectionContainer>
    </Section>
  );
}

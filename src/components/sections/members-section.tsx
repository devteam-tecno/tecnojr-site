/**
 * @file members-section.tsx
 * @description Section displaying team members with role-based filtering
 * Used in the About page
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { StaggerFadeUp } from "@/components/animated/motion-wrappers";
import { Button } from "@/components/ui/buttons/button";
import { MemberCard } from "@/components/ui/cards/member-card";
import { FilterPill } from "@/components/ui/filter-pill";
import { type ROLE_ID, ROLE_LABELS } from "@/lib/constants";
import { getAllRoles, getMembersByRole, memberList } from "@/lib/members";
import { SectionTitle } from "./section-title";

/**
 * MembersSection - Displays team members with filterable role categories
 *
 * Features:
 * - Filter pills for each role (Coordenador, Conselheiro, Diretor, etc.)
 * - URL params for shareable filtered views (?role=3 for Diretor)
 * - Responsive grid: 1 col mobile → 2 tablet → 3 desktop → 4 xl
 * - Animated layout transitions when filtering
 * - CTA button linking to contact page
 *
 * URL Parameters:
 * - `role`: ROLE_ID number to filter by (e.g., ?role=3 shows only Diretores)
 * - No param or ?role=all: shows all members
 *
 * @example
 * ```tsx
 * import { MembersSection } from '@/components/sections/members-section';
 *
 * export default function AboutPage() {
 *   return (
 *     <>
 *       <HeroAboutSection />
 *       <IdealsSection />
 *       <MembersSection />
 *     </>
 *   );
 * }
 * ```
 */
export function MembersSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");

  // Determine active filter and filtered members
  const activeRole =
    roleParam && roleParam !== "all" ? Number(roleParam) : null;
  const filteredMembers =
    activeRole !== null ? getMembersByRole(activeRole as ROLE_ID) : memberList;

  /**
   * Handle filter change by updating URL params
   */
  const handleFilterChange = (roleId: ROLE_ID | "all") => {
    const params = new URLSearchParams(searchParams.toString());

    if (roleId === "all") {
      params.delete("role");
    } else {
      params.set("role", String(roleId));
    }

    const newUrl = params.toString() ? `?${params.toString()}` : "/sobre";
    router.push(newUrl, { scroll: false });
  };

  const allRoles = getAllRoles();

  return (
    <section
      id="membros"
      className="relative overflow-hidden bg-linear-to-b from-gray-900/50 to-tecno-black-800 py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 75%, #9155EB 1px, transparent 1px), radial-gradient(circle at 75% 25%, #4275F9 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle firstLine="Nosso" secondLine="Time" />

        {/* Filter Pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <FilterPill
            active={activeRole === null}
            onClick={() => handleFilterChange("all")}
          >
            Todos
          </FilterPill>
          {allRoles.map((roleId) => (
            <FilterPill
              key={roleId}
              active={activeRole === roleId}
              onClick={() => handleFilterChange(roleId)}
            >
              {ROLE_LABELS[roleId]}
            </FilterPill>
          ))}
        </div>

        {/* Members Grid with AnimatePresence */}
        <motion.div layout className="mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleParam || "all"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
        </motion.div>

        {/* Results count */}
        <div className="mb-8 text-center text-gray-400">
          Mostrando {filteredMembers.length}{" "}
          {filteredMembers.length === 1 ? "membro" : "membros"}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="mb-6 text-xl text-gray-300">
            Quer fazer parte do nosso time?
          </p>
          <Button asChild variant="gradient-primary" size="lg">
            <Link href="/contato">Entre em contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

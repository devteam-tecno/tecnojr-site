/**
 * @file member-card.tsx
 * @description Card component for displaying team member information
 * with photo, role, and social links. Used in the About page members section.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/typography";
import type { Member, SocialLink } from "@/lib/types";
import { getIcon } from "@/lib/utils/icons";
import { cn } from "@/lib/utils/utils";
import { Card, CardContent } from "./card";

// ============================================================================
// TYPES
// ============================================================================

export interface MemberCardProps {
  /** Member data to display */
  member: Member;
  /** Additional className for the container */
  className?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * MemberCard - Displays individual team member information
 *
 * @example
 * ```tsx
 * import { MemberCard } from '@/components/ui/cards/member-card';
 * import { memberList } from '@/lib/members';
 *
 * <MemberCard member={memberList[0]} />
 * ```
 */
export function MemberCard({ member, className }: MemberCardProps) {
  const { name, role, img, links } = member;

  return (
    <Card
      as="article"
      className={cn(
        "group glass-card card-interactive",
        "transition-all duration-300",
        className,
      )}
    >
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        {/* Member Photo */}
        <div className="relative">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-brand-primary transition-colors duration-300">
            <Image
              src={`/assets/img/members/${img}`}
              alt={`Foto de ${name}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          {/* Online Status Indicator */}
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full" />
        </div>

        {/* Member Info */}
        <div className="space-y-2 w-full">
          {/* Name with gradient on hover */}
          <h3
            className={cn(
              "text-lg font-semibold text-white",
              "group-hover:text-gradient-tecno transition-all duration-300",
            )}
          >
            {name}
          </h3>

          {/* Role */}
          <Text variant="muted" size="sm">
            {role}
          </Text>

          {/* Active Status Badge */}
          <Badge variant="role" size="sm">
            Ativo
          </Badge>
        </div>

        {/* Social Links */}
        {links.length > 0 && (
          <div className="flex items-center justify-center gap-2 pt-2">
            {links.map((link: SocialLink) => {
              const Icon = getIcon(link.icon);
              return (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-8 h-8 flex items-center justify-center",
                    "rounded-lg bg-gray-800/50 border border-gray-700",
                    "text-gray-400 hover:text-brand-primary",
                    "hover:bg-brand-primary/10 hover:border-brand-primary/30",
                    "transition-all duration-300",
                    "hover:scale-110",
                  )}
                  aria-label={`${link.icon} de ${name}`}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

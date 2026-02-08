"use client";

import { AnimatedLink, FadeUp } from "@/components/animated";
import { Text } from "@/components/ui/typography";
import { getContactInfoItems } from "@/lib/config/contact";

/**
 * Footer contact information section with animated display.
 *
 * Displays company contact details (email, address, phone) with icons and clickable links.
 * Each item has a gradient icon circle, title, and linked content text.
 * Spans 2 columns on large screens (lg:col-span-2).
 *
 * Animation: Fade up on scroll into view with 0.2s delay.
 *
 * @example
 * // Used in Footer component
 * <ContactInfo />
 */
export function ContactInfo() {
  const contactInfo = getContactInfoItems();
  return (
    <div className="lg:col-span-2">
      <FadeUp delay={0.2}>
        <h4 className="mb-6 text-lg font-semibold text-white">Contato</h4>
        <div className="space-y-6">
          {contactInfo.map((info) => {
            const IconComponent = info.icon;
            return (
              <AnimatedLink
                key={info.title}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                hoverEffect="slide"
                className="group flex items-start space-x-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <div>
                  <Text
                    variant="muted"
                    size="sm"
                    className="font-semibold uppercase tracking-wider text-purple-500"
                  >
                    {info.title}
                  </Text>
                  <Text
                    variant="body"
                    size="sm"
                    className="leading-relaxed transition-colors duration-300 group-hover:text-white"
                  >
                    {info.content}
                  </Text>
                </div>
              </AnimatedLink>
            );
          })}
        </div>
      </FadeUp>
    </div>
  );
}

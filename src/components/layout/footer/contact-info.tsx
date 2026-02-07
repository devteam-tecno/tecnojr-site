"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

/**
 * Static contact information data with icons and links.
 *
 * @property icon - Lucide icon component
 * @property title - Contact type label (EMAIL, LOCAL, TELEFONE)
 * @property content - Display text (email, address, phone number)
 * @property link - Clickable link (mailto:, tel:, Google Maps URL)
 */
const contactInfo = [
  {
    icon: Mail,
    title: "EMAIL",
    content: "tecnojr@uesc.br",
    link: "mailto:tecnojr@uesc.br",
  },
  {
    icon: MapPin,
    title: "LOCAL",
    content:
      "Campus Soane Nazaré de Andrade Rodovia Jorge Amado, km 16 S/N Bairro Salobrinho, Ilhéus",
    link: "https://goo.gl/maps/ivriShW6tUBzJNVa6",
  },
  {
    icon: Phone,
    title: "TELEFONE",
    content: "+55 (73) 3680-5389",
    link: "tel:557336805389",
  },
];

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
  return (
    <div className="lg:col-span-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h4 className="mb-6 text-lg font-semibold text-white">Contato</h4>
        <div className="space-y-6">
          {contactInfo.map((info) => {
            const IconComponent = info.icon;
            return (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{ x: 5 }}
                className="group flex items-start space-x-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-purple-500">
                    {info.title}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {info.content}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

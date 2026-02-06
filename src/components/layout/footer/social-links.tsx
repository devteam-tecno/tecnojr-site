"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  {
    url: "https://instagram.com/tecnojr",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    url: "https://facebook.com/tecnojr",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    url: "https://github.com/tecnojr-uesc",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    url: "https://linkedin.com/company/tecnojr",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    url: "https://wa.me/5573999321323?text=Olá! Estou entrando em contato pelo site da *Tecno*, gostaria de pedir um orçamento para ",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/20 bg-linear-to-br from-zinc-800 to-zinc-900 text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:text-white"
          >
            <IconComponent className="h-4 w-4" />
          </motion.a>
        );
      })}
    </div>
  );
}

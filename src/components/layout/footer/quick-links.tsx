"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const quickLinks = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Projetos", path: "/sonhos" },
  { name: "Press Kit", path: "/press-kit" },
];

export function QuickLinks() {
  return (
    <div className="hidden lg:col-span-1 lg:block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h4 className="mb-6 text-lg font-semibold text-white">Links Rápidos</h4>
        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="text-gray-300 transition-colors duration-300 hover:text-purple-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

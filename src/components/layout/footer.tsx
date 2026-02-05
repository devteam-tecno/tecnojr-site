"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    url: "https://instagram.com/tecnojr",
    icon: Instagram,
    label: "Instagram",
  },
  {
    url: "https://facebook.com/tecnojr",
    icon: Facebook,
    label: "Facebook",
  },
  {
    url: "https://github.com/tecnojr-uesc",
    icon: Github,
    label: "GitHub",
  },
  {
    url: "https://linkedin.com/company/tecnojr",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    url: "https://wa.me/5573999321323?text=Olá! Estou entrando em contato pelo site da *Tecno*, gostaria de pedir um orçamento para ",
    icon: MessageCircle,
    label: "WhatsApp",
  },
];

const quickLinks = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Projetos", path: "/sonhos" },
  { name: "Press Kit", path: "/press-kit" },
];

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

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-gradient-to-t from-zinc-950 to-zinc-900">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/assets/logo/tecnojr-logo-white.png"
                  alt="Logo TecnoJr"
                  width={200}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mb-6 text-sm leading-relaxed text-gray-300">
                Transformando ideias em projetos de qualidade. Nossa missão é
                oferecer soluções tecnológicas seguras e práticas.
              </p>
              {/* Social Links */}
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/20 bg-gradient-to-br from-zinc-800 to-zinc-900 text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:text-white"
                    >
                      <IconComponent className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="hidden lg:col-span-1 lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-lg font-semibold text-white">
                Links Rápidos
              </h4>
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

          {/* Contact Info */}
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
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{ x: 5 }}
                      className="group flex items-start space-x-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-110">
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
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-purple-500/20 pt-8 text-center">
          <p className="text-sm text-gray-400">
            ©{new Date().getFullYear()} TecnoJr - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

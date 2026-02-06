"use client";

import { motion } from "framer-motion";
import { Code, Palette, Smartphone } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Criamos sites modernos, responsivos e otimizados para oferecer a melhor experiência aos seus usuários.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Desenvolvemos aplicações móveis nativas e híbridas para iOS e Android com foco na usabilidade.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Criamos interfaces intuitivas e experiências memoráveis que conectam sua marca aos usuários.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-tecno-black-900 py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, oklch(0.6 0.26 295) 1px, transparent 1px), radial-gradient(circle at 75% 75%, oklch(0.6 0.23 260) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="block text-white"
            >
              Nossos
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="block text-gradient-tecno"
            >
              Serviços
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-lg text-gray-300"
          >
            Oferecemos uma gama completa de serviços tecnológicos para
            transformar sua visão em realidade digital
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

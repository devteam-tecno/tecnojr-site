"use client";

import { motion } from "framer-motion";
import { DollarSign, GraduationCap, Handshake, Users } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    icon: GraduationCap,
    title: "Experiência Acadêmica e Inovação",
    description:
      "Alinhamento constante com as mais recentes tendências tecnológicas através da base acadêmica sólida da UESC.",
  },
  {
    icon: Users,
    title: "Equipe Atualizada",
    description:
      "Formada por estudantes de Computação sempre atualizados com as últimas tendências e tecnologias do mercado.",
  },
  {
    icon: DollarSign,
    title: "Preços Flexíveis",
    description:
      "Como empresa júnior, oferecemos soluções de alta qualidade com preços acessíveis e condições flexíveis de pagamento.",
  },
  {
    icon: Handshake,
    title: "Compromisso com Qualidade",
    description:
      "Dedicação total a cada projeto, promovendo aprendizado mútuo e resultados excepcionais para ambas as partes.",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900/50 to-tecno-black-800 py-32">
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
              Por que escolher
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="block text-gradient-tecno"
            >
              a gente?
            </motion.span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

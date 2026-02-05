"use client";

import { motion } from "framer-motion";
import { Clock, Handshake, MessageCircle, Rocket, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StatItem } from "@/components/ui/stat-item";

const benefits = [
  { icon: Rocket, label: "Orçamento 100% Gratuito" },
  { icon: Clock, label: "Resposta em até 24h" },
  { icon: Handshake, label: "Consultoria Especializada" },
];

export function BudgetSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tecno-black via-gray-900/50 to-tecno-black py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-tecno-purple/5 via-transparent to-tecno-blue/5" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-tecno-purple/20 to-tecno-blue/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-tecno-blue/20 to-tecno-purple/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center rounded-full border border-tecno-purple/20 bg-gradient-to-r from-tecno-purple/10 to-tecno-blue/10 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm"
            >
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-tecno-blue" />
              Contato
            </motion.div>

            <h2 className="mb-6 flex text-3xl font-bold leading-tight sm:text-3xl lg:text-3xl xl:text-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-white"
              >
                Seja nosso&nbsp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gradient-tecno"
              >
                cliente!
              </motion.span>
            </h2>

            <div className="mb-10 space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StatItem icon={benefit.icon} label={benefit.label} />
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-tecno-black bg-gradient-to-br from-tecno-purple to-tecno-blue text-sm font-bold text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-white">
                  50+ Clientes Satisfeitos
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-tecno-purple via-tecno-blue to-tecno-purple opacity-20 blur" />

            <div className="relative rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 p-8 backdrop-blur-xl transition-all duration-500 hover:border-tecno-purple/50 lg:p-12">
              {/* Header */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-tecno-purple to-tecno-blue shadow-lg shadow-tecno-purple/25"
                >
                  <MessageCircle className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">
                  Vamos conversar?
                </h3>
                <p className="leading-relaxed text-gray-300">
                  Conte-nos sobre seu projeto e receba uma proposta
                  personalizada. Estamos aqui para transformar suas ideias em
                  soluções incríveis!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button
                    asChild
                    variant="gradient-whatsapp"
                    className="w-full"
                  >
                    <Link
                      href="https://wa.me/5573999502325"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        role="img"
                        aria-label="WhatsApp icon"
                        className="mr-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button
                    asChild
                    variant="gradient-secondary"
                    className="w-full"
                  >
                    <Link href="/contato">
                      <svg
                        role="img"
                        aria-label="Email icon"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      E-mail
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Security Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="mt-6 flex items-center justify-center text-xs text-gray-400"
              >
                <Shield className="mr-2 h-4 w-4 text-tecno-purple" />
                Seus dados estão seguros conosco
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

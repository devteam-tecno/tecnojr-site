"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-tecno-black-800 to-gray-900/50 py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-tecno-purple-500/10 to-tecno-blue-500/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content - Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Placeholder for image */}
            <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden rounded-3xl border border-gray-700/30 bg-gradient-to-br from-tecno-purple-500/20 via-gray-800/40 to-tecno-blue-500/20 backdrop-blur-sm">
              <div className="p-8 text-center">
                <p className="text-lg text-gray-400">Imagem da TecnoJr</p>
              </div>

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-tecno-purple-500/5 via-transparent to-tecno-blue-500/5" />
            </div>
          </motion.div>

          {/* Right Content - Text overlapping */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-20 lg:-ml-16"
          >
            {/* Card Background */}
            <div className="relative rounded-3xl p-8 transition-all duration-500 hover:border-tecno-purple-500/30 lg:p-12">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-tecno-purple-500/20 via-tecno-blue-500/20 to-tecno-purple-500/20 opacity-0 blur transition duration-500 group-hover:opacity-50" />

              <div className="relative">
                <h2 className="text-3xl font-bold !leading-tight sm:text-3xl lg:text-3xl xl:text-3xl">
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="block text-white"
                  >
                    Quem somos?
                  </motion.span>
                </h2>

                {/* Main Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-6 space-y-6"
                >
                  <p className="text-lg leading-relaxed text-gray-300">
                    <span className="font-semibold text-white">
                      Fundada em 2002, a Associação Empresa Júnior de Computação
                      - TecnoJr
                    </span>{" "}
                    foi criada como um projeto de extensão do curso de Ciência
                    da Computação da UESC.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-300">
                    Desde então, vem atuando na área de{" "}
                    <span className="font-semibold text-white">
                      desenvolvimento de sistemas
                    </span>{" "}
                    e aproximando o mundo acadêmico do empresarial.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-300">
                    Constituída por estudantes e professores universitários
                    apaixonados por tecnologia e inovação.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

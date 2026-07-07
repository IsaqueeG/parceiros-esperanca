import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, Sparkles } from "lucide-react";
import { AboutIMG } from "@/assets/images";

const pillars = [
  {
    icon: BookOpen,
    title: "Leitura",
    description:
      "Incentivar o contato com histórias que edificam e despertam a imaginação das crianças.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Ajudar na formação do caráter, transmitindo princípios cristãos de forma acessível.",
  },
  {
    icon: Sparkles,
    title: "Esperança",
    description:
      "Levar uma mensagem ao coração das crianças e suas famílias.",
  },
];

export default function AboutSection() {
  return (
    <section id="projeto" className="relative py-24 md:py-32 overflow-hidden">
      <img
    src={AboutIMG}
    alt=""
    className="absolute inset-0 w-full h-full object-cover scale-60"
  />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            Sobre o Projeto
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
        >
          Uma Criança Alcançada.
          <br />
          <span className="text-primary italic">
            Uma Vida Transformada.
          </span>
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto mb-6"
        >
          O Projeto Parceiros da Esperança é uma iniciativa de estudantes
          universitários adventistas que percorrem cidades levando{" "}
          <strong>O Mundo Colorido da Bíblia</strong> às mãos de crianças,
          compartilhando leitura, valores cristãos e esperança.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Cada livro entregue representa uma semente plantada no coração da
          próxima geração.
        </motion.p>

        {/* Linha decorativa */}
        <div className="w-24 h-1 bg-accent mx-auto rounded-full my-12"></div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8"
            >
              <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white mb-5">
                <p.icon size={26} />
              </div>

              <h3 className="text-white text-2xl font-bold mb-3">
                {p.title}
              </h3>

              <p className="text-white/80 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
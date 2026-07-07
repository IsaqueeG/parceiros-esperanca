import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Star,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { book } from "@/assets/images";

import { pagina1 } from "@/assets/images/";
import { pagina2 } from "@/assets/images/";
import { pagina3 } from "@/assets/images/";
import { pagina4 } from "@/assets/images/";
import { pagina5 } from "@/assets/images/";

const features = [
  {
    icon: BookOpen,
    title: "Ilustrações Encantadoras",
    text: "Cada página traz cores vibrantes e cenas bíblicas que capturam a atenção das crianças.",
  },
  {
    icon: Star,
    title: "Linguagem Acessível",
    text: "Histórias recontadas com simplicidade para que crianças de todas as idades compreendam.",
  },
  {
    icon: Lightbulb,
    title: "Valores que Permanecem",
    text: "Lições de fé, coragem e amor que acompanham a criança por toda a vida.",
  },
];

export default function MaterialSection() {
  const images = [pagina1, pagina2, pagina3, pagina4, pagina5];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % images.length);
  };

  const prev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <section
      id="material"
      className="py-24 md:py-32 bg-foreground relative overflow-hidden"
    >
      {/* Fundo */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_#F1C40F_1px,_transparent_1px)] bg-[length:40px_40px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            O Material
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-background mt-3 mb-4">
            O Mundo Colorido{" "}
            <span className="italic text-accent">da Bíblia</span>
          </h2>

          <p className="text-background/60 max-w-2xl mx-auto text-lg">
            Um material pensado para ensinar, encantar e transformar.
          </p>
        </motion.div>

        {/* Livro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <img
            src={book}
            alt="Livro O Mundo Colorido da Bíblia"
            className="max-w-md w-full rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Recursos */}
        <div className="grid md:grid-cols-3 gap-10 text-center mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-background/5 rounded-2xl p-8 border border-background/10"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-5">
                <feature.icon
                  size={28}
                  className="text-accent"
                />
              </div>

              <h3 className="text-background text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-background/60 leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botão */}
        <div className="text-center mb-24">
          <a
            href="https://www.instagram.com/parceirosdaesperanca7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-foreground px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            <BookOpen size={20} />
            Levar esta Bênção
          </a>
        </div>

        {/* Carrossel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-background text-center mb-10">
            Conheça o interior do{" "}
            <span className="text-accent">material</span>
          </h3>

          <div className="relative max-w-4xl mx-auto bg-white rounded-3xl border border-accent/20 shadow-xl p-6">

            <img
              src={images[current]}
              alt="Página do livro"
              className="w-full rounded-2xl shadow-2xl"
            />

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
            >
              <ChevronRight />
            </button>

          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index
                    ? "bg-accent scale-125"
                    : "bg-background/30"
                }`}
              />
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
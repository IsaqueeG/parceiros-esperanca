import React from "react";
import { motion } from "framer-motion";
import { impact } from "@/assets/images";

export default function ImpactSection() {
  return (
    <section id="impacto" className="relative overflow-hidden">
      <div className="relative h-[80vh] md:h-[120vh]">
        <img
          src={impact}
          alt="Crianças recebendo livros coloridos de estudantes em uma comunidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="text-accent font-body text-sm font-semibold uppercase tracking-[0.2em]">
                Nosso Impacto
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-background mt-3 mb-6 leading-tight">
                Histórias Sendo{" "}
                <span className="italic text-accent">Transformadas</span>
              </h2>
              <p className="text-background/70 text-lg leading-relaxed mb-8">
                O projeto acontece por meio de parceiros que decidem investir na
                vida de uma criança. A partir desse apoio, o material é entregue
                gratuitamente em uma grande ação ao fim do projeto.
              </p>
              <a
                href="https://www.instagram.com/parceirosdaesperanca7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-foreground px-8 py-4 font-semibold rounded-full transition-all hover:scale-105"
              >
                Faça Parte desta História
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
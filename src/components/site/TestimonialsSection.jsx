import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Quando aquele jovem bateu na nossa porta e entregou o livro para minha filha, vi os olhos dela brilharem. Hoje ela pede para ler as histórias toda noite antes de dormir.",
    name: "Dona Maria",
    role: "Mãe de família, João Pessoa - PB",
  },
  {
    quote:
      "Eu não tinha condição de comprar livros para meus netos. Quando esses estudantes vieram até nós com tanto carinho, senti que Deus não tinha se esquecido de nós.",
    name: "Seu Antônio",
    role: "Avô, Campina Grande - PB",
  },
  {
    quote:
      "Esse projeto mudou minha vida como estudante. Aprendi a servir, a confiar em Deus e a financiar meus estudos com propósito. Cada férias é uma missão que transforma quem eu sou.",
    name: "Ana Clara",
    role: "Estudante de Enfermagem",
  },
  {
    quote:
      "Meu filho ganhou um livro e desde então ele conta as histórias para toda a vizinhança. Um simples livro plantou uma semente que já está dando frutos.",
    name: "Dona Francisca",
    role: "Mãe de família, Recife - PE",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-[0.2em]">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Parceiros que Disseram{" "}
            <span className="italic text-primary">Sim</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="bg-card rounded-3xl p-8 md:p-14 shadow-lg relative min-h-[280px] flex flex-col justify-center">
            {/* Gold quote mark */}
            <Quote
              size={48}
              className="text-accent/20 absolute top-6 left-8 md:top-10 md:left-12"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-center relative z-10"
              >
                <p className="font-heading text-xl md:text-2xl text-foreground italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-heading text-lg font-bold text-primary">
                    {t.name}
                  </p>
                  <p className="text-foreground/50 text-sm">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all text-foreground"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary scale-125" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all text-foreground"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
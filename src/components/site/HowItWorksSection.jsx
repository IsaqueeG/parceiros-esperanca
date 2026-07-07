import React from "react";
import { motion } from "framer-motion";
import { HandHeart, BookOpen, Gift } from "lucide-react";

const steps = [
  {
    icon: HandHeart,
    num: "01",
    title: "Você Apoia",
    description:
      "Ao se tornar um parceiro, você investe na educação de um estudante e na transformação de uma família. Seu apoio financia os estudos universitários e os materiais do projeto.",
  },
  {
    icon: BookOpen,
    num: "02",
    title: "Nós Levamos",
    description:
      "Durante as férias, nossos estudantes percorrem bairros e comunidades, levando O Mundo Colorido da Bíblia com carinho, oração e dedicação.",
  },
  {
    icon: Gift,
    num: "03",
    title: "Vidas São Transformadas",
    description:
      "Crianças recebem leitura de qualidade, famílias recebem esperança, e estudantes conquistam a possibilidade de continuar seus estudos.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-[0.2em]">
            Como Funciona
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Três Passos para <span className="italic text-primary">Transformar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative text-center md:text-left"
            >
              {/* Connecting line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-accent/30" />
              )}

              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background border-2 border-primary/20 mb-6 relative">
                <s.icon size={32} className="text-primary" />
                <span className="absolute -top-2 -right-2 bg-accent text-foreground text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center font-body">
                  {s.num}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
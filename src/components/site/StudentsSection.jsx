import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, BookOpen, GraduationCap } from "lucide-react";

const STUDENT_1 = "https://media.base44.com/images/public/6a47c1d89f4a990f1c8880aa/b0cb268bb_generated_bbe75e38.png";
const STUDENT_2 = "https://media.base44.com/images/public/6a47c1d89f4a990f1c8880aa/e1ff5d6ae_generated_d6c84427.png";

const stats = [
  { icon: Clock, value: "500+", label: "Horas de Missão" },
  { icon: Users, value: "200+", label: "Famílias Alcançadas" },
  { icon: BookOpen, value: "1.000+", label: "Livros Entregues" },
  { icon: GraduationCap, value: "15", label: "Estudantes na Missão" },
];

export default function StudentsSection() {
  return (
    <section id="estudantes" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-[0.2em]">
            O Coração do Projeto
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Estudantes que <span className="italic text-primary">Escolheram Servir</span>
          </h2>
        </motion.div>

        {/* Student stories grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img
                src={STUDENT_1}
                alt="Estudante lendo para crianças em uma varanda"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-background/90 font-heading text-lg italic">
                  "Durante as férias, enquanto muitos descansam, nós escolhemos
                  caminhar — levando esperança de porta em porta."
                </p>
              </div>
            </div>
            <p className="text-foreground/60 leading-relaxed">
              Nossos estudantes são universitários adventistas que dedicam suas
              férias para financiar seus estudos e ao mesmo tempo abençoar
              famílias. Cada porta batida é um ato de fé; cada livro entregue,
              uma semente de esperança.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group lg:mt-16"
          >
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img
                src={STUDENT_2}
                alt="Estudante com mochila cheia de livros à porta de uma casa"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-background/90 font-heading text-lg italic">
                  "Cada família que recebe um livro também recebe um pedaço
                  do nosso coração e da nossa oração."
                </p>
              </div>
            </div>
            <p className="text-foreground/60 leading-relaxed">
              Não é só trabalho — é vocação. Esses jovens abrem mão do conforto
              para percorrer bairros, cidades e comunidades, levando o Mundo
              Colorido da Bíblia a quem mais precisa de esperança.
            </p>
          </motion.div>
        </div>

        {/* Impact counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <s.icon size={28} className="text-accent mx-auto mb-3" />
                <div className="font-heading text-3xl md:text-4xl font-bold text-background mb-1">
                  {s.value}
                </div>
                <div className="text-background/60 text-sm font-body">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
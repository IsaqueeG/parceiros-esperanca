import React from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,_#F1C40F_1px,_transparent_1px)] bg-[length:50px_50px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heart size={40} className="text-accent mx-auto mb-6" />

          <h2 className="font-heading text-3xl md:text-5xl font-bold text-background leading-tight mb-6">
            Juntos Levamos Esperança.{" "}
            <span className="italic text-accent">
              Juntos Levamos Transformação.
            </span>
          </h2>

          <p className="text-background/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Seu investimento coloca livros nas mãos de crianças que terão a oportunidade de aprender e crescer. Não é sobre valor, é sobre vidas alcançadas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/parceirosdaesperanca7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-foreground px-8 py-4 text-base font-bold rounded-full transition-all hover:scale-105"
            >
              <MessageCircle size={20} />
              Quero Ser Parceiro Via Instagram
            </a>
          </div>

          <p className="text-background/40 text-sm mt-6 font-body">
            Converse diretamente com nossos missionários.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
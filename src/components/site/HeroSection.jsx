import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a47c1d89f4a990f1c8880aa/0a0a26b8c_generated_e3d76b52.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="https://media.base44.com/images/public/6a47c1d89f4a990f1c8880aa/7ddc1da8f_ChatGPT_Image_4_de_jul_de_2026__22_07_12.png"

        alt="Estudantes universitários caminhando juntos ao pôr do sol levando livros"
        className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-background/10 hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-background/10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}>
          
          <img
            src="https://media.base44.com/images/public/6a47c1d89f4a990f1c8880aa/56d7860aa_d359bd_93f14e5c85d34e9187a9b1166cf6f733_mv2-removebg-preview.png"
            alt="Parceiros da Esperança"
            className="h-24 md:h-32 w-auto mx-auto drop-shadow-[0_2px_12px_rgba(241,196,15,0.5)] my-1" />
          
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-background leading-tight mb-6">
          Uma Criança Alcançada,{" "}
          <span className="italic text-accent">Uma Vida Transformada.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-background/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          
          Juntos levamos <span className="text-yellow-400 italic text-accent">esperança</span>, Juntos levamos <span className="text-sky-950 italic text-accent">transformação.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <a
            href="https://www.instagram.com/parceirosdaesperanca7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base font-semibold rounded-full transition-all hover:scale-105">
            
            Quero Ser Parceiro
          </a>
          <a
            href="#projeto"
            className="inline-flex items-center justify-center gap-2 border-2 border-background/30 text-background px-8 py-4 text-base font-semibold rounded-full hover:bg-background/10 transition-all">
            
            Conheça o Projeto
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          
          <ArrowDown size={20} className="text-background/50" />
        </motion.div>
      </motion.div>
    </section>);

}
// @ts-ignore
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "O Projeto", href: "#projeto" },
  { label: "Material", href: "#material" },
  { label: "Impacto", href: "#impacto" }
];

// Converte "rgb(r, g, b)" em "rgba(r, g, b, alpha)"
// @ts-ignore
function withAlpha(rgb, alpha) {
  const m = rgb && rgb.match(/(\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return null;
  return `rgba(${m[1]}, ${m[2]}, ${m[3]}, ${alpha})`;
}

// Decide se a cor é escura ou clara (luminância)
// @ts-ignore
function isColorDark(rgb) {
  const m = rgb && rgb.match(/(\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return true;
  const r = +m[1], g = +m[2], b = +m[3];
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    const navHeight = 70;

    const update = () => {
      let active = null;
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom > navHeight) {
          active = sec;
          break;
        }
      }

      // Antes da primeira seção ou sem seção: hero escuro
      if (!active) {
        setDark(true);
        setBgColor(null);
        return;
      }

      const idx = sections.indexOf(active);
      // Seções com imagem de fundo (hero = primeira, impacto) → gradiente escuro
      if (idx === 0 || active.id === "impacto") {
        setDark(true);
        setBgColor(null);
        return;
      }

      // Seções de cor sólida: usa a cor de fundo da própria seção
      const bg = window.getComputedStyle(active).backgroundColor;
      if (bg && bg !== "rgba(0, 0, 0, 0)") {
        setDark(isColorDark(bg));
        // @ts-ignore
        setBgColor(withAlpha(bg, 0.92));
      } else {
        setDark(true);
        setBgColor(null);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const navClass = bgColor
    ? "backdrop-blur-md"
    : dark
      ? "bg-gradient-to-b from-foreground/80 via-foreground/40 to-transparent backdrop-blur-sm"
      : "bg-background/95 backdrop-blur-md shadow-sm";

  return (
    <nav
      style={bgColor ? { backgroundColor: bgColor } : undefined}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1 px-6">
        <a href="#" className="flex items-center gap-2 font-heading text-xl md:text-2xl font-bold tracking-tight">
          <img
            src="https://media.base44.com/images/public/6a47c1d89f4a990f1c8880aa/cd15b45d8_Design_sem_nome.png"
            alt="Parceiros da Esperança"
            className="h-12 md:h-14 w-auto drop-shadow-[0_2px_8px_rgba(241,196,15,0.4)] transition-all duration-500 hover:scale-105"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                dark ? "text-background/90" : "text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/parceirosdaesperanca7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            Quero Apoiar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${dark ? "text-background" : "text-foreground"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/parceirosdaesperanca7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-3 text-center font-semibold rounded-full mt-2"
              >
                Quero Apoiar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
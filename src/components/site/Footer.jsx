import React from "react";
import { Heart, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-background mb-2">
              Parceiros <span className="text-accent">da Esperança</span>
            </h3>
            <p className="text-background/40 text-sm leading-relaxed mb-6">
              Estudantes universitários levando esperança, leitura e
              valores cristãos às famílias durante as férias.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/parceirosdaesperanca7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-accent hover:text-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.instagram.com/parceirosdaesperanca7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-accent hover:text-foreground transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-background mb-4">
              Navegação
            </h4>
            <div className="space-y-2">
              {[
                { label: "O Projeto", href: "#projeto" },
                { label: "Material", href: "#material" },
                { label: "Estudantes", href: "#estudantes" },
                { label: "Impacto", href: "#impacto" },
                { label: "Depoimentos", href: "#depoimentos" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-background/40 hover:text-accent transition-colors text-sm"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold text-background mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/parceirosdaesperanca7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/40 hover:text-accent transition-colors text-sm"
              >
                <Phone size={16} />
                (83) 98743-4259
              </a>
              <a
                href="mailto:parceirosesperanca@gmail.com"
                className="flex items-center gap-3 text-background/40 hover:text-accent transition-colors text-sm"
              >
                <Mail size={16} />
                parceirosesperanca@gmail.com
              </a>
              <div className="flex items-start gap-3 text-background/40 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                Paraíba, Brasil
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-background/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-background/30 text-xs font-body">
            © 2026 Parceiros da Esperança — Igreja Adventista do Sétimo Dia. Todos os direitos reservados.
          </p>
          <p className="text-background/30 text-xs font-body flex items-center gap-1">
            Feito com <Heart size={12} className="text-accent fill-accent" /> por estudantes missionários
          </p>
        </div>
      </div>
    </footer>
  );
}
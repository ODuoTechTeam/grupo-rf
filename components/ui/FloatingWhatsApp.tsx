"use client";

import { useState, useEffect } from "react";
import { IconBrandWhatsapp, IconX } from "@tabler/icons-react";
import { contact } from "@/data/contact";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [hasShownTooltip, setHasShownTooltip] = useState(false);

  useEffect(() => {
    // Show after 2s delay OR after scrolling 300px, whichever comes first
    const timer = setTimeout(() => setIsVisible(true), 2000);

    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-show tooltip once visible, after delay
  useEffect(() => {
    if (isVisible && !hasShownTooltip) {
      const timer = setTimeout(() => {
        setIsTooltipOpen(true);
        setHasShownTooltip(true);
        setTimeout(() => setIsTooltipOpen(false), 4000);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasShownTooltip]);

  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 animate-[fadeInUp_0.4s_ease-out]">
      {/* Tooltip */}
      {isTooltipOpen && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 max-w-[220px] relative animate-[fadeIn_0.3s_ease-out]">
          <button
            onClick={() => setIsTooltipOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar"
          >
            <IconX className="w-3.5 h-3.5" />
          </button>
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Precisa de ajuda?
          </p>
          <p className="text-xs text-text-light leading-relaxed">
            Fale com um especialista agora pelo WhatsApp.
          </p>
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-transparent border-l-white" />
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-whatsapp-pulse"
        aria-label="Contato via WhatsApp"
        onClick={() => setIsTooltipOpen(false)}
        onMouseEnter={() => {
          if (!hasShownTooltip) {
            setIsTooltipOpen(true);
            setHasShownTooltip(true);
          }
        }}
      >
        <IconBrandWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}

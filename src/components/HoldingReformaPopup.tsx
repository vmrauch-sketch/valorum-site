import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const HOLDING_POPUP_SEEN_KEY = "holding-reforma-popup-last-seen";
const POPUP_DELAY_MS = 5000;

const getToday = () => new Date().toISOString().split("T")[0];

const HoldingReformaPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem(HOLDING_POPUP_SEEN_KEY);
    if (lastSeen === getToday()) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(HOLDING_POPUP_SEEN_KEY, getToday());
  };

  const handleWhatsAppClick = () => {
    localStorage.setItem(HOLDING_POPUP_SEEN_KEY, getToday());
  };


  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="holding-popup-title"
    >
      <div className="relative w-full max-w-lg bg-gradient-to-br from-navy-700 to-navy-900 border border-gold-400/40 rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-gold-300 hover:text-white transition-colors p-1"
          aria-label="Fechar pop-up"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Reforma Tributária
          </span>

          <h2
            id="holding-popup-title"
            className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4 leading-tight"
          >
            Você já possui <span className="text-gold-400">holding</span>?
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
            Entenda os impactos da reforma tributária na sua holding. Fale com
            especialistas e avalie o que precisa ser feito.
          </p>

          <a
            href="https://wa.me/5511959586722?text=Ol%C3%A1%21%20ja%20tenho%20holding%20quero%20uma%20an%C3%A1lise%20da%20minha%20situa%C3%A7%C3%A3o%21"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-3 rounded-full transition-colors text-base md:text-lg shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />
            Fale com especialista
          </a>

          <button
            onClick={handleClose}
            className="block mx-auto mt-4 text-sm text-gold-300/80 hover:text-gold-300 underline underline-offset-4 transition-colors"
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoldingReformaPopup;

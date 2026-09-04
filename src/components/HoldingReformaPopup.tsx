import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const HOLDING_POPUP_SEEN_KEY = "holding-reforma-popup-seen";
const POPUP_DELAY_MS = 5000;

const HoldingReformaPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem(HOLDING_POPUP_SEEN_KEY);
    if (alreadySeen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(HOLDING_POPUP_SEEN_KEY, "true");
  };

  const handleWhatsAppClick = () => {
    sessionStorage.setItem(HOLDING_POPUP_SEEN_KEY, "true");
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
            href="https://wa.me/5511959586722?text=Ol%C3%A1!%20J%C3%A1%20possuo%20holding%20e%20gostaria%20de%20entender%20os%20impactos%20da%20reforma%20tribut%C3%A1ria."
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

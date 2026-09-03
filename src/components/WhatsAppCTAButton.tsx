import type { ReactNode } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface WhatsAppCTAButtonProps {
  message?: string;
  phone?: string;
  variant?: "green" | "gold" | "navy";
  className?: string;
  children?: ReactNode;
}

const WhatsAppCTAButton = ({
  message = "Olá! Vim do site da Valorum.",
  phone = "5511959586722",
  variant = "green",
  className = "",
  children,
}: WhatsAppCTAButtonProps) => {
  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');

    if (isDevelopment) {
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\n${url}`);
      }).catch(() => {
        alert(`WhatsApp: ${phone.replace('55', '')}`);
      });
    } else {
      window.open(url, '_blank');
    }
  };

  const variantClasses = {
    green: "bg-[#25D366] hover:bg-[#20B858] text-white",
    gold: "bg-gold-500 hover:bg-gold-600 text-white",
    navy: "bg-navy-600 hover:bg-navy-700 text-white",
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${variantClasses[variant]} ${className}`}
      aria-label="Falar com especialista no WhatsApp"
    >
      <WhatsAppIcon className="w-5 h-5" />
      {children || "Fale com especialista"}
    </button>
  );
};

export { WhatsAppCTAButton };

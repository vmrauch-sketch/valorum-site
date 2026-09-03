import { WhatsAppIcon } from "./WhatsAppIcon";

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppButton = ({ message = "Olá! Vim do site da Valorum." }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const url = `https://wa.me/5511959586722?text=${encodeURIComponent(message)}`;
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\n${url}`);
      }).catch(() => {
        alert(`WhatsApp: 11 95958 6722`);
      });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20B858] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-50 whatsapp-bounce"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </button>
  );
};

export { WhatsAppButton };


import { WhatsAppIcon } from "./WhatsAppIcon";

const Contact = () => {
  const handleWhatsAppClick = () => {
    console.log("Contact: Botão clicado");
    const message = encodeURIComponent("Olá! Vim do site da Valorum.");
    const url = `https://wa.me/5511959586722?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: 11 95958 6722\nMensagem: "Olá! Vim do site da Valorum."\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: 11 95958 6722\n\nMensagem: "Olá! Vim do site da Valorum."`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("Contact: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy-600 via-corporate-500 to-financial-600" id="contato">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Entre em Contato
            </h2>

            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Clique no botão abaixo e será direcionado imediatamente para nossa equipe.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-10 py-5 bg-[#25D366] hover:bg-[#20B858] text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <WhatsAppIcon className="w-8 h-8 mr-4" />
              Falar com um consultor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };

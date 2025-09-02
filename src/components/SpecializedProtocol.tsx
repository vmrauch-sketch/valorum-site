
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SpecializedProtocol = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleProtocolClick = () => {
    console.log("SpecializedProtocol: Botão clicado");
    const message = encodeURIComponent("Olá gostaria de mais informações");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá gostaria de mais informações"\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá gostaria de mais informações"`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("SpecializedProtocol: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  return (
    <section className="py-20 bg-gold-50" id="protocolo-especializado">
      <div className="container mx-auto px-6">
        <div ref={elementRef} className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-playfair font-bold mb-6 text-navy-600 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            Protocolo Especializado
          </h2>
          <h3 className={`text-2xl font-bold mb-6 text-gold-600 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            "Mais Renda, Menos Plantão"
          </h3>
          <div className={`bg-white p-8 rounded-xl shadow-lg mb-8 transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Atendimento para <strong>profissionais da medicina e saúde</strong>, considerando 
              peculiaridades de rotina, planejamento patrimonial e questões tributárias específicas. 
              Desenvolvemos estratégias que maximizam sua renda e otimizam seu tempo, permitindo 
              maior qualidade de vida com segurança financeira.
            </p>
            <button 
              onClick={handleProtocolClick}
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Clique aqui para conhecer o protocolo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SpecializedProtocol };


import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SpecializedProtocol = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleProtocolClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre o protocolo especializado 'Mais Renda, Menos Plantão' para profissionais da medicina e saúde.");
    window.open(`https://web.whatsapp.com/send?phone=5511949566290&text=${message}`, '_blank');
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

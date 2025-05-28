
const SpecializedProtocol = () => {
  return (
    <section className="py-20 bg-gold-50" id="protocolo-especializado">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-navy-600">
            Protocolo Especializado
          </h2>
          <h3 className="text-2xl font-bold mb-6 text-gold-600">
            "Mais Renda, Menos Plantão"
          </h3>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Atendimento exclusivo para <strong>profissionais da medicina e saúde</strong>, considerando 
              peculiaridades de rotina, planejamento patrimonial e questões tributárias específicas. 
              Desenvolvemos estratégias que maximizam sua renda e otimizam seu tempo, permitindo 
              maior qualidade de vida com segurança financeira.
            </p>
            <button className="bg-gold-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-600 transition-all duration-300 shadow-lg">
              Clique aqui para conhecer o protocolo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SpecializedProtocol };

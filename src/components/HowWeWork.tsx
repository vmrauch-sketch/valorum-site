
const HowWeWork = () => {
  const areas = [
    {
      title: "Consultoria Financeira Pessoal e Empresarial",
      symbol: "◆"
    },
    {
      title: "Gestão Patrimonial e Estruturação de Holdings",
      symbol: "◇"
    },
    {
      title: "Planejamento Sucessório e Proteção Patrimonial",
      symbol: "◈"
    },
    {
      title: "Consultoria de Investimentos Personalizada",
      symbol: "◉"
    },
    {
      title: "Estratégias de Alavancagem e Estruturação Societária",
      symbol: "◎"
    },
    {
      title: "Soluções em FIDC e Planejamento Tributário",
      symbol: "◐"
    },
    {
      title: "Educação Financeira Corporativa",
      symbol: "◑"
    },
    {
      title: "Leilão de Crédito para redução de custos financeiros",
      symbol: "◒"
    },
    {
      title: "Gestão Profissional de Investimentos",
      symbol: "◓"
    },
    {
      title: "Análise e Adequação de Previdência Privada",
      symbol: "◔"
    },
    {
      title: "Seguros e Proteções, incluindo Responsabilidade Civil Customizada",
      symbol: "◕"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="como-atuamos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Como Atuamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Áreas de especialização e atuação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-corporate-500 hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center">
                  <div className="text-2xl text-corporate-500 mr-4 flex-shrink-0 font-bold">{area.symbol}</div>
                  <span className="text-gray-800 font-medium">{area.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Protocolo Especializado */}
          <div className="bg-gradient-to-r from-navy-600 to-corporate-500 p-8 rounded-xl text-white animate-fade-in">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Protocolo Especializado</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Atendimento exclusivo para <strong>profissionais da medicina</strong>, considerando 
                peculiaridades de rotina, planejamento patrimonial e questões tributárias específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowWeWork };

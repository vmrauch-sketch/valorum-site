
const AdvancedStrategies = () => {
  const strategies = [
    {
      title: "Estruturação de Holdings",
      description: "Para eficiência fiscal e proteção patrimonial",
      icon: "🏛️"
    },
    {
      title: "Modelagem de FIDCs",
      description: "Estruturação e gestão de fundos de investimento",
      icon: "📈"
    },
    {
      title: "Planejamento Sucessório Robusto",
      description: "Transmissão patrimonial eficiente e segura",
      icon: "🔒"
    },
    {
      title: "Estratégias de Alavancagem Controlada",
      description: "Maximização de retornos com gestão de riscos",
      icon: "⚡"
    },
    {
      title: "Atendimento Especializado para Profissionais da Saúde",
      description: "Soluções específicas para médicos e profissionais de saúde",
      icon: "⚕️"
    },
    {
      title: "Leilão de Crédito",
      description: "Ferramenta de otimização financeira e redução de custos",
      icon: "🔨"
    },
    {
      title: "Análise de Previdência Privada",
      description: "Personalizada conforme perfil e objetivos",
      icon: "🛡️"
    },
    {
      title: "Seguros e Proteções",
      description: "Incluindo responsabilidade civil customizada",
      icon: "🔐"
    }
  ];

  return (
    <section className="py-20 bg-white" id="estrategias">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Estratégias Avançadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos soluções além do planejamento tradicional, integrando estratégias 
              personalizadas para cada perfil, objetivos e necessidades específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-navy-50 border border-navy-100 p-6 rounded-xl hover:bg-navy-100 transition-all duration-300 animate-fade-in group shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-lg font-bold text-navy-600 mb-3 group-hover:text-corporate-600 transition-colors">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-navy-50 border border-navy-100 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-navy-600 mb-4">
                Abordagem Personalizada
              </h3>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Cada estratégia é personalizada, considerando perfil, objetivos e necessidades específicas do cliente, 
                garantindo soluções eficientes e alinhadas aos resultados desejados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AdvancedStrategies };


const WealthLeverage = () => {
  const strategies = [
    {
      title: "Estruturação de Holdings",
      description: "Criação de estruturas societárias para otimização tributária e proteção patrimonial",
      benefits: ["Redução de carga tributária", "Proteção de ativos", "Facilita sucessão"]
    },
    {
      title: "Investimentos Alavancados",
      description: "Estratégias de investimento com uso de capital de terceiros para amplificar retornos",
      benefits: ["Maximização de retornos", "Diversificação", "Otimização de capital próprio"]
    },
    {
      title: "Financiamento Estruturado",
      description: "Soluções de financiamento para aquisições e investimentos de grande porte",
      benefits: ["Preservação de liquidez", "Flexibilidade financeira", "Crescimento acelerado"]
    },
    {
      title: "Real Estate e REITs",
      description: "Alavancagem através de investimentos imobiliários e fundos imobiliários",
      benefits: ["Renda passiva", "Proteção inflacionária", "Diversificação patrimonial"]
    }
  ];

  return (
    <section className="py-20 bg-white" id="alavancagem">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Estratégias de Alavancagem Patrimonial
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Potencialize seu patrimônio através de estratégias inteligentes de alavancagem, 
              estruturação societária e investimentos estratégicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {strategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl border-l-4 border-financial-500 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-navy-600 mb-4">
                  {strategy.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {strategy.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-corporate-500 text-sm">BENEFÍCIOS:</h4>
                  <ul className="space-y-1">
                    {strategy.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-financial-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Key Concepts */}
          <div className="bg-gradient-to-r from-navy-600 to-corporate-500 p-8 rounded-xl text-white animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gold-500 mb-2">2-5x</div>
                <div className="text-sm">Potencial de multiplicação patrimonial</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-500 mb-2">15-30%</div>
                <div className="text-sm">Redução típica na carga tributária</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-500 mb-2">100%</div>
                <div className="text-sm">Proteção patrimonial estruturada</div>
              </div>
            </div>
          </div>

          {/* Risk Management */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 p-6 rounded-lg animate-fade-in">
            <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Gestão de Riscos
            </h3>
            <p className="text-yellow-700 text-sm">
              Toda estratégia de alavancagem é desenvolvida com rigorosa análise de riscos, 
              estabelecimento de limites e mecanismos de proteção para preservar o patrimônio principal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WealthLeverage };


const Credentials = () => {
  const credentials = [
    {
      icon: "💼",
      title: "Consultor CVM Credenciado",
      items: [
        "Orientação independente em valores mobiliários",
        "Recomendações personalizadas de alocação de ativos",
        "Estratégias livres de conflitos de interesse"
      ]
    },
    {
      icon: "🏆",
      title: "Wealth Planning Especializado",
      items: [
        "Planejamento patrimonial estratégico",
        "Estruturação de patrimônio familiar",
        "Planejamento sucessório e proteção de ativos"
      ]
    },
    {
      icon: "🎯",
      title: "Consultoria Financeira Empresarial",
      items: [
        "Gestão de recursos corporativos",
        "Planejamento financeiro estratégico para empresas",
        "Estruturação de investimentos empresariais"
      ]
    },
    {
      icon: "🎤",
      title: "Palestrante & Educador Financeiro",
      items: [
        "Palestras corporativas sobre mercado financeiro",
        "Educação em investimentos e planejamento patrimonial",
        "Formação de profissionais do setor"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="credenciais">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Credenciais & Especialização
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise comprovada em consultoria financeira independente e gestão patrimonial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{credential.icon}</div>
                <h3 className="text-xl font-bold text-navy-600 mb-4">
                  {credential.title}
                </h3>
                <ul className="space-y-3">
                  {credential.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-financial-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Credentials };

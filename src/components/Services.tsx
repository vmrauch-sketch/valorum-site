
const Services = () => {
  const services = [
    {
      title: "Consultoria de Investimentos Personalizada",
      description: "Análise completa do perfil e objetivos para recomendações sob medida",
      features: ["Análise de perfil de risco", "Alocação estratégica de ativos", "Monitoramento contínuo"]
    },
    {
      title: "Wealth Planning e Estruturação Patrimonial",
      description: "Planejamento abrangente para construção e preservação de patrimônio",
      features: ["Estruturação patrimonial", "Otimização tributária", "Proteção de ativos"]
    },
    {
      title: "Consultoria Financeira Empresarial",
      description: "Soluções financeiras estratégicas para empresas de todos os portes",
      features: ["Gestão de caixa corporativo", "Investimentos empresariais", "Planejamento estratégico"]
    },
    {
      title: "Planejamento Sucessório",
      description: "Estruturação para transmissão eficiente do patrimônio familiar",
      features: ["Sucessão patrimonial", "Holding familiar", "Blindagem patrimonial"]
    },
    {
      title: "Palestras e Educação Financeira",
      description: "Conhecimento aplicado através de palestras e cursos especializados",
      features: ["Palestras corporativas", "Workshops educativos", "Mentoria financeira"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="servicos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em consultoria financeira e gestão patrimonial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-navy-600 mb-4 group-hover:text-corporate-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-financial-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Target Audience */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg animate-fade-in">
            <h3 className="text-2xl font-bold text-navy-600 mb-4 text-center">
              Público-Alvo
            </h3>
            <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              Investidores qualificados e empresas que buscam orientação independente, estratégias de longo prazo para construção de patrimônio, planejamento sucessório estruturado e gestão financeira corporativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };

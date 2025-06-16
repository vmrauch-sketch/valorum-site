
const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="sobre">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Sobre a Valorum Capital
            </h2>
            <div className="w-16 h-1 bg-gold-500 mb-6"></div>
          </div>

          <div className="mb-12">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-700 leading-relaxed">
                A Valorum Capital é uma consultoria especializada em gestão patrimonial e planejamento financeiro, com foco na excelência técnica e no rigor ético. Oferecemos soluções integradas em finanças, renda e investimentos para indivíduos, famílias e empresas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa abordagem combina experiência estratégica e operacional única, desenvolvida ao longo de décadas de atuação no mercado, proporcionando uma compreensão aprofundada dos desafios e oportunidades do ambiente corporativo.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Isso nos permite entregar soluções alinhadas às necessidades reais de cada cliente, sempre com foco na construção e preservação do patrimônio.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Coordenamos um time multidisciplinar de especialistas, assegurando que cada projeto receba uma abordagem integrada, combinando competências em economia, contabilidade, investimentos, excelência operacional e gestão empresarial. Essa sinergia resulta em estratégias robustas, eficazes e adaptadas ao contexto específico, fundamentadas em experiência prática, conhecimento técnico e compromisso com resultados de excelência.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-corporate-500">
              <p className="text-gray-700 mb-6 text-center text-lg font-medium">
                Personalizado, independente e orientado à construção e preservação do patrimônio.
              </p>
              
              {/* Navigation Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => scrollToSection('pessoa-fisica')}
                  className="bg-navy-600 text-white px-6 py-3 rounded-lg hover:bg-navy-700 transition-all duration-300 font-medium"
                >
                  Pessoa Física
                </button>
                <button
                  onClick={() => scrollToSection('protocolo-especializado')}
                  className="bg-corporate-500 text-white px-6 py-3 rounded-lg hover:bg-corporate-600 transition-all duration-300 font-medium"
                >
                  Profissionais da Medicina e Saúde
                </button>
                <button
                  onClick={() => scrollToSection('pessoa-juridica')}
                  className="bg-financial-500 text-white px-6 py-3 rounded-lg hover:bg-financial-600 transition-all duration-300 font-medium"
                >
                  Pessoa Jurídica
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };

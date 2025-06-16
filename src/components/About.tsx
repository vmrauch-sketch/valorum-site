
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
              Sobre Vilson Rauch
            </h2>
            <div className="w-16 h-1 bg-gold-500 mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Image */}
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/198f0dc1-b9de-4fcd-b390-8204dc19dbaa.png" 
                alt="Vilson Rauch - Consultor" 
                className="w-full rounded-lg shadow-xl object-contain"
              />
            </div>

            {/* Content - Text alongside image */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-700 leading-relaxed">
                Vilson Rauch é estrategista financeiro com ampla experiência em consultoria independente e gestão patrimonial. Atua com foco na excelência técnica e no rigor ético, oferecendo soluções integradas em finanças, renda e investimentos para indivíduos, famílias e empresas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Com mais de duas décadas de atuação na gestão industrial, Vilson Rauch desenvolveu uma visão estratégica e operacional única, que agora aplica à consultoria personalizada para indivíduos e empresas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Essa trajetória proporciona uma compreensão aprofundada dos desafios e oportunidades do ambiente corporativo, permitindo a entrega de soluções alinhadas às necessidades reais de cada cliente.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Coordenando um time multidisciplinar de especialistas, assegura que cada projeto receba uma abordagem integrada, combinando competências em economia, contabilidade, investimentos, excelência operacional e gestão empresarial. Essa sinergia resulta em estratégias robustas, eficazes e adaptadas ao contexto específico, fundamentadas em experiência prática, conhecimento técnico e compromisso com resultados de excelência.
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
                  onClick={() => scrollToSection('profissionais-medicina')}
                  className="bg-corporate-500 text-white px-6 py-3 rounded-lg hover:bg-corporate-600 transition-all duration-300 font-medium"
                >
                  Profissionais da Medicina e Saúde
                </button>
                <button
                  onClick={() => scrollToSection('pessoa-juridica')}
                  className="bg-financial-500 text-white px-6 py-3 rounded-lg hover:bg-financial-600 transition-all duration-300 font-medium"
                >
                  Pessoa Jurídica (Empresas)
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

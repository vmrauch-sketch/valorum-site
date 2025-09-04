
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="sobre">
      <div className="container mx-auto px-6">
        <div ref={elementRef} className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`mb-12 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Sobre a Valorum
            </h2>
            <div className="w-16 h-1 bg-gold-500 mb-6"></div>
          </div>

          <div className="mb-12">
            {/* Content */}
            <div className="space-y-6">
              <p className={`text-lg text-gray-700 leading-relaxed transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                A Valorum é uma consultoria especializada em gestão patrimonial e planejamento financeiro, com foco na excelência técnica e no rigor ético. Oferecemos soluções integradas em finanças, renda e investimentos para indivíduos, famílias e empresas.
              </p>

              <p className={`text-lg text-gray-700 leading-relaxed transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Nossa abordagem combina experiência estratégica e operacional única, desenvolvida ao longo de décadas de atuação no mercado, proporcionando uma compreensão aprofundada dos desafios e oportunidades do ambiente corporativo.
              </p>

              <p className={`text-lg text-gray-700 leading-relaxed transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Isso nos permite entregar soluções alinhadas às necessidades reais de cada cliente, sempre com foco na construção e preservação do patrimônio.
              </p>

              <p className={`text-lg text-gray-700 leading-relaxed transform transition-all duration-1000 ease-out delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Coordenamos um time multidisciplinar de especialistas, assegurando que cada projeto receba uma abordagem integrada, combinando competências em economia, contabilidade, investimentos, excelência operacional e gestão empresarial. Essa sinergia resulta em estratégias robustas, eficazes e adaptadas ao contexto específico, fundamentadas em experiência prática, conhecimento técnico e compromisso com resultados de excelência.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`transform transition-all duration-1000 ease-out delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-corporate-500">
              <p className="text-gray-700 mb-6 text-center text-lg font-medium">
                Personalizado, independente e orientado à construção e preservação do patrimônio.
              </p>
              
              {/* Navigation Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => scrollToSection('pessoa-fisica')}
                  className="bg-navy-600 text-white px-6 py-3 rounded-lg hover:bg-navy-700 transition-all duration-300 font-medium transform hover:scale-105"
                >
                  Pessoa Física
                </button>
                <button
                  onClick={() => scrollToSection('protocolo-especializado')}
                  className="bg-corporate-500 text-white px-6 py-3 rounded-lg hover:bg-corporate-600 transition-all duration-300 font-medium transform hover:scale-105"
                >
                  Profissionais da Medicina e Saúde
                </button>
                <button
                  onClick={() => scrollToSection('pessoa-juridica')}
                  className="bg-financial-500 text-white px-6 py-3 rounded-lg hover:bg-financial-600 transition-all duration-300 font-medium transform hover:scale-105"
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

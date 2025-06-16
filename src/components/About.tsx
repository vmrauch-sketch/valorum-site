
import { User, Building } from "lucide-react";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-navy-50" id="sobre">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Sobre a FC3 Capital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boutique de investimentos especializada em consultoria financeira personalizada e gestão patrimonial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-playfair font-bold text-navy-600 mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Promover a educação financeira e oferecer soluções personalizadas de investimento 
                e planejamento patrimonial, sempre priorizando a transparência e os melhores 
                resultados para nossos clientes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nosso compromisso é ser o parceiro estratégico na construção e preservação do 
                patrimônio de nossos clientes, através de estratégias inovadoras e atendimento 
                de excelência.
              </p>
            </div>
            
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/eb65e4ba-fa92-47af-b094-feb7757fa44f.png" 
                alt="Equipe FC3 Capital" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-playfair font-bold text-navy-600 mb-8">
              Nossos Diferenciais
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-navy-100">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-navy-600 mb-3">Atendimento Personalizado</h4>
                <p className="text-gray-600">
                  Soluções sob medida para cada perfil de cliente, considerando objetivos específicos e tolerância ao risco.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-navy-100">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-xl font-bold text-navy-600 mb-3">Educação Financeira</h4>
                <p className="text-gray-600">
                  Capacitamos nossos clientes com conhecimento para tomadas de decisão conscientes e estratégicas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-navy-100">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-bold text-navy-600 mb-3">Transparência Total</h4>
                <p className="text-gray-600">
                  Relacionamento baseado na confiança, com total clareza sobre estratégias, custos e resultados.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-navy-600 mb-8">
              Escolha seu perfil para conhecer nossas soluções:
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('pessoa-fisica')}
                className="bg-navy-500 text-white px-8 py-4 rounded-xl hover:bg-navy-600 transition-colors font-medium flex items-center justify-center gap-3 shadow-lg"
              >
                <User size={24} />
                Pessoa Física
              </button>
              
              <button 
                onClick={() => scrollToSection('pessoa-juridica')}
                className="bg-corporate-500 text-white px-8 py-4 rounded-xl hover:bg-corporate-600 transition-colors font-medium flex items-center justify-center gap-3 shadow-lg"
              >
                <Building size={24} />
                Pessoa Jurídica
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };

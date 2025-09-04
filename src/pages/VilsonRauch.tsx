import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { SEOData, StructuredData } from "@/data/seoData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Award, 
  BookOpen, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Briefcase,
  GraduationCap,
  Target
} from "lucide-react";

const VilsonRauch = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { elementRef: expertiseRef, isVisible: expertiseVisible } = useScrollAnimation();

  const handleProtocolClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de conhecer o protocolo 'Mais Renda, Menos Plantão' com Vilson Rauch.");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá! Gostaria de conhecer o protocolo 'Mais Renda, Menos Plantão' com Vilson Rauch."\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá! Gostaria de conhecer o protocolo 'Mais Renda, Menos Plantão' com Vilson Rauch."`);
      });
    } else {
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("VilsonRauch: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  const handleConsultationClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta com Vilson Rauch para planejamento patrimonial.");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá! Gostaria de agendar uma consulta com Vilson Rauch para planejamento patrimonial."\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá! Gostaria de agendar uma consulta com Vilson Rauch para planejamento patrimonial."`);
      });
    } else {
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("VilsonRauch: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  const expertise = [
    {
      title: "Planejamento Patrimonial",
      description: "Estratégias personalizadas para crescimento e proteção patrimonial",
      icon: Target
    },
    {
      title: "Consultoria para Médicos",
      description: "Especialização em planejamento financeiro para profissionais da saúde",
      icon: Briefcase
    },
    {
      title: "Gestão de Investimentos",
      description: "Alocação estratégica de ativos com foco em rentabilidade",
      icon: TrendingUp
    },
    {
      title: "Educação Financeira",
      description: "Capacitação e mentoria em finanças pessoais e empresariais",
      icon: GraduationCap
    }
  ];

  return (
    <>
      <SEOHead
        title={SEOData.vilsonRauch.title}
        description={SEOData.vilsonRauch.description}
        keywords={SEOData.vilsonRauch.keywords}
        canonical="https://valorum.vilsonrauch.com.br/vilson-rauch"
        structuredData={StructuredData.person}
      />
      
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <div className="pt-16">
          {/* Header */}
          <section className="py-20 bg-gradient-to-br from-navy-600 to-navy-800">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div ref={headerRef} className={`transform transition-all duration-1000 ease-out ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
                      Vilson Rauch
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gold-500 mb-6 font-playfair">
                      Consultor Financeiro e Especialista em Planejamento Patrimonial
                    </h2>
                    <p className="text-xl text-white/90 leading-relaxed mb-8">
                      Especialista em transformar o conhecimento financeiro em resultados práticos, 
                      com foco em planejamento patrimonial para médicos e profissionais liberais.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={handleProtocolClick}
                        className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-navy-800 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                      >
                        Conheça o Protocolo "Mais Renda, Menos Plantão"
                        <ArrowRight className="ml-2" size={20} />
                      </button>
                      <button 
                        onClick={handleConsultationClick}
                        className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-navy-800 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                      >
                        Agendar Consulta
                        <ArrowRight className="ml-2" size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <div className={`transform transition-all duration-1000 ease-out delay-300 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                      <div className="grid grid-cols-2 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold text-gold-400 mb-2">15+</div>
                          <p className="text-white/80">Anos de Experiência</p>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
                          <p className="text-white/80">Clientes Atendidos</p>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gold-400 mb-2">R$ 100M+</div>
                          <p className="text-white/80">Patrimônio Gerenciado</p>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gold-400 mb-2">95%</div>
                          <p className="text-white/80">Satisfação dos Clientes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sobre */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div ref={aboutRef} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`transform transition-all duration-1000 ease-out ${aboutVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-6">
                      Sobre Vilson Rauch
                    </h2>
                    <div className="w-16 h-1 bg-gold-500 mb-6"></div>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Com mais de 15 anos de experiência no mercado financeiro, Vilson Rauch é 
                        reconhecido como um dos principais especialistas em planejamento patrimonial 
                        no Brasil, especialmente para profissionais da medicina e saúde.
                      </p>
                      <p>
                        Criador do protocolo exclusivo "Mais Renda, Menos Plantão", Vilson desenvolveu 
                        uma metodologia única que permite aos médicos maximizar sua renda enquanto 
                        reduzem a dependência de plantões e consultas.
                      </p>
                      <p>
                        Sua abordagem combina análise técnica rigorosa com uma visão humanizada 
                        das finanças, sempre priorizando a qualidade de vida e a realização 
                        pessoal de seus clientes.
                      </p>
                    </div>
                  </div>

                  <div className={`transform transition-all duration-1000 ease-out delay-300 ${aboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                      <h3 className="text-2xl font-playfair font-bold text-navy-600 mb-6">
                        Credenciais e Formação
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Award className="text-gold-500 mr-3" size={24} />
                          <span>Certificação CFP® (Certified Financial Planner)</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="text-gold-500 mr-3" size={24} />
                          <span>MBA em Finanças - FGV</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="text-gold-500 mr-3" size={24} />
                          <span>Especialização em Wealth Planning</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="text-gold-500 mr-3" size={24} />
                          <span>Membro da PLANEJAR (Associação Brasileira de Planejadores Financeiros)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Áreas de Expertise */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                    Áreas de Expertise
                  </h2>
                  <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Especialização focada em soluções financeiras para profissionais de alta performance
                  </p>
                </div>

                <div ref={expertiseRef} className="grid md:grid-cols-2 gap-8">
                  {expertise.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={index}
                        className={`bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-1000 ease-out transform ${expertiseVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                        style={{ 
                          transitionDelay: expertiseVisible ? `${index * 150}ms` : '0ms'
                        }}
                      >
                        <div className="flex items-start">
                          <div className="w-16 h-16 bg-corporate-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                            <IconComponent size={28} className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-playfair font-bold text-navy-600 mb-3">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Final */}
                <div className="text-center mt-16">
                  <div className="bg-gradient-to-r from-corporate-500 to-corporate-600 rounded-lg p-8 text-white">
                    <h3 className="text-3xl font-playfair font-bold mb-4">
                      Pronto para Transformar Seu Futuro Financeiro?
                    </h3>
                    <p className="text-xl mb-6 opacity-90">
                      Agende uma consulta personalizada e descubra como otimizar seu patrimônio
                    </p>
                    <button 
                      onClick={handleConsultationClick}
                      className="inline-flex items-center bg-white text-corporate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Agendar Consulta com Vilson Rauch
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default VilsonRauch;
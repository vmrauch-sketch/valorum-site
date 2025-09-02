import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { 
  TrendingUp, 
  Target, 
  Shield, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  Zap,
  Clock
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProtocoloMaisRenda = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation();

  const handleProtocolClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre o protocolo especializado 'Mais Renda, Menos Plantão' para profissionais da medicina e saúde.");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá! Gostaria de mais informações sobre o protocolo especializado 'Mais Renda, Menos Plantão' para profissionais da medicina e saúde."\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá! Gostaria de mais informações sobre o protocolo especializado 'Mais Renda, Menos Plantão' para profissionais da medicina e saúde."`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("ProtocoloMaisRenda: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  const handleConsultationClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta sobre o Protocolo Mais Renda.");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá! Gostaria de agendar uma consulta sobre o Protocolo Mais Renda."\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá! Gostaria de agendar uma consulta sobre o Protocolo Mais Renda."`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("ProtocoloMaisRenda: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  const benefits = [
    {
      title: "Maior Rentabilidade",
      description: "Estratégias avançadas para maximizar seus retornos",
      icon: TrendingUp
    },
    {
      title: "Proteção Patrimonial",
      description: "Segurança e preservação do seu patrimônio",
      icon: Shield
    },
    {
      title: "Diversificação Inteligente",
      description: "Portfólios balanceados para reduzir riscos",
      icon: BarChart3
    },
    {
      title: "Otimização Tributária",
      description: "Estruturas eficientes para redução de impostos",
      icon: DollarSign
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Análise Patrimonial",
      description: "Diagnóstico completo da sua situação financeira atual",
      icon: Target
    },
    {
      step: "02", 
      title: "Estruturação Estratégica",
      description: "Desenvolvimento de estratégias personalizadas para maximizar renda",
      icon: Zap
    },
    {
      step: "03",
      title: "Implementação",
      description: "Execução das estratégias com acompanhamento especializado",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Monitoramento",
      description: "Acompanhamento contínuo e ajustes para otimizar resultados",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-navy-600 to-navy-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div ref={headerRef} className={`transform transition-all duration-1000 ease-out ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
                  Protocolo Especializado
                </h1>
                <h2 className="text-3xl md:text-4xl font-playfair text-gold-500 mb-8">
                  "Mais Renda, Menos Plantão"
                </h2>
                <div className="text-xl text-white/90 leading-relaxed mb-8 max-w-4xl mx-auto">
                  <p className="mb-4">Você cuida de vidas. Nós cuidamos do seu patrimônio.</p>
                  <p className="mb-4">Criamos estratégias personalizadas para médicos que desejam criar e transformar patrimônio em liberdade.</p>
                  <p>Mais tempo, mais segurança, mais futuro.</p>
                </div>
                <button 
                  onClick={handleProtocolClick}
                  className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-navy-800 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Clique aqui para conhecer o protocolo
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                  Benefícios do Protocolo
                </h2>
                <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Resultados comprovados através de metodologia exclusiva
                </p>
              </div>

              <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-1000 ease-out transform ${benefitsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                      style={{ 
                        transitionDelay: benefitsVisible ? `${index * 150}ms` : '0ms'
                      }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-corporate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent size={28} className="text-white" />
                        </div>
                        <h3 className="text-xl font-playfair font-bold text-navy-600 mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Processo */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                  Como Funciona
                </h2>
                <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Processo estruturado em 4 etapas para maximizar seus resultados
                </p>
              </div>

              <div ref={processRef} className="grid md:grid-cols-2 gap-8">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-gray-50 rounded-lg p-8 border-l-4 border-corporate-500 hover:shadow-lg transition-all duration-1000 ease-out transform ${processVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                      style={{ 
                        transitionDelay: processVisible ? `${index * 200}ms` : '0ms'
                      }}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-6">
                          <div className="w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <IconComponent size={24} className="text-corporate-500 mr-3" />
                            <h3 className="text-2xl font-playfair font-bold text-navy-600">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-corporate-500 to-corporate-600 rounded-lg p-8 text-white">
                  <h3 className="text-3xl font-playfair font-bold mb-4">
                    Pronto para Aumentar sua Renda?
                  </h3>
                  <p className="text-xl mb-6 opacity-90">
                    Agende uma consulta e descubra como o Protocolo Mais Renda pode transformar a sua vida
                  </p>
                  <button 
                    onClick={handleConsultationClick}
                    className="inline-flex items-center bg-white text-corporate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Agendar Consulta
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
  );
};

export default ProtocoloMaisRenda;
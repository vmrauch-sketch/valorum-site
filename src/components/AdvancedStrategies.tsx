
import { 
  Building2, 
  TrendingUp, 
  Shield, 
  Zap, 
  Stethoscope, 
  Gavel, 
  Umbrella, 
  Lock 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AdvancedStrategies = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: strategiesRef, isVisible: strategiesVisible } = useScrollAnimation();
  const { elementRef: summaryRef, isVisible: summaryVisible } = useScrollAnimation();

  const handleServiceClick = (serviceTitle: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre ${serviceTitle}.`);
    window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
  };

  const strategies = [
    {
      title: "Estruturação de Holdings",
      description: "Para eficiência fiscal e proteção patrimonial",
      icon: <Building2 size={32} className="text-navy-600" />
    },
    {
      title: "Modelagem de FIDCs",
      description: "Estruturação e gestão de fundos de investimento",
      icon: <TrendingUp size={32} className="text-navy-600" />
    },
    {
      title: "Planejamento Sucessório Robusto",
      description: "Transmissão patrimonial eficiente e segura",
      icon: <Shield size={32} className="text-navy-600" />
    },
    {
      title: "Estratégias de Alavancagem Controlada",
      description: "Maximização de retornos com gestão de riscos",
      icon: <Zap size={32} className="text-navy-600" />
    },
    {
      title: "Atendimento Especializado para Profissionais da Saúde",
      description: "Soluções específicas para médicos e profissionais de saúde",
      icon: <Stethoscope size={32} className="text-navy-600" />
    },
    {
      title: "Leilão de Crédito",
      description: "Ferramenta de otimização financeira e redução de custos",
      icon: <Gavel size={32} className="text-navy-600" />
    },
    {
      title: "Análise de Previdência Privada",
      description: "Personalizada conforme perfil e objetivos",
      icon: <Umbrella size={32} className="text-navy-600" />
    },
    {
      title: "Seguros e Proteções",
      description: "Incluindo responsabilidade civil customizada",
      icon: <Lock size={32} className="text-navy-600" />
    }
  ];

  return (
    <section className="py-20 bg-white" id="estrategias">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className={`text-center mb-16 transform transition-all duration-1000 ease-out ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                Estratégias Avançadas
              </h2>
              <div className="absolute bottom-2 left-0 w-16 h-1 bg-gold-500"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
              Desenvolvemos soluções além do planejamento tradicional, integrando estratégias 
              personalizadas para cada perfil, objetivos e necessidades específicas.
            </p>
          </div>

          {/* Strategies Grid */}
          <div ref={strategiesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strategy, index) => (
              <div 
                key={index}
                className={`bg-navy-50 border border-navy-100 p-6 rounded-xl hover:bg-navy-100 transition-all duration-1000 ease-out group shadow-sm transform ${strategiesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ 
                  transitionDelay: strategiesVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="mb-4">{strategy.icon}</div>
                <h3 className="text-lg font-bold text-navy-600 mb-3 group-hover:text-corporate-600 transition-colors">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {strategy.description}
                </p>
                <button
                  onClick={() => handleServiceClick(strategy.title)}
                  className="text-navy-600 hover:text-corporate-600 text-xs font-medium underline underline-offset-2 hover:underline-offset-4 transition-all duration-300"
                >
                  clique aqui
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div ref={summaryRef} className={`mt-16 text-center transform transition-all duration-1000 ease-out ${summaryVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
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

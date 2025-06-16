
import { 
  BarChart3, 
  Building2, 
  Shield, 
  TrendingUp, 
  Zap, 
  Briefcase, 
  Target, 
  Gavel, 
  Gem, 
  Lock, 
  ShieldCheck,
  Globe,
  Lightbulb,
  Settings,
  Users,
  Activity
} from "lucide-react";

const HowWeWork = () => {
  const processSteps = [
    {
      title: "Entender",
      subtitle: "Diagnóstico financeiro completo.",
      icon: Lightbulb,
      description: "Analisamos sua situação atual, objetivos e perfil de risco para criar a base do seu planejamento."
    },
    {
      title: "Definir", 
      subtitle: "Plano sólido e previsível para longo prazo.",
      icon: Target,
      description: "Estruturamos estratégias personalizadas alinhadas aos seus objetivos e horizonte de investimento."
    },
    {
      title: "Implementar",
      subtitle: "Execução eficiente e sem viés.",
      icon: Settings,
      description: "Colocamos o plano em ação com metodologia rigorosa e acompanhamento constante."
    },
    {
      title: "Acompanhar",
      subtitle: "Ajustes constantes, sempre alinhados aos seus objetivos.",
      icon: Users,
      description: "Monitoramos resultados e realizamos ajustes para manter o plano sempre otimizado."
    }
  ];

  const areas = [
    {
      title: "Consultoria Financeira Pessoal e Empresarial",
      icon: BarChart3
    },
    {
      title: "Gestão Patrimonial e Estruturação de Holdings",
      icon: Building2
    },
    {
      title: "Planejamento Sucessório e Proteção Patrimonial",
      icon: Shield
    },
    {
      title: "Consultoria de Investimentos Personalizada",
      icon: TrendingUp
    },
    {
      title: "Estratégias de Alavancagem e Estruturação Societária",
      icon: Zap
    },
    {
      title: "Soluções em FIDC e Planejamento Tributário",
      icon: Briefcase
    },
    {
      title: "Educação Financeira Corporativa",
      icon: Target
    },
    {
      title: "Leilão de Crédito para redução de custos financeiros",
      icon: Gavel
    },
    {
      title: "Gestão Profissional de Investimentos",
      icon: Gem
    },
    {
      title: "Análise e Adequação de Previdência Privada",
      icon: Lock
    },
    {
      title: "Seguros e Proteções, incluindo Responsabilidade Civil Customizada",
      icon: ShieldCheck
    },
    {
      title: "Internacionalização de Patrimônio",
      icon: Globe
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="como-atuamos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                Como Atuamos
              </h2>
              <div className="absolute bottom-2 left-0 w-16 h-1 bg-gold-500"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
              Áreas de especialização e atuação
            </p>
          </div>

          {/* Processo Estruturado */}
          <div className="mb-20">
            <h3 className="text-2xl font-playfair font-semibold text-navy-600 text-center mb-4">
              Nosso processo é estruturado para garantir que cada decisão financeira faça sentido para você.
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center">
                      {/* Ícone */}
                      <div className="w-16 h-16 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-corporate-500 transition-colors duration-300">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      
                      {/* Título */}
                      <h4 className="text-xl font-playfair font-semibold text-navy-600 mb-2">
                        {step.title}
                      </h4>
                      
                      {/* Subtítulo */}
                      <p className="text-sm text-gray-600 font-medium mb-3">
                        {step.subtitle}
                      </p>
                      
                      {/* Descrição */}
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-navy-600 text-center mb-8">
              Áreas de Especialização
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {areas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-corporate-500 hover:shadow-md transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center">
                      <div className="mr-4 flex-shrink-0">
                        <IconComponent 
                          size={24} 
                          className="text-corporate-500" 
                        />
                      </div>
                      <span className="text-gray-800 font-medium">{area.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowWeWork };

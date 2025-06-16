

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
  ShieldCheck 
} from "lucide-react";

const HowWeWork = () => {
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
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="como-atuamos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Como Atuamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Áreas de especialização e atuação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
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
    </section>
  );
};

export { HowWeWork };


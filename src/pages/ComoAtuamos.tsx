import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
  Globe
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ComoAtuamos = () => {
  const { elementRef: areasRef, isVisible: areasVisible } = useScrollAnimation();

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
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="relative inline-block">
                  <h1 className="text-5xl md:text-6xl font-playfair font-bold text-navy-600 mb-4">
                    Como Atuamos
                  </h1>
                  <div className="absolute bottom-2 left-0 w-16 h-1 bg-gold-500"></div>
                </div>
              </div>

              {/* Áreas de Especialização */}
              <div ref={areasRef}>
                <div className="grid md:grid-cols-2 gap-6">
                  {areas.map((area, index) => {
                    const IconComponent = area.icon;
                    return (
                      <div 
                        key={index}
                        className={`bg-white p-6 rounded-lg shadow-sm border-l-4 border-corporate-500 hover:shadow-md transition-all duration-1000 ease-out transform ${areasVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                        style={{ 
                          transitionDelay: areasVisible ? `${index * 100}ms` : '0ms'
                        }}
                      >
                        <div className="flex items-center">
                          <div className="mr-4 flex-shrink-0">
                            <IconComponent 
                              size={24} 
                              className="text-corporate-500" 
                            />
                          </div>
                          <span className="text-gray-800 font-inter font-medium text-lg leading-relaxed">{area.title}</span>
                        </div>
                      </div>
                    );
                  })}
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

export default ComoAtuamos;
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
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
  Stethoscope,
  ArrowRight
} from "lucide-react";

const ComoAtuamos = () => {

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
      <div className="pt-28 sm:pt-16">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="relative inline-block">
                  <h1 className="text-5xl md:text-6xl font-playfair font-bold text-navy-600 mb-4">
                    Áreas de Especialização
                  </h1>
                  <div className="absolute bottom-2 left-0 w-16 h-1 bg-gold-500"></div>
                </div>
              </div>

              {/* Áreas de Especialização */}
              <div className="grid md:grid-cols-2 gap-6">
                {areas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-corporate-500 hover:shadow-md transition-all duration-300 ease-out"
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

              {/* Seção Médicos — Protocolo Mais Renda */}
              <div className="mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <Stethoscope size={32} className="text-corporate-500" />
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600">
                    Para Médicos e Profissionais da Saúde
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  Médicos enfrentam desafios únicos: múltiplos CNPJs, tributação complexa, plantões que consomem tempo e pouca clareza sobre como organizar o patrimônio. Desenvolvemos uma solução específica para essa realidade.
                </p>

                <Link 
                  to="/protocolo-mais-renda"
                  className="block bg-navy-600 rounded-xl p-8 md:p-10 hover:shadow-xl transition-all duration-300 group border border-navy-500/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <span className="inline-block bg-gold-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                        Solução Exclusiva
                      </span>
                      <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-3">
                        Protocolo Mais Renda
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Estrutura financeira para médicos que querem pagar menos imposto, organizar fluxo de caixa e investir com estratégia.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center gap-2 bg-gold-500 text-white font-bold px-6 py-3 rounded-lg text-lg group-hover:bg-gold-600 transition-colors">
                        Conhecer Protocolo
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
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


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
  Activity,
  Home,
  LineChart,
  MessageCircle
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const HowWeWork = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: processRef, isVisible: processVisible } = useScrollAnimation();
  const { elementRef: investmentAreasRef, isVisible: investmentAreasVisible } = useScrollAnimation();

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

  const investmentAreas = [
    {
      title: "Investimentos Físicos",
      description: "Imóveis e propriedades\noferecem segurança e preservação de patrimônio. Avaliamos seu perfil patrimonial para guiar decisões imobiliárias que realmente expandam valor e renda.",
      icon: Home,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "Investimentos Dinâmicos", 
      description: "Participações em negócios e ativos privados que trazem diversificação inteligente e oportunidades fora do mercado tradicional. Guiamos você na escolha e na gestão de ativos que aceleram o crescimento patrimonial com segurança e propósito.",
      icon: Gem,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Investimentos Financeiros",
      description: "Ações, fundos, renda fixa e globais\ngarantem liquidez, dinamismo e crescimento contínuo.",
      icon: LineChart,
      gradient: "from-green-600 to-green-800"
    }
  ];


  return (
    <section className="py-20 bg-gray-50" id="como-atuamos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className={`text-center mb-16 transform transition-all duration-1000 ease-out ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-navy-600 mb-4">
                Como Atuamos
              </h2>
              <div className="absolute bottom-2 left-0 w-16 h-1 bg-gold-500"></div>
            </div>
          </div>

          {/* Processo Estruturado */}
          <div ref={processRef} className="mb-20">
            <div className={`text-center mb-8 transform transition-all duration-1000 ease-out delay-200 ${processVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                PR² = Patrimônio Real & Renda
              </h3>
            </div>
            <h3 className={`text-3xl md:text-4xl font-playfair font-semibold text-navy-600 text-center mb-6 leading-tight transform transition-all duration-1000 ease-out ${processVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Nosso processo é estruturado para garantir que cada decisão patrimonial e financeira faça sentido para você.
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={index}
                    className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-1000 ease-out group transform ${processVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                    style={{ 
                      transitionDelay: processVisible ? `${index * 150}ms` : '0ms'
                    }}
                  >
                    <div className="text-center">
                      {/* Ícone */}
                      <div className="w-16 h-16 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-corporate-500 transition-colors duration-300">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      
                      {/* Título */}
                      <h4 className="text-2xl md:text-3xl font-playfair font-bold text-navy-600 mb-3 leading-tight">
                        {step.title}
                      </h4>
                      
                      {/* Subtítulo */}
                      <p className="text-base font-inter font-medium mb-4 text-gray-700 leading-relaxed">
                        {step.subtitle}
                      </p>
                      
                      {/* Descrição */}
                      <p className="text-sm font-inter text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className={`text-center mt-12 transform transition-all duration-1000 ease-out delay-700 ${processVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button 
                onClick={() => {
                  const message = encodeURIComponent("Olá gostaria de mais informações");
                  window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
                }}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale com um Consultor
              </Button>
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div ref={investmentAreasRef} className="mb-12">
            <div className={`text-center mb-12 transform transition-all duration-1000 ease-out ${investmentAreasVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="text-xl md:text-2xl font-inter font-medium text-navy-500 mb-2 tracking-wide uppercase">
                Mecanismos Patrimoniais que atuam em
              </p>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-6">
                Tríade Patrimonial
              </h3>
              <p className="text-xl font-inter text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A estratégia de construção e gestão patrimonial que se adapta ao seu jeito.
              </p>
            </div>
            
            {/* Container com proteção visual */}
            <div className="relative">
              {/* Indicador de Proteção - Elemento elegante que cobre os 3 cards */}
              <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ease-out ${investmentAreasVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="bg-gradient-to-r from-navy-600 to-corporate-500 text-white px-12 py-4 rounded-full shadow-xl flex items-center gap-4 backdrop-blur-sm min-w-[400px] md:min-w-[500px]">
                  <Shield size={22} className="text-gold-400" />
                  <span className="font-inter font-semibold text-base tracking-wide flex-1 text-center">Proteção e Segurança</span>
                  <ShieldCheck size={22} className="text-gold-400" />
                </div>
              </div>

              {/* Container de proteção elegante que abraça os 3 pilares */}
              <div className={`absolute inset-0 -m-6 rounded-3xl border-2 border-gold-400/30 bg-gradient-to-br from-gold-50/20 to-transparent transition-all duration-1000 ease-out ${investmentAreasVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '800ms' }}>
                {/* Sombra dourada sutil para dar profundidade */}
                <div className="absolute inset-0 rounded-3xl shadow-lg shadow-gold-400/10"></div>
                
                {/* Conectores visuais que ligam o badge aos cards */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-gold-400 to-transparent rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 relative pt-8">
                {investmentAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out group transform ${investmentAreasVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                      style={{ 
                        transitionDelay: investmentAreasVisible ? `${index * 200}ms` : '0ms'
                      }}
                    >
                      <div className="text-center">
                        {/* Ícone com gradiente */}
                        <div className={`w-20 h-20 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent size={32} className="text-white" />
                        </div>
                        
                        {/* Título */}
                        <h4 className="text-xl md:text-2xl font-playfair font-bold text-navy-600 mb-3 leading-tight">
                          {area.title}
                        </h4>
                        
                        {/* Descrição */}
                        <p className="text-sm md:text-base font-inter text-gray-700 leading-relaxed whitespace-pre-line">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className={`text-center mt-12 transform transition-all duration-1000 ease-out delay-700 ${investmentAreasVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button 
                onClick={() => {
                  const message = encodeURIComponent("Olá gostaria de mais informações");
                  window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
                }}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale com um Consultor
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { HowWeWork };


import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Home, 
  LineChart, 
  Gem, 
  Shield, 
  ShieldCheck,
  MessageCircle,
  Building2,
  TrendingUp,
  Lock,
  Users
} from "lucide-react";

const ValoromPatrimonio = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: triadeRef, isVisible: triadeVisible } = useScrollAnimation();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const investmentAreas = [
    {
      title: "Investimentos Físicos",
      description: "Imóveis e propriedades oferecem segurança e preservação de patrimônio. Avaliamos seu perfil patrimonial para guiar decisões imobiliárias que realmente expandam valor e renda.",
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
      description: "Ações, fundos, renda fixa e globais garantem liquidez, dinamismo e crescimento contínuo.",
      icon: LineChart,
      gradient: "from-green-600 to-green-800"
    }
  ];

  const services = [
    {
      icon: Building2,
      title: "Estruturação Patrimonial",
      description: "Organizamos seu patrimônio de forma estratégica para maximizar proteção e eficiência tributária."
    },
    {
      icon: TrendingUp,
      title: "Gestão de Investimentos",
      description: "Acompanhamento ativo e personalizado dos seus investimentos com foco em resultados de longo prazo."
    },
    {
      icon: Lock,
      title: "Proteção de Ativos",
      description: "Estratégias jurídicas e financeiras para blindar seu patrimônio contra riscos e imprevistos."
    },
    {
      icon: Users,
      title: "Planejamento Sucessório",
      description: "Prepare a transferência do seu patrimônio para as próximas gerações de forma eficiente e harmoniosa."
    }
  ];

  return (
    <>
      <SEOHead
        title="Valorum Patrimônio | Gestão e Proteção Patrimonial"
        description="Gestão patrimonial completa com foco em proteção, crescimento e sucessão. Conheça a Tríade Patrimonial da Valorum."
        keywords="gestão patrimonial, proteção de patrimônio, investimentos, planejamento sucessório, holding familiar"
        canonical="https://valorum.vilsonrauch.com.br/patrimonio"
      />
      
      <div className="min-h-screen bg-white font-inter pt-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy-800/50 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div 
              ref={heroRef}
              className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ease-out ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">Valorum Patrimônio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                Seu patrimônio merece uma <span className="text-purple-400">estratégia completa</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Proteger, crescer e perpetuar. Conheça como estruturamos sua jornada patrimonial.
              </p>
              
              <Button 
                onClick={() => {
                  const message = encodeURIComponent("Olá, gostaria de saber mais sobre gestão patrimonial");
                  window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
                }}
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale com um Consultor
              </Button>
            </div>
          </div>
        </section>

        {/* Tríade Patrimonial */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div 
                ref={triadeRef}
                className={`text-center mb-12 transform transition-all duration-1000 ease-out ${triadeVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <p className="text-xl md:text-2xl font-inter font-medium text-navy-500 mb-2 tracking-wide uppercase">
                  Nossos mecanismos atuam na
                </p>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-6">
                  Tríade Patrimonial
                </h2>
                <p className="text-xl font-inter text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  A estratégia de construção e gestão patrimonial que se adapta ao seu jeito.
                </p>
              </div>
              
              {/* Container com proteção visual */}
              <div className="relative">
                {/* Indicador de Proteção */}
                <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ease-out ${triadeVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="bg-gradient-to-r from-navy-600 to-purple-600 text-white px-12 py-4 rounded-full shadow-xl flex items-center gap-4 backdrop-blur-sm min-w-[400px] md:min-w-[500px]">
                    <Shield size={22} className="text-purple-300" />
                    <span className="font-inter font-semibold text-base tracking-wide flex-1 text-center">Proteção e Segurança</span>
                    <ShieldCheck size={22} className="text-purple-300" />
                  </div>
                </div>

                {/* Container de proteção */}
                <div className={`absolute inset-0 -m-6 rounded-3xl border-2 border-purple-400/30 bg-gradient-to-br from-purple-50/20 to-transparent transition-all duration-1000 ease-out ${triadeVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '800ms' }}>
                  <div className="absolute inset-0 rounded-3xl shadow-lg shadow-purple-400/10"></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-purple-400 to-transparent rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 relative pt-8">
                  {investmentAreas.map((area, index) => {
                    const IconComponent = area.icon;
                    return (
                      <div 
                        key={index}
                        className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out group transform ${triadeVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                        style={{ 
                          transitionDelay: triadeVisible ? `${index * 200}ms` : '0ms'
                        }}
                      >
                        <div className="text-center">
                          <div className={`w-20 h-20 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <IconComponent size={32} className="text-white" />
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-playfair font-bold text-navy-600 mb-3 leading-tight">
                            {area.title}
                          </h3>
                          
                          <p className="text-sm md:text-base font-inter text-gray-700 leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div 
                ref={servicesRef}
                className={`text-center mb-16 transform transition-all duration-1000 ease-out ${servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-6">
                  O que oferecemos
                </h2>
                <p className="text-xl font-inter text-gray-700 max-w-3xl mx-auto">
                  Soluções completas para cada etapa da sua jornada patrimonial.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-500 group transform ${servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                      style={{ 
                        transitionDelay: servicesVisible ? `${index * 100}ms` : '0ms'
                      }}
                    >
                      <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors duration-300">
                        <IconComponent size={24} className="text-purple-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-lg font-playfair font-bold text-navy-600 mb-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm font-inter text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-500 ${servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <Button 
                  onClick={() => {
                    const message = encodeURIComponent("Olá, gostaria de saber mais sobre gestão patrimonial");
                    window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
                  }}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale com um Consultor
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ValoromPatrimonio;

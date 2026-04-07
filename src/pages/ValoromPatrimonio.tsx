import { Navigation } from "@/components/Navigation";
import LeadContactForm from "@/components/LeadContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { SEOData, StructuredData } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ServiceSubNav } from "@/components/ServiceSubNav";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  Users,
  ClipboardList,
  CheckCircle2,
  Handshake,
  HelpCircle
} from "lucide-react";

const patrimonioNavItems = [
  { label: "Tríade", target: "pat-triade" },
  { label: "Serviços", target: "pat-servicos" },
];

const ValoromPatrimonio = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: triadeRef, isVisible: triadeVisible } = useScrollAnimation();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const investmentAreas = [
    {
      title: "Físicos",
      description: "Imóveis e propriedades\noferecem segurança e preservação de patrimônio. Avaliamos seu perfil patrimonial para guiar decisões imobiliárias que realmente expandam valor e renda.",
      icon: Home,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "Dinâmicos", 
      description: "Participações em negócios e ativos privados que trazem diversificação inteligente e oportunidades fora do mercado tradicional. Guiamos você na escolha e na gestão de ativos que aceleram o crescimento patrimonial com segurança e propósito.",
      icon: Gem,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Financeiros",
      description: "Ações, fundos, renda fixa e globais\ngarantem liquidez, dinamismo e crescimento contínuo.",
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
      icon: Shield,
      title: "Planejamento Patrimonial",
      description: "Estruturação e proteção do seu patrimônio para as próximas gerações com estratégias fiscais eficientes."
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
        title={SEOData.valorumPatrimonio.title}
        description={SEOData.valorumPatrimonio.description}
        keywords={SEOData.valorumPatrimonio.keywords}
        canonical="https://valorum.vilsonrauch.com.br/patrimonio"
        structuredData={StructuredData.patrimonioService}
      />
      
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <ServiceSubNav 
          items={patrimonioNavItems} 
          ctaLabel="Solicitar Análise" 
          ctaHref="#patrimonio-contato"
          ctaClassName="bg-gold-500 hover:bg-gold-600 text-white"
        />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 pt-28 pb-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy-800/50 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div 
              ref={heroRef}
              className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ease-out ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm font-medium">Valorum Patrimônio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                Seu patrimônio merece uma <span className="text-gold-400">estratégia completa</span>
              </h1>
              


              
              <a href="#patrimonio-contato">
                <Button 
                  className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Quero Conhecer
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Seção Construção Patrimonial */}
        <section className="py-20 bg-navy-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-navy-600/50 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                Consultoria financeira especializada em{' '}
                <span className="text-gold-400">construção patrimonial</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Além da Gestão dos seus investimentos, definimos e implementamos juntos o seu Plano de Construção de Patrimônio.
              </p>
              <a href="#pat-triade">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide">
                  Conheça o Modelo
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Tríade Patrimonial */}
        <section id="pat-triade" className="py-20 bg-gray-50 scroll-mt-28">
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
                  <div className="bg-gradient-to-r from-navy-600 to-corporate-500 text-white px-12 py-4 rounded-full shadow-xl flex items-center gap-4 backdrop-blur-sm min-w-[400px] md:min-w-[500px]">
                    <Shield size={22} className="text-gold-400" />
                    <span className="font-inter font-semibold text-base tracking-wide flex-1 text-center">Diversificação e Empilhamento de Estratégias</span>
                    <ShieldCheck size={22} className="text-gold-400" />
                  </div>
                </div>

                {/* Container de proteção */}
                <div className={`absolute inset-0 -m-6 rounded-3xl border-2 border-gold-400/30 bg-gradient-to-br from-gold-50/20 to-transparent transition-all duration-1000 ease-out ${triadeVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '800ms' }}>
                  <div className="absolute inset-0 rounded-3xl shadow-lg shadow-gold-400/10"></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-gold-400 to-transparent rounded-full"></div>
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
                          
                          <p className="text-sm md:text-base font-inter text-gray-700 leading-relaxed whitespace-pre-line">
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
        <section id="pat-servicos" className="py-20 bg-gray-50 scroll-mt-28">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div 
                ref={servicesRef}
                className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ease-out ${servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                {/* Left - Visual with icons */}
                <div className="relative flex items-center justify-center">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl relative">
                    <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-white flex items-center justify-center">
                      <span className="text-5xl md:text-6xl font-playfair font-bold text-navy-600">V</span>
                    </div>
                    
                    {/* Floating icons */}
                    <div className="absolute -top-4 right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <ClipboardList size={20} className="text-navy-600" />
                    </div>
                    <div className="absolute top-16 -right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <CheckCircle2 size={20} className="text-navy-600" />
                    </div>
                    <div className="absolute bottom-16 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Handshake size={20} className="text-navy-600" />
                    </div>
                    <div className="absolute -bottom-2 right-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <HelpCircle size={20} className="text-navy-600" />
                    </div>
                  </div>
                </div>

                {/* Right - Accordion */}
                <div>
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold text-navy-600 mb-4 leading-tight">
                    Wealth Planning &<br />Building Solutions.
                  </h2>
                  <p className="text-base md:text-lg font-inter text-gray-600 mb-8">
                    Planejamento sem execução não gera resultados.<br />
                    Nossa abordagem holística envolve:
                  </p>

                  <Accordion type="single" collapsible className="w-full space-y-2">
                    <AccordionItem value="planejamento" className="border-b border-gray-200">
                      <AccordionTrigger className="text-lg font-inter font-bold text-navy-600 py-4 hover:no-underline">
                        Planejamento Patrimonial
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-600 pb-4">
                        Organizamos seu patrimônio de forma estratégica para maximizar proteção, eficiência tributária e crescimento sustentável ao longo das gerações.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="investimentos" className="border-b border-gray-200">
                      <AccordionTrigger className="text-lg font-inter font-bold text-navy-600 py-4 hover:no-underline">
                        Investimentos no Mercado Financeiro
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-600 pb-4">
                        Acompanhamento ativo e personalizado dos seus investimentos com foco em resultados de longo prazo, diversificação inteligente e gestão de risco.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="protecoes" className="border-b border-gray-200">
                      <AccordionTrigger className="text-lg font-inter font-bold text-navy-600 py-4 hover:no-underline">
                        Proteções Inteligentes
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-600 pb-4">
                        Estratégias jurídicas e financeiras para blindar seu patrimônio contra riscos e imprevistos, garantindo segurança para você e sua família.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="alavancagem" className="border-b border-gray-200">
                      <AccordionTrigger className="text-lg font-inter font-bold text-navy-600 py-4 hover:no-underline">
                        Alavancagem Patrimonial com Investimentos diretos em Ativos Reais
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-600 pb-4">
                        Participações em negócios e ativos privados que trazem diversificação inteligente e oportunidades fora do mercado tradicional, acelerando o crescimento patrimonial.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="acompanhamento" className="border-b border-gray-200">
                      <AccordionTrigger className="text-lg font-inter font-bold text-navy-600 py-4 hover:no-underline">
                        Acompanhamento Especializado
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-600 pb-4">
                        Prepare a transferência do seu patrimônio para as próximas gerações de forma eficiente, harmoniosa e com planejamento sucessório completo.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-8 border-l-4 border-blue-600 pl-4">
                    <p className="text-base md:text-lg font-inter text-gray-700 italic">
                      Tudo sob uma única estratégia, que reduz riscos e traz previsibilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section id="patrimonio-contato" className="py-24 bg-[#0a1628] scroll-mt-28">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                Solicite sua <span className="text-[#c9a962]">análise gratuita</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Preencha o formulário e nossa equipe entrará em contato para entender seus objetivos e apresentar solução personalizada.
              </p>
            </div>
            <LeadContactForm />
          </div>
        </section>

        <Footer />
        <WhatsAppButton message="Olá! Gostaria de saber como funciona sobre crescer e proteger meu patrimônio" />
      </div>
    </>
  );
};

export default ValoromPatrimonio;

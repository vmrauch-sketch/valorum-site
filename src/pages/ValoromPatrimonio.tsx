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
  Shield, 
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
  { label: "Serviços", target: "pat-servicos" },
];

const ValoromPatrimonio = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

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
                CONSTRUA UM PATRIMÔNIO SÓLIDO{' '}
                <span className="text-gold-400">GERADOR DE RENDA PASSIVA VITALÍCIA</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Além da Gestão dos seus investimentos, definimos e implementamos juntos o seu Plano de Construção de Patrimônio.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
                Um especialista patrimonial acompanha você de forma individual para implementar nossa metodologia passo a passo. Assim garantimos a assertividade e velocidade de execução do plano estruturado para que o objetivo seja alcançado no período estipulado.
              </p>

              <a href="#pat-servicos">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide">
                  Conheça o Modelo
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="pat-servicos" className="py-20 bg-navy-700 scroll-mt-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div 
                ref={servicesRef}
                className={`grid md:grid-cols-2 gap-16 items-center transform transition-all duration-1000 ease-out ${servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                {/* Left - Visual with icons */}
                <div className="relative flex items-center justify-center">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-2xl shadow-gold-500/20 relative">
                    <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-navy-800 flex items-center justify-center border-2 border-gold-400/30">
                      <span className="text-2xl md:text-3xl font-playfair font-bold text-gold-400 tracking-wider">Valorum</span>
                    </div>
                    
                    {/* Floating icons */}
                    <div className="absolute -top-4 right-8 w-12 h-12 bg-navy-800 rounded-full shadow-lg shadow-gold-500/20 flex items-center justify-center border border-gold-400/30">
                      <ClipboardList size={20} className="text-gold-400" />
                    </div>
                    <div className="absolute top-16 -right-6 w-12 h-12 bg-navy-800 rounded-full shadow-lg shadow-gold-500/20 flex items-center justify-center border border-gold-400/30">
                      <CheckCircle2 size={20} className="text-gold-400" />
                    </div>
                    <div className="absolute bottom-16 -right-4 w-12 h-12 bg-navy-800 rounded-full shadow-lg shadow-gold-500/20 flex items-center justify-center border border-gold-400/30">
                      <Handshake size={20} className="text-gold-400" />
                    </div>
                    <div className="absolute -bottom-2 right-12 w-12 h-12 bg-navy-800 rounded-full shadow-lg shadow-gold-500/20 flex items-center justify-center border border-gold-400/30">
                      <HelpCircle size={20} className="text-gold-400" />
                    </div>
                  </div>
                </div>

                {/* Right - Accordion */}
                <div>
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4 leading-tight">
                    Wealth Planning &<br />Building Solutions.
                  </h2>
                  <p className="text-base md:text-lg font-inter text-gray-300 mb-8">
                    Planejamento sem execução não gera resultados.<br />
                    Nossa abordagem holística envolve:
                  </p>

                  <Accordion type="single" collapsible className="w-full space-y-2">
                    <AccordionItem value="planejamento" className="border-b border-gold-400/20">
                      <AccordionTrigger className="text-lg font-inter font-bold text-white py-4 hover:no-underline hover:text-gold-400 transition-colors">
                        Planejamento Patrimonial
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-300 pb-4">
                        Organizamos seu patrimônio de forma estratégica para maximizar proteção, eficiência tributária e crescimento sustentável ao longo das gerações.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="investimentos" className="border-b border-gold-400/20">
                      <AccordionTrigger className="text-lg font-inter font-bold text-white py-4 hover:no-underline hover:text-gold-400 transition-colors">
                        Investimentos no Mercado Financeiro
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-300 pb-4">
                        Acompanhamento ativo e personalizado dos seus investimentos com foco em resultados de longo prazo, diversificação inteligente e gestão de risco.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="protecoes" className="border-b border-gold-400/20">
                      <AccordionTrigger className="text-lg font-inter font-bold text-white py-4 hover:no-underline hover:text-gold-400 transition-colors">
                        Proteções Inteligentes
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-300 pb-4">
                        Estratégias jurídicas e financeiras para blindar seu patrimônio contra riscos e imprevistos, garantindo segurança para você e sua família.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="alavancagem" className="border-b border-gold-400/20">
                      <AccordionTrigger className="text-lg font-inter font-bold text-white py-4 hover:no-underline hover:text-gold-400 transition-colors">
                        Alavancagem Patrimonial com Investimentos diretos em Ativos Reais
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-300 pb-4">
                        Participações em negócios e ativos privados que trazem diversificação inteligente e oportunidades fora do mercado tradicional, acelerando o crescimento patrimonial.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="acompanhamento" className="border-b border-gold-400/20">
                      <AccordionTrigger className="text-lg font-inter font-bold text-white py-4 hover:no-underline hover:text-gold-400 transition-colors">
                        Acompanhamento Especializado
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-inter text-gray-300 pb-4">
                        Prepare a transferência do seu patrimônio para as próximas gerações de forma eficiente, harmoniosa e com planejamento sucessório completo.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-8 border-l-4 border-gold-400 pl-4">
                    <p className="text-base md:text-lg font-inter text-gray-300 italic">
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

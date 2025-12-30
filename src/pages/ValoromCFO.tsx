import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { 
  TrendingUp,
  Target,
  BarChart3,
  PieChart,
  Wallet,
  LineChart,
  FileSearch,
  Users,
  Calculator,
  Building2,
  ClipboardCheck,
  Lightbulb,
  Shield,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ValoromCFO = () => {
  const servicos = [
    { 
      icon: Target, 
      title: "Ação Estratégica", 
      description: "Formulação e execução de estratégias financeiras para alocação eficiente de recursos e crescimento sustentável." 
    },
    { 
      icon: FileSearch, 
      title: "Análise de Viabilidade", 
      description: "Avaliação detalhada de investimentos, expansão ou reestruturação para decisões informadas." 
    },
    { 
      icon: BarChart3, 
      title: "Controladoria", 
      description: "Construção e análise do DRE, precificação, estudos de rentabilidade e planejamento orçamentário." 
    },
    { 
      icon: LineChart, 
      title: "Gestão de Fluxo de Caixa", 
      description: "Construção e análise de Fluxo de Caixa e Ciclo Financeiro, suporte na captação de recursos." 
    },
    { 
      icon: PieChart, 
      title: "Avaliação de Desempenho", 
      description: "Estudo de métricas como lucratividade, fluxo de caixa e eficiência operacional." 
    },
    { 
      icon: Calculator, 
      title: "Planejamento Orçamentário", 
      description: "Alinhamento orçamentário, metas financeiras compatíveis e alocação eficiente de recursos." 
    },
  ];

  const beneficios = [
    { 
      icon: Lightbulb, 
      title: "Visão Estratégica", 
      description: "Um CFO dedicado que traz a visão estratégica que você precisa para impulsionar seus resultados. Do operacional ao estratégico, nenhuma ponta fica solta." 
    },
    { 
      icon: Users, 
      title: "Direcionamento da Equipe", 
      description: "Relacionamento com o mercado financeiro e direcionamento da equipe interna." 
    },
    { 
      icon: ClipboardCheck, 
      title: "Análise Tributária", 
      description: "Análise de oportunidades fiscais e melhoria na estrutura dos demonstrativos contábeis." 
    },
    { 
      icon: Shield, 
      title: "Reestruturação de Passivos", 
      description: "Suporte na reestruturação financeira e captação de recursos para crescimento." 
    },
  ];

  const diferenciais = [
    "Mais tempo para o CEO focar na estratégia e sair do operacional",
    "Flexibilidade e expertise financeira sob demanda",
    "Decisões informadas com base em análises detalhadas",
    "Processo de transição seguro e profissional",
    "Performance financeira otimizada"
  ];

  return (
    <>
      <SEOHead
        title="Valorum CFO | Terceirização Estratégica de CFO"
        description="CFO terceirizado para sua empresa. Expertise financeira, decisões estratégicas, controladoria e gestão de fluxo de caixa para impulsionar seus resultados."
        keywords="CFO terceirizado, diretor financeiro, controladoria, gestão financeira, planejamento orçamentário, fluxo de caixa, análise financeira"
        canonical="https://valorum.vilsonrauch.com.br/cfo"
      />
      
      <div className="min-h-screen bg-background font-inter">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary pt-28 sm:pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-lime-400 to-lime-500 mx-auto mb-8" />
              
              <p className="text-lg text-lime-400 font-medium mb-4">
                Terceirização Estratégica de CFO
              </p>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight mb-4">
                Valorum <span className="text-lime-400">CFO</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-playfair italic text-lime-400 mb-6">
                "Compreender pessoas. Expandir negócios."
              </p>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
                Mais tempo para o CEO focar na estratégia e sair do operacional
              </p>
              
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                Com nosso serviço de CFO Terceirizado, você conta com um "Diretor Financeiro" especializado que aplica nossa metodologia na sua empresa, trazendo a visão estratégica que você precisa para impulsionar seus resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-primary font-semibold px-8 py-6 text-lg"
                  >
                    Falar com um Especialista
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* O que você recebe Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                O que você recebe
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Serviços completos de direção financeira para transformar a gestão da sua empresa
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {servicos.map((item, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-primary rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-lime-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/30 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-lime-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section className="py-24 bg-gradient-to-b from-lime-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Nossa Metodologia
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Uma abordagem integrada para transformar sua gestão financeira
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {beneficios.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-lime-200 hover:shadow-lg hover:border-lime-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                  Por que terceirizar seu CFO?
                </h2>
              </div>
              
              <div className="space-y-4">
                {diferenciais.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-lime-50 to-white rounded-xl border border-lime-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-primary font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Para quem é
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ideal para empresas que buscam expertise financeira de alto nível
              </p>
            </div>
            
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Primeira linha - prioridade */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Building2, title: "Indústrias" },
                  { icon: Users, title: "Clínicas Médicas" },
                  { icon: Users, title: "Clínicas Odontológicas" },
                  { icon: Users, title: "Empresas Familiares" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white rounded-2xl text-center border border-border/50 hover:shadow-lg hover:border-lime-200 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
              
              {/* Segunda linha */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Building2, title: "PMEs em crescimento" },
                  { icon: TrendingUp, title: "Startups em expansão" },
                  { icon: Wallet, title: "Negócios em reestruturação" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white rounded-2xl text-center border border-border/50 hover:shadow-lg hover:border-lime-200 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Quer melhorar a performance financeira da sua empresa?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Contar com expertise de CFO permite decisões informadas e um processo de crescimento mais seguro.
            </p>
            <Link to="/contato">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-primary font-semibold px-8 py-6 text-lg"
              >
                Conheça as Soluções
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ValoromCFO;

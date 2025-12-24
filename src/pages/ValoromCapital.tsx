import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { TrendingUp, Users, Shield, Target, ChartLine, Briefcase, Building2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ValoromCapital = () => {
  const stats = [
    { number: "+1 Bilhão", label: "Ativos sob Gestão", sublabel: "" },
    { number: "+1.000", label: "Famílias aos cuidados das", sublabel: "nossas Carteiras Administradas" },
    { number: "+150 Mil", label: "Famílias atendidas em nossos", sublabel: "serviços de Consultoria Express" },
  ];

  const services = [
    {
      icon: ChartLine,
      title: "Consultoria de Investimentos",
      description: "Análise completa do seu perfil e objetivos para construir uma estratégia personalizada de investimentos."
    },
    {
      icon: Shield,
      title: "Planejamento Patrimonial",
      description: "Estruturação e proteção do seu patrimônio para as próximas gerações com estratégias fiscais eficientes."
    },
    {
      icon: Target,
      title: "Gestão de Riscos",
      description: "Identificação e mitigação de riscos financeiros para garantir a preservação do seu capital."
    },
    {
      icon: Briefcase,
      title: "Consultoria Empresarial",
      description: "Soluções financeiras para empresas, desde estruturação de capital até fusões e aquisições."
    },
    {
      icon: Building2,
      title: "Investimentos Alternativos",
      description: "Acesso a oportunidades exclusivas em private equity, venture capital e ativos reais."
    },
    {
      icon: Award,
      title: "Family Office",
      description: "Gestão completa do patrimônio familiar com governança e planejamento sucessório."
    }
  ];

  return (
    <>
      <SEOHead
        title="Valorum Capital | Consultoria de Investimentos Independente"
        description="Consultoria de investimentos independente. Construímos e preservamos patrimônio com estratégias personalizadas e sem conflito de interesses."
        keywords="consultoria de investimentos, planejamento patrimonial, gestão de patrimônio, investimentos, family office"
        canonical="https://valorum.vilsonrauch.com.br/capital"
      />
      
      <div className="min-h-screen bg-background font-inter">
        <Navigation />
        
        {/* Hero Section - Dark with elegant style */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1a1f2e] via-[#0f1419] to-[#1a1f2e] pt-16">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/3 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              {/* Gold accent bar */}
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-8" />
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-6">
                Investir é cuidar<br />
                <span className="text-amber-400">de você</span>, da sua família<br />
                e do seu <span className="text-amber-400">patrimônio</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                Nós somos a <strong className="text-white">Valorum Capital</strong>, uma consultoria de investimentos independente 
                que vai além de números e resultados. Nós <strong className="text-amber-400">cultivamos relações</strong> e 
                iluminamos o <strong className="text-amber-400">futuro das pessoas</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-amber-500/25"
                  >
                    Agende uma Conversa
                  </Button>
                </Link>
                <Link to="/manifesto">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-amber-400/30 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400 px-8 py-6 text-lg"
                  >
                    Conheça Nossa Filosofia
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white border-b border-border">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Nosso ecossistema conta com:
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-playfair font-bold text-amber-600 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-6" />
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                  A voz de quem é da família, com a solidez de quem é especialista
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nosso time guia você na construção e preservação do seu patrimônio, oferecendo soluções 
                  que vão além de números e investimentos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Como <strong className="text-primary">consultores de investimentos</strong>, não somos remunerados por 
                  produtos — trabalhamos exclusivamente para você, com total independência e transparência.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-32 h-32 text-amber-600" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm opacity-80">Independente</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Nossas Soluções
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferecemos um ecossistema completo de soluções financeiras para você e sua família
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-muted/30 rounded-2xl hover:bg-gradient-to-br hover:from-amber-50 hover:to-amber-100 transition-all duration-300 border border-transparent hover:border-amber-200"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-24 bg-gradient-to-br from-[#1a1f2e] via-[#0f1419] to-[#1a1f2e] text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Por que a Valorum Capital?
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Consultoria vs Assessoria: entenda a diferença
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Consultoria (Valorum)
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">✓</span>
                    Remuneração fixa, sem comissões
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">✓</span>
                    100% independente
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">✓</span>
                    Foco total no cliente
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">✓</span>
                    Sem conflito de interesses
                  </li>
                </ul>
              </div>
              
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 opacity-60">
                <h3 className="text-xl font-bold text-gray-400 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Assessoria (Tradicional)
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">✗</span>
                    Remunerada por produtos vendidos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">✗</span>
                    Vinculada a instituições
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">✗</span>
                    Pode ter viés comercial
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">✗</span>
                    Possível conflito de interesses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Pronto para cuidar melhor do seu patrimônio?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agende uma conversa sem compromisso e descubra como podemos ajudar você e sua família.
              </p>
              <Link to="/contato">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-10 py-6 text-lg shadow-lg shadow-amber-500/25"
                >
                  Fale com um Consultor
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ValoromCapital;

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
      title: "Gestão de Investimentos",
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
        
        {/* Hero Section - Elegant dark navy */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] pt-16">
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#1a3a5c]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#1a3a5c]/15 rounded-full blur-3xl" />
            {/* Subtle gold accent */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              {/* Refined gold accent bar */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#c9a962] to-[#d4b978] mb-10" />
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-8 tracking-tight">
                Investir é cuidar<br />
                <span className="text-[#c9a962]">de você</span>, da sua família<br />
                e do seu <span className="text-[#c9a962]">patrimônio</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
                Nós somos a <strong className="text-white font-medium">Valorum Capital</strong>, uma casa de investimentos independente 
                que vai além de números e resultados. Uma <strong className="text-[#d4b978] font-medium">consultoria de investimentos independente</strong> focada 
                em <strong className="text-[#d4b978] font-medium">construir e preservar patrimônio</strong> com estratégia e transparência.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato">
                  <Button 
                    size="lg" 
                    className="bg-[#c9a962] hover:bg-[#b8994f] text-[#0a1628] font-semibold px-8 py-6 text-lg transition-all duration-300"
                  >
                    Agende uma Conversa
                  </Button>
                </Link>
                <Link to="/manifesto">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border border-slate-500 text-slate-200 hover:bg-slate-800/50 hover:border-slate-400 px-8 py-6 text-lg transition-all duration-300"
                  >
                    Conheça Nossa Filosofia
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Elegant scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-5 h-9 border border-slate-500 rounded-full flex justify-center">
              <div className="w-1 h-2.5 bg-[#c9a962] rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#c9a962] to-[#d4b978] mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0a1628]">
                Nosso ecossistema conta com:
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-playfair font-bold text-[#0a1628] mb-3">
                    {stat.number}
                  </p>
                  <p className="text-base font-medium text-slate-700">
                    {stat.label}
                  </p>
                  {stat.sublabel && (
                    <p className="text-sm text-slate-500 mt-1">
                      {stat.sublabel}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#c9a962] to-[#d4b978] mb-8" />
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0a1628] mb-8 leading-tight">
                  A voz de quem é da família, com a solidez de quem é especialista
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Nosso time guia você na construção e preservação do seu patrimônio, oferecendo soluções 
                  que vão além de números e investimentos.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Como <strong className="text-[#0a1628]">consultores de investimentos</strong>, não somos remunerados por 
                  produtos — trabalhamos exclusivamente para você, com total independência e transparência.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-32 h-32 text-[#0a1628]/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0a1628] text-white p-8 rounded-2xl shadow-2xl">
                  <p className="text-4xl font-playfair font-bold">100%</p>
                  <p className="text-sm text-slate-300 mt-1">Independente</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-28 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#c9a962] to-[#d4b978] mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0a1628] mb-5">
                Nossas Soluções
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Oferecemos um ecossistema completo de soluções financeiras para você e sua família
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group p-10 bg-white rounded-2xl hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-slate-200"
                >
                  <div className="w-14 h-14 bg-[#0a1628] rounded-xl flex items-center justify-center mb-7 group-hover:bg-[#c9a962] transition-colors duration-500">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-[#0a1628] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-28 bg-[#0a1628] text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#c9a962] to-[#d4b978] mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-5">
                Por que a Valorum Capital?
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Consultoria vs Assessoria: entenda a diferença
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <div className="p-10 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#c9a962] mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  Consultoria (Valorum)
                </h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#c9a962] mt-0.5">✓</span>
                    <span>Remuneração fixa, sem comissões</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#c9a962] mt-0.5">✓</span>
                    <span>100% independente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#c9a962] mt-0.5">✓</span>
                    <span>Foco total no cliente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#c9a962] mt-0.5">✓</span>
                    <span>Sem conflito de interesses</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-10 bg-white/5 rounded-2xl border border-white/10 opacity-50">
                <h3 className="text-xl font-semibold text-slate-400 mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  Assessoria (Tradicional)
                </h3>
                <ul className="space-y-4 text-slate-500">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 mt-0.5">✗</span>
                    <span>Remunerada por produtos vendidos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 mt-0.5">✗</span>
                    <span>Vinculada a instituições</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 mt-0.5">✗</span>
                    <span>Pode ter viés comercial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 mt-0.5">✗</span>
                    <span>Possível conflito de interesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0a1628] mb-8">
                Pronto para cuidar melhor do seu patrimônio?
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Agende uma conversa sem compromisso e descubra como podemos ajudar você e sua família.
              </p>
              <Link to="/contato">
                <Button 
                  size="lg" 
                  className="bg-[#c9a962] hover:bg-[#b8994f] text-[#0a1628] font-semibold px-12 py-6 text-lg transition-all duration-300"
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
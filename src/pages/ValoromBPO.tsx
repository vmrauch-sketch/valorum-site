import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { 
  ClipboardCheck,
  Search,
  Settings,
  KeyRound,
  GitBranch,
  PlayCircle,
  BarChart3,
  FileText,
  Users,
  Building2,
  TrendingUp,
  Wallet,
  ArrowUpRight,
  Shield,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ValoromBPO = () => {
  const fases = [
    { 
      icon: Search, 
      title: "Diagnóstico", 
      description: "Análise completa da situação financeira atual da empresa, identificando gargalos e oportunidades de melhoria." 
    },
    { 
      icon: ClipboardCheck, 
      title: "Validação", 
      description: "Conferência de dados, processos e informações para garantir uma base sólida antes da implementação." 
    },
    { 
      icon: Settings, 
      title: "Setup", 
      description: "Configuração de sistemas, ferramentas e estrutura necessária para a operação financeira funcionar com eficiência." 
    },
    { 
      icon: KeyRound, 
      title: "Organização de Acessos", 
      description: "Estruturação de permissões, acessos bancários e integrações para um fluxo seguro e organizado." 
    },
    { 
      icon: GitBranch, 
      title: "Alinhamento de Processos", 
      description: "Padronização de rotinas, fluxos de aprovação e comunicação entre áreas para eliminar retrabalho." 
    },
    { 
      icon: PlayCircle, 
      title: "Operacional Rodando", 
      description: "Gestão financeira em pleno funcionamento com acompanhamento contínuo, relatórios claros e previsibilidade." 
    },
  ];

  const servicos = [
    { 
      icon: BarChart3, 
      title: "Contas a Pagar e Receber", 
      description: "Controle completo de obrigações e recebimentos com organização e pontualidade." 
    },
    { 
      icon: FileText, 
      title: "Conciliação Bancária", 
      description: "Conferência diária das movimentações para manter os registros sempre atualizados." 
    },
    { 
      icon: TrendingUp, 
      title: "Fluxo de Caixa", 
      description: "Acompanhamento em tempo real da saúde financeira para decisões mais seguras." 
    },
    { 
      icon: Shield, 
      title: "Relatórios Gerenciais", 
      description: "Informações claras e organizadas para apoiar a tomada de decisão da gestão." 
    },
  ];

  const diferenciais = [
    "Mais tempo para focar no crescimento do negócio",
    "Redução de erros e retrabalho financeiro",
    "Processos padronizados e previsíveis",
    "Relatórios claros para decisões informadas",
    "Controle financeiro com disciplina e eficiência"
  ];

  return (
    <>
      <SEOHead
        title="Valorum BPO | Terceirização Financeira"
        description="Terceirização financeira para sua empresa crescer com controle e clareza. Gestão financeira completa com processos definidos e acompanhamento contínuo."
        keywords="BPO financeiro, terceirização financeira, gestão financeira, contas a pagar, fluxo de caixa, conciliação bancária"
        canonical="https://valorum.vilsonrauch.com.br/bpo"
      />
      
      <div className="min-h-screen bg-background font-inter">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary pt-28 sm:pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto mb-8" />
              
              <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-6">
                BPO Financeiro
              </p>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight mb-6">
                Sua empresa cresce,{" "}
                <br className="hidden md:block" />
                mas o financeiro não acompanha.
                <br />
                <span className="text-blue-400">A gente resolve.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Contas a pagar, receber, conciliação bancária, fluxo de caixa e relatórios — tudo organizado, com processos definidos e acompanhamento contínuo.
              </p>

              <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
                Em vez de gastar tempo com tarefas operacionais, a gestão foca no crescimento. O financeiro funciona com disciplina e previsibilidade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-8 py-6 text-lg"
                  >
                    Quero um Diagnóstico Gratuito
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Fases do BPO Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Como funciona
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                As principais fases da nossa terceirização financeira
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {fases.map((item, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-primary rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer relative"
                >
                  <div className="absolute top-4 right-4 text-blue-400/30 text-4xl font-bold font-playfair">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-400/30 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-blue-400 mb-3">
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

        {/* Serviços Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                O que entregamos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Gestão financeira completa para sua empresa
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {servicos.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
                  Por que terceirizar o financeiro?
                </h2>
              </div>
              
              <div className="space-y-4">
                {diferenciais.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                Ideal para empresas que precisam de controle financeiro profissional
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Building2, title: "Empresas em crescimento" },
                { icon: Users, title: "Clínicas e Consultórios" },
                { icon: TrendingUp, title: "E-commerces" },
                { icon: Wallet, title: "Prestadores de serviço" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-2xl text-center border border-border/50 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Quer ter controle real do financeiro da sua empresa?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Terceirize o financeiro e ganhe tempo, clareza e previsibilidade para crescer com segurança.
            </p>
            <Link to="/contato">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-8 py-6 text-lg"
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

export default ValoromBPO;

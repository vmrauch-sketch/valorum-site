import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { Calculator, FileText, Building2, Users, Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ValoromContabil = () => {
  return (
    <>
      <SEOHead
        title="Valorum Contábil | Contabilidade para Holdings e Profissionais da Saúde"
        description="Contabilidade especializada em holding patrimonial e familiar. Time de especialistas para médicos e profissionais da saúde."
        keywords="contabilidade, holding patrimonial, holding familiar, contabilidade médicos, contabilidade saúde, serviços contábeis"
        canonical="https://valorum.vilsonrauch.com.br/contabil"
      />
      
      <div className="min-h-screen bg-background font-inter">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-8" />
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight mb-6">
                Valorum <span className="text-emerald-400">Contábil</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Uma forma diferente de cuidar de você, do seu negócio e do seu patrimônio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
                  >
                    Quero Saber Mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Nossas Especialidades
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expertise em áreas que exigem conhecimento específico
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
              <div className="p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                  Holding Patrimonial e Familiar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Especialistas em estruturação de holdings para proteção, planejamento sucessório e otimização tributária do seu patrimônio familiar.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                  Contabilidade para Saúde
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Time de especialistas dedicado a médicos e profissionais da saúde, com soluções personalizadas para clínicas, consultórios e hospitais.
                </p>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Nossos Serviços
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Serviços contábeis diferenciados para você e sua empresa
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Calculator, title: "Contabilidade Consultiva" },
                { icon: FileText, title: "Planejamento Tributário" },
                { icon: Building2, title: "Abertura de Empresas" },
                { icon: Users, title: "BPO Financeiro" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-muted/30 rounded-2xl text-center border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ValoromContabil;

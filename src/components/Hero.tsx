
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Send, TrendingUp, Landmark, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-50 pt-28 sm:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-navy-300/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-navy-300/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-navy-300/30 rounded-full"></div>
      </div>

      <div ref={elementRef} className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="sr-only">Valorum — Gestão de Investimentos e Consultoria Financeira Patrimonial</h1>
          {/* Logo/Brand Image */}
          <div className={`mb-8 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto">
              <img 
                src="/lovable-uploads/aee87d30-fa30-44ea-bc48-89ef4d0f7e2c.png" 
                alt="Valorum Logo" 
                width={600}
                height={600}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-contain drop-shadow-lg"
              />
              {/* Slogan sobreposto à imagem */}
              <div className="absolute bottom-6 md:bottom-8 left-0 right-0 text-center">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-3"></div>
                <p className="text-xl md:text-2xl font-playfair font-semibold italic text-gold-600 drop-shadow-md leading-[1.1]">
                  <span className="block">Clareza para decidir,</span>
                  <span className="block">segurança para crescer!</span>
                </p>
              </div>
            </div>
          </div>

          {/* Impact Phrase - Single Line */}
          <div className={`text-xl md:text-2xl font-inter mx-auto mb-8 text-navy-600 transform transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="block text-center">
              <span className="text-xl md:text-2xl text-navy-600 font-inter mb-2 block">
                Soluções Financeiras e de Investimentos!
              </span>
              
              {/* Sub-brand cards — estilo Trabalhe Conosco */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left max-w-6xl mx-auto">
                <Link to="/investimentos" className="p-8 rounded-2xl border-2 border-corporate-500/30 bg-gradient-to-br from-corporate-50 to-white hover:border-corporate-500 hover:shadow-xl transition-all duration-300 text-left group">
                  <div className="w-14 h-14 bg-gradient-to-br from-corporate-500 to-corporate-600 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-3">Investimentos</h3>
                  <p className="text-muted-foreground mb-4">Casa de investimentos independente com estratégia, transparência e foco na construção patrimonial.</p>
                  <span className="text-sm font-bold text-corporate-600 group-hover:underline">Conhecer solução →</span>
                </Link>

                <Link to="/patrimonio" className="p-8 rounded-2xl border-2 border-gold-500/30 bg-gradient-to-br from-gold-50 to-white hover:border-gold-500 hover:shadow-xl transition-all duration-300 text-left group">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mb-6">
                    <Landmark className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-3">Consultoria Financeira Patrimonial</h3>
                  <p className="text-muted-foreground mb-4">Planejamento patrimonial e sucessório completo. Transformando patrimônio em fonte de liberdade.</p>
                  <span className="text-sm font-bold text-gold-600 group-hover:underline">Conhecer solução →</span>
                </Link>

                <Link to="/estrategias-patrimoniais" className="p-8 rounded-2xl border-2 border-navy-500/30 bg-gradient-to-br from-navy-50 to-white hover:border-navy-500 hover:shadow-xl transition-all duration-300 text-left group">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-600 to-navy-700 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-3">Estratégias Patrimoniais e Holding</h3>
                  <p className="text-muted-foreground mb-4">Estruturação, proteção e sucessão patrimonial com segurança jurídica e tributária.</p>
                  <span className="text-sm font-bold text-navy-600 group-hover:underline">Conhecer solução →</span>
                </Link>
              </div>
              
              <span className="text-xl md:text-2xl text-navy-600 font-inter mb-4 block">
                Estratégia financeira, investimentos e gestão patrimonial para você{" "}
                <span className="whitespace-nowrap">e sua empresa.</span>
              </span>
              <span className="text-xl md:text-2xl text-navy-600 font-inter mb-6 block leading-relaxed">
                <span className="block">Clareza para decidir,</span>
                <span className="block">segurança para crescer!</span>
              </span>
            </span>
          </div>

          {/* CTA Button */}
          <div className={`transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a href="#contato">
              <Button 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Solicitar Análise
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };

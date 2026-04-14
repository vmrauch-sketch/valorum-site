
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-28 sm:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-navy-600/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-navy-600/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-navy-600/20 rounded-full"></div>
      </div>

      <div ref={elementRef} className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand Image */}
          <div className={`mb-8 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto">
              <img 
                src="/lovable-uploads/aee87d30-fa30-44ea-bc48-89ef4d0f7e2c.png" 
                alt="Valorum Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
              {/* Slogan sobreposto à imagem */}
              <div className="absolute bottom-8 md:bottom-16 left-0 right-0 text-center">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-3"></div>
                <p className="text-2xl md:text-3xl font-playfair font-semibold italic text-gold-600 drop-shadow-md">
                  Seu patrimônio, nossa obsessão!
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
              
              {/* Sub-brand buttons */}
               <div className="flex flex-wrap justify-center gap-4 mb-8 overflow-hidden">
                <Link to="/capital" className="group">
                  <div className="bg-gradient-to-r from-corporate-500 to-corporate-600 hover:from-corporate-600 hover:to-corporate-700 text-white rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-corporate-400/30 hover:border-corporate-300/50 min-w-[200px]">
                    <span className="block text-base font-bold tracking-wide">Investimentos</span>
                    <span className="block text-xs font-medium opacity-80 mt-0.5">Capital & Wealth</span>
                  </div>
                </Link>
                <Link to="/patrimonio" className="group">
                  <div className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-gold-400/30 hover:border-gold-300/50 min-w-[200px]">
                    <span className="block text-base font-bold tracking-wide">Consultoria Patrimonial</span>
                    <span className="block text-xs font-medium opacity-80 mt-0.5">Patrimônio</span>
                  </div>
                </Link>
              </div>
              
              {/* Sub-brand descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-3xl mx-auto">
                <Link to="/capital" className="p-4 rounded-lg bg-corporate-50 border-l-4 border-corporate-500 hover:shadow-md transition-all duration-300 group">
                  <h3 className="font-bold text-corporate-600 mb-0.5 text-base">Gestão de Investimentos</h3>
                  <span className="text-xs font-semibold text-corporate-400 uppercase tracking-wide block mb-2">Valorum Capital & Wealth</span>
                  <p className="text-sm text-gray-600 mb-3">Casa de investimentos independente com estratégia, transparência e foco na construção patrimonial.</p>
                  <span className="text-xs font-bold text-corporate-600 group-hover:underline">Conhecer solução →</span>
                </Link>
                <Link to="/patrimonio" className="p-4 rounded-lg bg-gold-50 border-l-4 border-gold-500 hover:shadow-md transition-all duration-300 group">
                  <h3 className="font-bold text-gold-600 mb-0.5 text-base">Planejamento Patrimonial</h3>
                  <span className="text-xs font-semibold text-gold-400 uppercase tracking-wide block mb-2">Valorum Patrimônio</span>
                  <p className="text-sm text-gray-600 mb-3">Planejamento patrimonial e sucessório completo. Transformando patrimônio em fonte de liberdade.</p>
                  <span className="text-xs font-bold text-gold-600 group-hover:underline">Conhecer solução →</span>
                </Link>
              </div>
              
              <span className="text-xl md:text-2xl text-navy-600 font-inter mb-4 block">
                Estratégia financeira, investimentos e gestão patrimonial para você e sua empresa.
              </span>
              <span className="text-xl md:text-2xl text-navy-600 font-inter mb-6 block leading-relaxed">
                Clareza para decidir. Segurança para crescer.
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

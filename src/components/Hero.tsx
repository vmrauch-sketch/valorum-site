
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
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
                alt="Valorum Capital Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            
            {/* Text below logo */}
            <div className="mt-6 space-y-2 mb-8">
              <p className="text-xl md:text-2xl font-inter font-medium text-navy-600">
                Consultoria Financeira
              </p>
              <p className="text-xl md:text-2xl font-inter font-medium text-navy-600">
                Gestão Patrimonial
              </p>
              <p className="text-xl md:text-2xl font-inter font-medium text-navy-600">
                Planejamento Financeiro
              </p>
            </div>
          </div>

          {/* Impact Phrase - Single Line */}
          <div className={`text-xl md:text-2xl font-inter mx-auto mb-8 text-navy-600 transform transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="block text-center">
              "Na Valorum, acreditamos que liberdade financeira não é apenas sobre dinheiro — é sobre reconhecer o que tem valor verdadeiro. Por isso, guiamos você com clareza, estrutura e independência para desbloquear seu potencial."
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-navy-600/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-navy-600/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export { Hero };

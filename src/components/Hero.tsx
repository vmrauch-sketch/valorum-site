
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
                src="/lovable-uploads/c6d2d18e-fee4-4fd6-b992-c5eb8a005aba.png" 
                alt="Valorum Capital Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Subtitle */}
          <h2 className={`text-2xl md:text-3xl font-inter font-light mb-8 text-navy-600 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Gestão Patrimonial e Planejamento Financeiro
          </h2>

          {/* Impact Phrase */}
          <blockquote className={`text-xl md:text-2xl font-inter italic max-w-4xl mx-auto leading-relaxed mb-8 px-6 py-4 rounded-lg text-navy-600 transform transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            "Transformando patrimônio em legado através de estratégias inteligentes."
          </blockquote>
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

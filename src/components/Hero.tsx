
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-600 via-navy-500 to-navy-400 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/09984386-7d2e-4b8f-9640-a82c1c3b9c6d.png" 
              alt="Vilson Rauch" 
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white/20 shadow-2xl"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            Vilson Rauch
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-inter font-light mb-8 text-white/90 animate-fade-in">
            Consultor de Investimentos CVM | Wealth Planner | Palestrante
          </h2>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl font-inter italic text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            "Transformando patrimônio em legado através de estratégias independentes e planejamento financeiro especializado"
          </blockquote>

          {/* CTA Button */}
          <div className="mt-12 animate-fade-in">
            <a 
              href="#contato" 
              className="inline-flex items-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-800 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Consultoria Especializada
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export { Hero };

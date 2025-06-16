


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0C1C2E' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gold-500/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-gold-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-gold-500/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative w-80 h-80 mx-auto">
              <img 
                src="/lovable-uploads/4cea6ec0-a75a-4577-8f73-838cd57fafc3.png" 
                alt="Valorum Capital Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-inter font-light mb-8 animate-fade-in" style={{ color: '#F4F4F4' }}>
            Consultoria em Gestão Patrimonial e Planejamento Financeiro
          </h2>

          {/* Impact Phrase */}
          <blockquote className="text-xl md:text-2xl font-inter italic max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in px-6 py-4 rounded-lg bg-navy-900/50 border border-gold-500/20" style={{ color: '#F4F4F4' }}>
            "Transformando patrimônio em legado através de estratégias inteligentes."
          </blockquote>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-500/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-500/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export { Hero };



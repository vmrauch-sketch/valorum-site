
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0F1F3D' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand Symbol */}
          <div className="mb-8 animate-fade-in">
            <div className="relative w-64 h-64 mx-auto">
              {/* Brand circle with V logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-500 to-corporate-600 rounded-full flex items-center justify-center">
                <span className="text-6xl font-playfair font-bold text-white">V</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in" style={{ color: '#F2F2F2' }}>
            Valorum Capital
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-inter font-light mb-8 animate-fade-in text-white/90">
            Consultoria em Gestão Patrimonial e Planejamento Financeiro
          </h2>

          {/* Impact Phrase */}
          <blockquote className="text-xl md:text-2xl font-inter italic max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in text-white px-6 py-4 rounded-lg" style={{ backgroundColor: '#0F1F3D' }}>
            "Transformando patrimônio em legado através de estratégias inteligentes."
          </blockquote>
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

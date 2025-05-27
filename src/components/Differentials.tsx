
const Differentials = () => {
  const differentials = [
    {
      title: "Credenciamento CVM",
      description: "Consultor de valores mobiliários regularizado",
      icon: "✅"
    },
    {
      title: "Independência Total",
      description: "Remuneração fee-based, sem comissões",
      icon: "✅"
    },
    {
      title: "Experiência Comprovada",
      description: "Sólida trajetória no mercado financeiro",
      icon: "✅"
    },
    {
      title: "Abordagem Educativa",
      description: "Foco em conhecimento e transparência",
      icon: "✅"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-navy-600 to-corporate-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 animate-fade-in">
            Diferenciais
          </h2>
          <p className="text-xl text-white/80 mb-12 animate-fade-in">
            O que nos torna únicos no mercado de consultoria financeira
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((differential, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-4">{differential.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {differential.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Differentials };

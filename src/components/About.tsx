
const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="sobre">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                  Sobre Vilson Rauch
                </h2>
                <h3 className="text-xl text-corporate-500 font-semibold mb-6">
                  Especialista em Gestão Patrimonial e Consultoria Independente
                </h3>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Vilson Rauch é consultor de valores mobiliários credenciado pela CVM, especialista em wealth planning com reconhecida experiência no mercado financeiro brasileiro. Como palestrante ativo, compartilha conhecimento sobre estratégias avançadas de investimento e planejamento patrimonial.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-financial-500">
                <h4 className="font-semibold text-navy-600 mb-3">Abordagem Profissional:</h4>
                <p className="text-gray-700">
                  Consultoria totalmente independente, sem conflitos de interesse, focada em soluções personalizadas para construção e preservação de patrimônio.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-financial-500">CVM</div>
                  <div className="text-sm text-gray-600">Credenciado</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-corporate-500">100%</div>
                  <div className="text-sm text-gray-600">Independente</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/4933d089-f7f0-4b82-bc6f-f6f2f0adb564.png" 
                alt="Vilson Rauch - Consultor" 
                className="w-full rounded-lg shadow-xl object-cover h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TrabalheConosco = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCandidaturaClick = () => {
    const message = encodeURIComponent("Olá, tenho interesse em me tornar um Wealth Planner da Valorum");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá, tenho interesse em me tornar um Wealth Planner da Valorum"\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá, tenho interesse em me tornar um Wealth Planner da Valorum"`);
      });
    } else {
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("Erro ao abrir WhatsApp:", error);
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Trabalhe Conosco | Valorum"
        description="Faça parte da Valorum como Wealth Planner e contribua para revolucionar o mercado de assessoria financeira com transparência, visão 360° e independência."
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-24">
          <section className="py-12 md:py-20" ref={sectionRef}>
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <h1 className="text-4xl md:text-6xl font-playfair font-bold text-navy-600 mb-6">
                    Seja um Wealth Planner da Valorum
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
                    Junte-se a nós e revolucione o mercado de assessoria financeira com transparência, independência e excelência.
                  </p>
                </div>

                {/* Filosofia Wealth Planning */}
                <div className={`bg-gradient-to-r from-gray-50 to-gray-100 p-8 md:p-12 rounded-xl transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Main Text */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 leading-tight">
                        O Wealth Planning é indiscutivelmente o melhor modelo de assessoria financeira para o cliente final.
                      </h2>
                      <p className="text-lg text-gray-700 mt-6 font-medium">
                        Pilares da nossa filosofia de atuação:
                      </p>
                    </div>

                    {/* Right Side - Numbered Points */}
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                          01
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-navy-600 mb-2">TRANSPARÊNCIA</h3>
                          <p className="text-gray-700">Se o cliente não sabe quanto paga, não há relação de confiança plena;</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                          02
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-navy-600 mb-2">VISÃO 360°</h3>
                          <p className="text-gray-700">O processo de assessoria financeira precisa ser holístico e hiperpersonalizado;</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                          03
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-navy-600 mb-2">COERÊNCIA COMPORTAMENTAL</h3>
                          <p className="text-gray-700">Precisa funcionar na vida real.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                          04
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-navy-600 mb-2">INDEPENDÊNCIA</h3>
                          <p className="text-gray-700">Representar uma única instituição, significa ser incapaz de oferecer o melhor para o cliente.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="text-center mt-12">
                    <button 
                      onClick={handleCandidaturaClick}
                      className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg transform hover:scale-105 transition-transform duration-200"
                    >
                      QUERO ME TORNAR UM WEALTH PLANNER DA VALORUM
                    </button>
                  </div>
                </div>

                {/* Por que trabalhar na Valorum */}
                <div className={`mt-16 transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 text-center mb-12">
                    Por que ser um Wealth Planner da Valorum?
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-bold text-navy-600 mb-4">Ambiente de Excelência</h3>
                      <p className="text-gray-700">
                        Trabalhe com os melhores profissionais do mercado em um ambiente que valoriza qualidade e resultados.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-bold text-navy-600 mb-4">Crescimento Profissional</h3>
                      <p className="text-gray-700">
                        Desenvolvimento contínuo com treinamentos, certificações e oportunidades de crescimento na carreira.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-xl font-bold text-navy-600 mb-4">Propósito e Impacto</h3>
                      <p className="text-gray-700">
                        Faça a diferença transformando a relação dos clientes com suas finanças através de consultoria independente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default TrabalheConosco;

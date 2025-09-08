import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { 
  User, 
  BarChart3, 
  Gem 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ParaVoce = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleEbookPlanejamentoClick = () => {
    console.log("ParaVoce: Ebook Planejamento clicado");
    const message = encodeURIComponent("Olá, tenho interesse em receber informações sobre o ebook de planejamento financeiro");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá, tenho interesse em receber informações sobre o ebook de planejamento financeiro"\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá, tenho interesse em receber informações sobre o ebook de planejamento financeiro"`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("ParaVoce: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Para Você - Consultoria Financeira Personalizada | Valorum"
        description="Consultoria de investimentos personalizada e gestão patrimonial para pessoas físicas. Planejamento financeiro, alocação de ativos e wealth planning."
        keywords="consultoria financeira pessoal, investimentos personalizados, gestão patrimonial, planejamento financeiro, wealth planning"
        canonical="https://valorum.vilsonrauch.com.br/para-voce"
      />
      
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <div className="pt-16">
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div ref={elementRef} className="text-center mb-16">
                  <div className={`relative inline-block transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                      Para Você
                    </h1>
                    <div className="absolute bottom-2 left-0 w-16 h-1 bg-gold-500"></div>
                  </div>
                  <p className={`text-xl text-gray-600 max-w-3xl mx-auto mt-8 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    Consultoria financeira personalizada e gestão patrimonial para pessoas físicas
                  </p>
                </div>

                <div className={`bg-navy-50 p-8 rounded-xl transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-xl font-bold text-navy-600 mb-4 flex items-center">
                        <BarChart3 size={24} className="mr-3 text-navy-600" />
                        Consultoria de Investimentos Personalizada
                      </h3>
                      <ul className="space-y-2 text-gray-700 mb-4">
                        <li>• Análise de perfil de risco</li>
                        <li>• Alocação estratégica de ativos</li>
                        <li>• Monitoramento contínuo</li>
                        <li>• Gestão profissional de investimentos</li>
                      </ul>
                      <button 
                        onClick={handleEbookPlanejamentoClick}
                        className="bg-navy-500 text-white px-4 py-2 rounded-lg hover:bg-navy-600 transition-colors text-sm"
                      >
                        Baixe ebook sobre planejamento financeiro
                      </button>
                    </div>

                    <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-xl font-bold text-navy-600 mb-4 flex items-center">
                        <Gem size={24} className="mr-3 text-navy-600" />
                        Construção Patrimonial e Wealth Planning
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Estruturação patrimonial familiar</li>
                        <li>• Proteção patrimonial e planejamento sucessório</li>
                        <li>• Análise e adequação de previdência privada</li>
                        <li>• Seguros e Proteções customizadas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Filosofia Wealth Planning */}
                <div className={`mt-16 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl transform transition-all duration-1000 ease-out delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
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
                          <p className="text-gray-700">Representa uma única instituição, significa ser incapaz de oferecer o melhor para o cliente.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="text-center mt-12">
                    <button 
                      onClick={() => {
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
                      }}
                      className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg transform hover:scale-105 transition-transform duration-200"
                    >
                      QUERO ME TORNAR UM WEALTH PLANNER DA VALORUM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ParaVoce;
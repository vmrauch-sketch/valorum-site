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

  const handleAgendarReuniaoClick = () => {
    console.log("ParaVoce: Agendar reunião clicado");
    const message = encodeURIComponent("Agendar uma reunião com um consultor");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Agendar uma reunião com um consultor"\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Agendar uma reunião com um consultor"`);
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
        <div className="pt-28 sm:pt-16">
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
                  <div className={`max-w-3xl mx-auto mt-8 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-2xl font-semibold text-navy-600 mb-2">
                      Gestão financeira completa, do jeito certo.
                    </p>
                    <p className="text-xl text-gray-600 mb-3">
                      Revolucionamos o conceito de atendimento no mercado financeiro.
                    </p>
                    <p className="text-xl font-semibold text-navy-600">
                      O resultado de nossos clientes vem em 1º lugar.
                    </p>
                  </div>
                </div>

                <div className={`text-center my-12 transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <button
                    onClick={handleAgendarReuniaoClick}
                    className="w-full max-w-2xl mx-auto px-8 py-4 bg-gold-500 text-white font-semibold text-lg rounded-lg hover:bg-gold-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Agendar uma reunião com um consultor
                  </button>
                </div>

                {/* Seção de Benefícios */}
                <div className={`bg-white py-16 transform transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 text-center mb-12">
                    Benefícios de Investir com a Valorum:
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <span className="text-6xl font-bold text-gray-400">01</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-600 mb-3">
                          Cashback de investimentos em Renda Fixa e Aluguel de Ativos
                        </h3>
                        <p className="text-gray-600">
                          Devolvemos a comissão da indicação do investimento direto na sua conta. Seu dinheiro rende mais, e você paga menos. Simples.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <span className="text-6xl font-bold text-gray-400">02</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-600 mb-3">
                          Os custos mais transparentes do mercado
                        </h3>
                        <p className="text-gray-600">
                          Operações sem conflito de interesse. Você nunca vai tomar susto com seus rendimentos.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <span className="text-6xl font-bold text-gray-400">03</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-600 mb-3">
                          Conta Internacional & Crypto
                        </h3>
                        <p className="text-gray-600">
                          Investimentos dolarizados no mercado internacional e em criptoativos. Nosso acesso vai além do mercado brasileiro.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <span className="text-6xl font-bold text-gray-400">04</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-600 mb-3">
                          Assessoria Especializada
                        </h3>
                        <p className="text-gray-600">
                          Acompanhamento personalizado e estratégias sob medida para o seu perfil e objetivos financeiros.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`bg-navy-50 p-8 rounded-xl transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-xl font-bold text-navy-600 mb-4 flex items-center">
                        <BarChart3 size={24} className="mr-3 text-navy-600" />
                        Consultoria de Investimentos
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Análise de perfil de risco</li>
                        <li>• Alocação estratégica de ativos</li>
                        <li>• Monitoramento contínuo</li>
                        <li>• Gestão profissional de investimentos</li>
                      </ul>
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
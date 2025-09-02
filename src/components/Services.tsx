
import { 
  User, 
  Building, 
  BarChart3, 
  Gem, 
  FileText, 
  DollarSign, 
  GraduationCap 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleEbookFIDCClick = () => {
    console.log("Services: Ebook FIDC clicado");
    const message = encodeURIComponent("Olá gostaria de mais informações");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá gostaria de mais informações"\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá gostaria de mais informações"`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("Services: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  const handleEbookRecuperacaoClick = () => {
    console.log("Services: Ebook Recuperação clicado");
    const message = encodeURIComponent("Olá gostaria de mais informações");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá gostaria de mais informações"\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá gostaria de mais informações"`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("Services: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  const handleEbookPlanejamentoClick = () => {
    console.log("Services: Ebook Planejamento clicado");
    const message = encodeURIComponent("Olá gostaria de mais informações");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá gostaria de mais informações"\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá gostaria de mais informações"`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("Services: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  return (
    <section className="py-20 bg-white" id="servicos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={elementRef} className="text-center mb-16">
            <div className={`relative inline-block transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
                Nossos Serviços
              </h2>
              <div className="absolute bottom-2 left-0 w-16 h-1 bg-gold-500"></div>
            </div>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto mt-8 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Soluções completas em consultoria financeira e gestão patrimonial
            </p>
          </div>

          {/* Pessoa Física */}
          <div id="pessoa-fisica" className="mb-16">
            <div className={`bg-navy-50 p-8 rounded-xl transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h3 className="text-3xl font-playfair font-bold text-navy-600 mb-6 flex items-center">
                <User size={32} className="mr-4 text-navy-600" />
                Pessoa Física
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h4 className="text-xl font-bold text-navy-600 mb-4 flex items-center">
                    <BarChart3 size={24} className="mr-3 text-navy-600" />
                    Consultoria de Investimentos Personalizada
                  </h4>
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
                  <h4 className="text-xl font-bold text-navy-600 mb-4 flex items-center">
                    <Gem size={24} className="mr-3 text-navy-600" />
                    Gestão Patrimonial e Wealth Planning
                  </h4>
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

          {/* Pessoa Jurídica */}
          <div id="pessoa-juridica" className="mb-16">
            <div className={`bg-financial-50 p-8 rounded-xl transform transition-all duration-1000 ease-out delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h3 className="text-3xl font-playfair font-bold text-financial-600 mb-6 flex items-center">
                <Building size={32} className="mr-4 text-financial-600" />
                Pessoa Jurídica
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h4 className="text-xl font-bold text-financial-600 mb-4">
                    Consultoria Financeira Empresarial
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Gestão de caixa corporativo</li>
                    <li>• Estruturação de investimentos empresariais</li>
                    <li>• Planejamento financeiro estratégico</li>
                    <li>• Leilão de Crédito para otimização</li>
                  </ul>
                </div>

                <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h4 className="text-xl font-bold text-financial-600 mb-4">
                    Recuperação Tributária
                  </h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Diagnóstico de créditos recuperáveis</li>
                    <li>• Assessoria em restituição e compensação</li>
                    <li>• Estruturação segura dos processos</li>
                    <li>• Otimização da carga tributária</li>
                  </ul>
                  <button 
                    onClick={handleEbookRecuperacaoClick}
                    className="bg-financial-500 text-white px-4 py-2 rounded-lg hover:bg-financial-600 transition-colors text-sm"
                  >
                    Baixe o ebook sobre recuperação tributária
                  </button>
                </div>

                <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-1700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h4 className="text-xl font-bold text-financial-600 mb-4 flex items-center">
                    <FileText size={20} className="mr-2 text-financial-600" />
                    FIDC e Estratégias Tributárias
                  </h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Estruturação e participação em FIDCs</li>
                    <li>• Captação e gestão de fluxo de caixa</li>
                    <li>• Planejamento tributário eficiente</li>
                  </ul>
                  <button 
                    onClick={handleEbookFIDCClick}
                    className="bg-financial-500 text-white px-4 py-2 rounded-lg hover:bg-financial-600 transition-colors text-sm"
                  >
                    Baixe o ebook sobre FIDC
                  </button>
                </div>

                <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-1900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h4 className="text-xl font-bold text-financial-600 mb-4 flex items-center">
                    <GraduationCap size={20} className="mr-2 text-financial-600" />
                    Educação Financeira Corporativa
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Workshops para equipes e gestores</li>
                    <li>• Mentoria financeira estratégica</li>
                    <li>• Palestras sobre Finanças Pessoais</li>
                    <li>• Palestras de empreendedorismo e liderança</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };

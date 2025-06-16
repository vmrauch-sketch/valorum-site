import { 
  User, 
  Building, 
  Stethoscope, 
  BarChart3, 
  Gem, 
  TrendingUp, 
  FileText, 
  DollarSign, 
  GraduationCap 
} from "lucide-react";

const Services = () => {
  const handleEbookFIDCClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de baixar o ebook sobre FIDC e estratégias tributárias.");
    window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
  };

  const handleEbookRecuperacaoClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de baixar o ebook sobre recuperação tributária.");
    window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
  };

  const handleEbookPlanejamentoClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de baixar o ebook sobre planejamento financeiro.");
    window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
  };

  const handleMedicinaClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o atendimento especializado para profissionais da medicina e saúde.");
    window.open(`https://wa.me/5511949566290?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-white" id="servicos">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-600 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em consultoria financeira e gestão patrimonial
            </p>
          </div>

          {/* Pessoa Física */}
          <div id="pessoa-fisica" className="mb-16 animate-fade-in">
            <div className="bg-navy-50 p-8 rounded-xl">
              <h3 className="text-3xl font-playfair font-bold text-navy-600 mb-6 flex items-center">
                <User size={32} className="mr-4 text-navy-600" />
                Pessoa Física
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
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

                <div className="bg-white p-6 rounded-lg shadow-sm">
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

          {/* Profissionais da Medicina */}
          <div id="profissionais-medicina" className="mb-16 animate-fade-in">
            <div className="bg-corporate-50 p-8 rounded-xl">
              <h3 className="text-3xl font-playfair font-bold text-corporate-600 mb-6 flex items-center">
                <Stethoscope size={32} className="mr-4 text-corporate-600" />
                Profissionais da Medicina e Saúde
              </h3>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-corporate-600 mb-4">
                  Atendimento Especializado
                </h4>
                <p className="text-gray-700 mb-4">
                  Atendimento exclusivo para profissionais da medicina, considerando 
                  peculiaridades de rotina, planejamento patrimonial e questões tributárias específicas.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Planejamento financeiro para alta renda</li>
                  <li>• Estruturação patrimonial específica para médicos</li>
                  <li>• Otimização tributária para profissionais liberais</li>
                  <li>• Proteção patrimonial especializada</li>
                  <li>• Previdência privada customizada</li>
                </ul>
                <button 
                  onClick={handleMedicinaClick}
                  className="bg-corporate-500 text-white px-6 py-2 rounded-lg hover:bg-corporate-600 transition-colors"
                >
                  Clique aqui para saber mais
                </button>
              </div>
            </div>
          </div>

          {/* Pessoa Jurídica */}
          <div id="pessoa-juridica" className="mb-16 animate-fade-in">
            <div className="bg-financial-50 p-8 rounded-xl">
              <h3 className="text-3xl font-playfair font-bold text-financial-600 mb-6 flex items-center">
                <Building size={32} className="mr-4 text-financial-600" />
                Pessoa Jurídica
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
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

                <div className="bg-white p-6 rounded-lg shadow-sm">
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

                <div className="bg-white p-6 rounded-lg shadow-sm">
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

                <div className="bg-white p-6 rounded-lg shadow-sm">
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

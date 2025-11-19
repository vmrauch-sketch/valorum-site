import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { 
  Building, 
  FileText, 
  GraduationCap,
  CreditCard,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  BarChart3,
  Users,
  CheckCircle,
  Zap,
  Target,
  Calculator,
  BookOpen,
  HandHeart,
  PieChart,
  ArrowUpRight,
  RefreshCw,
  Lightbulb
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ParaSeuNegocio = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const handleEbookFIDCClick = () => {
    console.log("ParaSeuNegocio: Ebook FIDC clicado");
    const message = encodeURIComponent("Olá, tenho interesse em receber informações sobre o ebook de FIDC");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá, tenho interesse em receber informações sobre o ebook de FIDC"\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá, tenho interesse em receber informações sobre o ebook de FIDC"`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("ParaSeuNegocio: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  const handleEbookRecuperacaoClick = () => {
    console.log("ParaSeuNegocio: Ebook Recuperação clicado");
    const message = encodeURIComponent("Olá, tenho interesse em receber informações sobre o ebook de recuperação tributária");
    const url = `https://wa.me/5511949566290?text=${message}`;
    
    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');
    
    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: +55 11 94956-6290\nMensagem: "Olá, tenho interesse em receber informações sobre o ebook de recuperação tributária"\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: +55 11 94956-6290\n\nMensagem: "Olá, tenho interesse em receber informações sobre o ebook de recuperação tributária"`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("ParaSeuNegocio: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Para Seu Negócio - Consultoria Financeira Empresarial | Valorum"
        description="Consultoria financeira empresarial, recuperação tributária, FIDC e educação financeira corporativa. Soluções completas para empresas."
        keywords="consultoria financeira empresarial, recuperação tributária, FIDC, gestão caixa corporativo, educação financeira corporativa"
        canonical="https://valorum.vilsonrauch.com.br/para-seu-negocio"
      />
      
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <div className="pt-16">
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div ref={elementRef} className="text-center mb-16">
                  <div className={`relative inline-block transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-financial-600 mb-4">
                      Para Seu Negócio
                    </h1>
                    <div className="absolute bottom-2 left-0 w-16 h-1 bg-gold-500"></div>
                  </div>
                  <p className={`text-xl text-gray-600 max-w-3xl mx-auto mt-8 transform transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    Soluções financeiras completas para empresas e negócios
                  </p>
                </div>

                <div className={`bg-financial-50 p-8 rounded-xl transform transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <h2 className="text-3xl font-playfair font-bold text-financial-600 mb-6 flex items-center">
                    <Building size={32} className="mr-4 text-financial-600" />
                    Seu negócio competitivo com :
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-xl font-bold text-financial-600 mb-4 flex items-center">
                        <DollarSign size={20} className="mr-2 text-financial-600" />
                        Conta Digital PJ
                      </h3>
                      <p className="text-gray-700 mb-3 font-medium">Com possibilidade de:</p>
                       <ul className="space-y-3 text-gray-700">
                         <li className="flex items-center">
                           <Shield size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Tarifa zero de manutenção</span>
                         </li>
                         <li className="flex items-center">
                           <Zap size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Pix ilimitadas e sem custo</span>
                         </li>
                         <li className="flex items-center">
                           <Users size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Folha de pagamento 100% digital</span>
                         </li>
                         <li className="flex items-center">
                           <Globe size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Câmbio rápido e 100% online</span>
                         </li>
                         <li className="flex items-center">
                           <RefreshCw size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Pix Automático para recorrência</span>
                         </li>
                       </ul>
                    </div>

                    <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-xl font-bold text-financial-600 mb-4 flex items-center">
                        <CreditCard size={20} className="mr-2 text-financial-600" />
                        Cartões de Crédito PJ
                      </h3>
                      <p className="text-gray-700 mb-3 font-medium">Com possibilidade de:</p>
                       <ul className="space-y-3 text-gray-700">
                         <li className="flex items-center">
                           <Globe size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>IOF zero em compras internacionais</span>
                         </li>
                         <li className="flex items-center">
                           <CreditCard size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Pix Parcelado no cartão</span>
                         </li>
                         <li className="flex items-center">
                           <BarChart3 size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Gestão de liquidez otimizada</span>
                         </li>
                         <li className="flex items-center">
                           <Target size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Controle total de gastos</span>
                         </li>
                         <li className="flex items-center">
                           <HandHeart size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Soluções de pagamento flexíveis</span>
                         </li>
                       </ul>
                    </div>

                    <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-xl font-bold text-financial-600 mb-4 flex items-center">
                        <TrendingUp size={20} className="mr-2 text-financial-600" />
                        Investimentos Empresariais
                      </h3>
                      <p className="text-gray-700 mb-3 font-medium">Com possibilidade de:</p>
                       <ul className="space-y-3 text-gray-700">
                         <li className="flex items-center">
                           <PieChart size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Gestão de caixa corporativo</span>
                         </li>
                         <li className="flex items-center">
                           <TrendingUp size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Estruturação de investimentos</span>
                         </li>
                         <li className="flex items-center">
                           <Target size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Planejamento financeiro estratégico</span>
                         </li>
                         <li className="flex items-center">
                           <ArrowUpRight size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Leilão de Crédito para otimização</span>
                         </li>
                         <li className="flex items-center">
                           <BarChart3 size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Diversificação de ativos</span>
                         </li>
                       </ul>
                    </div>

                    <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-xl font-bold text-financial-600 mb-4">
                        Recuperação Tributária
                      </h3>
                       <ul className="space-y-3 text-gray-700 mb-4">
                         <li className="flex items-center">
                           <Calculator size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Diagnóstico de créditos recuperáveis</span>
                         </li>
                         <li className="flex items-center">
                           <CheckCircle size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Assessoria em restituição e compensação</span>
                         </li>
                         <li className="flex items-center">
                           <Shield size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Estruturação segura dos processos</span>
                         </li>
                         <li className="flex items-center">
                           <ArrowUpRight size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Otimização da carga tributária</span>
                         </li>
                        </ul>
                    </div>

                    <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-xl font-bold text-financial-600 mb-4 flex items-center">
                        <FileText size={20} className="mr-2 text-financial-600" />
                        FIDC e Estratégias Tributárias
                      </h3>
                       <ul className="space-y-3 text-gray-700 mb-4">
                         <li className="flex items-center">
                           <FileText size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Estruturação e participação em FIDCs</span>
                         </li>
                         <li className="flex items-center">
                           <TrendingUp size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Captação e gestão de fluxo de caixa</span>
                         </li>
                         <li className="flex items-center">
                           <BarChart3 size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Planejamento tributário eficiente</span>
                         </li>
                        </ul>
                    </div>

                    <div className={`bg-white p-6 rounded-lg shadow-sm transform transition-all duration-1000 ease-out delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-xl font-bold text-financial-600 mb-4 flex items-center">
                        <GraduationCap size={20} className="mr-2 text-financial-600" />
                        Educação Financeira Corporativa
                      </h3>
                       <ul className="space-y-3 text-gray-700">
                         <li className="flex items-center">
                           <Users size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Workshops para equipes e gestores</span>
                         </li>
                         <li className="flex items-center">
                           <Lightbulb size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Mentoria financeira estratégica</span>
                         </li>
                         <li className="flex items-center">
                           <BookOpen size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Palestras sobre Finanças Pessoais</span>
                         </li>
                         <li className="flex items-center">
                           <GraduationCap size={16} className="mr-3 text-financial-500 flex-shrink-0" />
                           <span>Palestras de empreendedorismo e liderança</span>
                         </li>
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

export default ParaSeuNegocio;
import { AdvancedStrategies } from "@/components/AdvancedStrategies";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { SEOData, StructuredData } from "@/data/seoData";

const AreasEspecializacao = () => {
  return (
    <>
      <SEOHead
        title={SEOData.especializacoes.title}
        description={SEOData.especializacoes.description}
        keywords={SEOData.especializacoes.keywords}
        canonical="https://valorum.vilsonrauch.com.br/especializacoes"
        structuredData={StructuredData.especializacoesPage}
      />
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <div className="pt-28 sm:pt-16">
          <h1 className="sr-only">Áreas de Especialização da Valorum</h1>
          <AdvancedStrategies />
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default AreasEspecializacao;

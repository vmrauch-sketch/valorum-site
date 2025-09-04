import { Services } from "@/components/Services";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { SEOData } from "@/data/seoData";

const Servicos = () => {
  return (
    <>
      <SEOHead
        title={SEOData.services.title}
        description={SEOData.services.description}
        keywords={SEOData.services.keywords}
        canonical="https://valorum.vilsonrauch.com.br/servicos"
      />
      
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <div className="pt-16">
          <Services />
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Servicos;
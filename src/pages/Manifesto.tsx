import { Manifesto as ManifestoComponent } from "@/components/Manifesto";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { SEOData, StructuredData } from "@/data/seoData";

const Manifesto = () => {
  return (
    <>
      <SEOHead
        title={SEOData.manifesto.title}
        description={SEOData.manifesto.description}
        keywords={SEOData.manifesto.keywords}
        canonical="https://valorum.vilsonrauch.com.br/manifesto"
        structuredData={StructuredData.manifestoPage}
      />
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <div className="pt-28 sm:pt-16">
          <h1 className="sr-only">Manifesto Valorum por Liberdade Financeira</h1>
          <ManifestoComponent />
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Manifesto;

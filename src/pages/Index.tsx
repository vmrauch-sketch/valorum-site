
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HowWeWork } from "@/components/HowWeWork";
import { SEOHead } from "@/components/SEOHead";
import { SEOData, StructuredData } from "@/data/seoData";
import LeadContactForm from "@/components/LeadContactForm";

const Index = () => {
  return (
    <>
      <SEOHead
        title={SEOData.valorum.title}
        description={SEOData.valorum.description}
        keywords={SEOData.valorum.keywords}
        canonical="https://valorum.vilsonrauch.com.br"
        structuredData={StructuredData.organization}
      />
      
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <Hero />
        <HowWeWork />

        {/* Formulário de Contato */}
        <section id="contato" className="py-24 bg-[#0a1628] scroll-mt-28">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                Solicite sua <span className="text-[#c9a962]">análise gratuita</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Preencha o formulário e nossa equipe entrará em contato para entender seus objetivos e apresentar solução personalizada.
              </p>
            </div>
            <LeadContactForm />
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;

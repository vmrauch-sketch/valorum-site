import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import LeadContactForm from "@/components/LeadContactForm";

const Contato = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <section className="pt-28 sm:pt-24 py-24 bg-[#0a1628] scroll-mt-28">
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
  );
};

export default Contato;

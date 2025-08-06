import { Services } from "@/components/Services";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Servicos = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicos;
import { AdvancedStrategies } from "@/components/AdvancedStrategies";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const AreasEspecializacao = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-16">
        <AdvancedStrategies />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AreasEspecializacao;
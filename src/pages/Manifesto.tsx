import { Manifesto as ManifestoComponent } from "@/components/Manifesto";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-28 sm:pt-16">
        <ManifestoComponent />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Manifesto;
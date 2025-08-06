import { Services } from "@/components/Services";
import { Navigation } from "@/components/Navigation";

const Servicos = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-16">
        <Services />
      </div>
    </div>
  );
};

export default Servicos;
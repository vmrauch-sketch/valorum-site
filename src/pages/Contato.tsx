import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Contato = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Contato;
import { Manifesto as ManifestoComponent } from "@/components/Manifesto";
import { Navigation } from "@/components/Navigation";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-16">
        <ManifestoComponent />
      </div>
    </div>
  );
};

export default Manifesto;
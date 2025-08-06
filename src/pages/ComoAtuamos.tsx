import { HowWeWork } from "@/components/HowWeWork";
import { Navigation } from "@/components/Navigation";

const ComoAtuamos = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <div className="pt-16">
        <HowWeWork />
      </div>
    </div>
  );
};

export default ComoAtuamos;
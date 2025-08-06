
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HowWeWork } from "@/components/HowWeWork";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <Hero />
      <HowWeWork />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

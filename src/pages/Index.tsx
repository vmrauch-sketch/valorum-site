
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Credentials } from "@/components/Credentials";
import { Differentials } from "@/components/Differentials";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Hero />
      <About />
      <Credentials />
      <Differentials />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

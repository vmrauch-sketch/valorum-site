import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Manifesto from "./pages/Manifesto";
import ComoAtuamos from "./pages/ComoAtuamos";
import AreasEspecializacao from "./pages/AreasEspecializacao";
import ProtocoloMaisRenda from "./pages/ProtocoloMaisRenda";
import VilsonRauch from "./pages/VilsonRauch";
import ParaVoce from "./pages/ParaVoce";
import ParaSeuNegocio from "./pages/ParaSeuNegocio";
import Contato from "./pages/Contato";
import TrabalheConosco from "./pages/TrabalheConosco";
import ValoromCapital from "./pages/ValoromCapital";
import ValoromContabil from "./pages/ValoromContabil";
import ValoromPatrimonio from "./pages/ValoromPatrimonio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/especializacoes" element={<ComoAtuamos />} />
          <Route path="/estrategias" element={<AreasEspecializacao />} />
          <Route path="/protocolo-mais-renda" element={<ProtocoloMaisRenda />} />
          <Route path="/vilson-rauch" element={<VilsonRauch />} />
          <Route path="/para-voce" element={<ParaVoce />} />
          <Route path="/para-seu-negocio" element={<ParaSeuNegocio />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/capital" element={<ValoromCapital />} />
          <Route path="/contabil" element={<ValoromContabil />} />
          <Route path="/patrimonio" element={<ValoromPatrimonio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

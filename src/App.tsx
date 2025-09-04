import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Manifesto from "./pages/Manifesto";
import ComoAtuamos from "./pages/ComoAtuamos";
import AreasEspecializacao from "./pages/AreasEspecializacao";
import ProtocoloMaisRenda from "./pages/ProtocoloMaisRenda";
import VilsonRauch from "./pages/VilsonRauch";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/especializacoes" element={<ComoAtuamos />} />
          <Route path="/estrategias" element={<AreasEspecializacao />} />
          <Route path="/protocolo-mais-renda" element={<ProtocoloMaisRenda />} />
          <Route path="/vilson-rauch" element={<VilsonRauch />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

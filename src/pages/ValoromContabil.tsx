import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { 
  Calculator, 
  FileText, 
  Building2, 
  Users, 
  Heart, 
  Home,
  Store,
  Utensils,
  GraduationCap,
  Pill,
  PawPrint,
  Factory,
  Fuel,
  ShoppingBag,
  Briefcase,
  Network
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ValoromContabil = () => {
  const especialidades = [
    { icon: Home, title: "Holding Patrimonial e Familiar", description: "Proteção, planejamento sucessório e otimização tributária" },
    { icon: Heart, title: "Profissionais da Saúde", description: "Médicos, dentistas, clínicas e hospitais" },
    { icon: Store, title: "Lojas de Shopping", description: "Contabilidade especializada para lojistas" },
    { icon: Utensils, title: "Restaurantes e Bares", description: "Gestão contábil para food service" },
    { icon: GraduationCap, title: "Escolas e Instituições", description: "Contabilidade para educação" },
    { icon: Pill, title: "Farmácias e Drogarias", description: "Especialistas no setor farmacêutico" },
    { icon: PawPrint, title: "Pet Shops e Clínicas Veterinárias", description: "Contabilidade para o mercado pet" },
    { icon: Factory, title: "Indústria", description: "Gestão contábil industrial" },
    { icon: Fuel, title: "Postos de Combustíveis", description: "Contabilidade especializada em combustíveis" },
    { icon: ShoppingBag, title: "Comércios", description: "Soluções para varejo e atacado" },
    { icon: Briefcase, title: "Prestadores de Serviços", description: "Contabilidade para serviços especializados" },
    { icon: Network, title: "Franqueadoras", description: "Gestão contábil para redes de franquias" },
  ];

  return (
    <>
      <SEOHead
        title="Valorum Contábil | Contabilidade Especializada por Segmento"
        description="Contabilidade especializada em holding patrimonial, profissionais da saúde, comércios, indústria, restaurantes, farmácias e muito mais."
        keywords="contabilidade, holding patrimonial, holding familiar, contabilidade médicos, contabilidade saúde, contabilidade restaurantes, contabilidade farmácias, contabilidade indústria"
        canonical="https://valorum.vilsonrauch.com.br/contabil"
      />
      
      <div className="min-h-screen bg-background font-inter">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-8" />
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight mb-6">
                Valorum <span className="text-emerald-400">Contábil</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Contabilidade especializada para cada segmento do seu negócio
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
                  >
                    Quero Saber Mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Contabilidade Especializada
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cada segmento tem suas particularidades. Por isso, oferecemos soluções contábeis específicas para atender às necessidades do seu negócio.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {especialidades.map((item, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Nossos Serviços
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Serviços contábeis diferenciados para você e sua empresa
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Calculator, title: "Contabilidade Consultiva" },
                { icon: FileText, title: "Planejamento Tributário" },
                { icon: Building2, title: "Abertura de Empresas" },
                { icon: Users, title: "BPO Financeiro" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-2xl text-center border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Não encontrou seu segmento?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Entre em contato e descubra como podemos ajudar o seu negócio com soluções contábeis personalizadas.
            </p>
            <Link to="/contato">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Fale Conosco
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ValoromContabil;

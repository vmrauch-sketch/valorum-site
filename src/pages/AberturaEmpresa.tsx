import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle,
  FileText,
  Send,
  Settings,
  CheckCircle,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Como faço para abrir minha empresa?",
    answer: "Entre em contato conosco que vamos passar a relação de documentos necessária para que você abra sua empresa com rapidez e segurança. Em poucos dias você terá o CNPJ em mãos."
  },
  {
    question: "Quais documentos são necessários para abertura da empresa?",
    answer: "Documentos de identificação, última declaração do Imposto de Renda e cópia simples do comprovante de residência."
  },
  {
    question: "Quanto custa abrir uma empresa?",
    answer: "O valor cobrado levará em consideração o tamanho da sua empresa e faturamento. Entre em contato e solicite uma proposta, sem compromisso."
  },
  {
    question: "Quanto tempo leva para abrir uma empresa?",
    answer: "O prazo pode variar conforme o tipo de empresa e a localidade, mas trabalhamos para que todo o processo seja concluído o mais rápido possível."
  },
  {
    question: "A Valorum atende empresas de todo o Brasil?",
    answer: "Sim, atendemos clientes em todas as regiões do Brasil, com processos 100% digitais e seguros."
  },
];

const steps = [
  { number: 1, title: "Entre em contato com a Valorum" },
  { number: 2, title: "Informe que deseja abrir sua empresa" },
  { number: 3, title: "Envie a documentação necessária" },
  { number: 4, title: "Iniciaremos o processo" },
  { number: 5, title: "Enviaremos o número do seu CNPJ" },
];

const AberturaEmpresa = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappUrl = "https://wa.me/5511949566290?text=Ol%C3%A1%2C%20gostaria%20de%20abrir%20minha%20empresa%20com%20a%20Valorum";

  return (
    <>
      <SEOHead
        title="Abertura de Empresa - Abra seu CNPJ com Segurança | Valorum Contábil"
        description="Abra sua empresa sem burocracia. A Valorum cuida de todo o processo de forma simples e segura. Fale com um contador especializado."
        keywords="abertura de empresa, abrir CNPJ, abrir empresa, contabilidade abertura empresa, MEI, LTDA, registro empresa"
        canonical="https://valorum.vilsonrauch.com.br/abra-sua-empresa"
      />

      <div className="min-h-screen bg-background font-inter">
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary pt-28 sm:pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight mb-6">
                Abra sua empresa{" "}
                <span className="text-emerald-400">sem burocracia</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-2xl mb-8">
                Nunca foi tão simples abrir a sua empresa. A Valorum cuida de todo o procedimento de forma simples e segura, pois nosso principal objetivo é ajudar seu negócio.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Falar com um Contador
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Processo - 5 Passos */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Como funciona o processo de{" "}
                <span className="text-emerald-500">abertura de empresa</span>
                <br />com a Valorum Contábil?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="text-4xl font-playfair font-bold text-emerald-500 mb-3">
                    {step.number}
                  </div>
                  <p className="text-base text-muted-foreground font-medium leading-relaxed">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Falar com um Contador
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                Vantagens em contratar a
              </h2>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-emerald-400 mb-10">
                Valorum Contábil
              </h2>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
                {[
                  "Contabilidade moderna e alinhada às melhores práticas de gestão.",
                  "Serviços especializados para apoiar o crescimento do seu negócio.",
                  "Experiência e conhecimento para orientar decisões com segurança.",
                  "Atendimento próximo, personalizado e focado nas necessidades do cliente.",
                  "Equipe preparada para estruturar e fortalecer sua empresa.",
                  "Integração da contabilidade com a realidade do seu negócio.",
                  "Consultoria estratégica para apoiar sua gestão financeira e tributária.",
                  "Valorização e organização do patrimônio empresarial.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-200 text-xl">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-5">
                <div className="flex items-start gap-3 text-gray-200 text-lg">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✔</span>
                  <span>Mais eficiência para que você economize tempo e recursos.</span>
                </div>
              </div>

              <div className="mt-10 text-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Falar com um Contador
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-12 text-center">
                Dúvidas Frequentes
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-border/50 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                    >
                      <span className="font-semibold text-primary text-lg pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`flex-shrink-0 text-emerald-500 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                        size={20}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              Abra sua empresa com quem entende do assunto
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Fale com um contador especializado e comece seu negócio com segurança e tranquilidade.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg"
              >
                <MessageCircle className="mr-2" size={20} />
                Falar com um Contador
              </Button>
            </a>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default AberturaEmpresa;

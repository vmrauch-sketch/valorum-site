import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Como funciona a troca de contador?",
    answer: "Basta entrar em contato conosco. Nossa equipe cuida de todo o processo de migração, desde a solicitação da documentação até a transição completa, sem que você precise se preocupar com nada."
  },
  {
    question: "A migração tem algum custo?",
    answer: "A migração é totalmente gratuita. Você não paga nada para transferir sua contabilidade para a Valorum."
  },
  {
    question: "Preciso comunicar meu contador atual?",
    answer: "Sim, mas nós cuidamos dessa comunicação para você. Solicitamos toda a documentação necessária diretamente ao seu contador atual."
  },
  {
    question: "Quanto tempo leva o processo de migração?",
    answer: "O prazo varia conforme a complexidade da empresa, mas trabalhamos para que a transição seja a mais rápida e tranquila possível."
  },
  {
    question: "Vou perder alguma informação durante a migração?",
    answer: "Não. Todo o histórico contábil e fiscal da sua empresa é preservado durante o processo de migração."
  },
];

const steps = [
  { number: 1, title: "Entre em contato com a nossa equipe" },
  { number: 2, title: "Realizaremos uma reunião para entender suas necessidades" },
  { number: 3, title: "Solicitaremos a documentação e daremos início à migração" },
  { number: 4, title: "A migração é totalmente gratuita" },
];

const TroqueDeContador = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappUrl = "https://wa.me/5511949566290?text=Ol%C3%A1%2C%20gostaria%20de%20migrar%20minha%20contabilidade%20para%20a%20Valorum";

  return (
    <>
      <SEOHead
        title="Troque de Contador - Migração Gratuita | Valorum Contábil"
        description="Migre sua contabilidade para a Valorum de forma gratuita, descomplicada e segura. Nossa equipe cuida de todo o processo."
        keywords="trocar de contador, migração contabilidade, mudar de contador, trocar contabilidade, migração gratuita"
        canonical="https://valorum.vilsonrauch.com.br/troque-de-contador"
      />

      <div className="min-h-screen bg-background font-inter">
        <Navigation />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary pt-28 sm:pt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight mb-6">
                Migre de Contabilidade{" "}
                <span className="text-emerald-400">agora mesmo!</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-2xl mb-8">
                Venha para uma contabilidade especializada no seu negócio! Nossa equipe de especialistas está pronta para migrar a sua empresa de uma forma descomplicada e segura.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg">
                  <MessageCircle className="mr-2" size={20} />
                  Falar com um Contador
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Processo - 4 Passos */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Como funciona o{" "}
                <span className="text-emerald-500">processo de troca</span>
                <br />de contabilidade?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {steps.map((step) => (
                <div key={step.number} className="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl font-playfair font-bold text-emerald-500 mb-3">
                    {step.number}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg">
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
                  <div key={index} className="flex items-start gap-3 text-gray-200 text-lg">
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
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg">
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
                  <div key={index} className="border border-border/50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                    >
                      <span className="font-semibold text-primary text-lg pr-4">{item.question}</span>
                      <ChevronDown className={`flex-shrink-0 text-emerald-500 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} size={20} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{item.answer}</div>
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
              Troque de contador sem complicação
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              A migração é gratuita e nossa equipe cuida de tudo. Fale com um contador e comece hoje.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg">
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

export default TroqueDeContador;

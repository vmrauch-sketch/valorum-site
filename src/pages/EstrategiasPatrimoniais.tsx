import { Navigation } from "@/components/Navigation";
import LeadContactForm from "@/components/LeadContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppCTAButton } from "@/components/WhatsAppCTAButton";
import { SEOHead } from "@/components/SEOHead";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Building2, Users, Landmark, Percent, ScrollText, FileCheck, Globe2, Scale } from "lucide-react";

const especialidades = [
  { id: "holding-patrimonial", title: "Holding Patrimonial", description: "Estruturação de uma pessoa jurídica para concentrar, organizar e administrar os bens da família com governança clara.", icon: Building2 },
  { id: "holding-familiar-patrimonial", title: "Holding Familiar e Patrimonial", description: "Organização do patrimônio familiar em vida, com regras definidas para administração, entrada de sócios e sucessão.", icon: Users },
  { id: "holding-familiar-inventario", title: "Holding Familiar e Inventário", description: "Estruturação da holding para organizar bens, simplificar o inventário e reduzir custos, prazos e desgastes sucessórios.", icon: Scale },
  { id: "planejamento-sucessorio", title: "Planejamento Sucessório", description: "Antecipação da sucessão com segurança jurídica, reduzindo custos, prazos e desgastes de um inventário.", icon: ScrollText },
  { id: "protecao-patrimonial", title: "Proteção Patrimonial", description: "Blindagem legal dos bens contra riscos empresariais, conflitos familiares e investidas de terceiros.", icon: Shield },
  { id: "holding-imoveis", title: "Holding para Imóveis", description: "Concentração dos imóveis na pessoa jurídica, otimizando a gestão de locações e a tributação da renda.", icon: Landmark },
  { id: "holding-reducao-tributos", title: "Holding para Redução de Tributos", description: "Estudo de viabilidade econômica e tributária para reduzir de forma legal a carga sobre renda, transmissão e ganhos.", icon: Percent },
  { id: "clausulas-protecao", title: "Cláusulas de Proteção", description: "Incomunicabilidade, impenhorabilidade, inalienabilidade, reversão e usufruto aplicadas ao contrato social.", icon: FileCheck },
  { id: "estruturas-internacionais", title: "Estruturas Internacionais", description: "Organização de ativos no exterior integrada ao planejamento patrimonial e sucessório da família.", icon: Globe2 },
];

const tiposHolding = [
  { slug: "holding-patrimonial", label: "Holding Patrimonial" },
  { slug: "holding-familiar-patrimonial", label: "Holding Familiar e Patrimonial" },
  { slug: "holding-familiar-inventario", label: "Holding Familiar e Inventário" },
  { slug: "planejamento-sucessorio", label: "Planejamento Sucessório" },
  { slug: "protecao-patrimonial", label: "Proteção Patrimonial" },
  { slug: "holding-imoveis", label: "Holding para Imóveis" },
  { slug: "holding-reducao-tributos", label: "Holding para Redução de Tributos" },
];

const faq = [
  {
    q: "O que é uma empresa holding?",
    a: "Holding é uma empresa criada para deter e administrar bens e participações societárias. Com a integralização dos bens no capital social, a titularidade passa da pessoa física para a pessoa jurídica, que assume a função de controle e gestão do patrimônio. A previsão legal está na Lei das Sociedades Anônimas (Lei 6.404/1976, art. 2º, §3º), que permite que a companhia participe de outras sociedades.",
  },
  {
    q: "Como a holding familiar protege os bens?",
    a: "Holding não é um tipo societário específico, e sim uma estratégia de proteção patrimonial, fiscal e sucessória. Pode ser constituída como sociedade limitada, sociedade anônima de capital fechado, sociedade simples, entre outras formas. Ao concentrar os bens na pessoa jurídica e aplicar cláusulas de proteção, reduz-se a exposição do patrimônio familiar a riscos externos.",
  },
  {
    q: "Como a holding melhora a gestão do patrimônio?",
    a: "A gestão se torna concentrada, profissional e organizada. Em famílias com negócios e ativos dispersos, a administração costuma ser fragmentada e ineficiente. Com a holding, os administradores passam a ter um objetivo único: conduzir o patrimônio com estratégia, buscando maior rendimento com menor custo operacional.",
  },
  {
    q: "O que pode ser definido no contrato social?",
    a: "O instituidor pode estabelecer regras que continuam valendo mesmo após o seu falecimento: quem administrará a empresa e como o administrador será escolhido, critérios de exclusão de sócio em caso de falta grave, restrições à venda de quotas para terceiros, regras de distribuição de resultados e reserva de usufruto sobre os bens doados aos herdeiros.",
  },
  {
    q: "Quando vale a pena estruturar uma holding?",
    a: "Quando existe patrimônio imobiliário relevante, participação em empresas, renda de locações, risco empresarial, família com mais de um herdeiro ou desejo de organizar a sucessão em vida. O primeiro passo é sempre o estudo de viabilidade jurídica e econômica.",
  },
];

const etapas = [
  { n: "01", title: "Diagnóstico patrimonial", text: "Mapeamos bens, empresas, rendas, dívidas, perfil familiar e objetivos de longo prazo." },
  { n: "02", title: "Estudo de viabilidade", text: "Simulação jurídica e econômica: custos de constituição, impacto tributário e comparação com o cenário atual." },
  { n: "03", title: "Desenho da estrutura", text: "Definição do tipo societário, composição das quotas, cláusulas de proteção e regras de governança." },
  { n: "04", title: "Implantação", text: "Constituição da empresa, integralização dos bens, registros e doação de quotas com reserva de usufruto quando aplicável." },
  { n: "05", title: "Acompanhamento", text: "Gestão contínua da estrutura, contabilidade, revisões periódicas e integração com a estratégia de investimentos." },
];

const EstrategiasPatrimoniais = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <>
      <SEOHead
        title="Estratégias Patrimoniais e Holding Familiar | Valorum"
        description="Proteja, organize e multiplique seu patrimônio com holding familiar, planejamento sucessório, proteção de ativos e eficiência tributária. Estruturas sob medida da Valorum."
        keywords="holding familiar, holding patrimonial, planejamento sucessório, proteção patrimonial, holding para imóveis, redução de tributos, estratégias patrimoniais, Valorum"
        canonical="https://valorum.vilsonrauch.com.br/estrategias-patrimoniais"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Estratégias Patrimoniais e Holding",
          description:
            "Estruturação de holdings familiares e patrimoniais, planejamento sucessório, proteção de ativos e eficiência tributária.",
          url: "https://valorum.vilsonrauch.com.br/estrategias-patrimoniais",
          provider: { "@type": "Organization", name: "Valorum", url: "https://valorum.vilsonrauch.com.br" },
          serviceType: ["Holding Familiar", "Planejamento Sucessório", "Proteção Patrimonial", "Eficiência Tributária"],
          areaServed: "BR",
        }}
      />

      <div className="min-h-screen bg-white font-inter">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 pt-28 pb-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div
              ref={heroRef}
              className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ease-out ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm font-medium">Valorum Patrimônio</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                Estratégias Patrimoniais e <span className="text-gold-400">Holding</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                Proteja, organize e multiplique seu patrimônio com estruturas de alta precisão: holdings familiares,
                proteção de ativos, planejamento sucessório e eficiência tributária.
              </p>
              <WhatsAppCTAButton
                message="Olá! Gostaria de mais informações sobre holding."
                variant="green"
                className="px-8 py-6 text-lg uppercase tracking-wide"
              >
                Fale com especialista
              </WhatsAppCTAButton>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 mb-6">
              Estruturas patrimoniais feitas com estudo, não com modelo pronto
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A Valorum atua em todo o Brasil e conta com especialistas em holding familiar, estruturação empresarial,
              tributário e planejamento sucessório. Isso permite realizar o estudo de viabilidade jurídico e econômico
              para a implantação da holding, visando a gestão do patrimônio, a sucessão, a proteção dos bens e a
              redução da carga tributária.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Por meio da holding familiar é possível preservar a sua vontade e proteger os bens conquistados, de forma
              plenamente legal, inclusive após o seu falecimento. Na constituição da estrutura, o instituidor pode
              atrelar cláusulas que protegem o patrimônio da investida de terceiros e, conforme o caso, reduzir de forma
              expressiva a tributação incidente sobre renda e transmissão.
            </p>
          </div>
        </section>

        {/* Especialidades */}
        <section className="py-20 bg-navy-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 mb-4">
                Especialidades em <span className="text-gold-500">Holding Patrimonial</span>
              </h2>
              <p className="text-lg text-gray-700">
                Cada família tem uma estrutura diferente. Trabalhamos com as soluções abaixo, combinadas conforme o seu caso.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {especialidades.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center mb-5">
                      <Icon size={26} className="text-gold-400" />
                    </div>
                    <h3 className="text-lg font-playfair font-bold text-navy-600 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-700 text-lg mb-5">Nossa equipe pode te orientar com precisão e confiança.</p>
              <WhatsAppCTAButton
                message="Olá! Gostaria de mais informações sobre holding."
                variant="green"
                className="px-8 py-4 text-base uppercase tracking-wide"
              >
                Fale com especialista
              </WhatsAppCTAButton>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 mb-4">
                Como estruturamos a sua holding
              </h2>
              <p className="text-lg text-gray-700">Um processo em cinco etapas, do diagnóstico ao acompanhamento contínuo.</p>
            </div>
            <div className="grid md:grid-cols-5 gap-5">
              {etapas.map((e) => (
                <div key={e.n} className="bg-navy-50 rounded-xl p-6 text-center h-full flex flex-col">
                  <span className="text-3xl font-playfair font-bold text-gold-500 block mb-3">{e.n}</span>
                  <h3 className="text-lg font-bold text-navy-600 mb-2">{e.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm flex-grow">{e.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-700 text-lg mb-5">Nossa equipe pode te orientar com precisão e confiança.</p>
              <WhatsAppCTAButton
                message="Olá! Gostaria de mais informações sobre holding."
                variant="green"
                className="px-8 py-4 text-base uppercase tracking-wide"
              >
                Fale com especialista
              </WhatsAppCTAButton>
            </div>
          </div>
        </section>

        {/* FAQ / conteúdo */}
        <section className="py-20 bg-navy-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 mb-10 text-center">
              Entenda a holding na prática
            </h2>
            <div className="space-y-8">
              {faq.map((item) => (
                <article key={item.q} className="bg-white rounded-xl p-7 shadow-sm">
                  <h3 className="text-xl font-playfair font-bold text-navy-600 mb-3">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-700 text-lg mb-5">Nossa equipe pode te orientar com precisão e confiança.</p>
              <WhatsAppCTAButton
                message="Olá! Gostaria de mais informações sobre holding."
                variant="green"
                className="px-8 py-4 text-base uppercase tracking-wide"
              >
                Fale com especialista
              </WhatsAppCTAButton>
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section id="hold-contato" className="py-24 bg-[#0a1628] scroll-mt-28">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                Vamos avaliar a <span className="text-[#c9a962]">viabilidade da sua holding</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Preencha o formulário e nossa equipe entrará em contato para entender o seu patrimônio e apresentar a
                estrutura mais adequada.
              </p>
            </div>
            <LeadContactForm />
          </div>
        </section>

        <Footer />
        <WhatsAppButton message="Olá! Gostaria de mais informações sobre holding." />
      </div>
    </>
  );
};

export default EstrategiasPatrimoniais;

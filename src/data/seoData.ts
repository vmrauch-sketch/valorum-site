// Dados de SEO centralizados para consistência
// URL base do site
export const SITE_URL = "https://valorum.vilsonrauch.com.br";

export const SEOData = {
  valorum: {
    title: "Valorum | Gestão de Investimentos e Planejamento Patrimonial",
    description: "Investimento não se improvisa. Valorum: gestão de investimentos independente e planejamento patrimonial completo. Estratégia, clareza e segurança para crescer.",
    keywords: "gestão de investimentos, planejamento patrimonial, consultoria financeira independente, Valorum, Valorum Capital & Wealth, Valorum Patrimônio, investimentos, proteção patrimonial, crescimento patrimonial, family office, assessoria financeira independente, carteira administrada, holding familiar, planejamento sucessório, wealth planning, Santa Catarina",
  },

  vilsonRauch: {
    title: "Vilson Rauch | Economista, Contador, Gestor de Investimentos e CFO",
    description: "Vilson Marcelo Rauch: economista, contador e gestor de investimentos. Especialista em BPO financeiro, CFO terceirizado, planejamento patrimonial e consultoria independente. Investimento não se improvisa.",
    keywords: "Vilson Marcelo Rauch, Vilson Rauch, economista, contador, gestor de investimentos, CFO, BPO financeiro, consultor financeiro, gestão de investimentos, planejamento patrimonial, assessoria financeira independente, investimentos, contabilidade, diretor financeiro terceirizado, Santa Catarina, Valorum",
  },

  valorumCapital: {
    title: "Valorum Capital & Wealth | Gestão de Investimentos Independente",
    description: "Casa de investimentos independente com estratégia, transparência e foco na construção patrimonial. Sem conflito de interesses, sem amarras.",
    keywords: "gestão de investimentos, investimentos independente, Valorum Capital & Wealth, carteira administrada, family office, assessoria financeira independente, gestão de patrimônio, investimentos Santa Catarina, consultoria independente, renda fixa, renda variável, fundos de investimento",
  },

  valorumPatrimonio: {
    title: "Valorum Patrimônio | Proteção, Crescimento e Sucessão Patrimonial",
    description: "Planejamento patrimonial e sucessório completo. Tríade Patrimonial: proteger, crescer e transmitir. Transformando patrimônio em fonte de liberdade.",
    keywords: "gestão patrimonial, proteção patrimonial, sucessão patrimonial, holding familiar, planejamento sucessório, investimentos imobiliários, crescimento patrimonial, legado familiar, Valorum Patrimônio, planejamento tributário, blindagem patrimonial",
  },

  contato: {
    title: "Contato | Valorum - Agende seu Diagnóstico Financeiro",
    description: "Fale com a Valorum. Agende um diagnóstico financeiro e descubra como proteger e fazer crescer seu patrimônio com estratégia e independência.",
    keywords: "contato valorum, agendar diagnóstico financeiro, consultoria financeira contato, falar com consultor de investimentos",
  },
};

// Structured Data para diferentes tipos de página
export const StructuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Valorum",
    "alternateName": ["Valorum Capital & Wealth", "Valorum Patrimônio"],
    "description": "Investimento não se improvisa. Gestão de investimentos independente e planejamento patrimonial completo para pessoas e empresas.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo-valorum-social.png`,
    "image": `${SITE_URL}/logo-valorum-social.png`,
    "telephone": "+55-11-94956-6290",
    "priceRange": "$$$$",
    "slogan": "Investimento não se improvisa",
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "serviceType": ["Gestão de Investimentos", "Planejamento Patrimonial", "Consultoria Financeira Independente"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-94956-6290",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "SC",
      "addressLocality": "Santa Catarina"
    },
    "founder": {
      "@type": "Person",
      "name": "Vilson Rauch"
    },
    "sameAs": [
      "https://vilsonrauch.com.br"
    ]
  },

  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vilson Marcelo Rauch",
    "alternateName": ["Vilson Rauch"],
    "jobTitle": "Economista, Contador e Gestor de Investimentos",
    "description": "Economista, contador e gestor de investimentos. Especialista em BPO financeiro, CFO terceirizado, planejamento patrimonial e consultoria independente. Fundador da Valorum.",
    "url": "https://vilsonrauch.com.br",
    "image": `${SITE_URL}/logo-valorum-social.png`,
    "worksFor": {
      "@type": "Organization",
      "name": "Valorum",
      "url": SITE_URL
    },
    "knowsAbout": [
      "Gestão de Investimentos",
      "Planejamento Patrimonial",
      "Consultoria Financeira Independente",
      "BPO Financeiro",
      "CFO Terceirizado",
      "Contabilidade",
      "Economia",
      "Wealth Planning",
      "Proteção e Sucessão Patrimonial"
    ]
  },

  capitalService: {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Valorum Capital & Wealth",
    "description": "Casa de investimentos independente com estratégia, transparência e foco na construção patrimonial. Sem conflito de interesses.",
    "url": `${SITE_URL}/capital`,
    "provider": {
      "@type": "Organization",
      "name": "Valorum",
      "url": SITE_URL
    },
    "serviceType": ["Gestão de Investimentos", "Family Office", "Carteira Administrada", "Gestão de Riscos"],
    "areaServed": "BR"
  },

  patrimonioService: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Valorum Patrimônio",
    "description": "Planejamento patrimonial e sucessório completo. Tríade Patrimonial: proteger, crescer e transmitir seu patrimônio.",
    "url": `${SITE_URL}/patrimonio`,
    "provider": {
      "@type": "Organization",
      "name": "Valorum",
      "url": SITE_URL
    },
    "serviceType": ["Proteção Patrimonial", "Crescimento Patrimonial", "Planejamento Sucessório", "Holding Familiar"],
    "areaServed": "BR"
  },

  breadcrumbHome: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL
    }]
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é gestão de investimentos independente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Na gestão independente, como a Valorum Capital & Wealth, trabalhamos exclusivamente para o cliente, sem vínculo com instituições financeiras e sem conflito de interesses. Construímos carteiras personalizadas com foco em resultado real."
        }
      },
      {
        "@type": "Question",
        "name": "O que é planejamento patrimonial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Planejamento patrimonial é o conjunto de estratégias para proteger, fazer crescer e transmitir seu patrimônio de forma eficiente. Inclui investimentos, holding familiar, planejamento sucessório e proteção de ativos."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre a Valorum Capital & Wealth e a Valorum Patrimônio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Valorum Capital & Wealth foca na gestão ativa de investimentos com estratégias personalizadas. A Valorum Patrimônio cuida do planejamento patrimonial completo: proteção, crescimento e sucessão do seu legado."
        }
      }
    ]
  }
};

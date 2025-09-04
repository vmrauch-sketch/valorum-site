// Dados de SEO centralizados para consistência

export const SEOData = {
  valorum: {
    title: "Valorum Capital - Planejamento Patrimonial e Gestão de Investimentos",
    description: "Valorum Capital: consultoria especializada em planejamento patrimonial, gestão de investimentos e estratégias financeiras. Transforme seu patrimônio em liberdade financeira.",
    keywords: "planejamento patrimonial, gestão de investimentos, consultoria financeira, Valorum Capital, wealth planning, investimentos, proteção patrimonial, FIDC, recuperação tributária, crescimento patrimonial, renda, economista, renda passiva, imóveis em santa catarina, economia santa catarina, consultoria financeira médicos, investimentos para médicos, mentoria para médicos",
  },
  
  vilsonRauch: {
    title: "Vilson Marcelo Rauch - Consultor Financeiro e Especialista em Planejamento Patrimonial",
    description: "Vilson Marcelo Rauch: consultor financeiro especializado em planejamento patrimonial para médicos e profissionais liberais. Protocolo 'Mais Renda, Menos Plantão'.",
    keywords: "Vilson Marcelo Rauch, Vilson Rauch, consultor financeiro, planejamento patrimonial médicos, mais renda menos plantão, consultoria financeira médicos, investimentos para médicos, crescimento patrimonial, renda passiva, economista, imóveis em santa catarina, economia santa catarina, mentoria consultoria para médicos, remuneração de plantões, plantonista investimentos, renda médica, aposentadoria médica, médico investidor, carreira médica finanças",
  },

  protocoloMaisRenda: {
    title: "Protocolo Mais Renda Menos Plantão - Planejamento Financeiro para Médicos",
    description: "Protocolo especializado para médicos: maximize sua renda, otimize seu tempo. Estratégias financeiras exclusivas para profissionais da saúde.",
    keywords: "protocolo mais renda menos plantão, planejamento financeiro médicos, investimentos médicos, consultoria médicos, Vilson Marcelo Rauch, Vilson Rauch, renda passiva médicos, crescimento patrimonial, renda, investimentos, economia santa catarina, mentoria para médicos, remuneração plantões, plantonista renda, investimentos para plantonistas, como investir sendo médico, residência médica investimentos, especialização médica planejamento, consultoria financeira plantonista",
  },

  services: {
    title: "Serviços de Consultoria Financeira - Valorum Capital",
    description: "Serviços completos: consultoria de investimentos, gestão patrimonial, FIDC, recuperação tributária e educação financeira. Soluções personalizadas.",
    keywords: "consultoria investimentos, gestão patrimonial, FIDC, recuperação tributária, educação financeira, planejamento sucessório, proteção patrimonial, crescimento patrimonial, renda passiva, investimentos, economista, imóveis em santa catarina, economia santa catarina, mentoria para médicos, consultoria financeira plantonista, investimentos para médicos, renda médica, aposentadoria médica",
  }
};

// Structured Data para diferentes tipos de página
export const StructuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Valorum Capital",
    "description": "Consultoria especializada em gestão patrimonial e planejamento financeiro",
    "url": "https://valorumcapital.com.br",
    "logo": "https://valorumcapital.com.br/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-94956-6290",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "São Paulo"
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
    "jobTitle": "Consultor Financeiro e Especialista em Planejamento Patrimonial",
    "description": "Especialista em planejamento financeiro para médicos e profissionais da saúde",
    "url": "https://vilsonrauch.com.br",
    "worksFor": {
      "@type": "Organization",
      "name": "Valorum Capital"
    },
    "expertise": [
      "Planejamento Patrimonial",
      "Consultoria Financeira",
      "Gestão de Investimentos",
      "Planejamento Financeiro para Médicos"
    ]
  },

  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Protocolo Mais Renda Menos Plantão",
    "description": "Protocolo especializado para profissionais da medicina maximizarem renda e otimizarem tempo",
    "provider": {
      "@type": "Organization",
      "name": "Valorum Capital"
    },
    "serviceType": "Consultoria Financeira",
    "areaServed": "BR"
  }
};
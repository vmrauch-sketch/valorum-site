// Dados de SEO centralizados para consistência
// URL base do site
export const SITE_URL = "https://valorum.vilsonrauch.com.br";

export const SEOData = {
  valorum: {
    title: "Valorum - Planejamento Patrimonial e Gestão de Investimentos",
    description: "Valorum: consultoria especializada em planejamento patrimonial, gestão de investimentos e estratégias financeiras. Transforme seu patrimônio em liberdade financeira.",
    keywords: "planejamento patrimonial, gestão de investimentos, consultoria financeira, Valorum, wealth planning, investimentos, proteção patrimonial, FIDC, recuperação tributária, crescimento patrimonial, renda, economista, renda passiva, imóveis em santa catarina, economia santa catarina, consultoria financeira médicos, investimentos para médicos, mentoria para médicos, consultoria financeira para empresas, consultoria empresarial, planejamento financeiro empresarial, gestão financeira empresarial, consultoria corporativa",
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

  valorumCapital: {
    title: "Valorum Capital | Gestão de Investimentos Independente",
    description: "Gestão de investimentos independente. Construímos e preservamos patrimônio com estratégias personalizadas e sem conflito de interesses.",
    keywords: "gestão de investimentos, planejamento patrimonial, gestão de patrimônio, investimentos, family office, assessoria financeira independente, carteira administrada, investimentos Santa Catarina, consultoria independente",
  },

  valorumPatrimonio: {
    title: "Valorum Patrimônio | Proteção, Crescimento e Sucessão Patrimonial",
    description: "Especialistas em gestão patrimonial completa: proteção, crescimento e sucessão. Tríade Patrimonial para preservar e expandir seu legado.",
    keywords: "gestão patrimonial, proteção patrimonial, sucessão patrimonial, holding familiar, planejamento sucessório, investimentos imobiliários, crescimento patrimonial, legado familiar",
  },

  valorumContabil: {
    title: "Valorum Contábil | Contabilidade Especializada para Empresas",
    description: "Contabilidade consultiva especializada: holding patrimonial, profissionais da saúde, indústria, comércio. Fazendo sempre mais do que os clientes esperam.",
    keywords: "contabilidade consultiva, contabilidade empresarial, holding patrimonial, contabilidade médicos, planejamento tributário, abertura de empresas, BPO financeiro, contabilidade Santa Catarina",
  },

  valorumCFO: {
    title: "Valorum CFO | CFO as a Service para Empresas",
    description: "CFO as a Service: gestão financeira estratégica para empresas. Compreender pessoas. Expandir negócios. Soluções personalizadas para crescimento.",
    keywords: "CFO as a service, gestão financeira empresarial, consultoria CFO, diretor financeiro terceirizado, planejamento financeiro empresarial, controladoria, gestão de custos, análise financeira",
  },

  paraVoce: {
    title: "Consultoria Financeira Pessoal | Valorum",
    description: "Gestão financeira completa para pessoas físicas. Revolucionamos o conceito de atendimento no mercado financeiro com soluções personalizadas.",
    keywords: "consultoria financeira pessoal, planejamento financeiro pessoal, investimentos pessoa física, gestão de patrimônio, aposentadoria, renda passiva, liberdade financeira",
  },

  paraSeuNegocio: {
    title: "Consultoria Financeira Empresarial | Valorum",
    description: "Soluções financeiras completas para empresas: consultoria, gestão, planejamento tributário e CFO as a Service para tornar seu negócio mais competitivo.",
    keywords: "consultoria empresarial, gestão financeira empresarial, planejamento tributário empresarial, consultoria de negócios, CFO terceirizado, contabilidade empresarial",
  },

  contato: {
    title: "Contato | Valorum - Fale com um Consultor",
    description: "Entre em contato com a Valorum. Agende uma consulta e descubra como podemos ajudar você a alcançar seus objetivos financeiros.",
    keywords: "contato valorum, consultoria financeira contato, agendar consulta financeira, falar com consultor",
  },

  manifesto: {
    title: "Manifesto | Valorum - Nossa Filosofia",
    description: "Conheça a filosofia e valores da Valorum. Patrimônio não se improvisa - entenda nossa abordagem única para gestão patrimonial.",
    keywords: "manifesto valorum, filosofia financeira, valores consultoria, patrimônio não se improvisa",
  },

  services: {
    title: "Serviços de Consultoria Financeira - Valorum",
    description: "Serviços completos: consultoria de investimentos, gestão patrimonial, FIDC, recuperação tributária e educação financeira. Soluções personalizadas.",
    keywords: "consultoria investimentos, gestão patrimonial, FIDC, recuperação tributária, educação financeira, planejamento sucessório, proteção patrimonial, crescimento patrimonial, renda passiva, investimentos, economista, imóveis em santa catarina, economia santa catarina, mentoria para médicos, consultoria financeira plantonista, investimentos para médicos, renda médica, aposentadoria médica, consultoria financeira para empresas, consultoria empresarial, planejamento financeiro empresarial, gestão financeira empresarial, consultoria corporativa",
  }
};

// Structured Data para diferentes tipos de página
export const StructuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Valorum",
    "alternateName": ["Valorum Capital", "Valorum Patrimônio", "Valorum Contábil", "Valorum CFO"],
    "description": "Consultoria especializada em gestão patrimonial, investimentos e planejamento financeiro completo para pessoas e empresas",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo-valorum-social.png`,
    "image": `${SITE_URL}/logo-valorum-social.png`,
    "telephone": "+55-11-94956-6290",
    "priceRange": "$$$$",
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "serviceType": ["Gestão de Investimentos", "Planejamento Patrimonial", "Consultoria Financeira", "Contabilidade Empresarial", "CFO as a Service"],
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
    "jobTitle": "Consultor Financeiro e Especialista em Planejamento Patrimonial",
    "description": "Especialista em planejamento financeiro para médicos e profissionais da saúde. Criador do protocolo 'Mais Renda, Menos Plantão'.",
    "url": `${SITE_URL}/vilson-rauch`,
    "image": `${SITE_URL}/logo-valorum-social.png`,
    "worksFor": {
      "@type": "Organization",
      "name": "Valorum",
      "url": SITE_URL
    },
    "knowsAbout": [
      "Planejamento Patrimonial",
      "Consultoria Financeira",
      "Gestão de Investimentos",
      "Planejamento Financeiro para Médicos",
      "Wealth Planning"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "CFP® (Certified Financial Planner)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "MBA em Finanças - FGV"
      }
    ]
  },

  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Protocolo Mais Renda Menos Plantão",
    "description": "Protocolo especializado para profissionais da medicina maximizarem renda e otimizarem tempo. Estratégias personalizadas para criar patrimônio e liberdade financeira.",
    "url": `${SITE_URL}/protocolo-mais-renda`,
    "provider": {
      "@type": "Organization",
      "name": "Valorum",
      "url": SITE_URL
    },
    "serviceType": "Consultoria Financeira para Médicos",
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Médicos e Profissionais da Saúde"
    }
  },

  capitalService: {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Valorum Capital",
    "description": "Gestão de investimentos independente. Construímos e preservamos patrimônio com estratégias personalizadas e sem conflito de interesses.",
    "url": `${SITE_URL}/capital`,
    "provider": {
      "@type": "Organization",
      "name": "Valorum"
    },
    "serviceType": ["Gestão de Investimentos", "Family Office", "Assessoria Empresarial", "Gestão de Riscos"],
    "areaServed": "BR"
  },

  patrimonioService: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Valorum Patrimônio",
    "description": "Gestão patrimonial completa: proteção, crescimento e sucessão através da Tríade Patrimonial.",
    "url": `${SITE_URL}/patrimonio`,
    "provider": {
      "@type": "Organization",
      "name": "Valorum"
    },
    "serviceType": ["Proteção Patrimonial", "Crescimento Patrimonial", "Planejamento Sucessório"],
    "areaServed": "BR"
  },

  contabilService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Valorum Contábil",
    "description": "Contabilidade consultiva especializada para holdings, profissionais da saúde, indústria e comércio.",
    "url": `${SITE_URL}/contabil`,
    "provider": {
      "@type": "Organization",
      "name": "Valorum"
    },
    "serviceType": ["Contabilidade Consultiva", "Planejamento Tributário", "Abertura de Empresas", "BPO Financeiro"],
    "areaServed": "BR"
  },

  cfoService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Valorum CFO",
    "description": "CFO as a Service: gestão financeira estratégica para empresas com foco em crescimento e eficiência.",
    "url": `${SITE_URL}/cfo`,
    "provider": {
      "@type": "Organization",
      "name": "Valorum"
    },
    "serviceType": ["CFO as a Service", "Gestão Financeira", "Controladoria", "Planejamento Estratégico"],
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
        "name": "O que é gestão patrimonial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gestão patrimonial é o conjunto de estratégias e ações para proteger, fazer crescer e transmitir seu patrimônio de forma eficiente. Inclui investimentos, planejamento tributário, sucessão e proteção de ativos."
        }
      },
      {
        "@type": "Question",
        "name": "O que é o Protocolo Mais Renda Menos Plantão?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É um protocolo exclusivo desenvolvido para médicos e profissionais da saúde que desejam criar patrimônio e liberdade financeira, reduzindo a dependência de plantões e maximizando a renda passiva."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre gestão independente e assessoria tradicional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Na gestão independente, como a Valorum Capital, trabalhamos exclusivamente para o cliente, sem vínculo com instituições financeiras e sem conflito de interesses. Na assessoria tradicional, o profissional pode ser remunerado por produtos vendidos."
        }
      }
    ]
  }
};

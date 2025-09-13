import { useEffect, useRef } from 'react';

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  const partners = [
    { name: "Genial Investimentos", logo: "/lovable-uploads/454af672-d94b-429c-a9a2-c41e99b69d49.png" },
    { name: "Ágora Investimentos", logo: "/lovable-uploads/b22c433b-2098-4670-bb17-c90d25f92e44.png" },
    { name: "Avenue", logo: "/lovable-uploads/fd90c18c-ef31-48a7-a5c3-a0285a5e2c9e.png" },
    { name: "InvestorPro", logo: "/lovable-uploads/5c86c754-e6cd-4a54-b01b-3510b22b0fe9.png" },
    { name: "BTG Pactual", logo: "/lovable-uploads/66f81bae-7915-466c-9c67-2c39fd5e665d.png" },
    { name: "Safra", logo: "/lovable-uploads/622a5286-66f0-49bb-b29b-7762c43d1a9a.png" },
    { name: "XP Wealth Services", logo: "/lovable-uploads/ce4ec111-6d8a-417b-8bf8-1b0a7e8becf8.png" },
    { name: "Mont Asset", logo: "/lovable-uploads/2eca84d8-7746-40bc-bcbe-185df5deae03.png" },
    { name: "Valorum DashPlan", logo: "/lovable-uploads/6db10f4a-2720-4845-87a2-39480f871adc.png" },
    { name: "Fictor", logo: "/lovable-uploads/aac0f20e-f664-4b17-ad3a-a2b73b11d5fa.png" },
    { name: "TechFinance", logo: "/lovable-uploads/8d371ace-4f3e-4482-bbbd-7811c3e3d682.png" },
    { name: "ED Seguros", logo: "/lovable-uploads/ed-seguros-clean.png" }
  ];

  console.log("Partners array length:", partners.length);
  console.log("TechFinance partner:", partners.find(p => p.name === "TechFinance"));

  // Duplicamos a lista para criar um loop infinito
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-playfair font-bold text-navy-600 mb-2">
            Nossos Principais Parceiros
          </h3>
          <p className="text-gray-600">
            Na Valorum o melhor de cada instituição trabalha para você. Acesse o melhor!
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-20 partners-scroll"
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-lg p-8 h-32 min-w-[280px] hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className={`${partner.name === "Valorum DashPlan" ? "h-28" : partner.name === "Avenue" ? "h-12" : partner.name === "ED Seguros" ? "h-24" : "h-20"} w-auto object-contain`}
                  />
                ) : (
                  <span className="text-lg font-semibold text-gray-700 text-center">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Partners };
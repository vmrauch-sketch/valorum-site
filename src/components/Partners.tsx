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
    { name: "Julius Baer Swiss Private Banking" },
    { name: "RB Investimentos" },
    { name: "Genial Investimentos" },
    { name: "Ágora Investimentos" },
    { name: "ICATU" },
    { name: "Avenue" },
    { name: "BTG Pactual", logo: "/lovable-uploads/66f81bae-7915-466c-9c67-2c39fd5e665d.png" },
    { name: "Safra" },
    { name: "XP Wealth Services", logo: "/lovable-uploads/ce4ec111-6d8a-417b-8bf8-1b0a7e8becf8.png" },
    { name: "Mont Asset", logo: "/lovable-uploads/2eca84d8-7746-40bc-bcbe-185df5deae03.png" },
    { name: "Fictor", logo: "/lovable-uploads/aac0f20e-f664-4b17-ad3a-a2b73b11d5fa.png" }
  ];

  // Duplicamos a lista para criar um loop infinito
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-playfair font-bold text-navy-600 mb-2">
            Nossos Parceiros
          </h3>
          <p className="text-gray-600">
            Trabalhamos com as principais instituições do mercado financeiro
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
                    className="h-20 w-auto object-contain"
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
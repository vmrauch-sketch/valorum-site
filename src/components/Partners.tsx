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
    { name: "Julius Bär", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=Julius+Bär" },
    { name: "RB Investimentos", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=RB" },
    { name: "Genial", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=Genial" },
    { name: "Ágora", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=Ágora" },
    { name: "ICATU", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=ICATU" },
    { name: "Avenue", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=Avenue" },
    { name: "BTG Pactual", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=BTG" },
    { name: "Safra", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=Safra" },
    { name: "XP", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=XP" },
    { name: "QITECH", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=QITECH" },
    { name: "Mont Asset", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=Mont" },
    { name: "Fictor", logo: "https://via.placeholder.com/120x40/E5E7EB/6B7280?text=Fictor" }
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
            className="flex space-x-8 partners-scroll"
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 h-16 min-w-[140px] hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Partners };
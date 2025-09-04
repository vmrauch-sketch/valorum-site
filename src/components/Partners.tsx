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
    { name: "XP", logo: "https://logoeps.com/wp-content/uploads/2020/10/xp-investimentos-vector-logo.png" },
    { name: "BTG Pactual", logo: "https://logoeps.com/wp-content/uploads/2013/03/btg-pactual-vector-logo.png" },
    { name: "Safra", logo: "https://logoeps.com/wp-content/uploads/2013/03/banco-safra-vector-logo.png" },
    { name: "Bradesco", logo: "https://logoeps.com/wp-content/uploads/2013/03/bradesco-vector-logo.png" },
    { name: "Santander", logo: "https://logoeps.com/wp-content/uploads/2013/03/santander-vector-logo.png" },
    { name: "Itaú", logo: "https://logoeps.com/wp-content/uploads/2013/03/itau-vector-logo.png" }
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
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-lg p-12 h-40 min-w-[360px] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
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
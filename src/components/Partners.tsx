import { useEffect, useRef } from 'react';

// Import logos
import valorumLogo from '@/assets/logos/valorum.png';
import juliusBarLogo from '@/assets/logos/julius-baer.png';
import rbInvestimentosLogo from '@/assets/logos/rb-investimentos.png';
import genialLogo from '@/assets/logos/genial.png';
import agoraLogo from '@/assets/logos/agora.png';
import icatuLogo from '@/assets/logos/icatu.png';
import avenueLogo from '@/assets/logos/avenue.png';
import btgPactualLogo from '@/assets/logos/btg-pactual.png';
import safraLogo from '@/assets/logos/safra.png';
import xpLogo from '@/assets/logos/xp.png';
import qitechLogo from '@/assets/logos/qitech.png';
import montAssetLogo from '@/assets/logos/mont-asset.png';
import fictorLogo from '@/assets/logos/fictor.png';

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
    { name: "Valorum", logo: valorumLogo },
    { name: "Julius Bär", logo: juliusBarLogo },
    { name: "RB Investimentos", logo: rbInvestimentosLogo },
    { name: "Genial", logo: genialLogo },
    { name: "Ágora", logo: agoraLogo },
    { name: "ICATU", logo: icatuLogo },
    { name: "Avenue", logo: avenueLogo },
    { name: "BTG Pactual", logo: btgPactualLogo },
    { name: "Safra", logo: safraLogo },
    { name: "XP", logo: xpLogo },
    { name: "QITECH", logo: qitechLogo },
    { name: "Mont Asset", logo: montAssetLogo },
    { name: "Fictor", logo: fictorLogo }
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
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface NavItem {
  label: string;
  target: string;
}

interface ServiceSubNavProps {
  items: NavItem[];
  ctaLabel: string;
  ctaTarget: string;
  ctaClassName?: string;
}

export const ServiceSubNav = ({ items, ctaLabel, ctaTarget, ctaClassName = "" }: ServiceSubNavProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`fixed top-16 left-0 right-0 z-40 bg-primary/95 backdrop-blur-sm border-b border-white/10 transition-all duration-300 ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-1 md:gap-4 overflow-x-auto">
            {items.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-sm text-gray-300 hover:text-white font-medium whitespace-nowrap px-2 md:px-3 py-1 rounded-md hover:bg-white/10 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo(ctaTarget)}>
            <Button size="sm" className={`font-semibold text-xs px-4 h-8 uppercase tracking-wider ${ctaClassName}`}>
              {ctaLabel}
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
};

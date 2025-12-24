import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const BusinessSelector = () => {
  const location = useLocation();
  
  const isCapital = location.pathname === "/capital";
  const isContabil = location.pathname === "/contabil";
  
  // Only show on Capital and Contabil pages
  if (!isCapital && !isContabil) return null;
  
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary via-primary/95 to-primary">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-10 gap-2">
          <Link
            to="/capital"
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              isCapital 
                ? "bg-amber-500 text-white" 
                : "text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            Valorum Capital
          </Link>
          <span className="text-white/30">|</span>
          <Link
            to="/contabil"
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              isContabil 
                ? "bg-emerald-500 text-white" 
                : "text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            Valorum Contábil
          </Link>
        </div>
      </div>
    </div>
  );
};

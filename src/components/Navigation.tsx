import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isBusinessPage =
    location.pathname === "/capital" ||
    location.pathname === "/contabil" ||
    location.pathname === "/patrimonio";

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Para Você', path: '/para-voce' },
    { name: 'Para Seu Negócio', path: '/para-seu-negocio' },
    { name: 'Para Médicos', path: '/protocolo-mais-renda' },
    { name: 'Manifesto', path: '/manifesto' },
    { name: 'Especializações', path: '/especializacoes' },
    { name: 'Estratégias', path: '/estrategias' },
    { name: 'Sobre Vilson', path: 'https://vilsonrauch.com.br', external: true },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Add extra top margin when BusinessSelector is visible
  const navTopClass = isBusinessPage ? "top-10" : "top-0";

  return (
    <nav className={`fixed ${navTopClass} left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border/20 z-50 transition-all`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Business Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link to="/" className="text-2xl font-playfair font-bold text-primary">
              Valorum
            </Link>
            <div className="hidden sm:flex items-center gap-1.5">
              <Link to="/capital">
                <Button 
                  size="sm" 
                  className={`bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs px-2.5 py-1 h-7 ${isActive('/capital') ? 'ring-2 ring-amber-300' : ''}`}
                >
                  Capital
                </Button>
              </Link>
              <Link to="/patrimonio">
                <Button 
                  size="sm" 
                  className={`bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white text-xs px-2.5 py-1 h-7 ${isActive('/patrimonio') ? 'ring-2 ring-gold-300' : ''}`}
                >
                  Patrimônio
                </Button>
              </Link>
              <Link to="/contabil">
                <Button 
                  size="sm" 
                  className={`bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xs px-2.5 py-1 h-7 ${isActive('/contabil') ? 'ring-2 ring-emerald-300' : ''}`}
                >
                  Contábil
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-12">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/20">
            <div className="py-4 space-y-2">
              {/* Capital, Contábil e Patrimônio buttons for mobile */}
              <div className="flex flex-wrap gap-2 pb-4 mb-2 border-b border-border/20">
                <Link 
                  to="/capital" 
                  onClick={() => setIsOpen(false)}
                  className="flex-1 min-w-[10rem]"
                >
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                  >
                    Valorum Capital
                  </Button>
                </Link>
                <Link 
                  to="/contabil" 
                  onClick={() => setIsOpen(false)}
                  className="flex-1 min-w-[10rem]"
                >
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                  >
                    Valorum Contábil
                  </Button>
                </Link>
                <Link 
                  to="/patrimonio" 
                  onClick={() => setIsOpen(false)}
                  className="flex-1 min-w-[10rem]"
                >
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
                  >
                    Valorum Patrimônio
                  </Button>
                </Link>
              </div>
              
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium transition-colors hover:text-primary ${
                      isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
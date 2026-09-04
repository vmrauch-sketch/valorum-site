import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './WhatsAppIcon';

const Footer = ({ hidePartners = false }: { hidePartners?: boolean }) => {
  const handleWhatsAppClick = (phone: string, label: string) => {
    console.log(`Footer: Botão ${label} clicado`);
    const message = encodeURIComponent("Olá! Vim do site da Valorum.");
    const url = `https://wa.me/${phone}?text=${message}`;

    // Detecta se está em desenvolvimento
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('lovable');

    if (isDevelopment) {
      // Em desenvolvimento, copia o link e mostra alerta
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link do WhatsApp copiado!\n\nNúmero: ${label}\nMensagem: "Olá! Vim do site da Valorum."\n\nLink copiado para área de transferência.`);
      }).catch(() => {
        alert(`WhatsApp: ${label}\n\nMensagem: "Olá! Vim do site da Valorum."`);
      });
    } else {
      // Em produção, abre normalmente
      try {
        window.open(url, '_blank');
      } catch (error) {
        console.error("Footer: Erro ao abrir WhatsApp:", error);
      }
    }
  };

  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-1">Valorum</h3>
              <p className="text-sm italic text-gold-400 mb-4 font-playfair">
                <span className="block">Clareza para decidir,</span>
                <span className="block">segurança para crescer!</span>
              </p>
              <div className="flex flex-col space-y-2 text-sm text-white/60">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-financial-500 rounded-full mr-2"></span>
                  Financeiro
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-financial-500 rounded-full mr-2"></span>
                  Investimentos
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-financial-500 rounded-full mr-2"></span>
                  Patrimônio
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-financial-500 rounded-full mr-2"></span>
                  Holding
                </span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <div className="space-y-3 text-white/80">
                <Link
                  to="/trabalhe-conosco"
                  className="block hover:text-white transition-colors"
                >
                  Trabalhe Conosco
                </Link>
                <Link
                  to="/contato"
                  className="block hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </div>
            </div>

            {/* Contatos */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contatos</h4>
              <div className="space-y-4 text-white/80">
                <div>
                  <p className="text-xs text-white/50 mb-1">São Paulo - SP</p>
                  <button
                    onClick={() => handleWhatsAppClick('5511959586722', '11 95958 6722')}
                    className="flex items-center hover:text-white transition-colors cursor-pointer text-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2 text-financial-500" />
                    11 95958 6722
                  </button>
                </div>
                <div>
                  <p className="text-xs text-white/50 mb-1">Florianópolis - SC</p>
                  <button
                    onClick={() => handleWhatsAppClick('5548999652606', '48 99965 2606')}
                    className="flex items-center hover:text-white transition-colors cursor-pointer text-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2 text-financial-500" />
                    48 99965 2606
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-white/60 mb-4">
                Receba insights sobre negócios e investimentos.
              </p>
              <form
                action="https://vilsonmarcelo.substack.com/api/v1/free?nojs=true"
                method="post"
                target="_blank"
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-financial-500 focus:border-transparent transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 rounded-lg bg-financial-500 hover:bg-financial-600 text-white font-semibold text-sm transition-colors"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Valorum. Todos os direitos reservados. | Consultoria</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

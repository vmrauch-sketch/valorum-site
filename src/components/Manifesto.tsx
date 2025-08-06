
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Manifesto = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-12">
              Nosso Manifesto
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-lg md:text-xl leading-relaxed text-left space-y-6">
                
                <p className="text-primary font-semibold">
                  "Acreditamos que a liberdade começa na consciência<br />
                  e se constrói com escolhas alinhadas."
                </p>
                
                <p className="text-primary font-semibold">
                  Somos um farol em meio à névoa da confusão financeira.<br />
                  Não vendemos promessas – entregamos clareza, estrutura e autonomia.
                </p>
                
                <p className="text-primary font-semibold">
                  Não somos banco.<br />
                  Não somos corretora.
                </p>
                
                <p className="text-primary font-semibold">
                  Somos seu guia independente.<br />
                  Caminhamos ao lado, não à frente.
                </p>
                
                <p className="text-primary font-semibold">
                  Cada plano que traçamos respeita sua história,<br />
                  seus objetivos e seu tempo.
                </p>
                
                <p className="text-primary font-semibold">
                  Nossa missão é libertar, não prender.<br />
                  Ensinar, não dominar.<br />
                  Inspirar, não iludir.
                </p>
                
                <p className="text-primary font-semibold">
                  Porque liberdade financeira não é um destino,<br />
                  é uma jornada de conhecimento e decisão.
                </p>
                
                <div className="pt-6 border-t border-border/30">
                  <p className="text-primary text-xl font-semibold">
                    🔑 Toda jornada precisa de um guia de confiança<br />
                    e da chave certa para abrir o cadeado do futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

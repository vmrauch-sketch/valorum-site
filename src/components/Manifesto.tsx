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
            
            <div className="prose prose-lg mx-auto text-left max-w-3xl">
              <div className="text-xl md:text-2xl leading-relaxed text-muted-foreground space-y-6 font-light">
                <p className="text-center italic">
                  "Acreditamos que a liberdade começa na consciência<br />
                  e se constrói com escolhas alinhadas."
                </p>
                
                <p>
                  Somos um farol em meio à névoa da confusão financeira.<br />
                  Não vendemos promessas – entregamos clareza, estrutura e autonomia.
                </p>
                
                <p className="font-medium text-primary">
                  Não somos banco.<br />
                  Não somos corretora.
                </p>
                
                <p className="text-center font-medium text-lg">
                  <strong>Somos seu guia independente.</strong><br />
                  Caminhamos ao lado, não à frente.
                </p>
                
                <p>
                  Cada plano que traçamos respeita sua história,<br />
                  seus objetivos e seu tempo.
                </p>
                
                <p>
                  Nossa missão é libertar, não prender.<br />
                  Ensinar, não dominar.<br />
                  Inspirar, não iludir.
                </p>
                
                <p className="text-center italic">
                  Porque liberdade financeira não é um destino,<br />
                  é uma jornada de conhecimento e decisão.
                </p>
                
                <div className="text-center text-2xl pt-8 border-t border-border/20">
                  <p className="font-medium text-primary">
                    🔑 E toda jornada precisa de um guia de confiança…<br />
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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background -z-10" />
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transforme seus Sistemas em{" "}
            <span className="text-primary">Máquinas de Produtividade</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
            A AUTTOPUS preenche a lacuna de especialistas, otimizando seus softwares existentes e processos com flexibilidade para resultados reais. Sua equipe merece foco estratégico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6 font-semibold group"
            >
              Quero Otimizar Meus Processos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats or trust indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%+</div>
              <div className="text-sm text-muted-foreground">Aumento de Produtividade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Potencial dos Sistemas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Zero</div>
              <div className="text-sm text-muted-foreground">Complexidade Adicional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

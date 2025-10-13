import { AlertCircle, Clock, Settings, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PainPoints = () => {
  const painPoints = [
    {
      icon: AlertCircle,
      title: "Sistemas Caros, Uso Básico?",
      description:
        "Paga por tecnologia de ponta, mas usa apenas uma fração do seu potencial real.",
    },
    {
      icon: Settings,
      title: "TI Geral, Foco Burocrático?",
      description:
        "Sua equipe de TI cuida do hardware, mas quem otimiza seus fluxos de trabalho e softwares para extrair 100%?",
    },
    {
      icon: Clock,
      title: "Horas Perdidas em Rotinas Manuais?",
      description:
        "Importação de NFs, relatórios, alvarás – tarefas repetitivas que roubam tempo e engajamento da equipe.",
    },
  ];

  const scrollToSolution = () => {
    const element = document.getElementById("abordagem");
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sua tecnologia está à altura dos seus desafios?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToSolution}
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
          >
            Sim, essa é a minha realidade. Como a AUTTOPUS resolve?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

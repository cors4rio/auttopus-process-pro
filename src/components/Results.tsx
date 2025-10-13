import { TrendingUp, CheckCircle2, DollarSign, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Results = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade (+80%)",
      description:
        "Mais tempo para decisões estratégicas, menos para tarefas manuais.",
    },
    {
      icon: CheckCircle2,
      title: "Redução Drástica de Erros",
      description: "Processos automatizados significam precisão e compliance.",
    },
    {
      icon: DollarSign,
      title: "Otimização de Custos Operacionais",
      description:
        "Aproveite melhor seus investimentos em software e recursos humanos.",
    },
    {
      icon: Users,
      title: "Equipe Engajada e Estratégica",
      description:
        "Menos frustração com o operacional, mais foco no crescimento.",
    },
    {
      icon: BarChart3,
      title: "Tomada de Decisão Ágil",
      description:
        "Dados precisos e processos fluidos para uma gestão mais assertiva.",
    },
  ];

  return (
    <section id="resultados" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sua Empresa Otimizada Significa:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl group bg-background"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <result.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{result.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;

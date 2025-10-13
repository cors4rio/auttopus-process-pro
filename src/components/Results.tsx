import { TrendingUp, CheckCircle2, DollarSign, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Results = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade em 80%+",
      description:
        "Mais tempo para decisões estratégicas, menos para tarefas manuais e repetitivas.",
    },
    {
      icon: CheckCircle2,
      title: "Eliminação de Erros e Retrabalho",
      description: "Processos automatizados significam precisão e confiabilidade nos seus dados e entregas.",
    },
    {
      icon: DollarSign,
      title: "Economia de Custo e Tempo",
      description:
        "Maximize seus investimentos existentes e reduza despesas operacionais significativamente.",
    },
    {
      icon: Users,
      title: "Equipe Capacitada e Motivada",
      description:
        "Seus colaboradores mais satisfeitos, focados no que realmente agrega valor ao negócio.",
    },
    {
      icon: BarChart3,
      title: "Gestão Sem Complexidade",
      description:
        "Centralize e simplifique suas rotinas financeiras e fiscais com nossas soluções integradas.",
    },
  ];

  return (
    <section id="resultados" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resultados que Transformam: Menos Stress, Mais Valor
          </h2>
          <p className="text-xl text-muted-foreground">
            Com a AUTTOPUS, você não compra um serviço, você investe em:
          </p>
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

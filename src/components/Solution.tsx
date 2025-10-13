import { Search, Cog, GraduationCap, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solution = () => {
  const solutions = [
    {
      icon: Search,
      number: "1",
      title: "Diagnóstico e Imersão",
      description:
        "Entendemos seus processos atuais e o potencial inexplorado.",
    },
    {
      icon: Cog,
      number: "2",
      title: "Otimização e Implementação",
      description:
        "Configuramos, integramos e desenvolvemos as automações necessárias.",
    },
    {
      icon: GraduationCap,
      number: "3",
      title: "Treinamento e Capacitação",
      description:
        "Sua equipe aprende a utilizar o máximo das novas ferramentas e processos.",
    },
    {
      icon: LineChart,
      number: "4",
      title: "Acompanhamento e Melhoria Contínua",
      description:
        "Garantimos pelo menos 80% de melhoria na eficiência e produtividade.",
    },
  ];

  return (
    <section id="abordagem" className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Uma Parceria de Transformação, Não Apenas um Serviço
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Nossa abordagem é imersiva, prática e focada na Experiência Humana da sua equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 relative">
                  <solution.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                    {solution.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{solution.title}</h3>
                <p className="text-primary-foreground/90 leading-relaxed text-sm">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;

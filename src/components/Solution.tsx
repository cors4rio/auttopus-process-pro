import { UserCheck, Settings2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solution = () => {
  const solutions = [
    {
      icon: UserCheck,
      title: "Especialista Dedicado na Sua Equipe",
      description:
        "Alocamos um profissional AUTTOPUS dentro do seu escritório. Ele não cuida de hardware, mas mergulha na sua realidade para otimizar seus softwares e processos de dentro para fora.",
    },
    {
      icon: Settings2,
      title: "Otimização Profunda dos Seus Sistemas Atuais",
      description:
        "Fazemos seus softwares (como Domínio Web, Onvio, etc.) entregarem 100% do seu potencial, configurando-os para um fluxo de trabalho impecável.",
    },
    {
      icon: TrendingUp,
      title: "Treinamento Prático e Desenvolvimento de Processos",
      description:
        "Capacitamos sua equipe para a máxima eficiência e criamos processos que eliminam gargalos, transformando a rotina.",
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
            A AUTTOPUS é a extensão de especialista que você precisa.
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Não somos mais um sistema, somos a inteligência que sua operação merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                <p className="text-primary-foreground/90 leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;

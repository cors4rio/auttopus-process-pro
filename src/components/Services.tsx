import { FileText, Calculator, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Consultoria de Processos para Eficiência Máxima",
      description:
        "Analisamos, desenhamos e implementamos fluxos de trabalho otimizados para seu setor contábil/financeiro, garantindo que seus sistemas atuais entreguem 100% do que podem.",
    },
    {
      icon: Users,
      title: "Tech Leader as a Service: Expertise Estratégica para Sua Equipe",
      description:
        "Alocamos um especialista em automação e otimização para guiar seu time, preenchendo a lacuna de conhecimento e desenvolvendo soluções internas.",
    },
    {
      icon: FileText,
      title: "Automação de Rotinas Específicas",
      description:
        "Da importação inteligente de NFs à emissão automatizada de alvarás e integração de módulos (Domínio Honorários, Onvio, etc.), transformamos tarefas repetitivas em processos eficientes.",
    },
  ];

  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossas Soluções Sob Medida Para Sua Otimização
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos a expertise que sua empresa precisa, de forma flexível e focada em resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

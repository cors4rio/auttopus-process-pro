import { FileText, Calculator, FileCheck, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Automação de NFs e Importação",
      description:
        "Buscamos e importamos automaticamente suas NFs para o seu sistema contábil, eliminando o trabalho manual e a parametrização complexa.",
    },
    {
      icon: Calculator,
      title: "Rotinas Tributárias e Fiscais Otimizadas",
      description:
        "Baixa automática de relatórios de prefeituras, download de planilhas e integração com Domínio Web ou outros sistemas.",
    },
    {
      icon: FileCheck,
      title: "Alvarás e Processos Societários Automatizados",
      description:
        "Emissão e envio automatizado de alvarás e gestão simplificada de processos societários sem complicação.",
    },
    {
      icon: DollarSign,
      title: "Gestão Financeira Integrada",
      description:
        "Centralize contas a pagar/receber, emissão de boletos e NFs, relatórios financeiros em um só lugar com Domínio Honorários.",
    },
  ];

  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Onde Podemos Atuar para Sua Eficiência Máxima?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

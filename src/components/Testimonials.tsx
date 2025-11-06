import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Diretora Financeira",
      company: "Contabilidade Prime",
      text: "A AUTTOPUS transformou completamente nossa operação. Reduzimos 70% do tempo em tarefas manuais e nossa equipe agora foca no estratégico.",
    },
    {
      name: "João Santos",
      role: "Sócio",
      company: "Santos & Associados",
      text: "Implementaram automações que nem sabíamos ser possíveis. O ROI foi alcançado em menos de 6 meses. Excelente investimento.",
    },
    {
      name: "Ana Costa",
      role: "Gerente de RH",
      company: "TechCorp Brasil",
      text: "A expertise técnica combinada com o entendimento profundo dos nossos processos fez toda a diferença. Recomendo fortemente.",
    },
    {
      name: "Carlos Oliveira",
      role: "CEO",
      company: "Advocacia Digital",
      text: "Finalmente conseguimos escalar sem contratar mais pessoas. As automações são precisas e confiáveis.",
    },
    {
      name: "Patricia Mendes",
      role: "Controller",
      company: "Grupo Financeiro X",
      text: "O suporte contínuo e a preocupação com nosso resultado real nos impressionou. Não é só um fornecedor, é um parceiro.",
    },
    {
      name: "Roberto Lima",
      role: "Diretor de Operações",
      company: "Contábil Plus",
      text: "A redução de erros foi impressionante. Nossos clientes notaram a diferença na qualidade e velocidade do serviço.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mais de 200 Empresas Confiam na AUTTOPUS
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes dizem sobre a transformação nos seus processos
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {getVisibleTestimonials().map((testimonial, idx) => (
            <Card
              key={`${testimonial.name}-${idx}`}
              className={cn(
                "border-2 hover:border-accent transition-all duration-500",
                idx === 1 && "scale-105 border-accent shadow-2xl"
              )}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Single Card */}
        <div className="lg:hidden max-w-md mx-auto">
          <Card className="border-2 border-accent shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  &quot;{testimonials[activeIndex].text}&quot;
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-foreground text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-primary font-medium">{testimonials[activeIndex].role}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === idx ? "bg-accent w-8" : "bg-muted-foreground/30"
                )}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Target, 
  Zap,
  LineChart,
  Settings,
  Award
} from "lucide-react";

const Consultoria = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Análise Profunda",
      description: "Mapeamento completo dos seus processos atuais e identificação de oportunidades"
    },
    {
      icon: Target,
      title: "Estratégia Personalizada",
      description: "Plano de ação customizado para as necessidades específicas do seu negócio"
    },
    {
      icon: Users,
      title: "Capacitação de Equipe",
      description: "Treinamento contínuo para garantir autonomia e máximo aproveitamento"
    },
    {
      icon: Zap,
      title: "Implementação Ágil",
      description: "Execução rápida com metodologia testada e comprovada"
    },
    {
      icon: LineChart,
      title: "Resultados Mensuráveis",
      description: "KPIs claros e acompanhamento de melhorias em tempo real"
    },
    {
      icon: Settings,
      title: "Otimização Contínua",
      description: "Suporte e ajustes constantes para maximizar resultados"
    }
  ];

  const deliverables = [
    "Diagnóstico completo dos processos atuais",
    "Mapeamento de oportunidades de automação",
    "Plano de implementação detalhado com cronograma",
    "Documentação completa de processos otimizados",
    "Treinamento prático da equipe",
    "Suporte técnico especializado",
    "Relatórios de performance e ROI",
    "Sessões de consultoria estratégica mensais"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2 text-sm">
                Consultoria Premium
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Consultoria Especializada em Otimização de Processos
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                Transforme sua operação com a expertise de quem já otimizou mais de 200 empresas. 
                Diagnóstico profundo, estratégia personalizada e resultados garantidos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Agendar Diagnóstico Gratuito
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
                >
                  Ver Cases de Sucesso
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                O Que Você Ganha Com Nossa Consultoria
              </h2>
              <p className="text-xl text-muted-foreground">
                Uma parceria estratégica que vai além da consultoria tradicional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl group"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  O Que Está Incluído
                </h2>
                <p className="text-xl text-muted-foreground">
                  Entregáveis completos para garantir resultados sustentáveis
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Como Funciona Nossa Metodologia
              </h2>
              <p className="text-xl text-muted-foreground">
                Um processo estruturado e comprovado em mais de 200 projetos
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  phase: "Fase 1",
                  title: "Diagnóstico e Imersão",
                  description: "Análise profunda da operação atual, identificação de gargalos e mapeamento de oportunidades",
                  duration: "1-2 semanas"
                },
                {
                  phase: "Fase 2",
                  title: "Planejamento Estratégico",
                  description: "Elaboração do plano de ação customizado com cronograma, KPIs e matriz de priorização",
                  duration: "1 semana"
                },
                {
                  phase: "Fase 3",
                  title: "Implementação e Otimização",
                  description: "Execução das melhorias, configurações e automações com acompanhamento contínuo",
                  duration: "4-8 semanas"
                },
                {
                  phase: "Fase 4",
                  title: "Validação e Capacitação",
                  description: "Treinamento da equipe, validação de resultados e documentação completa dos processos",
                  duration: "2 semanas"
                }
              ].map((step, index) => (
                <Card 
                  key={index}
                  className="border-l-4 border-l-accent hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-accent text-accent-foreground">{step.phase}</Badge>
                          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-2">
                          {step.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-sm text-primary font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="py-20 bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto Para Transformar Sua Operação?
              </h2>
              <p className="text-xl text-background/90 mb-8 leading-relaxed">
                Agende um diagnóstico gratuito e descubra o potencial inexplorado da sua empresa. 
                Sem compromisso, apenas insights valiosos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
                >
                  Agendar Diagnóstico Gratuito
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground text-lg px-8"
                >
                  Falar com Especialista
                </Button>
              </div>
              
              <div className="mt-12 pt-12 border-t border-background/20">
                <p className="text-background/80 text-sm mb-4">Empresas que já confiaram na nossa consultoria:</p>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                  <div className="text-background/60 text-sm">200+ empresas atendidas</div>
                  <div className="text-background/60 text-sm">|</div>
                  <div className="text-background/60 text-sm">Média de 80% de aumento de produtividade</div>
                  <div className="text-background/60 text-sm">|</div>
                  <div className="text-background/60 text-sm">ROI em menos de 6 meses</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Consultoria;

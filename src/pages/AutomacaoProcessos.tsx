import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, FileCheck, Zap, Shield, Clock, TrendingUp, ArrowRight, Sparkles, CheckCircle2, Target, AlertTriangle } from "lucide-react";

type Sector = "contabilidade" | "advocacia" | "financeiro" | "rh";

const AutomacaoProcessos = () => {
  const [selectedSector, setSelectedSector] = useState<Sector>("contabilidade");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [selectedSector]);

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const sectorContent = {
    contabilidade: {
      painTitle: "O custo oculto da operação contábil",
      painText: "Importar XMLs, apurar impostos, consultar débitos, emitir alvarás. Um escritório de contabilidade é movido a processos e prazos. A execução manual dessas tarefas não só consome um tempo valioso da sua equipe, mas também é a principal fonte de erros de digitação e falhas de conformidade que podem custar caro.",
      solutionsTitle: "Automação na prática contábil",
      solutionsIntro: "Focamos em automatizar os gargalos do seu ecossistema, seja ele Thomson Reuters (Dominio, Onvio), Fortes, ou outros, garantindo que os dados fluam sem intervenção manual.",
      examples: [
        {
          icon: FileCheck,
          title: "Automação fiscal e tributária",
          description: "Desenvolvemos robôs para a importação e apuração automática de XMLs (NFe, CTe, NFSe), eliminando a digitação no processo de lançamento e garantindo a integridade dos dados."
        },
        {
          icon: Bot,
          title: "Bots de consulta e conformidade",
          description: "Criamos bots que consultam débitos automaticamente (TFF, alvarás), baixam relatórios de portais governamentais e monitoram certidões, avisando sua equipe apenas quando uma ação é necessária."
        },
        {
          icon: Zap,
          title: "Otimização de ecossistemas",
          description: "Integramos e automatizamos fluxos dentro do seu sistema atual, como a gestão de tarefas e processos do Onvio, ou a integração entre o departamento fiscal e o financeiro."
        }
      ]
    },
    advocacia: {
      painTitle: "O custo oculto da operação jurídica",
      painText: "O dia a dia jurídico é consumido pela gestão de prazos, petições e a consulta manual de processos. Cada minuto gasto em tarefas administrativas é um minuto a menos de análise estratégica, aumentando o risco de perda de prazos e sobrecarregando a equipe.",
      solutionsTitle: "Automação na prática jurídica",
      solutionsIntro: "Automatizamos os processos que drenam o tempo da sua equipe jurídica, permitindo foco total na estratégia e atendimento ao cliente.",
      examples: [
        {
          icon: FileCheck,
          title: "Automação de processos judiciais",
          description: "Bots para consulta automática de andamentos processuais, integração com Legal One e outros sistemas jurídicos, eliminando a necessidade de consultas manuais diárias."
        },
        {
          icon: Clock,
          title: "Gestão de prazos e honorários",
          description: "Automação de relatórios de prazos, alertas inteligentes e cálculos automáticos de honorários, reduzindo drasticamente o risco de perda de prazos."
        },
        {
          icon: Bot,
          title: "Petições e documentos automatizados",
          description: "Geração automática de petições recorrentes e preenchimento inteligente de documentos padrão com base em templates validados."
        }
      ]
    },
    financeiro: {
      painTitle: "O custo oculto da operação financeira",
      painText: "Conciliação bancária, gestão de contas a pagar e receber, fluxo de caixa. O setor financeiro lida com volume massivo de dados e a necessidade de precisão absoluta. Processos manuais geram atrasos, erros de digitação e falta de visibilidade em tempo real.",
      solutionsTitle: "Automação na prática financeira",
      solutionsIntro: "Transformamos seu departamento financeiro em uma operação de alta performance, com dados precisos e processos automatizados.",
      examples: [
        {
          icon: TrendingUp,
          title: "Conciliação bancária automática",
          description: "Robôs que realizam a conciliação entre extratos bancários e sistemas ERP, identificando divergências e gerando relatórios de forma automática."
        },
        {
          icon: FileCheck,
          title: "Gestão automatizada de pagamentos",
          description: "Automação do fluxo de contas a pagar e receber, com geração automática de boletos, envio de cobranças e baixas no sistema."
        },
        {
          icon: Zap,
          title: "Dashboards e relatórios em tempo real",
          description: "Integração de múltiplas fontes de dados para geração automática de relatórios gerenciais e dashboards de fluxo de caixa."
        }
      ]
    },
    rh: {
      painTitle: "O custo oculto da operação de RH",
      painText: "Admissões, folha de pagamento, controle de ponto, gestão de benefícios. O RH é sobrecarregado com tarefas burocráticas que consomem tempo que deveria ser dedicado ao desenvolvimento de pessoas e cultura organizacional.",
      solutionsTitle: "Automação na prática de RH",
      solutionsIntro: "Automatizamos processos de RH para que sua equipe foque no que realmente importa: as pessoas.",
      examples: [
        {
          icon: FileCheck,
          title: "Automação de admissão e demissão",
          description: "Fluxos automatizados de onboarding e offboarding, com coleta automática de documentos, criação de acessos e gestão de prazos legais."
        },
        {
          icon: Clock,
          title: "Gestão automatizada de ponto e folha",
          description: "Integração entre sistemas de ponto e folha de pagamento, com cálculos automáticos de horas extras, faltas e benefícios."
        },
        {
          icon: Bot,
          title: "Bots de atendimento e FAQ",
          description: "Chatbots inteligentes que respondem dúvidas frequentes dos colaboradores sobre férias, benefícios e políticas internas."
        }
      ]
    }
  };

  const sectors = [
    { id: "contabilidade", label: "Contabilidade" },
    { id: "advocacia", label: "Advocacia" },
    { id: "financeiro", label: "Financeiro" },
    { id: "rh", label: "RH / Administrativo" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Redução drástica de erros",
      description: "Elimine falhas de digitação e esquecimentos humanos. Nossos robôs executam o processo da forma correta, sempre."
    },
    {
      icon: TrendingUp,
      title: "Equipe focada no estratégico",
      description: "Libere seus melhores talentos de tarefas repetitivas para que eles foquem em análise de dados e atendimento ao cliente."
    },
    {
      icon: Clock,
      title: "Operação 24/7",
      description: "Robôs não tiram férias e podem executar processos de madrugada, preparando o dia de trabalho da sua equipe."
    },
    {
      icon: FileCheck,
      title: "Padronização e compliance",
      description: "Garanta que os processos sejam executados sempre da mesma forma, seguindo as regras de negócio e de segurança."
    }
  ];

  const currentContent = sectorContent[selectedSector];

  return (
    <>
      <Helmet>
        <title>Automação de Processos (RPA) | AUTTOPUS</title>
        <meta name="description" content="Substitua horas de trabalho manual por segundos de automação inteligente. Criamos robôs e integrações que executam suas tarefas repetitivas 24/7." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2 animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2" />
                Tecnologia RPA de Última Geração
              </Badge>
              
              <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center animate-scale-in relative group">
                {/* Espaço para imagem do robô */}
                <Bot className="w-12 h-12 text-white transition-transform group-hover:scale-110" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Automação de processos (RPA)
              </h1>
              <h2 className="text-2xl md:text-3xl mb-8 text-primary-foreground/90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Substitua horas de trabalho manual por segundos de automação inteligente.
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Nós criamos robôs e integrações que executam suas tarefas repetitivas, 24 horas por dia, para que sua equipe foque em análise e estratégia.
              </p>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-background text-primary hover:bg-background/90 hover:scale-105 text-lg px-8 py-6 h-auto transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: '0.3s' }}
              >
                Solicite um diagnóstico de automação
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">80%</div>
                  <div className="text-sm text-primary-foreground/70">Redução de tempo</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-primary-foreground/70">Operação contínua</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99%</div>
                  <div className="text-sm text-primary-foreground/70">Precisão</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sector Selector */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Target className="w-3 h-3 mr-2" />
                Soluções Personalizadas por Setor
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Veja como a automação se aplica ao seu setor
              </h3>
              <p className="text-lg text-muted-foreground">
                Nossos projetos são desenhados para os desafios específicos da sua área de atuação. Selecione seu setor para ver exemplos práticos.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {sectors.map((sector) => (
                <Button
                  key={sector.id}
                  size="lg"
                  variant={selectedSector === sector.id ? "default" : "outline"}
                  onClick={() => setSelectedSector(sector.id as Sector)}
                  className={`text-lg px-8 py-6 h-auto transition-all duration-300 relative group ${
                    selectedSector === sector.id ? 'shadow-lg shadow-primary/20' : 'hover:scale-105'
                  }`}
                >
                  {selectedSector === sector.id && (
                    <CheckCircle2 className="w-5 h-5 mr-2 animate-scale-in" />
                  )}
                  {sector.label}
                  {selectedSector !== sector.id && (
                    <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Content - Pain Point */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                  <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
                    Desafio do Setor
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {currentContent.painTitle}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {currentContent.painText}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Tempo perdido</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Alto risco de erros</span>
                    </div>
                  </div>
                </div>
                <div className={`flex items-center justify-center transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  {/* Espaço para imagem 3D */}
                  <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative group">
                    <Bot className="w-32 h-32 text-primary/40 transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary/20 group-hover:border-primary/40 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content - Solutions */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className={`text-center mb-12 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Zap className="w-3 h-3 mr-2" />
                  Soluções em Ação
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {currentContent.solutionsTitle}
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {currentContent.solutionsIntro}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {currentContent.examples.map((example, index) => (
                  <Card 
                    key={index} 
                    className={`border-2 border-border hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group ${
                      isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 relative">
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="text-xs">
                          {`0${index + 1}`}
                        </Badge>
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform relative">
                        <example.icon className="w-8 h-8 text-primary" />
                        <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {example.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Saiba mais
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className={`flex items-center justify-center mt-12 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {/* Espaço para imagem 3D do robô entregando documento */}
                <div className="w-full max-w-2xl h-80 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <Bot className="w-32 h-32 text-primary/40 transition-transform group-hover:scale-110 relative z-10" />
                  <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-3 h-3 mr-2" />
                  Benefícios Comprovados
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Mais que eficiência, inteligência
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Transforme sua operação com automação que entrega resultados reais e mensuráveis
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={index} 
                    className="border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 group overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                            <benefit.icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {benefit.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Visual Separator */}
              <div className="mt-16 flex items-center justify-center gap-4">
                <div className="h-px w-32 bg-gradient-to-r from-transparent to-border" />
                <Bot className="w-8 h-8 text-primary/40" />
                <div className="h-px w-32 bg-gradient-to-l from-transparent to-border" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                <CardContent className="p-12 text-center">
                  <Badge className="mb-6 bg-white/20 text-white border-white/30">
                    <Shield className="w-3 h-3 mr-2" />
                    Metodologia Comprovada
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    A automação é o resultado de um processo sólido
                  </h3>
                  <p className="text-xl mb-8 text-white/90 leading-relaxed">
                    Nós não criamos automações isoladas que quebram na primeira atualização. Elas são parte essencial do nosso "projeto de estruturação e otimização". Primeiro, diagnosticamos seus processos para encontrar os gargalos reais e otimizar seus sistemas. Depois, automatizamos o que foi validado.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center mb-8">
                    <div className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Diagnóstico completo</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Implementação gradual</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Suporte contínuo</span>
                    </div>
                  </div>
                  
                  <Button
                    size="lg"
                    onClick={() => {
                      const element = document.getElementById("abordagem");
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      } else {
                        window.location.href = "/#abordagem";
                      }
                    }}
                    className="bg-background text-primary hover:bg-background/90 hover:scale-105 text-lg px-8 py-6 h-auto transition-all duration-300 group"
                  >
                    Conheça nossa metodologia de 4 fases
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AutomacaoProcessos;

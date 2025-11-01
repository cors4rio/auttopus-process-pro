import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, FileCheck, Zap, Shield, Clock, TrendingUp } from "lucide-react";

type Sector = "contabilidade" | "advocacia" | "financeiro" | "rh";

const AutomacaoProcessos = () => {
  const [selectedSector, setSelectedSector] = useState<Sector>("contabilidade");

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
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                {/* Espaço para imagem do robô */}
                <Bot className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Automação de processos (RPA)
              </h1>
              <h2 className="text-2xl md:text-3xl mb-8 text-primary-foreground/90">
                Substitua horas de trabalho manual por segundos de automação inteligente.
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/80">
                Nós criamos robôs e integrações que executam suas tarefas repetitivas, 24 horas por dia, para que sua equipe foque em análise e estratégia.
              </p>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6 h-auto"
              >
                Solicite um diagnóstico de automação
              </Button>
            </div>
          </div>
        </section>

        {/* Sector Selector */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
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
                  className="text-lg px-8 py-6 h-auto transition-all duration-300"
                >
                  {sector.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Content - Pain Point */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {currentContent.painTitle}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentContent.painText}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  {/* Espaço para imagem 3D */}
                  <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <Bot className="w-32 h-32 text-primary/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content - Solutions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {currentContent.solutionsTitle}
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {currentContent.solutionsIntro}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {currentContent.examples.map((example, index) => (
                  <Card key={index} className="border-2 border-border hover:border-primary transition-all duration-300 animate-fade-in">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <example.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        {example.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {example.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center justify-center mt-12">
                {/* Espaço para imagem 3D do robô entregando documento */}
                <div className="w-full max-w-2xl h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Bot className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Mais que eficiência, inteligência
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-2 border-border hover:border-primary transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                            <benefit.icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-3">
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                A automação é o resultado de um processo sólido
              </h3>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Nós não criamos automações isoladas que quebram na primeira atualização. Elas são parte essencial do nosso "projeto de estruturação e otimização". Primeiro, diagnosticamos seus processos para encontrar os gargalos reais e otimizar seus sistemas. Depois, automatizamos o que foi validado.
              </p>
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
                className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6 h-auto"
              >
                Conheça nossa metodologia de 4 fases
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AutomacaoProcessos;

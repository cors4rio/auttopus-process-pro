import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { 
  CheckCircle2, 
  AlertCircle,
  Clock,
  DollarSign,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Target,
  FileText,
  Cog,
  Lock,
  ArrowRight,
  Sparkles,
  BarChart3,
  Briefcase
} from "lucide-react";

const Consultoria = () => {
  const { isOpen, openContactForm, setIsOpen } = useContactForm();

  const proofPoints = [
    { icon: CheckCircle2, text: "Diagnóstico gratuito sem compromisso" },
    { icon: Target, text: "Foco em execução, não apenas relatórios" },
    { icon: Briefcase, text: "Especialização em contábil, jurídico e financeiro" },
    { icon: Sparkles, text: "Equipe de gestores e tecnólogos" }
  ];

  const symptoms = [
    {
      icon: Clock,
      title: "Lentidão no Onboarding de Talentos",
      symptom: "Um colaborador novo leva em média 3 meses para se habituar na empresa",
      cause: "Falta de processos documentados de entrada, treinamento e gestão de conhecimento. A operação depende de conhecimento tácito (que está na cabeça das pessoas)."
    },
    {
      icon: DollarSign,
      title: "Gasto sobre Gasto em Tecnologia",
      symptom: "Pagar caro por sistemas (Thomson Reuters, M365, ERPs) e não usar nem 20% do potencial, ou contratar novos serviços que fazem o mesmo que o antigo",
      cause: "Falta de alguém especializado em sistemas e processos. A tecnologia é comprada para resolver um sintoma, sem um diagnóstico prévio do processo."
    },
    {
      icon: AlertCircle,
      title: "Operação \"Apaga Incêndio\"",
      symptom: "A equipe vive em modo reativo, resolvendo problemas urgentes em vez de focar no estratégico. A gestão não tem previsibilidade.",
      cause: "Processos inexistentes ou frágeis. O fluxo de tarefas e entregas contínuas não é gerenciado, dependendo do esforço heroico da equipe."
    },
    {
      icon: Shield,
      title: "Falta de Segurança e Organização de Dados",
      symptom: "Arquivos importantes espalhados, dificuldade em encontrar informações, falta de padronização de acessos.",
      cause: "Falta de organização, armazenamento, compliance e segurança de informação. Desconhecimento sobre normas básicas de segurança (como as ISOs 27001-27002)."
    }
  ];

  const methodology = [
    {
      phase: "Fase 1",
      title: "Diagnóstico e Mapeamento de Processos (BPM)",
      subtitle: "O Pilar: Processos",
      description: "Alocamos um especialista para mergulhar na sua operação. Realizamos a análise operacional, mapeando seus fluxos de trabalho (AS IS), identificando gargalos reais e ouvindo as dores da sua equipe.",
      deliverable: "O mapa completo dos seus processos atuais.",
      icon: BarChart3
    },
    {
      phase: "Fase 2",
      title: "Plano de Ação Estratégico",
      subtitle: "A Consultoria",
      description: "Cruzamos o diagnóstico com nossa expertise em tecnologia e gestão. Desenhamos a visão futura (TO BE) dos processos.",
      deliverable: "O relatório técnico - um plano de ação detalhado pontuando as necessidades, escopos, quais processos redesenhar, quais sistemas otimizar, quais automações construir e quais políticas de segurança implementar.",
      icon: FileText
    },
    {
      phase: "Fase 3",
      title: "Execução e Implementação Tecnológica",
      subtitle: "Os Pilares: Automação e Compliance",
      description: "Aqui é onde nos diferenciamos. Nossa equipe de tecnólogos executa o plano. Desenvolvemos os robôs (RPA), otimizamos e parametrizamos seus sistemas, e implementamos as políticas de segurança e compliance (LGPD, ISO 27001).",
      deliverable: "Os processos redesenhados e as automações funcionando.",
      icon: Cog
    },
    {
      phase: "Fase 4",
      title: "Validação e Acompanhamento",
      subtitle: "O Pilar: Alocação",
      description: "Entregamos o relatório técnico final validando as entregas e treinando sua equipe. Para clientes que precisam de gestão contínua, ativamos nossos planos de acompanhamento ou a alocação de um especialista (CTO/Gestor de Processos as a Service).",
      deliverable: "A garantia da melhoria contínua e um parceiro estratégico.",
      icon: Users
    }
  ];

  const pillars = [
    {
      title: "Gestão e Mapeamento de Processos (BPM)",
      description: "Este é o alicerce. Antes de automatizar, é preciso otimizar. Usamos metodologias de BPM e gestão ágil para analisar, otimizar e padronizar seus processos internos (do RH ao financeiro). Isso elimina desperdícios, reduz retrabalho e cria a fonte da verdade para como sua empresa deve operar.",
      icon: Target,
      link: "#"
    },
    {
      title: "Automação de Processos (RPA)",
      description: "Esta é a execução. Depois de otimizar o processo, automatizamos o trabalho manual. Transformamos tarefas repetitivas (SPEDs, TFFs, consulta de processos, conciliação financeira) em robôs (RPA) que executam 24/7, sem erros, liberando sua equipe especialista para a estratégia.",
      icon: Zap,
      link: "/solucoes/automacao-de-processos"
    },
    {
      title: "Segurança e Compliance de Dados",
      description: "Um processo eficiente também é seguro. De que adianta um processo rápido se ele é vulnerável? Estruturamos a organização dos seus dados, implementamos políticas de segurança (base ISO 27001) e preparamos sua empresa para a LGPD, protegendo seu ativo mais valioso e garantindo a conformidade.",
      icon: Lock,
      link: "#"
    },
    {
      title: "Alocação de Especialistas (CTO as a Service)",
      description: "Esta é a continuidade. Sua empresa precisa de um gestor de tecnologia ou processos, mas não pode arcar com um C-Level? Nós alocamos um especialista sênior da Auttopus para atuar como seu líder as a service, garantindo a melhoria contínua, filtrando vendedores de sistema e mantendo a operação alinhada à estratégia.",
      icon: Briefcase,
      link: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultoria em Processos e Tecnologia | Auttopus</title>
        <meta name="description" content="A solução definitiva para os gaps operacionais que freiam seu crescimento. Consultoria especializada em processos, automação e tecnologia para escritórios contábeis, jurídicos e financeiros." />
        <meta name="keywords" content="consultoria processos, BPM, automação, tecnologia, otimização operacional, consultoria contábil, consultoria jurídica" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* BLOCO 1: HERO - A DOR CENTRAL E A PROMESSA */}
          <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <Badge className="mb-6 bg-accent text-accent-foreground px-6 py-2 text-sm font-semibold animate-fade-in">
                  O Serviço Chefe da Auttopus
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-100 leading-tight">
                  A consultoria de processos e tecnologia da Auttopus.
                </h1>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 animate-fade-in delay-200 text-primary-foreground/95">
                  A solução definitiva para os gaps operacionais que freiam seu crescimento.
                </h2>
                
                <div className="text-lg md:text-xl space-y-4 mb-12 animate-fade-in delay-300 text-primary-foreground/90 leading-relaxed">
                  <p>
                    Sua empresa vive de "apagar incêndios"? Você sente que a operação depende de "esforço heroico" e não de um sistema previsível? Você vê novos colaboradores levando meses para se adaptar ou sistemas caros sendo subutilizados, gerando "gasto sobre gasto"?
                  </p>
                  <p>
                    Essa é a dor de cabeça familiar de gestores que atingiram um platô. <strong>O problema não é sua equipe, é a falta de processos documentados e bem estabelecidos.</strong>
                  </p>
                  <p>
                    Nós somos a Auttopus, a consultoria de processos e tecnologia que diagnostica e cura a <em>causa</em> da sua dor de cabeça operacional. Usamos uma mentalidade de Big Tech para estruturar seu negócio de ponta a ponta, com foco especial nos setores contábil, jurídico e financeiro.
                  </p>
                </div>

                {/* Proof Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 animate-fade-in delay-400">
                  {proofPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
                      <point.icon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground font-medium">{point.text}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  onClick={openContactForm}
                  className="animate-fade-in delay-500 bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group"
                >
                  Agende seu Diagnóstico Gratuito
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </section>

          {/* BLOCO 2: O QUE É A CONSULTORIA */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                  Não somos uma consultoria de processos genérica. 
                  <br />
                  <span className="text-primary">Somos seu parceiro de execução.</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mt-12">
                  <p className="text-xl leading-relaxed">
                    A consultoria de processos tradicional (BPM) foca em mapear fluxos de trabalho (o "AS IS" e "TO BE") e entregar um relatório. O problema? <strong className="text-foreground">A execução fica nas costas do cliente</strong>, que volta a "apagar incêndios" em seis meses.
                  </p>
                  
                  <Card className="bg-primary/5 border-primary/20 border-2 p-8 my-8">
                    <CardContent className="p-0">
                      <p className="text-xl text-foreground font-semibold mb-4">
                        A consultoria da Auttopus é diferente. Ela é um serviço completo que <span className="text-primary">analisa, otimiza e executa</span> a melhoria.
                      </p>
                      <p className="text-lg text-muted-foreground">
                        Nosso DNA é formado por gestores e especialistas em tecnologia que aplicam conceitos de gestão ágil e mentalidade de Big Tech para redesenhar o "sistema operacional" da sua empresa.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="bg-secondary/30 rounded-2xl p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Nós nos posicionamos exatamente entre duas soluções incompletas:
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-2">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-destructive font-bold">1</span>
                            </div>
                            <h4 className="text-lg font-bold text-foreground">Consultorias Tradicionais</h4>
                          </div>
                          <p className="text-muted-foreground">
                            Entendem de processo, mas não de tecnologia. Elas entregam o mapa, mas não constroem a estrada.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-2">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-destructive font-bold">2</span>
                            </div>
                            <h4 className="text-lg font-bold text-foreground">Fábricas de Software (RPA)</h4>
                          </div>
                          <p className="text-muted-foreground">
                            Entendem de tecnologia, mas não do seu processo de negócio. Elas vendem o robô, mas não resolvem o gargalo na causa raiz.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-accent/10 border-accent border-2">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-lg font-bold text-foreground mb-2">A Auttopus une o melhor dos dois mundos</h4>
                            <p className="text-muted-foreground">
                              Diagnosticamos o processo de negócio (do RH ao financeiro) e usamos a tecnologia (automação, otimização de sistemas, compliance) como a ferramenta principal para implementar a solução.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BLOCO 3: SINTOMAS */}
          <section className="py-24 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Quando sua empresa precisa da nossa consultoria?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Se você reconhece estes sintomas, sua empresa não precisa de mais software. 
                    <strong className="text-foreground"> Ela precisa de processos.</strong>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {symptoms.map((symptom, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                            <symptom.icon className="w-6 h-6 text-destructive" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground mt-2">{symptom.title}</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-destructive/5 rounded-lg p-4 border-l-4 border-destructive">
                            <p className="text-sm font-semibold text-destructive mb-2">O SINTOMA:</p>
                            <p className="text-foreground">{symptom.symptom}</p>
                          </div>
                          
                          <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                            <p className="text-sm font-semibold text-primary mb-2">A CAUSA:</p>
                            <p className="text-muted-foreground">{symptom.cause}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BLOCO 4: METODOLOGIA */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-2">
                    Nossa Metodologia
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    O Projeto de Estruturação e Otimização
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Um serviço único com início, meio e fim. Do diagnóstico à execução.
                  </p>
                </div>

                <div className="space-y-6">
                  {methodology.map((phase, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 bg-primary/5 p-8 flex flex-col items-center justify-center border-r-2 border-border group-hover:bg-primary/10 transition-colors">
                            <phase.icon className="w-16 h-16 text-primary mb-4" />
                            <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                              {phase.phase}
                            </Badge>
                          </div>
                          
                          <div className="md:w-3/4 p-8">
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {phase.title}
                            </h3>
                            <p className="text-sm font-semibold text-primary mb-4">
                              {phase.subtitle}
                            </p>
                            
                            <div className="space-y-4">
                              <div>
                                <p className="text-sm font-semibold text-muted-foreground mb-2">O QUE FAZEMOS:</p>
                                <p className="text-foreground leading-relaxed">{phase.description}</p>
                              </div>
                              
                              <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                                <p className="text-sm font-semibold text-accent mb-2">O QUE VOCÊ RECEBE:</p>
                                <p className="text-foreground font-medium">{phase.deliverable}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BLOCO 5: GATILHO DE VALOR - ECONOMIA */}
          <section className="py-24 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="border-4 border-accent shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-accent text-accent-foreground p-8 text-center">
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Quanto custa um processo frágil?
                      </h2>
                    </div>
                    
                    <div className="p-12 text-center bg-background">
                      <p className="text-lg text-muted-foreground mb-6">
                        Uma economia de até
                      </p>
                      
                      <div className="text-7xl md:text-8xl font-black text-primary mb-6 animate-pulse">
                        1 ANO
                      </div>
                      
                      <p className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        de produtividade*
                      </p>
                      
                      <div className="bg-secondary/30 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                        <p className="text-lg text-foreground leading-relaxed">
                          Com a Consultoria Auttopus, estruturamos seus processos para que o tempo de adaptação de novos talentos seja investido em <strong>crescimento, não em caos</strong>.
                        </p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground italic">
                        *Baseado em nossa análise interna: 1 ano de produtividade é perdido a cada 5 novas contratações, que levam em média 3 meses para se habituar em empresas sem processos estruturados.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOCO 6: OS 4 PILARES */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Uma solução completa que resolve seus gaps em 4 áreas
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Nossa consultoria é a única que integra os quatro pilares essenciais para a eficiência operacional. Enquanto outros vendem esses serviços separadamente, nós os vemos como um bloco único e interdependente.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {pillars.map((pillar, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl group">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                          <pillar.icon className="w-8 h-8 text-primary" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {pillar.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {pillar.description}
                        </p>
                        
                        {pillar.link !== "#" ? (
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                            onClick={() => window.location.href = pillar.link}
                          >
                            Saiba mais
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            className="w-full"
                            disabled
                          >
                            Em breve
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BLOCO 7: CTA FINAL */}
          <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                  Pare de remediar os sintomas. 
                  <br />
                  <span className="text-accent">Cure a causa.</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
                  Agende um Diagnóstico Gratuito. Nosso especialista (um gestor com experiência de 8 anos no seu setor, não um vendedor) vai analisar sua operação e mostrar os gaps de crescimento que você ainda não está vendo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    size="lg"
                    onClick={openContactForm}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group"
                  >
                    Agendar Diagnóstico Gratuito
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="pt-12 border-t border-primary-foreground/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">200+</div>
                      <p className="text-primary-foreground/80">Empresas atendidas</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">80%</div>
                      <p className="text-primary-foreground/80">Aumento de produtividade médio</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">&lt;6 meses</div>
                      <p className="text-primary-foreground/80">ROI médio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <ContactFormDialog open={isOpen} onOpenChange={setIsOpen} />
        <Footer />
      </div>
    </>
  );
};

export default Consultoria;

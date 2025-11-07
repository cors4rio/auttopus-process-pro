import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Bot, Building2, Scale, Briefcase, Users, CheckCircle2, ArrowRight, Zap, Shield, Clock, Cog, ImageIcon, AlertTriangle, Search, FileText, Settings, Star, Package, MousePointer, FileCheck, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useContactForm } from '@/hooks/useContactForm';
import { ContactFormDialog } from '@/components/ContactFormDialog';

type SectorId = 'contabilidade' | 'advocacia' | 'financeiro' | 'rh';
type SubSectorId = 'legalizacao' | 'contabil' | 'tributario' | 'pessoal' | 'rh';

const AutomacaoProcessos = () => {
  const [selectedSector, setSelectedSector] = useState<SectorId>('contabilidade');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedSubSector, setExpandedSubSector] = useState<SubSectorId | null>('legalizacao');
  const [selectedMunicipio, setSelectedMunicipio] = useState<string | null>(null);
  const { isOpen, openContactForm, setIsOpen } = useContactForm();

  const handleSectorChange = (sectorId: SectorId) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedSector(sectorId);
      setExpandedSubSector(null);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const toggleSubSector = (subSectorId: SubSectorId) => {
    setExpandedSubSector(expandedSubSector === subSectorId ? null : subSectorId);
  };

  // Automações de Legalização por município
  const legalizacaoAutomacoes = {
    salvador: [
      {
        title: "TFF - Taxa de Fiscalização do Funcionamento",
        periodicidade: "Anual",
        description: "Emissão automática da Taxa de Fiscalização de Funcionamento através do Portal SEFAZ Salvador. Reduz o tempo de emissão em até 95%.",
        portal: "Portal SEFAZ Salvador – TFF/TLL e 2ª via DAM",
        hasSaibaMais: true
      },
      {
        title: "Alvará de Funcionamento",
        periodicidade: "Anual",
        description: "Emissão e renovação automática do Alvará de Funcionamento. Processo que leva meses manualmente pode ser concluído em um único dia.",
        portal: "Portal SEFAZ Salvador – Emissão de Alvará",
        hasSaibaMais: true
      },
      {
        title: "Parcelamentos Municipais",
        periodicidade: "Mensal (se houver parcelamento ativo)",
        description: "Emissão e envio automático de guias de parcelamentos de débitos TFF/ISS e outras obrigações municipais.",
        portal: "Portal SEFAZ Salvador / DAM de parcelamento",
        hasSaibaMais: false
      },
      {
        title: "Licença/Alvará Sanitário",
        periodicidade: "Anual (quando exigido)",
        description: "Renovação automática de licenças sanitárias para estabelecimentos que necessitam dessa obrigação.",
        portal: "Portal da SMS/SESAB – renovação/licenciamento sanitário",
        hasSaibaMais: false
      }
    ],
    saoPaulo: [
      {
        title: "TFE - Taxa de Fiscalização de Estabelecimentos",
        periodicidade: "Anual (até 5 parcelas)",
        description: "Emissão automática da TFE através do Portal da Secretaria da Fazenda. Gestão de parcelamento em até 5x.",
        portal: "DUC/DAMSP – Portal da Secretaria da Fazenda (TFE)",
        hasSaibaMais: false
      },
      {
        title: "Alvará e Licenças Setoriais",
        periodicidade: "Anual",
        description: "Emissão e renovação automática de alvarás e licenças específicas por setor de atuação.",
        portal: "Portal da Secretaria da Fazenda/serviços municipais correlatos",
        hasSaibaMais: true
      },
      {
        title: "Parcelamentos Municipais",
        periodicidade: "Mensal (se houver parcelamento ativo)",
        description: "Automação da emissão e envio de guias de parcelamentos TFE/ISS e outras obrigações.",
        portal: "DUC/PAT/Portal de Parcelamentos",
        hasSaibaMais: false
      }
    ],
    recife: [
      {
        title: "Taxa de Licença de Localização",
        periodicidade: "Prévia à instalação (fato gerador único)",
        description: "Emissão automática da taxa de licença de localização para novos estabelecimentos.",
        portal: "Portal Recife em Dia / Licenciamento Unificado",
        hasSaibaMais: false
      },
      {
        title: "Taxa de Licença de Funcionamento",
        periodicidade: "Semestral",
        description: "Renovação automática semestral da licença de funcionamento através do portal unificado.",
        portal: "Portal Recife em Dia / Licenciamento Unificado",
        hasSaibaMais: false
      },
      {
        title: "Parcelamentos Municipais",
        periodicidade: "Mensal (se houver parcelamento ativo)",
        description: "Gestão automatizada de parcelamentos de taxas e licenças municipais.",
        portal: "Portal Recife em Dia / SELIC-SEDUL",
        hasSaibaMais: false
      }
    ],
    vitoria: [
      {
        title: "Alvará de Localização e Funcionamento",
        periodicidade: "Anual",
        description: "Emissão automática através do sistema 'Alvará Mais Fácil' da Prefeitura de Vitória.",
        portal: "Portal Alvará Mais Fácil – Prefeitura de Vitória",
        hasSaibaMais: true
      },
      {
        title: "Taxa do Alvará",
        periodicidade: "Anual",
        description: "Cálculo e emissão automática da taxa conforme porte e área do estabelecimento.",
        portal: "Portal Alvará Mais Fácil – emissão e pagamento",
        hasSaibaMais: false
      },
      {
        title: "Parcelamentos Municipais",
        periodicidade: "Mensal (se houver parcelamento ativo)",
        description: "Automação de débitos locais e gestão de parcelamentos municipais.",
        portal: "Portal do Empreendedor/SEDEC – Vitória",
        hasSaibaMais: false
      }
    ],
    federal: [
      {
        title: "Parcelamentos Federais (PGFN/Regularize)",
        periodicidade: "Mensal (se houver parcelamento ativo)",
        description: "Emissão e envio automático de guias de parcelamentos federais vinculados ao CNPJ.",
        portal: "Portal Regularize/PGFN ou e-CAC (vínculo do CNPJ)",
        hasSaibaMais: false
      }
    ]
  };

  const subSetores = [
    { id: 'legalizacao' as SubSectorId, name: 'Legalização', icon: FileCheck },
    { id: 'contabil' as SubSectorId, name: 'Contábil', icon: FileText },
    { id: 'tributario' as SubSectorId, name: 'Tributário', icon: Settings },
    { id: 'pessoal' as SubSectorId, name: 'Pessoal/Folha', icon: Users },
    { id: 'rh' as SubSectorId, name: 'RH', icon: Users }
  ];

  const municipios = [
    { id: 'salvador', name: 'Salvador (BA)', key: 'salvador' },
    { id: 'saoPaulo', name: 'São Paulo (SP)', key: 'saoPaulo' },
    { id: 'recife', name: 'Recife (PE)', key: 'recife' },
    { id: 'vitoria', name: 'Vitória (ES)', key: 'vitoria' },
    { id: 'federal', name: 'Federal', key: 'federal' }
  ];

  const sectors = [
    { 
      id: 'contabilidade' as SectorId, 
      name: 'Contabilidade', 
      icon: Building2,
      lottieUrl: "https://lottie.host/d562f949-6525-4b3d-8e3d-9ed12d9880f3/utjdqDs041.lottie",
      content: {
        painTitle: "O custo oculto da operação contábil",
        painDescription: "Importar XMLs, apurar impostos, consultar débitos, emitir alvarás. Um escritório de contabilidade é movido a processos e prazos. A execução manual dessas tarefas não só consome um tempo valioso da sua equipe, mas também é a principal fonte de erros de digitação e falhas de conformidade que podem custar caro.",
        solutionsTitle: "Automação na prática contábil",
        intro: "Focamos em automatizar os gargalos do seu ecossistema, seja ele Thomson Reuters (Domínio, Onvio), Fortes, ou outros, garantindo que os dados fluam sem intervenção manual.",
        solutions: [
          {
            title: "Automação do SPED",
            description: "Geração, validação automática de regras, assinatura e transmissão em lote de arquivos do SPED (Fiscal, Contribuições), eliminando o risco de erro manual na entrega."
          },
          {
            title: "Otimização Domínio (Thomson Reuters)",
            description: "Implementação e gestão correta das 'Rotinas Automáticas' do Domínio Web para importação de documentos fiscais (XML, API), emissão de guias DAS/DARF e geração de relatórios fiscais."
          },
          {
            title: "Apuração e Conciliação",
            description: "RPA para apuração de tributos, retenção automática na fonte e conciliação contábil-fiscal, cruzando dados do ERP com as obrigações acessórias."
          }
        ]
      }
    },
    { 
      id: 'advocacia' as SectorId, 
      name: 'Advocacia', 
      icon: Scale,
      lottieUrl: "https://lottie.host/28161b84-ac5c-407e-869e-0bbc38536526/u6tQXgNQKc.lottie",
      content: {
        painTitle: "O custo oculto da operação jurídica",
        painDescription: "Quantas horas seus advogados perdem por dia 'copiando e colando' andamentos de processos ou checando portais? Cada minuto gasto em tarefas administrativas é um minuto a menos de análise estratégica, aumentando o risco de perda de prazos e sobrecarregando a equipe.",
        solutionsTitle: "Automação na prática jurídica",
        intro: "Implementamos soluções de RPA que se integram aos principais sistemas jurídicos e portais de tribunais, automatizando a coleta e gestão de informações processuais.",
        solutions: [
          {
            title: "Varredura de Processos (RPA)",
            description: "Bots que simulam a interação humana para fazer consultas processuais em múltiplos portais de TJs (PJE, Projudi, E-SAJ, Eproc), lendo intimações, baixando cópias de processos e identificando andamentos por palavra-chave."
          },
          {
            title: "Gestão com Legal One (Thomson Reuters)",
            description: "Implementação correta dos fluxos do módulo 'Workflow Smart', automatizando a triagem de publicações, a criação de pastas de cliente e a gestão de contratos de honorários."
          },
          {
            title: "Gestão de Documentos",
            description: "RPA para criptografar e trocar documentos com segurança via portais, confirmando o recebimento automaticamente."
          }
        ]
      }
    },
    { 
      id: 'financeiro' as SectorId, 
      name: 'Financeiro', 
      icon: Briefcase,
      lottieUrl: "https://lottie.host/75e9ff86-4b0f-420f-81bd-c0242be1f410/R7StxjvXoD.lottie",
      content: {
        painTitle: "O gargalo do fechamento financeiro",
        painDescription: "Sua conciliação bancária ainda é uma maratona de planilhas Excel no fechamento do mês? A consolidação de dados de múltiplas fontes consome dias do seu time, aumentando o risco de erros e atrasando decisões estratégicas.",
        solutionsTitle: "Automação na prática financeira",
        intro: "Automatizamos processos críticos de contas a pagar, receber e conciliação, integrando ERPs, bancos e sistemas de gestão.",
        solutions: [
          {
            title: "Conciliação Bancária (RPA)",
            description: "Automação do processo de comparar o extrato da conta corrente com o controle financeiro interno (ERP, planilhas), um processo que pode ter o tempo de execução reduzido em até 80%."
          },
          {
            title: "Contas a Pagar (RPA)",
            description: "Robôs que leem faturas (PDFs, XMLs), fazem a verificação cruzada com pedidos de compra, inserem os dados no ERP e preparam a execução de pagamentos."
          },
          {
            title: "Contas a Receber (RPA)",
            description: "Automação da gestão de dados de clientes, geração de cotações e envio de lembretes amigáveis de cobrança via e-mail."
          }
        ]
      }
    },
    { 
      id: 'rh' as SectorId, 
      name: 'RH / Administrativo', 
      icon: Users,
      lottieUrl: "https://lottie.host/b94e8db4-a4ac-46dd-af05-3178461973f7/RUZre6xf05.lottie",
      content: {
        painTitle: "O custo oculto da operação de RH",
        painDescription: "Admissões, folha de pagamento, controle de ponto, gestão de benefícios. O RH é sobrecarregado com tarefas burocráticas que consomem tempo que deveria ser dedicado ao desenvolvimento de pessoas e cultura organizacional.",
        solutionsTitle: "Automação na prática de RH",
        intro: "Automatizamos processos de RH para que sua equipe foque no que realmente importa: as pessoas.",
        solutions: [
          {
            title: "Automação de admissão e demissão",
            description: "Fluxos automatizados de onboarding e offboarding, com coleta automática de documentos, criação de acessos e gestão de prazos legais."
          },
          {
            title: "Gestão automatizada de ponto e folha",
            description: "Integração entre sistemas de ponto e folha de pagamento, com cálculos automáticos de horas extras, faltas e benefícios."
          },
          {
            title: "Bots de atendimento e FAQ",
            description: "Chatbots inteligentes que respondem dúvidas frequentes dos colaboradores sobre férias, benefícios e políticas internas."
          }
        ]
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Automação de Processos (RPA) | AUTTOPUS</title>
        <meta name="description" content="O fim do trabalho manual. Diagnosticamos seus processos e usamos RPA para curar a causa da sua dor de cabeça operacional." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />

      {/* Hero Section - BLOCO 1 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <Badge variant="secondary" className="animate-fade-in mb-4 text-sm px-6 py-2">
              Tecnologia RPA de Última Geração
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Automação de processos, cuidamos de cada passo da sua rotina operacional com automações assertivas.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-200 leading-relaxed">
              Somos especialistas no desenvolvimento de automações, buscamos desenvolver com base em cada necessidade. 
              São mais de 200 empresas que já confiam no desenvolvimento da Auttopus.
              Conheça nosso cada passo do nosso processo e transforme sua operação.
            </p>

            {/* Icon with Animation */}
            <div className="flex justify-center mb-8 animate-fade-in delay-300">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                <Bot className="w-24 h-24 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Gatilhos de Prova Rápida */}
            <div className="hidden md:flex gap-6 mt-12 animate-fade-in delay-500 max-w-5xl mx-auto">
              <Card className="flex-1 bg-white/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Search className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="font-semibold text-lg">Seu diagnóstico</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Não cobramos para diagnosticar oportunidades de automação dentro da sua operação.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-white/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MousePointer className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="font-semibold text-lg">1 click e tenha todas as TFFs</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Deixe de emitir documentações recorrentes de forma manual
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-1 bg-white/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Package className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="font-semibold text-lg">Pacote de automações</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fornecemos pacotes de automações, melhore sua operação com previsibilidade de investimento.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" onClick={openContactForm} className="mt-8 animate-fade-in delay-700 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
              Agende um Diagnóstico de Processos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Methodology Section - BLOCO 2 */}
      <section className="py-24 relative bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Metodologia Comprovada
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso método não é sobre vender software, é sobre resolver processos.
            </h2>
            <p className="text-xl text-muted-foreground">
              A automação é a última etapa. Primeiro, entendemos sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                step: "1",
                title: "Diagnóstico Operacional",
                description: "Alocamos um especialista para mapear seus processos-chave e identificar os gargalos e sistemas subutilizados.",
                icon: Search
              },
              {
                step: "2",
                title: "Relatório Técnico (O 'Raio-X')",
                description: "Entregamos o plano de ação estratégico, detalhando o escopo, a metodologia e os processos a serem redesenhados.",
                icon: FileText
              },
              {
                step: "3",
                title: "Execução (RPA & Otimização)",
                description: "Nossos especialistas implementam as otimizações e desenvolvem os robôs (RPA) para executar as tarefas manuais.",
                icon: Settings
              },
              {
                step: "4",
                title: "Validação e Acompanhamento",
                description: "Entregamos o processo validado e oferecemos planos de melhoria contínua para garantir que a automação acompanhe seu negócio.",
                icon: CheckCircle2
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sector Selector - BLOCO 3 */}
      <section className="py-24 relative bg-gradient-to-b from-secondary/5 to-background">
        <div className="absolute inset-0 opacity-5 bg-grid-pattern" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Soluções Personalizadas por Setor
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Automação na Prática: O que resolvemos no seu setor
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossos projetos são desenhados para os desafios específicos da sua área de atuação.
            </p>
          </div>

          {/* Economy Block */}
          <div className="max-w-4xl mx-auto mb-16 bg-primary text-primary-foreground rounded-2xl p-12 text-center shadow-2xl">
            <p className="text-lg mb-2 opacity-90">Uma economia de até</p>
            <h2 className="text-6xl md:text-7xl font-bold mb-2">
              25.000<span className="text-3xl align-super">*</span>
            </h2>
            <p className="text-2xl md:text-3xl font-semibold mb-6 opacity-95">
              1 ano de produtividade
            </p>
            <p className="text-base mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Com a Consultoria AUTTOPUS, estruturamos seus processos para que o tempo de adaptação de novos talentos 
              seja investido em crescimento, não em caos.
            </p>
            <p className="text-sm opacity-75 leading-relaxed">
              *Baseado em nossa análise: 1 ano de produtividade é perdido a cada 5 novas contratações, que levam em média 
              3 meses para se habituar em empresas sem processos estruturados.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {sectors.map((sector) => (
              <Button
                key={sector.id}
                variant={selectedSector === sector.id ? "default" : "outline"}
                size="lg"
                onClick={() => handleSectorChange(sector.id)}
                className={`group relative overflow-hidden transition-all duration-300 ${
                  selectedSector === sector.id 
                    ? 'shadow-lg scale-105' 
                    : 'hover:shadow-md hover:scale-102'
                }`}
              >
                {selectedSector === sector.id && (
                  <CheckCircle2 className="w-4 h-4 mr-2 animate-scale-in" />
                )}
                <sector.icon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {sector.name}
              </Button>
            ))}
          </div>

          {/* Dynamic Content - Pain Point */}
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-2">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-destructive/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-24 -translate-x-24" />
              
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <Badge variant="destructive" className="mb-2">
                      Desafio do Setor
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                      {sectors.find(s => s.id === selectedSector)?.content.painTitle}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {sectors.find(s => s.id === selectedSector)?.content.painDescription}
                    </p>
                    <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                      <p className="text-sm font-medium">Alto risco de erros e retrabalho constante</p>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative aspect-video bg-gradient-to-br from-muted to-background rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center hover:border-primary/50 transition-all duration-300 overflow-hidden">
                      <DotLottieReact
                        src={sectors.find(s => s.id === selectedSector)?.lottieUrl}
                        loop
                        autoplay
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dynamic Content - Solutions */}
          <div className={`mt-12 transition-all duration-500 delay-100 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              
              <div className="relative z-10 space-y-8">
                <div className="text-center mb-12">
                  <Badge variant="secondary" className="mb-4">
                    Soluções em Ação
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {sectors.find(s => s.id === selectedSector)?.content.solutionsTitle}
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {sectors.find(s => s.id === selectedSector)?.content.intro}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {sectors.find(s => s.id === selectedSector)?.content.solutions.map((solution, index) => (
                    <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardContent className="p-6 relative z-10 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Cog className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            #{index + 1}
                          </Badge>
                        </div>
                        
                        <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {solution.title}
                        </h4>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {solution.description}
                        </p>

                        <div className="pt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-medium">Saiba mais</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Image placeholder for solutions */}
                <div className="mt-12 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <div className="relative aspect-[21/9] bg-gradient-to-br from-background via-muted to-background rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center hover:border-primary/50 transition-all duration-300 group-hover:scale-[1.02] overflow-hidden">
                    <DotLottieReact
                      src={sectors.find(s => s.id === selectedSector)?.lottieUrl}
                      loop
                      autoplay
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Detailed Automations Section - Only for Contabilidade */}
                {selectedSector === 'contabilidade' && (
                  <div className="mt-16 space-y-8" style={{ fontFamily: "'Lato', sans-serif" }}>
                    <div className="text-center mb-12">
                      <Badge variant="outline" className="mb-4">
                        Automações Detalhadas por Área
                      </Badge>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Explore as automações específicas para cada departamento
                      </h3>
                      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Selecione uma área para ver todas as automações disponíveis
                      </p>
                    </div>

                    {/* Sub-Sector Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                      {subSetores.map((subSetor) => {
                        const Icon = subSetor.icon;
                        return (
                          <Button
                            key={subSetor.id}
                            variant={expandedSubSector === subSetor.id ? "default" : "outline"}
                            onClick={() => toggleSubSector(subSetor.id)}
                            className="group"
                          >
                            <Icon className="w-4 h-4 mr-2" />
                            {subSetor.name}
                            {expandedSubSector === subSetor.id ? (
                              <ChevronDown className="w-4 h-4 ml-2" />
                            ) : (
                              <ChevronRight className="w-4 h-4 ml-2" />
                            )}
                          </Button>
                        );
                      })}
                    </div>

                    {/* Legalização Content */}
                    {expandedSubSector === 'legalizacao' && (
                      <Card className="border-2 border-primary/20">
                        <CardContent className="p-8 space-y-8">
                          <div className="text-center">
                            <h4 className="text-2xl font-bold mb-3">Automações de Legalização</h4>
                            <p className="text-muted-foreground mb-6">
                              Todas essas tarefas podem ser automatizadas na emissão e no envio. 
                              Processos que levam um mês ou mais manualmente podem ser concluídos em um único dia.
                            </p>
                          </div>

                          {/* Municipality Filters */}
                          <div className="flex flex-wrap justify-center gap-2 mb-8">
                            <Button
                              variant={selectedMunicipio === null ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedMunicipio(null)}
                            >
                              Todos os Municípios
                            </Button>
                            {municipios.map((municipio) => (
                              <Button
                                key={municipio.id}
                                variant={selectedMunicipio === municipio.key ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedMunicipio(municipio.key)}
                              >
                                {municipio.name}
                              </Button>
                            ))}
                          </div>

                          {/* Automation Cards in Grid/Carousel */}
                          <div className="space-y-12">
                            {municipios
                              .filter(m => !selectedMunicipio || m.key === selectedMunicipio)
                              .map((municipio) => {
                                const automacoes = legalizacaoAutomacoes[municipio.key as keyof typeof legalizacaoAutomacoes];
                                
                                return (
                                  <div key={municipio.id} className="space-y-4">
                                    <h5 className="text-xl font-semibold flex items-center gap-2">
                                      <Badge variant="secondary">{municipio.name}</Badge>
                                    </h5>
                                    
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                      {automacoes.map((automacao, index) => (
                                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white">
                                          <CardContent className="p-6 space-y-4">
                                            <div className="flex items-start justify-between">
                                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                                <FileCheck className="w-5 h-5 text-primary" />
                                              </div>
                                              <Badge variant="outline" className="text-xs">
                                                {automacao.periodicidade}
                                              </Badge>
                                            </div>

                                            <div>
                                              <h6 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                                                {automacao.title}
                                              </h6>
                                              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                                {automacao.description}
                                              </p>
                                              <p className="text-xs text-muted-foreground/70 italic">
                                                Portal: {automacao.portal}
                                              </p>
                                            </div>

                                            {automacao.hasSaibaMais && (
                                              <Button
                                                variant="ghost"
                                                size="sm"
                                                className="w-full group-hover:bg-primary/10 transition-colors"
                                                onClick={() => {
                                                  // Futuramente vai para página específica
                                                  console.log('Navegar para:', automacao.title);
                                                }}
                                              >
                                                Saiba mais
                                                <ExternalLink className="w-3 h-3 ml-2" />
                                              </Button>
                                            )}
                                          </CardContent>
                                        </Card>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                            <p className="text-sm text-muted-foreground text-center">
                              <strong>Importante:</strong> A maioria dessas tarefas, como TFF e Alvará, podem ter toda sua emissão 
                              concluída em um único dia com automação. Processos que manualmente levam semanas ou meses.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Placeholder for other sub-sectors */}
                    {expandedSubSector === 'contabil' && (
                      <Card className="border-2 border-primary/20">
                        <CardContent className="p-8 text-center">
                          <h4 className="text-2xl font-bold mb-3">Automações Contábeis</h4>
                          <p className="text-muted-foreground">
                            Conteúdo em desenvolvimento. Em breve você terá acesso a todas as automações contábeis disponíveis.
                          </p>
                        </CardContent>
                      </Card>
                    )}

                    {expandedSubSector === 'tributario' && (
                      <Card className="border-2 border-primary/20">
                        <CardContent className="p-8 text-center">
                          <h4 className="text-2xl font-bold mb-3">Automações Tributárias</h4>
                          <p className="text-muted-foreground">
                            Conteúdo em desenvolvimento. Em breve você terá acesso a todas as automações tributárias disponíveis.
                          </p>
                        </CardContent>
                      </Card>
                    )}

                    {expandedSubSector === 'pessoal' && (
                      <Card className="border-2 border-primary/20">
                        <CardContent className="p-8 text-center">
                          <h4 className="text-2xl font-bold mb-3">Automações de Pessoal/Folha</h4>
                          <p className="text-muted-foreground">
                            Conteúdo em desenvolvimento. Em breve você terá acesso a todas as automações de folha de pagamento disponíveis.
                          </p>
                        </CardContent>
                      </Card>
                    )}

                    {expandedSubSector === 'rh' && (
                      <Card className="border-2 border-primary/20">
                        <CardContent className="p-8 text-center">
                          <h4 className="text-2xl font-bold mb-3">Automações de RH</h4>
                          <p className="text-muted-foreground">
                            Conteúdo em desenvolvimento. Em breve você terá acesso a todas as automações de recursos humanos disponíveis.
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Investment Section - BLOCO 4 */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Investimento Estratégico
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforme seu "Custo Oculto" em Investimento
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A falta de processo custa caro: 3 meses para treinar um funcionário, gasto sobre gasto 
              em software subutilizado, horas de especialistas em tarefas manuais. O custo de não fazer 
              nada é pago todo dia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Card - Destaque */}
            <Card className="relative overflow-hidden border-4 border-accent shadow-2xl scale-105 md:scale-110">
              {/* Badge de Destaque */}
              <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-12 py-2 shadow-lg z-20">
                <span className="text-sm font-bold">MAIS ESCOLHIDO</span>
              </div>
              
              {/* Efeito visual de fundo */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/5 via-primary/5 to-transparent" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
              
              <CardContent className="p-10 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1.5 text-sm">
                    Projeto Completo
                  </Badge>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground line-through">R$ 15.000</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Estruturação Total
                </h3>
                <p className="text-sm text-accent font-semibold mb-4">
                  Investimento sob medida • ROI garantido em 6 meses
                </p>
                
                <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Valor médio baseado em 200+ projetos</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">R$ 12.500</span>
                    <span className="text-sm text-muted-foreground">entrada</span>
                  </div>
                  <p className="text-xs text-primary font-medium mt-1">+ parcelas flexíveis conforme escopo</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    { text: "Diagnóstico profundo + relatório técnico", highlight: true },
                    { text: "Implementação de automações RPA", highlight: true },
                    { text: "4 fases estruturadas (30-60 dias)", highlight: false },
                    { text: "Validação e documentação completa", highlight: false },
                    { text: "Treinamento da equipe incluído", highlight: true },
                    { text: "Suporte por 30 dias pós-entrega", highlight: false }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.highlight ? 'text-accent' : 'text-primary'}`} />
                      <span className={`text-sm ${item.highlight ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all" size="lg" onClick={openContactForm}>
                    Quero Transformar Minha Operação
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    🔥 Últimas 3 vagas do mês com desconto especial
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Right Card - Alternativa */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-border">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700" />
              
              <CardContent className="p-10 relative z-10">
                <Badge variant="secondary" className="mb-4 px-4 py-1.5">
                  Melhoria Contínua
                </Badge>
                
                <h3 className="text-2xl font-bold mb-2">Planos de Acompanhamento</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Após a estruturação, garantimos evolução constante com suporte especializado
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { 
                      name: "Essencial", 
                      price: "R$ 1.500/mês",
                      desc: "Monitoramento e ajustes básicos",
                      features: ["2h mensais de suporte", "Ajustes em automações"]
                    },
                    { 
                      name: "Avançado", 
                      price: "R$ 2.800/mês",
                      desc: "Otimizações + suporte prioritário",
                      features: ["6h mensais dedicadas", "Novas automações mensais", "Suporte prioritário"]
                    },
                    { 
                      name: "Estratégico", 
                      price: "Sob consulta",
                      desc: "Tech Leader dedicado",
                      features: ["Tech Leader as a Service", "Consultoria contínua", "Acesso ilimitado"]
                    }
                  ].map((plan, index) => (
                    <div key={index} className="p-5 rounded-xl border-2 border-border hover:border-primary bg-background hover:shadow-md transition-all group/plan cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="font-bold text-lg text-foreground">{plan.name}</span>
                          <p className="text-xs text-muted-foreground mt-1">{plan.desc}</p>
                        </div>
                        <Badge variant="outline" className="group-hover/plan:bg-primary group-hover/plan:text-primary-foreground transition-colors">
                          {plan.price}
                        </Badge>
                      </div>
                      <ul className="space-y-1 mt-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full border-2 hover:bg-primary hover:text-primary-foreground transition-all" size="lg" onClick={openContactForm}>
                  Conhecer os Planos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  💡 Ideal para quem já tem processos estruturados
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section - BLOCO 5 */}
      <section className="py-24 bg-gradient-to-b from-primary/10 to-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Casos de Sucesso
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos clientes dizem (e o que seus concorrentes não fazem)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary" />
              <CardContent className="p-8 pl-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Escritório Contábil</p>
                    <p className="text-sm text-muted-foreground">Contador Parceiro</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  &quot;Achávamos que o problema era o sistema Domínio. A AUTTOPUS mostrou que o problema era nosso 
                  fluxo de fechamento fiscal. Hoje, nossos SPEDs são validados e transmitidos automaticamente, 
                  e ganhamos 3 dias de trabalho da equipe sênior todo mês.&quot;
                </p>
                <div className="flex gap-1 mt-6">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary to-accent" />
              <CardContent className="p-8 pl-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Escritório de Advocacia</p>
                    <p className="text-sm text-muted-foreground">Advogado Sócio</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  &quot;A AUTTOPUS criou um robô que monitora 1.500 processos nossos no PJE e E-SAJ. 
                  Paramos de perder prazos por falha na leitura de intimação e ganhamos 20 horas 
                  de trabalho de advogado por semana.&quot;
                </p>
                <div className="flex gap-1 mt-6">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA - BLOCO 6 */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center space-y-6 mb-8">
                <Badge className="mb-4">
                  Diagnóstico Gratuito
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Pare de remediar a dor de cabeça. Cure a causa.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Agende um Diagnóstico de Processos. Nossos especialistas vão analisar sua operação 
                  (sem compromisso) e mostrar onde estão os gargalos que estão freando seu crescimento.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">O que você vai receber:</h3>
                  {[
                    "Análise gratuita dos seus processos críticos",
                    "Identificação de gargalos e desperdícios",
                    "Estimativa de economia de tempo e recursos",
                    "Plano inicial de automação personalizado"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Bot className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" onClick={openContactForm} className="text-lg px-12 py-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group">
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Sem compromisso • Consultoria de 30 minutos • 100% online
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactFormDialog open={isOpen} onOpenChange={setIsOpen} />

      <Footer />
      </div>
    </>
  );
};

export default AutomacaoProcessos;

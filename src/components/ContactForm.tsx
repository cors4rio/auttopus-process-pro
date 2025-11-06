import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    phone: "",
    email: "",
    message: "",
    interests: [] as string[],
  });

  const interests = [
    "Consultoria de Processos",
    "Tech Leader as a Service",
    "Automação de NFs",
    "Otimização Thomson Reuters",
    "Outros",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      role: "",
      phone: "",
      email: "",
      message: "",
      interests: [],
    });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-accent via-accent/95 to-primary text-accent-foreground relative overflow-hidden">
      {/* Decorative elements - Enhanced */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-foreground/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 bg-accent-foreground/10 backdrop-blur-sm rounded-full border border-accent-foreground/20">
              <span className="text-sm font-bold">⚡ Resposta em até 2 horas úteis</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Transforme Hoje o Que Está Custando Amanhã
            </h2>
            <p className="text-xl md:text-2xl text-accent-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Não deixe processos ineficientes consumirem seu lucro. Fale com especialistas que já otimizaram 200+ empresas.
            </p>
            <div className="flex items-center justify-center gap-8 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>Disponível agora</span>
              </div>
              <div className="text-accent-foreground/70">|</div>
              <span className="font-semibold">Diagnóstico 100% gratuito</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-background backdrop-blur-sm p-8 rounded-2xl border-2 border-accent-foreground/20 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-background">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/90 border-background/30 text-foreground"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-background">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-background/90 border-background/30 text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-background">
                      Cargo
                    </Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="bg-background/90 border-background/30 text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-background">
                      Telefone (WhatsApp) *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background/90 border-background/30 text-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-background">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/90 border-background/30 text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-background">
                    Mensagem (opcional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/90 border-background/30 text-foreground min-h-[100px]"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-background">Interesse em:</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => handleInterestToggle(interest)}
                          className="border-background/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <label
                          htmlFor={interest}
                          className="text-sm text-background cursor-pointer"
                        >
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                  >
                    🚀 Quero Otimizar Minha Empresa Agora
                  </Button>
                  <p className="text-center text-sm text-accent-foreground/70">
                    ✓ Sem compromisso  ✓ Resposta rápida  ✓ Diagnóstico gratuito
                  </p>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-background p-6 rounded-2xl border-2 border-accent-foreground/20 shadow-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Fale Conosco</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Telefone/WhatsApp</p>
                      <p className="text-foreground font-semibold">+55 (XX) XXXXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">E-mail</p>
                      <p className="text-foreground font-semibold">contato@auttopus.com.br</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center mb-3">Empresas que confiam em nós:</p>
                  <div className="flex flex-col gap-2 text-center">
                    <p className="text-sm font-bold text-primary">200+ empresas atendidas</p>
                    <p className="text-xs text-muted-foreground">Média de 80% de ganho em produtividade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

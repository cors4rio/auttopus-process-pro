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
    "Otimizar Domínio",
    "Automação NFs",
    "Treinamento",
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
    <section id="contato" className="py-20 bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Chega de pagar por tecnologia que não te entrega tudo.
            </h2>
            <p className="text-xl text-background/90">
              Não espere. Converse com quem entende de processos e otimização. Sua próxima decisão
              inteligente começa aqui.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-background/10 backdrop-blur-sm p-8 rounded-2xl border border-background/20">
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
                  <div className="grid grid-cols-2 gap-3">
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

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-opacity font-bold text-lg"
                >
                  Fale com um Especialista AUTTOPUS
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-background/10 backdrop-blur-sm p-6 rounded-2xl border border-background/20">
                <h3 className="text-xl font-bold text-background mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="text-sm text-background/80 mb-1">Telefone</p>
                      <p className="text-background font-medium">+55 (XX) XXXXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="text-sm text-background/80 mb-1">E-mail</p>
                      <p className="text-background font-medium">contato@auttopus.com.br</p>
                    </div>
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

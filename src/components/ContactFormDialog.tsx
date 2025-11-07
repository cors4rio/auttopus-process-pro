import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Nome completo é obrigatório").max(100),
  company: z.string().trim().max(100).optional(),
  role: z.string().trim().max(100).optional(),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  message: z.string().trim().max(1000).optional(),
  interests: z.array(z.string()).min(1, "Selecione pelo menos um interesse"),
  contactMethod: z.enum(["whatsapp", "phone", "email"])
});

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const interestOptions = [
  "Consultoria de processos",
  "Tech Leader as a Service",
  "Automação de NFs",
  "Otimização Thomson Reuters",
  "Outros"
];

export const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<{
    name: string;
    company: string;
    role: string;
    phone: string;
    email: string;
    message: string;
    interests: string[];
    contactMethod: "whatsapp" | "phone" | "email";
  }>({
    name: "",
    company: "",
    role: "",
    phone: "",
    email: "",
    message: "",
    interests: [],
    contactMethod: "whatsapp"
  });

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactFormSchema.parse(formData);
      
      // Aqui você pode integrar com sua API de envio de formulário
      console.log("Form data:", validatedData);
      
      toast({
        title: "Formulário enviado!",
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
        contactMethod: "whatsapp"
      });
      
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro no formulário",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Entre em contato</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="h-10 md:h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="h-10 md:h-12"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="role">Cargo</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="h-10 md:h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone (WhatsApp) *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="h-10 md:h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="h-10 md:h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem (opcional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="min-h-[80px] md:min-h-[100px]"
            />
          </div>

          <div className="space-y-3">
            <Label>Interesse em: *</Label>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {interestOptions.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={formData.interests.includes(interest)}
                    onCheckedChange={() => handleInterestToggle(interest)}
                  />
                  <Label
                    htmlFor={interest}
                    className="cursor-pointer font-normal"
                  >
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Como prefere ser contatado?</Label>
            <div className="flex gap-4 flex-wrap">
              <label className="flex cursor-pointer items-center space-x-2">
                <input
                  type="radio"
                  name="contactMethod"
                  value="whatsapp"
                  checked={formData.contactMethod === "whatsapp"}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactMethod: e.target.value as "whatsapp" | "phone" | "email" }))}
                  className="text-primary"
                />
                <span className="text-sm">WhatsApp</span>
              </label>
              <label className="flex cursor-pointer items-center space-x-2">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === "phone"}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactMethod: e.target.value as "whatsapp" | "phone" | "email" }))}
                  className="text-primary"
                />
                <span className="text-sm">Ligação</span>
              </label>
              <label className="flex cursor-pointer items-center space-x-2">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === "email"}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactMethod: e.target.value as "whatsapp" | "phone" | "email" }))}
                  className="text-primary"
                />
                <span className="text-sm">E-mail</span>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-11 md:h-12 text-base md:text-lg font-bold"
          >
            Quero ser contatado
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

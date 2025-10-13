import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle, Lightbulb } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="relative inline-block mb-8">
          <Lightbulb className="w-32 h-32 text-primary/20 transform rotate-12" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-bold text-primary">404</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ops! Essa página não foi encontrada.
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto">
          Parece que você pegou um atalho que não existe. Mas não se preocupe, a AUTTOPUS está aqui para colocar tudo no caminho certo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold"
          >
            <a href="/">
              <Home className="w-5 h-5 mr-2" />
              Voltar para a Página Inicial
            </a>
          </Button>
          
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale com um Especialista AUTTOPUS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

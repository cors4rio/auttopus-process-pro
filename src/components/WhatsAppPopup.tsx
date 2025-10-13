import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds if not closed
    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    window.open("https://wa.me/5511999999999", "_blank");
    setIsVisible(false);
    setIsClosed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-primary text-primary-foreground rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-3">
            Precisando de ajuda para otimizar seus processos?
          </h3>

          <p className="text-primary-foreground/90 mb-6 text-lg">
            Fale agora com um especialista AUTTOPUS pelo WhatsApp e descubra como podemos te ajudar.
          </p>

          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="w-full bg-white text-primary hover:bg-white/90 transition-opacity font-bold text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale Pelo WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;

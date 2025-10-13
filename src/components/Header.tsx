import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icone.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logoIcon} alt="AUTTOPUS" className="h-12 w-12" />
            <span className="text-xl font-bold text-primary">AUTTOPUS</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Nossos Serviços
            </button>
            <button
              onClick={() => scrollToSection("abordagem")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Como Trabalhamos
            </button>
            <button
              onClick={() => scrollToSection("resultados")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold px-6"
          >
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

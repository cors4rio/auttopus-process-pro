import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import blogLogo from "@/assets/auttopusblog-logo.svg";

const BlogHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={blogLogo} alt="AUTTOPUS Blog" className="h-16 md:h-20" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="/#servicos"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="/blog"
              className="text-primary-foreground font-bold underline underline-offset-4"
            >
              Blog
            </a>
            <a
              href="/#contato"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          <Button
            onClick={() => window.location.href = "/#contato"}
            className="bg-background text-primary hover:bg-background/90 transition-opacity font-semibold px-6"
          >
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;

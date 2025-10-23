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
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={blogLogo} alt="AUTTOPUS Blog" className="h-12" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="/#servicos"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="/blog"
              className="text-primary font-medium"
            >
              Blog
            </a>
            <a
              href="/#contato"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          <Button
            onClick={() => window.location.href = "/#contato"}
            className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold px-6"
          >
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;

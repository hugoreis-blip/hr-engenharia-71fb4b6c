import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "SPDA", href: "#spda" },
    { name: "Termografia", href: "#termografia" },
    { name: "Ar-Condicionado", href: "#ar-condicionado" },
    { name: "Processo", href: "#processo" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-navy-dark text-primary-foreground py-2">
        <div className="container-section flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:4132768153" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              (41) 3276-8153
            </a>
            <a href="mailto:comercial3@hrengenharia.com.br" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              comercial3@hrengenharia.com.br
            </a>
          </div>
          <p className="text-primary-foreground/80">
            Curitiba, Região Metropolitana e Litoral
          </p>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-card"
        }`}
      >
        <div className="container-section">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex-shrink-0">
              <img src={logo} alt="HR Engenharia Elétrica" className="h-12 md:h-14" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="https://wa.me/5541999177110" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-up">
            <div className="container-section py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-foreground/80 font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a href="tel:4132768153" className="flex items-center gap-2 text-foreground/80">
                  <Phone className="w-4 h-4" />
                  (41) 3276-8153
                </a>
                <Button variant="gold" className="w-full" asChild>
                  <a href="https://wa.me/5541999177110" target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "SPDA", href: "#spda" },
    { name: "Contato", href: "#contato" },
  ];

  const services = [
    "Manutenção de SPDA",
    "Laudos Técnicos",
    "Termografia Predial",
    "Projetos Elétricos",
    "Carregadores EV",
    "Adequações Elétricas",
  ];

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="container-section py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="HR Engenharia Elétrica"
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Especialistas em engenharia elétrica para condomínios desde 2005. Mais de 20
              anos garantindo segurança e conformidade.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              CNPJ: 07.516.375/0001-58
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">(41) 3276-8153</p>
                  <p className="text-primary-foreground/70">(41) 99917-7110</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm break-all">
                  comercial3@hrengenharia.com.br
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Rua Oliveira Viana, 948 – Casa A, Hauer, Curitiba/PR
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/70 text-sm">
                  <p>Seg a Qui: 7h30 às 17h30</p>
                  <p>Sex: 7h30 às 16h30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-section py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm text-center sm:text-left">
            © {currentYear} HR Engenharia Elétrica. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Curitiba, Região Metropolitana e Litoral do Paraná
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

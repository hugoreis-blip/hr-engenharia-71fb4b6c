import { 
  Zap, 
  FileText, 
  Thermometer, 
  Building2, 
  PenTool, 
  Car, 
  Wrench, 
  FolderCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Manutenção e Inspeção de SPDA",
      description:
        "Inspeção anual e manutenção completa do sistema de proteção contra descargas atmosféricas conforme NBR 5419.",
    },
    {
      icon: FileText,
      title: "Laudos Técnicos e ART",
      description:
        "Emissão de laudos técnicos e Anotações de Responsabilidade Técnica (ART) para documentação e conformidade.",
    },
    {
      icon: Thermometer,
      title: "Termografia Predial",
      description:
        "Inspeção preventiva por análise térmica para identificar pontos de superaquecimento e prevenir incêndios.",
    },
    {
      icon: Building2,
      title: "Sistemas Elétricos Prediais",
      description:
        "Instalação e manutenção completa de sistemas elétricos em condomínios residenciais e comerciais.",
    },
    {
      icon: PenTool,
      title: "Projetos Elétricos",
      description:
        "Elaboração de projetos elétricos conforme NBR 5410 e NBR 14039, com memorial descritivo completo.",
    },
    {
      icon: Car,
      title: "Carregadores Elétricos",
      description:
        "Instalação de infraestrutura e pontos de carregamento para veículos elétricos em garagens de condomínios.",
    },
    {
      icon: Wrench,
      title: "Adequações Elétricas",
      description:
        "Adequação de instalações elétricas às normas vigentes, incluindo quadros, aterramentos e sistemas de proteção.",
    },
    {
      icon: FolderCheck,
      title: "Documentação Técnica",
      description:
        "Organização completa de toda documentação técnica do condomínio, prontuário e registros de manutenção.",
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-secondary/50">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Soluções Completas em{" "}
            <span className="text-primary">Engenharia Elétrica</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos todos os serviços necessários para manter seu condomínio
            em total conformidade com as normas técnicas e legislações vigentes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card card-hover border border-border/50 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/5541999177110" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

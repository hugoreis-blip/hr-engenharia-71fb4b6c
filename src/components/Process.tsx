import { Phone, MapPin, Calculator, Wrench, FileText, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Phone,
      step: "01",
      title: "Contato",
      description: "Entre em contato por telefone, WhatsApp ou formulário.",
    },
    {
      icon: MapPin,
      step: "02",
      title: "Visita Técnica",
      description: "Agendamos uma visita para avaliação do local.",
    },
    {
      icon: Calculator,
      step: "03",
      title: "Orçamento",
      description: "Elaboramos proposta detalhada e transparente.",
    },
    {
      icon: Wrench,
      step: "04",
      title: "Execução",
      description: "Realizamos o serviço com qualidade e segurança.",
    },
    {
      icon: FileText,
      step: "05",
      title: "Relatório + ART",
      description: "Emitimos laudos técnicos e ART do serviço.",
    },
    {
      icon: CheckCircle,
      step: "06",
      title: "Entrega",
      description: "Documentação completa entregue e organizada.",
    },
  ];

  return (
    <section id="processo" className="section-padding bg-background">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Nosso <span className="text-primary">Processo de Trabalho</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Metodologia transparente e organizada para garantir a melhor
            experiência ao cliente.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Step Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-4 bg-card rounded-full shadow-card border-4 border-background flex items-center justify-center group hover:bg-primary transition-colors">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Step Number */}
                <span className="inline-block text-accent font-heading font-bold text-sm mb-2">
                  {item.step}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

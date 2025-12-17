import { Flame, Eye, Clock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import thermographyImage from "@/assets/thermography.jpg";

const Thermography = () => {
  const benefits = [
    {
      icon: Flame,
      title: "Prevenção de Incêndios",
      description: "Identifica pontos de superaquecimento antes que se tornem perigosos.",
    },
    {
      icon: Eye,
      title: "Detecção Invisível",
      description: "Visualiza problemas ocultos sem necessidade de desmontar equipamentos.",
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Inspeção rápida e não invasiva, sem interrupção das atividades.",
    },
    {
      icon: FileCheck,
      title: "Relatório Técnico",
      description: "Laudo completo com imagens térmicas e recomendações de correção.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src={thermographyImage}
              alt="Termografia predial"
              className="rounded-xl shadow-xl w-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-crimson text-primary-foreground rounded-lg px-4 py-2 shadow-lg">
              <p className="font-heading font-bold text-sm">INSPEÇÃO PREVENTIVA</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Termografia
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-6">
              Inspeção Térmica:{" "}
              <span className="text-primary">Previna Acidentes</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A termografia é uma técnica de inspeção não invasiva que utiliza
              câmeras infravermelhas para detectar anomalias térmicas em
              instalações elétricas, identificando problemas antes que causem
              falhas ou incêndios.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Realizamos inspeções termográficas completas em quadros elétricos,
              cabos, conexões e equipamentos, fornecendo relatório técnico
              detalhado com as recomendações de manutenção preventiva.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/5541999177110" target="_blank" rel="noopener noreferrer">
                Solicitar Inspeção
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thermography;

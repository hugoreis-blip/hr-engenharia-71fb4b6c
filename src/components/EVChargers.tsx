import { Plug, Gauge, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const EVChargers = () => {
  const evChargerImage = "/images/work-2.jpg";
  const features = [
    {
      icon: Plug,
      title: "Instalação Completa",
      description: "Infraestrutura elétrica e instalação de carregadores.",
    },
    {
      icon: Gauge,
      title: "Dimensionamento Correto",
      description: "Projeto adequado à demanda e capacidade do prédio.",
    },
    {
      icon: DollarSign,
      title: "Medição Individual",
      description: "Sistema de medição separada para cada usuário.",
    },
    {
      icon: TrendingUp,
      title: "Valorização do Imóvel",
      description: "Infraestrutura moderna que agrega valor ao condomínio.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Carregadores Elétricos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Infraestrutura para{" "}
              <span className="text-primary">Veículos Elétricos</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Prepare seu condomínio para o futuro da mobilidade. Oferecemos
              soluções completas para instalação de pontos de carregamento para
              veículos elétricos, desde o projeto até a execução.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa equipe realiza o dimensionamento adequado da infraestrutura,
              garantindo que a instalação atenda às normas técnicas e não
              sobrecarregue o sistema elétrico do condomínio.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <a href="#contato">Consultar Projeto</a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={evChargerImage}
              alt="Carregador de veículo elétrico"
              className="rounded-xl shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-lg px-6 py-3 shadow-lg">
              <p className="font-heading font-bold text-lg">Futuro</p>
              <p className="text-sm opacity-80">Sustentável</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVChargers;

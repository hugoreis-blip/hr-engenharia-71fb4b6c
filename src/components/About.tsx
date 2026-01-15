import { Award, Users, Building2, CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Engenheiro especializado em sistemas prediais",
    "Atendimento ágil e profissional",
    "Documentação técnica completa (ART)",
    "Conformidade total com normas ABNT",
    "Suporte pós-serviço dedicado",
    "Preços competitivos e transparentes",
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Condomínios Atendidos" },
    { icon: Users, value: "15+", label: "Anos de Experiência" },
    { icon: Award, value: "100%", label: "Conformidade ABNT" },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-6">
              Especialistas em Engenharia Elétrica para Condomínios
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="text-foreground">HR Engenharia Elétrica</strong> atua há mais de 15 anos
              oferecendo soluções completas em sistemas elétricos para
              condomínios em Curitiba, Região Metropolitana e Litoral do Paraná.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nosso engenheiro e técnicos qualificados garantem
              serviços realizados com rigor técnico, seguindo todas as normas
              da ABNT e legislações municipais vigentes. Trabalhamos com
              síndicos, administradoras e gestores prediais para garantir a
              segurança e conformidade das instalações elétricas.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card card-hover border border-border/50 flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}

            {/* Legal Notice */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
              <p className="text-sm text-foreground leading-relaxed">
                <strong className="text-accent">CNPJ:</strong> 07.516.375/0001-58
                <br />
                <strong className="text-accent">Endereço:</strong> Rua Oliveira Viana, 948 – Casa A, Bairro Hauer, CEP 81630-070, Curitiba/PR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

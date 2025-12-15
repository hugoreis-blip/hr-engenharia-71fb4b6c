import { AlertTriangle, Scale, CalendarCheck, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import spdaImage from "@/assets/spda-inspection.jpg";

const SPDA = () => {
  const warnings = [
    {
      icon: AlertTriangle,
      title: "Risco de Incêndio",
      description:
        "Sistema SPDA com defeito ou sem manutenção pode causar incêndios e danos irreparáveis à estrutura do edifício.",
    },
    {
      icon: Scale,
      title: "Multas e Penalidades",
      description:
        "O não cumprimento das leis municipais pode resultar em multas pesadas e interdição do condomínio.",
    },
    {
      icon: ShieldAlert,
      title: "Responsabilidade Civil",
      description:
        "Síndicos podem responder civil e criminalmente por acidentes decorrentes de falta de manutenção.",
    },
    {
      icon: CalendarCheck,
      title: "Inspeção Anual Obrigatória",
      description:
        "A NBR 5419 exige inspeção anual do SPDA, com registro em laudo técnico e emissão de ART.",
    },
  ];

  return (
    <section id="spda" className="section-padding bg-navy-dark text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
          }}
        />
      </div>

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Para-Raios (SPDA)
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
              Proteção Contra Descargas Atmosféricas:{" "}
              <span className="text-accent">Sua Obrigação Legal</span>
            </h2>

            {/* Legal Alert Box */}
            <div className="bg-accent/20 border-l-4 border-accent rounded-r-lg p-5 mb-8">
              <p className="text-primary-foreground leading-relaxed">
                <strong className="text-accent">Atenção:</strong> Em Curitiba e Matinhos, há leis
                municipais que tornam{" "}
                <strong>obrigatória a manutenção periódica</strong> e a
                instalação adequada do sistema de para-raios (SPDA) em
                edificações, especialmente condomínios.
              </p>
            </div>

            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              O Sistema de Proteção contra Descargas Atmosféricas (SPDA) é
              fundamental para a segurança do seu condomínio. Seguimos
              rigorosamente a <strong>NBR 5419</strong> para garantir proteção
              total contra raios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contato">Agendar Visita Técnica</a>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <a href="https://wa.me/5541999177110" target="_blank" rel="noopener noreferrer">
                  Tirar Dúvidas
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={spdaImage}
              alt="Inspeção de SPDA"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-lg px-6 py-3 shadow-lg">
              <p className="font-heading font-bold text-lg">NBR 5419</p>
              <p className="text-sm">Conformidade Total</p>
            </div>
          </div>
        </div>

        {/* Warning Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {warnings.map((warning, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20"
            >
              <warning.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">
                {warning.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {warning.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SPDA;

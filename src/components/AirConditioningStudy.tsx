import { BarChart3, FileCheck, ShieldCheck, Cable, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import acImage from "@/assets/arcond.png";

const AirConditioningStudy = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Análise de Energia (5 dias)",
      description:
        "Uso de registrador digital para gerar gráficos reais de consumo e tensão.",
    },
    {
      icon: FileCheck,
      title: "Memorial de Cálculo e ART",
      description:
        "Definimos o limite exato de BTUs por unidade com emissão de responsabilidade técnica.",
    },
    {
      icon: ShieldCheck,
      title: "Conformidade Total",
      description:
        "Projetos elaborados segundo normas Copel, NR-10 e ABNT (NBR-5410).",
    },
  ];

  const components = [
    {
      icon: Cable,
      name: "Diagramas Elétricos",
      objective:
        "Planejar fiação, faseamento e proteção para novos circuitos.",
    },
    {
      icon: Zap,
      name: "Integração com SPDA",
      objective:
        "Avaliar a posição das máquinas em relação ao para-raios.",
    },
    {
      icon: BookOpen,
      name: "Roteiro para Moradores",
      objective:
        "Instruções técnicas para garantir que instaladores externos sigam o padrão.",
    },
  ];

  return (
    <section id="ar-condicionado" className="section-padding bg-navy-dark text-primary-foreground relative overflow-hidden">
      <div className="container-section">
        {/* Header + Image: two-column on desktop */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Text */}
          <div className="text-center lg:text-left">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Estudo de Viabilidade
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-2 mb-4">
              Energia elétrica para climatização:{" "}
              <span className="text-accent">seu prédio está preparado?</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Evite o risco de instalações irregulares, sobrecarga e incêndios.
              Oferecemos a solução técnica e segura para o seu condomínio.
            </p>

            <Button variant="gold" size="lg" asChild>
              <a href="https://wa.me/5541999177110" target="_blank" rel="noopener noreferrer">
                Consultar Viabilidade
              </a>
            </Button>
          </div>

          {/* Photo – mobile first, desktop right */}
          <div className="order-first lg:order-last">
            <img
              src={acImage}
              alt="Ar-condicionados instalados em fachada de prédio"
              className="rounded-xl shadow-2xl w-full max-w-md mx-auto object-cover"
            />
          </div>
        </div>

        {/* Benefits – modern cards */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 shadow-card text-center group card-hover"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                <benefit.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Components Table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-primary-foreground text-xl mb-6 text-center">
            Componentes do Estudo de Viabilidade
          </h3>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-accent/20">
                  <TableHead className="font-heading font-bold text-accent">
                    Componente do Estudo
                  </TableHead>
                  <TableHead className="font-heading font-bold text-accent">
                    Objetivo Principal
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {components.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-semibold text-primary-foreground">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                        {item.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-primary-foreground/70 text-sm">
                      {item.objective}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirConditioningStudy;

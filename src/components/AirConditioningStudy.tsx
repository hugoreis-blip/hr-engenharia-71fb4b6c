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
    <section className="section-padding bg-secondary/50">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Estudo de Viabilidade
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
            Energia elétrica para climatização:{" "}
            <span className="text-primary">seu prédio está preparado?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Evite o risco de instalações irregulares, sobrecarga e incêndios.
            Oferecemos a solução técnica e segura para o seu condomínio.
          </p>
        </div>

        {/* Benefits columns */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 text-center group card-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Components Table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-primary text-xl mb-6 text-center">
            Componentes do Estudo de Viabilidade
          </h3>
          <div className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="font-heading font-bold text-primary">
                    Componente do Estudo
                  </TableHead>
                  <TableHead className="font-heading font-bold text-primary">
                    Objetivo Principal
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {components.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-semibold text-foreground">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                        {item.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {item.objective}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/5541999177110" target="_blank" rel="noopener noreferrer">
              Solicitar Estudo de Viabilidade
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AirConditioningStudy;

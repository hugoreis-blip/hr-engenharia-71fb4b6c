import { Star, Quote, Award } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alexandre",
      role: "Síndico Orgânico",
      condominium: "Ed. Sunset Hills",
      rating: 10,
    },
    {
      name: "Vivian",
      role: "Síndica Orgânica",
      condominium: "Condomínio Ana Paula II",
      rating: 10,
    },
    {
      name: "Silvia",
      role: "Administradora",
      condominium: "Inconal Administradora",
      rating: 10,
    },
    {
      name: "Francisco",
      role: "Síndico Orgânico",
      condominium: "Edifício Saint Maurice",
      rating: 10,
    },
    {
      name: "Renato Lopes",
      role: "Síndico Orgânico",
      condominium: "Edifício Marques do Paraná",
      rating: 10,
    },
    {
      name: "Roberta Antunes de Morais",
      role: "Síndica Profissional",
      condominium: "Plymouth Hills",
      rating: 10,
    },
  ];

  const condominiums = [
    "Ed. Sunset Hills",
    "Condomínio Ana Paula II",
    "Edifício Saint Maurice",
    "Edifício Marques do Paraná",
    "Cleveland",
    "Conj. Residencial João Paulo",
    "Moradias Augusta XXI",
    "Residencial Grand Florence",
    "Cabanas Viriato",
    "Nova Atlanta I",
    "Plymouth Hills",
    "Residencial Imbuia II",
    "Cond. Nossa Senhora Aparecida",
    "Condomínio Montreal",
    "Saint Barthelemy",
    "Edif. Res. Westphalen",
    "Edificio Firenze Ecoville",
    "Condôminio Saint Laurent",
    "Claud Monet",
    "Edifício Saxony",
    "Edifício Antônio Emilio",
    "Edifício Gioconda",
    "Cond. Edif. Staufer",
    "Ed. St Andrews",
    "Edifício Corrientes",
    "Residencial Ilhas Baleares",
    "Edifício Villa Santorini",
    "Residencial Ilha de Capri",
  ];

  // Calculate average rating from all responses
  const allRatings = [10, 10, 10, 8, 10, 10, 9, 10, 10, 9, 10, 9, 10, 10, 10, 10, 9, 10, 10, 8, 10, 10, 10, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const averageRating = (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1);

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Avaliações Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            O Que Nossos <span className="text-primary">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>

        {/* NPS Score Card */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 mb-12 text-center shadow-elegant">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Award className="w-16 h-16 text-accent" />
            <div>
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mb-1">
                Nota Média de Recomendação
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-heading font-bold text-primary-foreground">
                  {averageRating}
                </span>
                <span className="text-2xl text-primary-foreground/70">/10</span>
              </div>
              <p className="text-primary-foreground/70 text-sm mt-2">
                Baseado em {allRatings.length} avaliações de síndicos e administradoras
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card card-hover border border-border/50 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/30 absolute top-4 right-4" />

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="text-accent font-bold text-lg">{testimonial.rating}/10</span>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
                <p className="text-primary text-sm font-medium">
                  {testimonial.condominium}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Condominiums Served */}
        <div className="text-center">
          <p className="text-muted-foreground font-medium mb-6">
            +{condominiums.length} condomínios atendidos que confiam em nosso trabalho:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {condominiums.slice(0, 16).map((condo, index) => (
              <span
                key={index}
                className="bg-card px-4 py-2 rounded-full text-sm text-foreground/70 border border-border/50 hover:border-primary/50 transition-colors"
              >
                {condo}
              </span>
            ))}
            <span className="bg-primary/10 px-4 py-2 rounded-full text-sm text-primary font-medium border border-primary/30">
              +{condominiums.length - 16} outros
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

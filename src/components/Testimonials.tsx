import { Star, Quote, Award } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos",
      role: "Síndico",
      condominium: "Condomínio Edifício",
      quote: "Muito obrigado pela atenção e controle das manutenções. Eu tenho tudo, não preciso nem mandar mensagem, já chega bem antes!",
      rating: 10,
    },
    {
      name: "Isabele",
      role: "Síndica",
      condominium: "Residencial Álamos",
      quote: "Os técnicos foram super pontuais, chegaram até antes. Só para agradecer o excelente atendimento!",
      rating: 10,
    },
    {
      name: "Margaret",
      role: "Síndica",
      condominium: "Condomínio Residencial",
      quote: "O funcionário foi muito prestativo e atencioso. Quero agradecer o atendimento referente à reposição da lâmpada do para-raio.",
      rating: 10,
    },
    {
      name: "Dino",
      role: "Síndico",
      condominium: "Silva Jardins",
      quote: "Gostei dos trabalhos. Muito grato! Nos falamos na próxima manutenção.",
      rating: 10,
    },
    {
      name: "Cliente",
      role: "Síndica",
      condominium: "Ed. Suindara",
      quote: "Muito obrigada pelo atendimento em cima da hora. Por favor me encaminhe o boleto e a nota fiscal para eu pagar hoje!",
      rating: 10,
    },
    {
      name: "Cliente",
      role: "Administradora",
      condominium: "Condomínio Parceiro",
      quote: "Eu que agradeço o atendimento e profissionalismo de sempre. Pode deixar que mais tarde eu respondo sim o formulário.",
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

  const allRatings = [10, 10, 10, 8, 10, 10, 9, 10, 10, 9, 10, 9, 10, 10, 10, 10, 9, 10, 10, 8, 10, 10, 10, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const averageRating = (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1);

  return (
    <section id="depoimentos" className="section-padding bg-secondary/50">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Avaliações Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Feedbacks reais de síndicos e administradoras que confiam no nosso trabalho.
          </p>
        </div>

        {/* NPS Score Card */}
        <div className="bg-primary rounded-2xl p-8 mb-12 text-center shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Award className="w-16 h-16 text-accent" />
            <div>
              <p className="text-primary-foreground text-sm uppercase tracking-wider mb-1 font-medium">
                Nota Média de Recomendação
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-heading font-bold text-primary-foreground">
                  {averageRating}
                </span>
                <span className="text-2xl text-primary-foreground">/10</span>
              </div>
              <p className="text-primary-foreground text-sm mt-2">
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

              {/* Quote Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>

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

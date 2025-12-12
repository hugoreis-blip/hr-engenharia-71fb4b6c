import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "Síndico",
      condominium: "Edifício Solar das Araucárias",
      content:
        "Excelente trabalho na manutenção do SPDA. Equipe profissional, pontual e documentação impecável. Recomendo fortemente.",
      rating: 5,
    },
    {
      name: "Mariana Santos",
      role: "Administradora",
      condominium: "Condomínio Jardim Europa",
      content:
        "A HR Engenharia nos ajudou a regularizar toda a documentação elétrica do condomínio. Atendimento de primeira.",
      rating: 5,
    },
    {
      name: "Roberto Fernandes",
      role: "Síndico Profissional",
      condominium: "Residencial Monte Verde",
      content:
        "Parceria de anos. Sempre confio na HR para serviços elétricos nos condomínios que administro. Qualidade garantida.",
      rating: 5,
    },
  ];

  const condominiums = [
    "Edifício Palazzo Ducale",
    "Condomínio Jardim Europa",
    "Residencial Monte Verde",
    "Edifício Solar das Araucárias",
    "Condomínio Vila Rica",
    "Residencial Parque das Flores",
    "Edifício Central Park",
    "Condomínio Alto da Glória",
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            O Que Nossos <span className="text-primary">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card card-hover border border-border/50 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/30 absolute top-4 right-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role} - {testimonial.condominium}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Condominiums Served */}
        <div className="text-center">
          <p className="text-muted-foreground font-medium mb-6">
            Alguns condomínios que confiam em nosso trabalho:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {condominiums.map((condo, index) => (
              <span
                key={index}
                className="bg-card px-4 py-2 rounded-full text-sm text-foreground/70 border border-border/50"
              >
                {condo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

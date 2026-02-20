import { Star, Quote, Award } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      role: "Síndico",
      location: "Curitiba - PR",
      quote: "Muito obrigado pela atenção e controle das manutenções. Eu tenho tudo organizado, não preciso nem mandar mensagem, já chega bem antes do prazo!",
      rating: 5,
    },
    {
      role: "Síndica",
      location: "Curitiba - PR",
      quote: "Os técnicos foram super pontuais, chegaram até antes do horário. Só para agradecer o excelente atendimento!",
      rating: 5,
    },
    {
      role: "Síndica",
      location: "Curitiba - PR",
      quote: "O funcionário foi muito prestativo e atencioso. Quero agradecer o atendimento referente à reposição da lâmpada do para-raio.",
      rating: 5,
    },
    {
      role: "Síndico",
      location: "Curitiba - PR",
      quote: "Gostei dos trabalhos realizados. Laudos claros e objetivos. Muito grato! Nos falamos na próxima manutenção.",
      rating: 5,
    },
    {
      role: "Conselho Consultivo",
      location: "Curitiba - PR",
      quote: "Muito obrigada pelo atendimento em cima da hora. Resolveram tudo rapidamente com muita educação e profissionalismo.",
      rating: 5,
    },
    {
      role: "Administradora de Condomínios",
      location: "Curitiba - PR",
      quote: "Eu que agradeço o atendimento e profissionalismo de sempre. Laudos técnicos impecáveis e equipe extremamente educada.",
      rating: 5,
    },
  ];

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
            Feedbacks reais de síndicos e administradoras que confiam no nosso trabalho há mais de 20 anos.
          </p>
        </div>

        {/* NPS Score Card */}
        <div className="bg-primary rounded-2xl p-8 mb-12 text-center shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Award className="w-16 h-16 text-accent" />
            <div>
              <p className="text-primary-foreground text-sm uppercase tracking-wider mb-1 font-medium">
                Nota Média de Satisfação
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground text-sm">
                Baseado em avaliações de síndicos e administradoras
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card card-hover border border-border/50 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">
                  {testimonial.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(41) 3276-8153",
      href: "tel:4132768153",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(41) 99917-7110",
      href: "https://wa.me/5541999177110",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "comercial3@hrengenharia.com.br",
      href: "mailto:comercial3@hrengenharia.com.br",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Oliveira Viana, 948 – Casa A, Hauer, Curitiba/PR",
      href: "#",
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg a Qui: 7h30 às 17h30 | Sex: 7h30 às 16h30",
      href: "#",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
            Fale <span className="text-accent">Conosco</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
            Entre em contato diretamente conosco. Nossa equipe está pronta para atendê-lo.
          </p>

          {/* Contact Details */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-start gap-4 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors group text-left"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <item.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/5541999177110" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

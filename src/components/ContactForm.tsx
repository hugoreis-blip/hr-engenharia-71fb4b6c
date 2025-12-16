import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    condominium: "",
    whatsapp: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      condominium: "",
      whatsapp: "",
      email: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    "Manutenção de SPDA (Para-raios)",
    "Laudo Técnico / ART",
    "Termografia Predial",
    "Projeto Elétrico",
    "Instalação de Carregadores EV",
    "Adequação Elétrica",
    "Manutenção Elétrica",
    "Outro",
  ];

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
              Solicite um <span className="text-accent">Orçamento</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Preencha o formulário ou entre em contato diretamente. Nossa
              equipe retornará em até 24 horas úteis.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors group"
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
            <Button variant="whatsapp" size="xl" className="w-full sm:w-auto" asChild>
              <a href="https://wa.me/5541999177110" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Form */}
          <div className="bg-card text-card-foreground rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="font-heading font-bold text-xl mb-6">
              Solicite um Orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Seu Nome *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Condomínio
                  </label>
                  <Input
                    name="condominium"
                    value={formData.condominium}
                    onChange={handleChange}
                    placeholder="Nome do condomínio"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    WhatsApp *
                  </label>
                  <Input
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(41) 99999-9999"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Tipo de Serviço *
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                  required
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva sua necessidade..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitação
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

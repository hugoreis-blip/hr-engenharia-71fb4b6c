import { Shield, FileCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Condomínios em Curitiba"
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0 bg-navy-dark/75"
        />
      </div>

      {/* Content */}
      <div className="container-section relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Conformidade NBR 5419 | NBR 14039 | NBR 5410
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Segurança Elétrica para{" "}
            <span className="text-accent">Condomínios</span> com Excelência
            Técnica
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Especialistas em SPDA, manutenção elétrica e termografia predial.
            Garantimos conformidade com as normas ABNT e leis municipais de
            Curitiba e Matinhos.
          </p>


          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <FileCheck className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Laudos e ART</p>
                <p className="text-xs text-primary-foreground/70">Documentação completa</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <Shield className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Normas ABNT</p>
                <p className="text-xs text-primary-foreground/70">Total conformidade</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <Zap className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-primary-foreground">+20 Anos</p>
                <p className="text-xs text-primary-foreground/70">Experiência desde 2005</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

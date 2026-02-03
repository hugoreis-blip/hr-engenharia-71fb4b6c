const AnnouncementBar = () => {
  const mobileText = "⚠️ ALERTA: TEMPORADA DE CHUVAS E RAIOS. Proteja seu patrimônio, agende a manutenção preventiva do para-raios agora!";
  const desktopText = "⚠️ ALERTA: TEMPORADA DE CHUVAS E RAIOS. Proteja seu patrimônio, agende a manutenção preventiva do para-raios agora!";

  return (
    <div className="bg-destructive text-destructive-foreground py-2 overflow-hidden sticky top-0 z-50">
      {/* Mobile - Texto curto com marquee */}
      <div className="md:hidden animate-marquee whitespace-nowrap">
        <span className="mx-4 font-semibold">{mobileText}</span>
        <span className="mx-4 font-semibold">{mobileText}</span>
      </div>
      
      {/* Desktop - Texto completo com marquee */}
      <div className="hidden md:block animate-marquee-slow whitespace-nowrap">
        <span className="mx-4 font-semibold">{desktopText}</span>
        <span className="mx-4 font-semibold">{desktopText}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;

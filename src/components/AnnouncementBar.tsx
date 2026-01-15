const AnnouncementBar = () => {
  const mobileText = "⚠️ ALERTA: Proteja seu patrimônio das chuvas, agende a manutenção do para-raios.";
  const desktopText = "⚠️ ALERTA DE JANEIRO: Período de fortes chuvas e raios em Curitiba e Região. Agende sua manutenção preventiva de Para-raios agora!";

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

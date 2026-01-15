const AnnouncementBar = () => {
  return (
    <div className="bg-destructive text-destructive-foreground py-2 overflow-hidden">
      <div className="animate-marquee md:animate-marquee-slow whitespace-nowrap">
        <span className="mx-4 font-semibold">
          ⚠️ ALERTA DE JANEIRO: Período de fortes chuvas e raios em Curitiba e Região. Agende sua manutenção preventiva de Para-raios agora!
        </span>
        <span className="mx-4 font-semibold">
          ⚠️ ALERTA DE JANEIRO: Período de fortes chuvas e raios em Curitiba e Região. Agende sua manutenção preventiva de Para-raios agora!
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;

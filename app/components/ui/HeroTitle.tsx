interface HeroTitleProps {
  className?: string;
}

export default function HeroTitle({ className = '' }: HeroTitleProps) {
  return (
    <div className="flex flex-1 flex-col justify-center text-[clamp(120px,13vw,12rem)] leading-[0.7]">
      {/* Main Heading - ATHLETIC ZONE AJACCIO */}
      <h1 className="sr-only">ATHLETIC ZONE AJACCIO</h1>

      {/* ATHLETIC Text */}
      <span className="block text-white" aria-hidden="true">
        ATHLETIC
      </span>

      {/* ZONE Text with Coordinates */}
      <div className="relative" aria-hidden="true">
        <span className="block text-[clamp(130px,14vw,13rem)] text-highlight">
          ZONE
        </span>

        {/* Coordinates - positioned absolutely over ZONE */}
        <span className="absolute bottom-[45%] font-mono text-[clamp(12px,1.3vw,1.25rem)] font-black tracking-tight text-white drop-shadow-lg drop-shadow-black">
          41°55'51.078''N8°44'11.114''E
        </span>
      </div>

      {/* AJACCIO Text */}
      <span className="block text-white" aria-hidden="true">
        AJACCIO
      </span>
    </div>
  );
}

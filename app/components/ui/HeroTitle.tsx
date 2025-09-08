import { cn } from '@/app/lib/utils';

interface HeroTitleProps {
  className?: string;
}

export default function HeroTitle({ className = '' }: HeroTitleProps) {
  return (
    <div
      className={cn(
        // Layout
        'lg: flex flex-col justify-center',
        // Style
        'text-[clamp(7rem,32vw,12rem)] leading-[0.7] min-lg:text-[clamp(10rem,13dvw,12rem)]',
        className
      )}
    >
      {/* Main Heading - ATHLETIC ZONE AJACCIO */}
      <h1 className="sr-only">
        ATHLETIC ZONE AJACCIO - Salle de sport de fitness et coaching en Corse
      </h1>

      {/* ATHLETIC Text */}
      <span className="block text-white" aria-hidden="true">
        ATHLETIC
      </span>

      {/* ZONE Text with Coordinates */}
      <div className="relative" aria-hidden="true">
        <span
          className={cn(
            // Layout
            'block',
            // Style
            'text-[clamp(8rem,32vw,13rem)] text-highlight min-lg:text-[clamp(11rem,14vw,13rem)]'
          )}
        >
          ZONE
        </span>

        {/* Coordinates - positioned absolutely over ZONE */}
        <span
          className={cn(
            // Position
            'absolute bottom-[45%]',
            // Font
            'font-mono text-[clamp(11px,3vw,1.25rem)] font-medium tracking-tight min-lg:text-[clamp(1rem,1.3vw,1.25rem)]',
            // Shadow
            'drop-shadow-lg drop-shadow-black'
          )}
        >
          41°55&apos;51.078&apos;&apos;N8°44&apos;11.114&apos;&apos;E
        </span>
      </div>

      {/* AJACCIO Text */}
      <span className="block text-white" aria-hidden="true">
        AJACCIO
      </span>
    </div>
  );
}

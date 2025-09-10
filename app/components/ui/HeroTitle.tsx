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
        'text-[clamp(7rem,32svw,12rem)] leading-[0.7] min-lg:text-[clamp(10rem,13svw,12rem)]',
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
            'text-[clamp(8rem,32svw,13rem)] text-highlight min-lg:text-[clamp(11rem,14svw,13rem)]'
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
            'font-mono text-[clamp(0.73rem,3svw,1.19rem)] font-medium tracking-tight lg:text-[clamp(1rem,1.28svw,1.19rem)]',
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

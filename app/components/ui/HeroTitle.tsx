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
        'text-h1-base leading-[0.7] min-lg:text-h1-lg',
        className
      )}
    >
      {/* Main Heading - ATHLETIC ZONE AJACCIO */}
      <h1 className="sr-only">
        ATHLETIC ZONE AJACCIO - Salle de sport de fitness et coaching en Corse
      </h1>

      {/* ATHLETIC Text */}
      <span className="block text-secondary" aria-hidden="true">
        ATHLETIC
      </span>

      {/* ZONE Text with Coordinates */}
      <div className="relative" aria-hidden="true">
        <span
          className={cn(
            // Layout
            'block',
            // Style
            'text-h1-zone-base text-highlight min-lg:text-h1-zone-lg'
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
            'font-mono text-coordinates-base font-medium tracking-tight lg:text-coordinates-lg',
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

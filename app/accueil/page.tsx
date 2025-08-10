import HeroBorder from '@/app/components/ui/HeroBorder';
import HeroTitle from '@/app/components/ui/HeroTitle';
import HeroNavigationV2 from '@/app/components/ui/HeroNavigationV2';
import Button from '@/app/components/ui/Button';
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// prettier-ignore
// Hero-specific styles - kept local since they're component-specific
const heroStyles = {
  section: cn(
    'relative h-svh w-full p-5',
    'bg-[url("/image/hero_background.webp")] bg-cover bg-center',
    'font-sofia text-secondary'
  ),
  overlay: cn(
    'absolute inset-0 bg-black/15 pointer-events-none'
  ),
  mainContainer: cn(
    'relative z-10 h-full w-full',
    'flex flex-col justify-center gap-[10vh]',
    'lg:grid lg:grid-cols-2 lg:justify-center'
  ),
  leftColumn: cn(
    'flex flex-col justify-center gap-[5vh] md:h-auto lg:h-full'
  ),
  rightColumn: cn(
    'hidden h-full flex-col lg:flex'
  ),
  taglineMobile: cn(
    'text-[clamp(30px,8vw,40px)] leading-[100%] lg:hidden'
  ),
  taglineDesktop: cn( 
    'text-[40px] leading-[100%]'
  ),
  copyright: cn(
    'absolute bottom-5 left-5 right-5 hidden items-end gap-1 md:flex'
  ),
} as const;

export default function HeroPage() {
  return (
    <section id="accueil" className={heroStyles.section}>
      <div className={heroStyles.overlay} />

      {/* Corner borders */}
      <HeroBorder position="top-left" className="hidden min-md:block" />
      <HeroBorder position="top-right" className="hidden min-md:block" />

      {/* Main container displaying  in grid on large screen*/}
      <div className={heroStyles.mainContainer}>
        {/* Left column */}
        <div className={heroStyles.leftColumn}>
          <HeroTitle />
          <div className={heroStyles.taglineMobile}>
            <p>
              Entrez dans la <span className="text-highlight">Zone</span>
            </p>
            <p className="text-left lg:text-right">
              Réveillez l'<span className="text-highlight">A</span>thlète qui
              est en vous
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className={heroStyles.rightColumn}>
          <HeroNavigationV2 className="relative top-[6%]" />
          <div className={heroStyles.taglineDesktop}>
            <div className="flex items-center justify-end gap-2">
              <img
                src="/image/Logo.svg"
                alt="Athletic Zone Ajaccio logo"
                className="h-6 w-auto"
                loading="eager"
                decoding="async"
              />
              <p>
                Entrez dans la <span className="text-highlight">Zone</span>
              </p>
            </div>
            <p className="text-right">
              Réveillez l'<span className="text-highlight">A</span>thlète qui
              est en vous
            </p>
          </div>
        </div>

        <Button className="h-[38px] w-[190px] lg:hidden">Réserver</Button>
      </div>

      {/* Copyright */}
      <div className={heroStyles.copyright}>
        <span className="font-sans text-xs">© 2025 Athletic Zone Ajaccio</span>
        <HeroBorder position="bottom" />
      </div>
    </section>
  );
}

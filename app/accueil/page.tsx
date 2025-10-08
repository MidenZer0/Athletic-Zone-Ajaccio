import Image from 'next/image';
import Link from 'next/link';
import HeroBackground from '@/public/image/hero_background.webp';
import CornerBorder from '@/app/components/ui/decoration/CornerBorder';
import HeroTitle from '@/app/components/ui/HeroTitle';
import HeroNavigationV2 from '@/app/components/ui/HeroNavigationV2';
import Button from '@/app/components/ui/Button';
import ButtonV2 from '@/app/components/ui/ButtonV2';
import { cn } from '@/app/lib/utils';

// prettier-ignore
// Hero-specific styles - kept local since they're component-specific
const heroStyles = {
  section: cn(
    'relative h-svh w-full p-5',
    // 'bg-[url("/image/hero_background.webp")] bg-cover bg-center',
    'font-sofia text-secondary'
  ),
  overlay: cn(
    'pointer-events-none absolute inset-0 bg-overlay-hero'
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
    'hidden h-full flex-col lg:flex gap-5'
  ),
  taglineMobile: cn(
    'text-[clamp(30px,8vw,40px)] leading-[100%] lg:hidden'
  ),
  taglineDesktop: cn( 
    'text-[40px] leading-[100%]'
  ),
  copyright: cn(
    'absolute right-5 bottom-5 left-5 hidden items-end gap-1 md:flex'
  ),
} as const;

// Local component - only used within Hero
const Tagline = ({
  className,
  showLogo = false,
}: {
  className?: string;
  showLogo?: boolean;
}) => (
  <div className={className}>
    {showLogo && (
      <div className="flex items-center justify-end gap-2">
        <Image
          src="/image/Logo.svg"
          alt="Athletic Zone Ajaccio logo"
          width={24}
          height={24}
          className="h-6 w-auto"
        />
        <p>
          Entrez dans la <span className="text-highlight">Zone</span>
        </p>
      </div>
    )}
    {!showLogo && (
      <p>
        Entrez dans la <span className="text-highlight">Zone</span>
      </p>
    )}
    <p className={showLogo ? 'text-right' : 'text-left'}>
      Réveillez l&apos;<span className="text-highlight">A</span>thlète qui est
      en vous
    </p>
  </div>
);

const TaglineV2 = ({
  className,
  showLogo = false,
}: {
  className?: string;
  showLogo?: boolean;
}) => (
  <div className={className}>
    {showLogo && (
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/image/Logo.svg"
            alt="Athletic Zone Ajaccio logo"
            width={24}
            height={24}
            className="h-6 w-auto"
          />
          <p className={showLogo ? 'text-right' : 'text-left'}>
            Réveillez l&apos;<span className="text-highlight">A</span>thlète qui
            est en vous
          </p>
        </div>
      </div>
    )}
    {!showLogo && (
      <p className={showLogo ? 'text-right' : 'text-left'}>
        Réveillez l&apos;<span className="text-highlight">A</span>thlète qui est
        en vous
      </p>
    )}
  </div>
);

export default function HeroPage() {
  return (
    <section id="accueil" className={heroStyles.section}>
      <Image
        src={HeroBackground}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className={heroStyles.overlay} />

      {/* Corner borders */}
      <CornerBorder
        variant="hero"
        position="top-left"
        className="hidden min-md:block"
      />
      <CornerBorder
        variant="hero"
        position="top-right"
        className="hidden min-md:block"
      />

      {/* Main container displaying in grid on large screen*/}
      <div className={heroStyles.mainContainer}>
        {/* Left column */}
        <div className={heroStyles.leftColumn}>
          <HeroTitle />
          <TaglineV2 className={heroStyles.taglineMobile} />
          <ButtonV2
            href="/auth/login"
            children="Entrer dans la_ZONE"
            color="yellow"
            className="bg-[rgba(85,83,83,0.2)] lg:hidden"
          />
        </div>

        {/* Right column */}
        <div className={heroStyles.rightColumn}>
          <HeroNavigationV2 className="relative top-[6%]" />

          <ButtonV2
            href="/auth/login"
            children="Entrer dans la_ZONE"
            color="yellow"
            icon="arrow"
            className="self-end bg-[rgba(85,83,83,0.2)] text-base"
          />

          <TaglineV2 className={heroStyles.taglineDesktop} showLogo />
        </div>
      </div>

      {/* Copyright */}
      <div className={heroStyles.copyright}>
        <span className="font-sans text-xs"> 2025 Athletic Zone Ajaccio</span>
        <CornerBorder position="bottom" />
      </div>
    </section>
  );
}

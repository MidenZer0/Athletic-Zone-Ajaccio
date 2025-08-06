import HeroBorder from '@/app/components/ui/HeroBorder';
import HeroTitle from '@/app/components/ui/HeroTitle';
import HeroNavigationV2 from '@/app/components/ui/HeroNavigationV2';

export default function HeroPage() {
  return (
    <section
      id="accueil"
      className="h-screen w-full bg-[url('/image/hero_background.webp')] bg-cover bg-center font-sofia text-secondary"
    >
      {/* corner border */}
      <HeroBorder position="top-left" />
      <HeroBorder position="top-right" />

      <div className="grid h-screen grid-cols-2 p-5">
        {/* left column */}
        <div className="flex flex-col justify-between">
          <HeroTitle className="" />
          <div className="flex items-end gap-1">
            <span className="font-sans text-xs">
              © 2025 Athletic zone Ajaccio
            </span>
            <HeroBorder position="bottom" />
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col justify-between">
          <HeroNavigationV2 />
          <div className="text-(length:--size-forty)/[100%]">
            <div className="flex items-center justify-end gap-2">
              <img src="/image/Logo.svg" alt="Logo" className="h-6 w-auto" />
              <p>
                Entrez dans la <span className="text-highlight">zone</span>
              </p>
            </div>
            <p className="text-right">
              Réveillez l'
              <span className="text-highlight">A</span>
              thlète qui est en vous
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

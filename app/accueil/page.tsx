import HeroBorder from "@/app/components/ui/HeroBorder";
import HeroTitle from "@/app/components/ui/HeroTitle";
import HeroNavigation from "@/app/components/ui/HeroNavigation";

export default function HeroPage() {
  return (
    <section
      id="accueil"
      className="
      w-full 
      h-screen 
      bg-[url('/image/hero_background.webp')] 
      bg-cover 
      bg-center 
      text-secondary 
      font-sofia
      "
    >
      {/* corner border */}
      <HeroBorder position="top-left" />
      <HeroBorder position="top-right" />

      <div className="grid grid-cols-2 h-screen p-5">
        {/* left column */}
        <div className="flex flex-col justify-between">
          <HeroTitle className="" />
          <div className="flex items-end gap-1">
            <span className="text-xs font-sans">
              © 2025 Athletic zone Ajaccio
            </span>
            <HeroBorder position="bottom" />
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col justify-between">
          <HeroNavigation />
          <div className="text-(length:--size-forty)/[100%]">
            <div className="flex items-center justify-end gap-2">
              <img src="/image/Logo.svg" alt="Logo" className="w-auto h-6" />
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

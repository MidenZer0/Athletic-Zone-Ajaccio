import NavigationLinksV2 from './NavigationLinksV2';

interface HeroNavigationV2Props {
  className?: string;
}

export default function HeroNavigationV2({
  className = '',
}: HeroNavigationV2Props) {
  return (
    <nav
      className={`hidden flex-1 items-center justify-end pl-5 font-sofia text-5xl text-tertiary lg:flex ${className}`}
    >
      <NavigationLinksV2
        showImages={true}
        className="flex w-fit flex-col pr-[140px] text-right"
        linkClassName="hover:text-secondary hover:scale-105 transition-all duration-300 group"
        iconClassName="relative h-fit top-[14px]"
      />
    </nav>
  );
}

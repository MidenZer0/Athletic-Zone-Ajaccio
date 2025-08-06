import NavLinks from './NavLinks';

interface HeroNavigationProps {
  className?: string;
}

export default function HeroNavigation({
  className = '',
}: HeroNavigationProps) {
  return (
    <nav
      className={`hidden flex-1 items-center justify-end pl-5 text-5xl text-tertiary lg:flex ${className}`}
    >
      <NavLinks variant="hero" />
    </nav>
  );
}

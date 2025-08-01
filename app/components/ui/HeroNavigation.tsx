import NavLinks from "./NavLinks";

interface HeroNavigationProps {
  className?: string;
}

export default function HeroNavigation({
  className = "",
}: HeroNavigationProps) {
  return (
    <nav
      className={`hidden lg:flex flex-1 justify-end items-center pl-5 text-5xl text-tertiary ${className}`}
    >
      <NavLinks variant="hero" />
    </nav>
  );
}

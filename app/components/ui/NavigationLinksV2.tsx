import { navigationLinks, NavigationLink } from '@/app/lib/navigation';

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
  showImages?: boolean;
  renderLink?: (link: NavigationLink, index: number) => React.ReactNode;
}

export default function NavLinks({
  className = '',
  linkClassName = '',
  iconClassName = '',
  showImages = false,
  renderLink,
}: NavLinksProps) {
  return (
    <div className={className}>
      {navigationLinks.map((link, index) => {
        // If custom renderLink is provided, use it
        if (renderLink) {
          return renderLink(link, index);
        }

        // Default rendering
        return (
          <a
            key={link.name}
            href={link.href}
            className={`${
              link.isSpecial
                ? 'flex gap-1 text-highlight hover:text-highlight'
                : ''
            } ${linkClassName}`}
            aria-label={`Navigate to ${link.name} section`}
          >
            {link.name}

            {showImages && link.image && (
              <img
                src={link.image}
                alt={link.alt}
                loading="lazy"
                className="nav-img-preview"
              />
            )}

            {link.icon && (
              <img src={link.icon} alt="arrow" className={iconClassName} />
            )}
          </a>
        );
      })}
    </div>
  );
}

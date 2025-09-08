import { navigationLinks, NavigationLink } from '@/app/lib/navigation';
import Image from 'next/image';
import { cn } from '@/app/lib/utils';

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
            className={cn(
              'text-tertiary',
              linkClassName,
              link.isSpecial
                ? 'flex gap-1 text-highlight hover:text-highlight'
                : 'hover:text-secondary'
            )}
            aria-label={`Navigate to ${link.name} section`}
            data-special={link.isSpecial ? 'true' : 'false'}
          >
            {link.name}

            {showImages && link.image && (
              <Image
                src={link.image}
                alt={link.alt || `${link.name} preview`}
                width={64}
                height={64}
                loading="lazy"
                className="nav-img-preview"
              />
            )}

            {link.icon && (
              <Image
                src={link.icon}
                alt="arrow"
                width={12}
                height={12}
                className={iconClassName}
              />
            )}
          </a>
        );
      })}
    </div>
  );
}

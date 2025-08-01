import { navigationLinks, NavigationLink } from "@/app/lib/navigation";

// Individual link component (internal)
interface SingleNavLinkProps {
  name: string;
  href: string;
  image?: string;
  icon?: string;
  alt?: string;
  className?: string;
  isSpecial?: boolean;
  showImages: boolean; // Controls whether to show images
}

function SingleNavLink({
  name,
  href,
  image,
  icon,
  alt,
  className,
  isSpecial,
  showImages,
}: SingleNavLinkProps) {
  const baseClasses = " hover:scale-105 transition-all duration-300";
  const linkClasses = isSpecial
    ? "flex gap-1 text-highlight hover:!text-highlight group"
    : "group";

  return (
    <a
      href={href}
      className={`${baseClasses} ${linkClasses} ${className}`}
      aria-label={`Navigate to ${name} section`}
    >
      {name}

      {showImages && (
        <>
          {image && (
            <img
              src={image}
              alt={alt}
              loading="lazy"
              className="nav-img-preview"
            />
          )}
          {icon && (
            <img src={icon} alt="arrow" className="relative h-fit top-[14px]" />
          )}
        </>
      )}
    </a>
  );
}

// Main NavLinks component (exported)
interface NavLinksProps {
  className?: string;
  variant: "hero" | "burger menu" | "mobile";
  activeSection?: string;
}

export default function NavLinks({
  variant,
  className,
  activeSection,
}: NavLinksProps) {
  const showImages = variant === "hero";

  const heroLinks = navigationLinks.map((link) => (
    <SingleNavLink
      key={link.name}
      {...link}
      showImages={showImages}
      className="hover:text-secondary"
    />
  ));

  const burgerMenuLinks = navigationLinks.map((link) => {
    // Check if this link corresponds to the active section
    const isActive = activeSection === link.href.replace("#", "");

    return (
      <div
        key={link.name}
        className={`h-full flex-1 flex items-center border-t-[4px] transition-all duration-300 ${
          isActive
            ? "border-highlight" // Red border when active
            : "border-gray-300 hover:border-gray-400" // Gray border normally
        }`}
      >
        <SingleNavLink
          {...link}
          showImages={false}
          className="w-full h-full flex items-center hover:text-highlight"
        />
      </div>
    );
  });

  // Return different layouts based on variant
  if (variant === "hero") {
    return (
      <div className={`${className} flex flex-col w-fit text-right pr-[140px]`}>
        {heroLinks}
      </div>
    );
  }

  // Burger menu layout (we'll design this later)
  return (
    <div className={`${className} w-[80%] flex justify-evenly`}>
      {burgerMenuLinks}
    </div>
  );
}

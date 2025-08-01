export interface NavigationLink {
  name: string;
  href: string;
  image?: string;
  alt?: string;
  isSpecial?: boolean;
  icon?: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    name: "A propos",
    href: "#about",
    image: "/image/About_preview_1.png",
    alt: "A propos image preview",
  },
  {
    name: "Méthode",
    href: "#method",
    image: "/image/méthode_preview.png",
    alt: "méthode image preview",
  },
  {
    name: "Réserver",
    href: "/auth/login",
    isSpecial: true, // Flag to identify it's special
    icon: "/image/arrow.svg",
  },
  {
    name: "Galerie",
    href: "#galerie",
    image: "/image/Galery_preview_1.png",
    alt: "Galerie image preview",
  },
  {
    name: "Tarifs",
    href: "#tarifs",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export type SectionId =
  | "accueil"
  | "about"
  | "method"
  | "galerie"
  | "tarifs"
  | "contact";

export const sections = [
  "accueil",
  "about",
  "method",
  "galerie",
  "tarifs",
  "contact",
];

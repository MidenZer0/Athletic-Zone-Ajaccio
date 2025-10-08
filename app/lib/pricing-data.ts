// Types for pricing data
export interface PricingOption {
  price?: string;
  period?: string;
  originalPrice?: string;
  note?: string;
}

export interface Badge {
  text: string;
  variant?: 'popular' | 'discount';
}

export interface PricingCard {
  title: string;
  pricing: PricingOption[];
  pricingPack?: PricingOption[];
  description?: string;
  features?: string[];
  badgeBase?: Badge;
  badgePack?: Badge;
}

export type PricingType = 'smallGroup' | 'coachingPrive';

// Small Group pricing data (from tarifs.tsx)
export const smallGroupPricing: PricingCard[] = [
  {
    title: 'Sans Engagement',
    pricing: [
      {
        price: '90€',
        period: '/mois',
        note: "Frais d'inscription 45€",
      },
    ],
    pricingPack: [
      {
        price: '105€',
        period: 'mois',
      },
    ],
    features: [
      'Accès à 4 cours/semaine',
      'Entrée libre illimitée',
      'Résiliation à tout moment',
    ],
    badgePack: {
      text: '+ 2 cours',
    },
  },
  {
    title: 'Engagement',
    pricing: [
      {
        price: '75€',
        period: '/mois',
      },
    ],
    pricingPack: [
      {
        price: '850€',
        period: 'année',
      },
    ],
    features: [
      "Frais d'inscription offerts",
      'Engagement 12 mois',
      'Accès à 4 cours/semaine',
      'Entrée libre illimitée',
    ],
    badgeBase: {
      text: 'Populaire',
      variant: 'popular',
    },
    badgePack: {
      text: '-5%',
      variant: 'discount',
    },
  },
  {
    title: 'Tickets',
    pricing: [
      {
        price: '10€',

        note: '10€ la 1ère séance puis 19€/séance',
      },
    ],
    pricingPack: [
      {
        price: '140€',
        period: '10 séances',
      },
    ],
    description:
      "Séance d'entraînement au choix parmi nos cours en groupe réduit",
    badgePack: {
      text: '-25%',
      variant: 'discount',
    },
  },
];

// Coaching Privé pricing data
export const coachingPrivePricing: PricingCard[] = [
  {
    title: '1 Séance',
    pricing: [
      {
        price: '50€',
      },
    ],
    features: [
      'Séance privée',
      'Définiton des objectifs',
      'Programme sur mesure',
      'Suivi des améliorations',
    ],
  },
  {
    title: '10 Séances',
    pricing: [
      {
        price: '44€',
        period: '/séance',
      },
    ],
    features: [
      'Séance privée',
      'Définiton des objectifs',
      'Programme sur mesure',
      'Suivi des améliorations',
    ],
    badgeBase: {
      text: '-12%',
      variant: 'discount',
    },
  },
  {
    title: '20 Séances',
    pricing: [
      {
        price: '39€',
        period: '/séance',
      },
    ],
    features: [
      'Séance privée',
      'Définiton des objectifs',
      'Programme sur mesure',
      'Suivi des améliorations',
    ],
    badgeBase: {
      text: '-22%',
      variant: 'discount',
    },
  },
];

// Utility function to get pricing by type
export const getPricingByType = (type: PricingType): PricingCard[] => {
  switch (type) {
    case 'smallGroup':
      return smallGroupPricing;
    case 'coachingPrive':
      return coachingPrivePricing;
    default:
      return smallGroupPricing;
  }
};

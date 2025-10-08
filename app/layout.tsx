import type { Metadata } from 'next';
import BurgerMenuV2 from '@/app/components/ui/BurgerMenu';
import MobileMenu from '@/app/components/ui/MobileMenu';

import {
  Roboto,
  Roboto_Mono,
  Sofia_Sans_Extra_Condensed,
  Anton,
} from 'next/font/google';
import './globals.css';

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  weight: ['200', '300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  variable: '--font-sofia-sans-extra-condensed',
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

const anton = Anton({
  variable: '--font-anton',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Athletic Zone Ajaccio - Centre de fitness et coaching sportif en Corse',
  description:
    'Centre de fitness et coaching sportif personnalisé à Ajaccio. Réveillez l&apos;athlète qui est en vous avec un accompagnement sur mesure dans un cadre motivant.',
  keywords:
    'fitness, coaching sportif, coaching privée, Ajaccio, Corse, salle de sport, remise en forme, performance, nutrition, musculuation, cardio, bootcamp, pilates',
  authors: [{ name: 'Athletic Zone Ajaccio' }],
  openGraph: {
    title: 'Athletic Zone Ajaccio - Centre de fitness en Corse',
    description:
      'Réveillez l&apos;athlète qui est en vous avec notre coaching personnalisé à Ajaccio.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} ${sofiaSansExtraCondensed.variable} ${anton.variable} antialiased`}
      >
        <BurgerMenuV2 />
        <MobileMenu />

        <main>{children}</main>
      </body>
    </html>
  );
}

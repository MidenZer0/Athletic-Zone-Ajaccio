import HeroPage from './accueil/page';
import AboutPage from './about/page';
import MethodPage from './method/page';
import TarifsPage from './tarifs/page';
import GaleriePage from './galerie/page';
import ContactPage from './contact/page';

export default function Home() {
  return (
    <main>
      <HeroPage />
      <AboutPage />
      <MethodPage />
      <GaleriePage />
      <TarifsPage />
      <ContactPage />
    </main>
  );
}

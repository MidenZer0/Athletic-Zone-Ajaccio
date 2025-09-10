import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import AthleticZoneLogo from '@/app/components/ui/about/AthleticZoneLogo';
import QuoteGallery from '@/app/components/ui/about/QuoteGallery';
import ButtonV2 from '@/app/components/ui/ButtonV2';

export default function AboutPage() {
  return (
    <section
      id="about"
      className="mt-16 space-y-12 md:space-y-16 lg:space-y-20"
    >
      <section className="flex h-fit w-full flex-col space-y-8 md:space-y-12 lg:space-y-16">
        <div className="px-px-sm sm:px-px-md lg:px-px-lg flex w-full flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8">
          <h2 className="text-center font-anton text-[clamp(4rem,10vw,14rem)] leading-[1] tracking-[-0.040em]">
            UN COACHING SUR <span className="text-highlight">MESURE</span>
          </h2>

          <p className="w-3/5 min-w-[330px] text-center font-mono text-[clamp(0.9rem,2vw,1.125rem)] tracking-tighter italic max-sm:min-w-fit">
            « Être athlétique, c&apos;est aller plus loin. <br className="" />{' '}
            Tu améliores tes performances mais surtout ta santé ! »
          </p>
        </div>

        <div className="flex h-screen flex-col gap-4 px-4 md:h-[60vh] md:flex-row md:gap-6 md:p-0 lg:h-[70vh] lg:gap-8 lg:pl-16">
          <div className="relative h-1/2 md:h-full md:flex-[2]">
            <Image
              src="/image/coach_check.webp"
              alt="Photo du coach"
              fill
              className="object-cover max-md:object-[60%_30%]"
              sizes="(max-width: 768px) 500px, 1000px"
            />
          </div>
          <div className="relative h-1/2 md:h-full md:flex-[4]">
            <Image
              src="/image/stretching_group.webp"
              alt="Photo du cours de pilates"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 500px, 2000px"
            />
          </div>
        </div>

        <div className="flex h-fit w-full flex-col gap-6 max-lg:px-10 max-sm:px-4 lg:h-[75vh] lg:min-h-[650px] lg:flex-row lg:gap-8 lg:pl-16">
          <div className="flex h-full items-center justify-center md:flex-[2]">
            <AthleticZoneLogo
              strokeColor="black"
              strokeWidthLetter={1.25}
              strokeWidthLogo={0.6}
              spin={true}
              fontSize={66}
            />
          </div>
          <div className="flex h-full flex-col justify-center gap-6 md:flex-[4] lg:gap-8">
            <p className="text-lg font-normal sm:text-xl lg:pr-16 lg:text-2xl">
              Loin des salles traditionnelles, AZA est un espace de coaching
              privé où chaque séance est pensée pour vous.
            </p>
            <p className="text-lg font-normal sm:text-xl lg:pr-16 lg:text-2xl">
              Nous proposons un accompagnement sur mesure, dans un cadre
              motivant et structuré, avec des coachs qualifiés et du matériel
              haut de gamme.
            </p>
            <p className="text-lg font-normal sm:text-xl lg:pr-16 lg:text-2xl">
              Que vous soyez un sportif novice ou expérimenté, vous bénéficierez
              d&apos;un bilan initial et d&apos;un suivi personnalisé.
            </p>
            <p className="text-lg font-normal sm:text-xl lg:pr-16 lg:text-2xl">
              Les entraînements individuels ou en groupe réduit garantissent une
              qualité d&apos;encadrement optimale et des résultats durables.
            </p>
            <p className="text-lg font-normal sm:text-xl lg:pr-16 lg:text-2xl">
              Reprenez le contrôle. Développez votre potentiel. Venez vous
              redécouvrir dans l&apos;Athletic Zone Ajaccio!
            </p>
            <div className="mt-6">
              <ButtonV2
                href="#method"
                children="Méthodologie"
                color="red"
                icon="plus"
                className="bg-[rgba(119,116,116,0.03)]"
              />
            </div>
          </div>
        </div>
      </section>

      <QuoteGallery />

      <section className="flex flex-col">
        <div className="flex h-fit w-full">
          <h2 className="font-anton text-[clamp(4.5rem,10vw,12rem)] tracking-[-0.040em]">
            <span className="text-highlight">Qui</span> suis-je ?
          </h2>
        </div>
        <div className="grid h-2/3 grid-cols-2 bg-white/60 p-5">
          <span className="text-2xl font-semibold">
            Sylvain <br />
            Nusbaum
          </span>
          <div className="grid grid-rows-[repeat(4,min-content)] gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-medium text-primary/50">Lieu de naissance</p>
              <p>Corse, Ajaccio</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-medium text-primary/50">Éxperiences</p>
              <p>
                Préparateur physique <br />
                Coach en salle <br />
                Maitre nageur <br />
                Coach privée
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-medium text-primary/50">Objectifs</p>
              <p>
                Performance <br />
                Remise en forme <br />
                Amélioration posturale <br />
                Gestion des pathologies chroniques
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-medium text-primary/50">Méthodes</p>
              <p>Suivi personnalisé</p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-full border-2 border-red-500">
        <div className="flex h-full items-center justify-center"> VIDEO</div>
      </section>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import AthleticZoneLogo from '@/app/components/ui/decoration/AthleticZoneLogo';
import QuoteGallery from '@/app/components/ui/about/QuoteGallery';
import ButtonV2 from '@/app/components/ui/ButtonV2';

const description = [
  'Loin des salles traditionnelles, AZA est un espace de coaching privé où chaque séance est pensée pour vous.',
  'Nous proposons un accompagnement sur mesure, dans un cadre motivant et structuré, avec des coachs qualifiés et du matériel haut de gamme.',
  "Que vous soyez un sportif novice ou expérimenté, vous bénéficierez d'un bilan initial et d'un suivi personnalisé.",
  "Les entraînements individuels ou en groupe réduit garantissent une qualité d'encadrement optimale et des résultats durables.",
  "Reprenez le contrôle. Développez votre potentiel. Venez vous redécouvrir dans l'Athletic Zone Ajaccio!",
] as const;

const GymDescription = ({ className }: { className?: string }) => {
  return (
    <>
      {description.map((item) => {
        return (
          <p key={item} className={className}>
            {item}
          </p>
        );
      })}
    </>
  );
};

const coachInfo = [
  {
    label: 'Lieu de naissance',
    values: ['Ajaccio, Corse'],
  },
  {
    label: 'Expériences',
    values: [
      'Préparateur physique',
      'Coach en salle',
      'Maître nageur',
      'Coach privé',
    ],
  },
  {
    label: 'Objectifs',
    values: [
      'Performance',
      'Remise en forme',
      'Amélioration posturale',
      'Gestion des pathologies chroniques',
    ],
  },
  {
    label: 'Méthodes',
    values: ['Suivi personnalisé'],
  },
] as const;

const CoachInfo = () => {
  return (
    <>
      <h3 className="text-2xl leading-tight font-semibold">
        Sylvain <br />
        Nusbaum
      </h3>

      <dl className="grid auto-rows-min gap-4">
        {coachInfo.map(({ label, values }) => (
          <div key={label} className="space-y-1">
            <dt className="font-medium text-primary/50">{label}</dt>
            <dd>
              {values.length > 1 ? (
                <ul className="list-disc pl-5">
                  {values.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              ) : (
                <p>{values[0]}</p>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
};

export default function AboutPage() {
  return (
    <div
      id="about"
      className="space-y-sysm md:space-y-symd lg:space-y-sylg mt-16"
    >
      <div className="md:space-y-symd lg:space-y-sylg flex h-fit w-full flex-col space-y-8">
        <div className="flex w-full flex-col items-center justify-center gap-sm px-xsm md:gap-md lg:gap-lg lg:px-xlg">
          <h2 className="text-center font-anton text-h2 leading-[1] tracking-[-0.035em]">
            UN COACHING SUR <span className="text-highlight">MESURE</span>
          </h2>

          <p className="w-3/5 min-w-[330px] text-center font-mono text-quote tracking-tighter italic max-sm:min-w-fit">
            « Être athlétique, c&apos;est aller plus loin. <br className="" />{' '}
            Tu améliores tes performances mais surtout ta santé ! »
          </p>
        </div>

        <div className="flex h-screen flex-col gap-sm px-4 md:h-[60vh] md:flex-row md:gap-md md:p-0 lg:h-[70vh] lg:gap-lg lg:pl-xlg">
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

        <div className="flex h-fit w-full flex-col gap-md max-lg:px-10 max-sm:px-4 lg:h-[75vh] lg:min-h-[650px] lg:flex-row lg:gap-lg lg:pl-16">
          <div className="flex h-full items-center justify-center md:flex-[2]">
            <AthleticZoneLogo
              strokeColor="black"
              strokeWidthLetter={1.25}
              strokeWidthLogo={0.6}
              turn={true}
              fontSize={66}
            />
          </div>
          <div className="flex h-full flex-col justify-center gap-md md:flex-[4]">
            <div className="flex flex-col gap-md lg:gap-lg lg:pr-16">
              <GymDescription className="text-lg font-normal sm:text-xl lg:text-2xl" />
            </div>
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
      </div>

      <QuoteGallery />

      <div className="flex flex-col">
        <div className="flex h-fit w-full">
          <h2 className="font-anton text-h2 tracking-[-0.040em]">
            <span className="text-highlight">Qui</span> suis-je ?
          </h2>
        </div>
        <section className="grid grid-cols-2 p-5">
          <span className="text-2xl font-semibold">
            Sylvain <br />
            Nusbaum
          </span>
          <div className="grid grid-rows-[repeat(4,min-content)] gap-md">
            <div className="flex flex-col gap-xs">
              <p className="font-medium text-primary/50">Lieu de naissance</p>
              <p>Corse, Ajaccio</p>
            </div>
            <div className="flex flex-col gap-xs">
              <p className="font-medium text-primary/50">Éxperiences</p>
              <p>
                Préparateur physique <br />
                Coach en salle <br />
                Maitre nageur <br />
                Coach privée
              </p>
            </div>
            <div className="flex flex-col gap-xs">
              <p className="font-medium text-primary/50">Objectifs</p>
              <p>
                Performance <br />
                Remise en forme <br />
                Amélioration posturale <br />
                Gestion des pathologies chroniques
              </p>
            </div>
            <div className="flex flex-col gap-xs">
              <p className="font-medium text-primary/50">Méthodes</p>
              <p>Suivi personnalisé</p>
            </div>
          </div>
        </section>
      </div>
      <div className="h-screen w-full border-2 border-red-500">
        <div className="flex h-full items-center justify-center"> VIDEO</div>
      </div>
    </div>
  );
}

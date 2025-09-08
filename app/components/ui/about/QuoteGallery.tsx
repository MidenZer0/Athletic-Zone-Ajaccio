import Image from 'next/image';
import { cn } from '@/app/lib/utils';

const layout = {
  section: cn(
    //Layout
    'flex w-fit relative items-center',
    //Background
    'bg-[url("/image/concretebackgroundv2.webp")] bg-cover bg-center',
    //Height
    ' h-[90vh] min-h-[594px] sm:h-screen sm:min-h-[744px] flex-shrink-0',
    //Spacing
    'px-5 sm:px-10 md:px-10 lg:px-15',
    //Scroll
    'overflow-x-auto snap-x snap-mandatory'
  ),
  wrapper: cn(
    //Layout
    'flex relative w-full',
    //Height
    'h-[70vh] min-h-[474px] sm:h-[80vh] sm:min-h-[594px] gap-5 flex-shrink-0'
  ),
  image: cn(
    //Layout
    ' h-full w-auto flex-shrink-0 object-cover',
    //Spacing
    'pr-5',
    //Scroll
    'snap-center'
  ),
};

const images = [
  {
    src: '/image/pilate_group.webp',
    alt: 'Groupe durant un cours pilate',
    width: 720,
    height: 1280,
  },
  {
    src: '/image/barbel_girl.webp',
    alt: 'Femme durant un cours de renforcement musculaire',
    width: 720,
    height: 1280,
  },
  {
    src: '/image/pilate_reformer.webp',
    alt: 'Femme durant un cours pilate reformer',
    width: 720,
    height: 1280,
  },
  {
    src: '/image/fente.webp',
    alt: 'Homme réalisant une fente avant',
    width: 720,
    height: 1280,
  },
] as const;

interface QuoteGalleryProps {
  _className?: string;
}

export default function QuoteGallery({ _className = '' }: QuoteGalleryProps) {
  return (
    <section className={layout.section}>
      <div className={layout.wrapper}>
        {images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={layout.image}
            draggable={false}
          />
        ))}
      </div>
    </section>
  );
}

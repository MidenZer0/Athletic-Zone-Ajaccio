import { PricingCard as PricingCardProps } from '@/app/lib/pricing-data';
import Check from '@/app/components/ui/icon/Check';
import Badge from '../decoration/Badge';
import ButtonV2 from '../ButtonV2';
import { cn } from '@/app/lib/utils';
import Image from 'next/image';

export default function PricingCard({
  title,
  pricing,
  pricingPack,
  features,
  badgeBase,
  badgePack,
  description,
}: PricingCardProps) {
  const renderNoteWithHighlight = (text?: string) => {
    // 1. Check if text exists
    if (!text) return null;
    // 2. Split by regex pattern
    const parts = text.split(/(\d+€)/g);
    // 3. Map over parts and conditionally style them
    return parts.map((part, index) =>
      /\d+€/.test(part) ? (
        <span key={index} className="font-bold text-primary">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  const { price, period, note } = pricing[0];
  const { price: pricePack, period: periodPack } = pricingPack?.[0] ?? {};

  return (
    <div
      className={cn(
        'relative flex h-[520px] w-[330px] flex-col items-center border-2 border-black bg-white px-6 pt-12 pb-6 shadow-md shadow-black/50'
      )}
    >
      {/* Add a background image for the popular card */}
      {badgeBase?.variant === 'popular' && (
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <Image
            src="/image/lg_logo_black.svg"
            alt=""
            fill
            className="scale-135 object-contain object-[center_45%]"
          />
        </div>
      )}

      {/* Add a personalized badge at the top of the card */}
      {badgeBase && (
        <Badge
          text={badgeBase.text}
          variant={badgeBase.variant}
          className="absolute -top-3 -right-3"
        />
      )}

      {/* Header */}
      <div className="mb-6">
        <span className="text-5xl font-medium">{price}</span>
        <span className="text-primary/35">{period}</span>
      </div>
      <h3 className="text-3xl text-primary/35">{title}</h3>

      {/* Divider */}
      <div className="mt-6 mb-8 w-[146px] border-t-1 border-primary/35"></div>

      {/* Note */}
      {note && <p className="mb-3">{renderNoteWithHighlight(note)}</p>}

      {/* Features */}
      {features && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Description */}
      {description && <p className="mb-3 text-center">{description}</p>}

      {/* Footer */}
      <div className="mt-auto w-full">
        {pricingPack && (
          <div className="mb-6 flex h-[48px] w-full items-center justify-between rounded-lg bg-background px-4">
            <div>
              {' '}
              <span className="text-lg font-medium">ou {pricePack}</span>
              <span className="text-primary/35">/{periodPack}</span>
            </div>
            {badgePack && (
              <Badge text={badgePack.text} variant={badgePack.variant} />
            )}
          </div>
        )}
        <ButtonV2 color="black" icon="arrow" size="compact" className="mx-auto">
          Réserver
        </ButtonV2>
      </div>
    </div>
  );
}

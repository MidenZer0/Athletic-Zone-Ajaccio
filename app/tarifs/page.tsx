'use client';
import { useState } from 'react';
import PricingCard from '@/app/components/ui/tarifs/PricingCard';
import { PricingType, getPricingByType } from '@/app/lib/pricing-data';
import PricingButton from '@/app/components/ui/tarifs/PricingButton';

export default function TarifsPage() {
  const [selectedPricing, setSelectedPricing] =
    useState<PricingType>('smallGroup');

  const cards = getPricingByType(selectedPricing);

  return (
    <section
      id="tarifs"
      className="flex min-h-screen flex-col items-center justify-center bg-[url('/image/concretebackgroundv2.webp')] bg-cover bg-center py-20"
    >
      {/* Logo background overlay */}

      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="mb-4 font-anton text-h2 leading-[1] tracking-[-0.035em]">
          TARIFS
        </h2>
        <p className="mb-8 text-lg">
          Choisissez le plan en fonction de vos objectifs
        </p>
        <PricingButton onSelectionChange={setSelectedPricing} />
      </div>

      <div className="flex w-full justify-center">
        <div className="grid grid-cols-1 gap-12 min-[1150px]:grid-cols-3">
          {cards.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              pricing={card.pricing}
              pricingPack={card.pricingPack}
              features={card.features}
              badgeBase={card.badgeBase}
              description={card.description}
              badgePack={card.badgePack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

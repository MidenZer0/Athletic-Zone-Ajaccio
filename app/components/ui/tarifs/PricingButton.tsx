'use client';
import { cn } from '@/app/lib/utils';
import { useState } from 'react';
import { PricingType } from '@/app/lib/pricing-data';

interface PricingButtonProps {
  onSelectionChange?: (type: PricingType) => void;
  className?: string;
}

export default function PricingButton({
  onSelectionChange,
  className,
}: PricingButtonProps) {
  const [activeSelection, setActiveSelection] =
    useState<PricingType>('smallGroup');

  const handleSelection = (selection: PricingType) => {
    setActiveSelection(selection);
    onSelectionChange?.(selection);
  };

  return (
    <div
      className={cn(
        'relative flex h-[34px] w-[280px] items-center overflow-hidden rounded-md border-2 border-gray-300 bg-background/70',
        className
      )}
    >
      {/* Sliding background indicator */}
      <div
        className={cn(
          'absolute top-0 h-full w-1/2 rounded-sm border-2 border-highlight bg-white transition-transform duration-300 ease-in-out',
          activeSelection === 'smallGroup'
            ? 'translate-x-0'
            : 'translate-x-full'
        )}
      />

      <button
        onClick={() => handleSelection('smallGroup')}
        className={cn(
          'relative z-10 flex h-full flex-1 cursor-pointer items-center justify-center text-sm font-medium transition-colors duration-200',
          activeSelection === 'smallGroup'
            ? 'text-black'
            : 'text-gray-400 hover:text-gray-600'
        )}
      >
        Small Group
      </button>

      <button
        onClick={() => handleSelection('coachingPrive')}
        className={cn(
          'relative z-10 flex h-full flex-1 cursor-pointer items-center justify-center text-sm font-medium transition-colors duration-200',
          activeSelection === 'coachingPrive'
            ? 'text-black'
            : 'text-gray-400 hover:text-gray-600'
        )}
      >
        Coaching Privé
      </button>
    </div>
  );
}

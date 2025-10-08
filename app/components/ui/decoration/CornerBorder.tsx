// UI Component: CornerBorder
// Purpose: Decorative corner borders for hero sections

import { cn } from '@/app/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cornerBorderVariants = cva('absolute ', {
  variants: {
    variant: {
      hero: 'w-20 h-10 border-white',
      button: 'w-2 h-2',
    },
    position: {
      'top-left': '',
      'top-right': '',
      'bottom-left': '',
      'bottom-right': '',
      vertical: '',
      bottom: '',
    },
  },
  compoundVariants: [
    // Hero variant positions
    {
      variant: 'hero',
      position: 'top-left',
      class: 'top-5 left-5 border-l-2 border-t-2',
    },
    {
      variant: 'hero',
      position: 'top-right',
      class: 'top-5 right-5 border-r-2 border-t-2',
    },
    {
      variant: 'hero',
      position: 'bottom',
      class: 'md:w-48 w-[25dvw] relative bottom-1 border-b-2',
    },

    // Button variant positions
    {
      variant: 'button',
      position: 'top-left',
      class: 'top-0 left-0 border-l-2 border-t-2',
    },
    {
      variant: 'button',
      position: 'top-right',
      class: 'top-0 right-0 border-r-2 border-t-2',
    },
    {
      variant: 'button',
      position: 'bottom-left',
      class: 'bottom-0 left-0 border-l-2 border-b-2',
    },
    {
      variant: 'button',
      position: 'bottom-right',
      class: 'bottom-0 right-0 border-r-2 border-b-2',
    },
    {
      variant: 'button',
      position: 'vertical',
      class: 'border-l-2 ',
    },
  ],
  defaultVariants: {
    variant: 'hero',
    position: 'top-left',
  },
});

interface CornerBorderProps extends VariantProps<typeof cornerBorderVariants> {
  className?: string;
}

export default function CornerBorder({
  variant,
  position,
  className,
}: CornerBorderProps) {
  return (
    <div
      className={cn(cornerBorderVariants({ variant, position }), className)}
    />
  );
}

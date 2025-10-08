'use client';
import { cn } from '@/app/lib/utils';
import CornerBorder from './decoration/CornerBorder';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import Icon from './icon/ArrowPlus';
import { useState, useEffect, useRef } from 'react';

const COLORS = {
  red: {
    text: 'text-highlight',
    border: 'border-highlight',
    gradient: 'bg-stripes-red',
  },
  yellow: {
    text: 'text-button-yellow',
    border: 'border-button-yellow',
    gradient: 'bg-stripes-yellow',
  },
  black: {
    text: 'text-button-black',
    border: 'border-button-black',
    gradient: 'bg-stripes-black',
  },
} as const;

const CORNER_POSITIONS = [
  'top-left',
  'bottom-left',
  'top-right',
  'bottom-right',
] as const;

const buttonVariants = cva(
  'z-10 flex items-center gap-0.5 rounded-sm p-1 w-fit', // base classes
  {
    variants: {
      size: {
        default: 'h-[42px]',
        compact: 'h-[36px]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  color?: keyof typeof COLORS;
  icon?: 'plus' | 'arrow' | 'none';
  href?: string;
  size?: VariantProps<typeof buttonVariants>['size'];
}

export default function Button({
  className = '',
  children,
  color = 'yellow',
  icon = 'none',
  href = '',
  size,
}: ButtonProps) {
  const colorConfig = COLORS[color];
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the button is visible
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={cn(
        buttonVariants({ size }),
        colorConfig.text,
        className,
        'group'
      )}
    >
      <span className={cn(colorConfig.gradient, 'aspect-square h-full')} />
      <span className={cn('h-full border-l-2', colorConfig.border)} />
      <div className="relative flex h-full shrink-0 items-center justify-center gap-4 px-4 font-mono font-medium">
        {CORNER_POSITIONS.map((position) => (
          <CornerBorder
            key={position}
            variant="button"
            position={position}
            className={cn(
              colorConfig.border,
              'transform opacity-0 duration-300 group-hover:opacity-100'
            )}
          />
        ))}
        <span
          className={cn(
            'transform transition duration-600 ease-out',
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          )}
        >
          {children}
        </span>
        {icon !== 'none' && (
          <div
            className={cn(
              'transform transition-all delay-150 duration-600 ease-out',
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-4 opacity-0'
            )}
          >
            <Icon type={icon} />
          </div>
        )}
      </div>
    </Link>
  );
}

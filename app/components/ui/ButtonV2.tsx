import { cn } from '@/app/lib/utils';
import CornerBorder from './CornerBorder';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

const COLORS = {
  red: {
    text: 'text-highlight',
    border: 'border-highlight',
    gradient: 'var(--color-highlight)',
  },
  yellow: {
    text: 'text-button-yellow',
    border: 'border-button-yellow',
    gradient: 'var(--color-button-yellow)',
  },
  black: {
    text: 'text-button-black',
    border: 'border-button-black',
    gradient: 'var(--color-button-black)',
  },
} as const;

const createGradientClass = (gradientVar: string) =>
  `bg-[repeating-linear-gradient(135deg,${gradientVar},${gradientVar}_3px,var(--color-button-transparent)_3px,var(--color-button-transparent)_4.5px)]`;

const gradientBackground = cva('h-[34px] min-w-[34px]', {
  variants: {
    color: {
      red: createGradientClass(COLORS.red.gradient),
      yellow: createGradientClass(COLORS.yellow.gradient),
      black: createGradientClass(COLORS.black.gradient),
    } satisfies Record<keyof typeof COLORS, string>,
  },
  defaultVariants: {
    color: 'yellow',
  },
});

const Icon = ({ type }: { type: 'plus' | 'arrow' }) => {
  const iconPaths = {
    plus: 'M7 1V13M1 7H13',
    arrow: 'M1 7H13M13 7L7 1M13 7L7 13',
  } as const;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={iconPaths[type]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  color?: keyof typeof COLORS;
  icon?: 'plus' | 'arrow' | 'none';
  href?: string;
}

export default function Button({
  className = '',
  children,
  color = 'yellow',
  icon = 'none',
  href = '',
}: ButtonProps) {
  const colorConfig = COLORS[color];

  return (
    <Link
      href={href}
      className={cn(
        'z-50 flex h-[42px] w-fit gap-0.5 p-1',
        colorConfig.text,
        className
      )}
    >
      <span className={gradientBackground({ color })} />
      <span className={cn('h-[34px] border-l-2', colorConfig.border)} />
      <div className="relative flex h-full items-center justify-center gap-4 px-4 font-mono font-medium">
        {(
          ['top-left', 'bottom-left', 'top-right', 'bottom-right'] as const
        ).map((position) => (
          <CornerBorder
            key={position}
            variant="button"
            position={position}
            className={colorConfig.border}
          />
        ))}
        {children}
        {icon !== 'none' && <Icon type={icon} />}
      </div>
    </Link>
  );
}

import { cn } from '@/app/lib/utils';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  color?: 'red' | 'white';
  arrowSize?: number;
  arrowStroke?: 0 | 1;
}

export default function Button({
  className = '',
  children,
  color = 'red',
  arrowSize = 14,
  arrowStroke = 0,
}: ButtonProps) {
  const buttonColor = {
    red: 'bg-button-red border-button-white text-button-white',
    white: 'bg-button-white border-button-red text-button-red',
  };
  return (
    <button
      className={cn(buttonColor[color], 'flex border-1 font-sans', className)}
    >
      <div className="flex h-full w-full items-center pl-2">{children}</div>
      <div className="flex h-full w-[38px] items-center justify-center">
        <svg
          width={arrowSize}
          height={arrowSize}
          viewBox="0 0 14 14"
          stroke="currentColor"
          strokeWidth={arrowStroke}
          fill="none"
        >
          <path
            d="M1 6.5C0.723858 6.5 0.5 6.72386 0.5 7C0.5 7.27614 0.723858 7.5 1 7.5V6.5ZM13 7L13.3536 7.35355C13.5488 7.15829 13.5488 6.84171 13.3536 6.64645L13 7ZM7.35355 0.646447C7.15829 0.451184 6.84171 0.451184 6.64645 0.646447C6.45118 0.841709 6.45118 1.15829 6.64645 1.35355L7.35355 0.646447ZM6.64645 12.6464C6.45118 12.8417 6.45118 13.1583 6.64645 13.3536C6.84171 13.5488 7.15829 13.5488 7.35355 13.3536L6.64645 12.6464ZM1 7V7.5H13V7V6.5H1V7ZM7 1L6.64645 1.35355L12.6464 7.35355L13 7L13.3536 6.64645L7.35355 0.646447L7 1ZM13 7L12.6464 6.64645L6.64645 12.6464L7 13L7.35355 13.3536L13.3536 7.35355L13 7Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </button>
  );
}

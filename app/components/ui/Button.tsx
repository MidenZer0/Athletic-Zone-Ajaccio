import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default function Button({ className = '', children }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex border-[1px] bg-button font-sans text-secondary',
        className
      )}
    >
      <div className="flex h-full w-full items-center pl-2">{children}</div>
      <div className="flex h-full w-[38px] items-center justify-center">
        <img className="h-4 w-4" src="/image/arrow_right.svg" alt="arrow" />
      </div>
    </button>
  );
}

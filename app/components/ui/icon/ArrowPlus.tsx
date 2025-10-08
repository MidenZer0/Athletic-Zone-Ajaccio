interface IconProps {
  type: 'plus' | 'arrow';
  className?: string;
  size?: number;
}

export default function Icon({ type, className, size = 14 }: IconProps) {
  const iconPaths = {
    plus: 'M7 1V13M1 7H13',
    arrow: 'M1 7H13M13 7L7 1M13 7L7 13',
  } as const;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
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
}

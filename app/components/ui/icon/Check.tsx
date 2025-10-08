interface CheckProps {
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export default function Check({
  color = '#5BD74D',
  className = 'h-4 w-4',
  strokeWidth = 1.5,
}: CheckProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

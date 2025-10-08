interface BadgeProps {
  text: string;
  variant?: 'popular' | 'discount';
  className?: string;
}

const ICONS = {
  popular: { src: '/image/star_icon.svg', alt: '', width: 12, height: 12 },
  discount: { src: '/image/zap_icon.svg', alt: '', width: 10, height: 12 },
} as const;

export default function Badge({ text, variant, className }: BadgeProps) {
  const icon = variant ? ICONS[variant] : null;

  return (
    <div className={`${className} w-fit`}>
      <div
        className={`flex items-center gap-2 rounded-md bg-black px-3 py-1 text-xs font-medium text-white`}
      >
        <span>{text}</span>
        {icon && (
          <img
            src={icon.src}
            alt="" // décoratif => vide
            width={icon.width}
            height={icon.height}
            role="presentation"
          />
        )}
      </div>
    </div>
  );
}

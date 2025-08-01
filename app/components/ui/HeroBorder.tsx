// UI Component: HeroBorder
// Purpose: Decorative corner borders for hero sections

interface HeroBorderProps {
  position?: "top-left" | "top-right" | "bottom";
  className?: string;
}

export default function HeroBorder({
  position = "top-left",
  className = "",
}: HeroBorderProps) {
  const baseClasses = "absolute w-20 h-10 border-white";

  const positionClasses = {
    "top-left": "top-5 left-5 border-l-2 border-t-2",
    "top-right": "top-5 right-5 border-r-2 border-t-2",
    bottom: "w-48 relative bottom-1 border-b-2",
  };

  return (
    <div
      className={`${baseClasses} ${positionClasses[position]} ${className}`}
    />
  );
}

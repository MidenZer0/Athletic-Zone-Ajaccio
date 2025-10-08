import Link from 'next/link';
import Icon from './icon/ArrowPlus';
import CornerBorder from './decoration/CornerBorder';

interface ButtonV3props {
  href: string;
  children: React.ReactNode;
  icon?: 'arrow' | 'plus' | 'none';
}

export default function ButtonV3({
  href,
  children,
  icon = 'none',
}: ButtonV3props) {
  return (
    <Link href={href} className="flex h-[42px] w-fit items-center gap-2">
      <div className="flex items-center gap-2">
        <div>{children}</div>
        {icon !== 'none' && <Icon type={icon} />}
      </div>
    </Link>
  );
}

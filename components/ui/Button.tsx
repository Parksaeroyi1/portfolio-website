import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({
  href,
  children,
  variant = 'primary',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 text-sm font-medium transition-colors';

  const styles = {
    primary: 'text-slate-900 hover:text-black',
    secondary: 'text-slate-600 hover:text-slate-900',
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}

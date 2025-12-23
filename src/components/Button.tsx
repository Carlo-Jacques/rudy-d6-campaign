import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "petition";
type Size = "sm" | "md" | "lg";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants: Record<Variant, string> = {
    primary: "bg-black text-white hover:bg-black/90",
    secondary: "bg-white text-black border border-black/15 hover:bg-black/5",
    ghost: "bg-transparent text-black border border-black/15 hover:bg-black/5",
    petition:
      "bg-patriot-red text-white hover:bg-patriot-red/90 active:scale-[0.98]",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  // Use <a> for external targets or special rel/target usage
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} className={cls} {...rest} />
    );
  }

  // For internal links or public assets, Link is fine
  return (
    <Link href={href} className={cls} {...rest}>
      {rest.children}
    </Link>
  );
}

import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "petition" | "donate" | "plan" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  prefetch?: boolean;
  // Button-specific props
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ease-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patriot-blue focus-visible:ring-offset-2 " +
  "active:translate-y-[1px] " +
  "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const variants: Record<ButtonVariant, string> = {
  // PRIMARY: Petition (red)
  petition:
    "bg-patriot-red text-white shadow-sm " +
    "hover:-translate-y-[1px] hover:shadow-md hover:bg-patriot-red/95",

  // SECONDARY: Donate (blue)
  donate:
    "bg-patriot-blue text-white shadow-sm " +
    "hover:-translate-y-[1px] hover:shadow-md hover:bg-patriot-blue/95",

  // TERTIARY: Plan (white/blue outline)
  plan:
    "bg-white text-patriot-blue border border-patriot-blue/30 shadow-sm " +
    "hover:-translate-y-[1px] hover:shadow-md hover:border-patriot-blue/50 hover:bg-patriot-blue/[0.03]",

  // Utility/secondary link button
  ghost:
    "bg-transparent text-patriot-blue border border-patriot-blue/30 " +
    "hover:-translate-y-[1px] hover:bg-patriot-blue/[0.04] hover:border-patriot-blue/45",
};

export default function Button({
  href,
  children,
  className,
  variant = "ghost",
  size = "md",
  prefetch,
  type,
  disabled,
  onClick,
}: Props) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (!href) {
    return (
      <button
        type={type ?? "button"}
        disabled={disabled}
        onClick={onClick}
        className={classes}
      >
        {children}
      </button>
    );
  }

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} prefetch={prefetch}>
      {children}
    </Link>
  );
}


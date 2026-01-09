import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import type React from "react";

type ButtonVariant = "petition" | "donate" | "plan" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type CommonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  prefetch?: boolean;
};

// If href is present, allow anchor props (target/rel/etc). If not, allow button props.
type Props =
  | (CommonProps &
      { href: string } &
      Omit<AnchorProps, "href" | "className" | "children">)
  | (CommonProps &
      { href?: undefined } &
      Omit<NativeButtonProps, "className" | "children">);

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
  petition:
    "bg-patriot-red text-white shadow-sm " +
    "hover:-translate-y-[1px] hover:shadow-md hover:bg-patriot-red/95",
  donate:
    "bg-patriot-blue text-white shadow-sm " +
    "hover:-translate-y-[1px] hover:shadow-md hover:bg-patriot-blue/95",
  plan:
    "bg-white text-patriot-blue border border-patriot-blue/30 shadow-sm " +
    "hover:-translate-y-[1px] hover:shadow-md hover:border-patriot-red/50 hover:bg-patriot-red hover:text-white",
  ghost:
    "bg-transparent text-patriot-blue border border-patriot-blue/30 " +
    "hover:-translate-y-[1px] hover:bg-patriot-blue/[0.04] hover:border-patriot-blue/45",
};

export default function Button(props: Props) {
  const { children, className, variant = "ghost", size = "md", prefetch } = props;

  const classes = cn(base, sizes[size], variants[variant], className);

  // 1) Render <button> when no href is provided
  if (!("href" in props) || !props.href) {
    const { href, ...buttonRest } = props as CommonProps & NativeButtonProps;
    return (
      <button className={classes} {...buttonRest}>
        {children}
      </button>
    );
  }

  const { href, ...anchorRest } = props as CommonProps & { href: string } & AnchorProps;

  // Treat PDFs/docs as "external" so we can use target/rel safely.
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("/documents/");

  // 2) External / asset links render <a>
  if (isExternal) {
    const target = anchorRest.target ?? "_blank";
    const rel = anchorRest.rel ?? "noopener noreferrer";

    return (
      <a href={href} className={classes} target={target} rel={rel} {...anchorRest}>
        {children}
      </a>
    );
  }

  // 3) Internal links render Next <Link> or <a> if target is provided
  if (anchorRest.target) {
    // Use regular <a> tag when target is specified (e.g., _blank)
    const rel = anchorRest.rel ?? (anchorRest.target === "_blank" ? "noopener noreferrer" : undefined);
    return (
      <a href={href} className={classes} target={anchorRest.target} rel={rel} {...anchorRest}>
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

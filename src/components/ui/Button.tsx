import Link from "next/link";
import { cn } from "@/lib/cn";
import type React from "react";

type ButtonVariant = "petition" | "donate" | "plan" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
	href?: string;
	children: React.ReactNode;
	className?: string;
	variant?: ButtonVariant;
	size?: ButtonSize;
	prefetch?: boolean;
} & Omit<AnchorProps, "href" | "className" | "children"> &
	Omit<NativeButtonProps, "className" | "children">;

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
	...rest
}: Props) {
	const classes = cn(base, sizes[size], variants[variant], className);

	// Render <button> when no href is provided
	if (!href) {
		const { type, disabled, onClick, ...buttonRest } = rest as NativeButtonProps;

		return (
			<button
				type={type ?? "button"}
				disabled={disabled}
				onClick={onClick}
				className={classes}
				{...buttonRest}
			>
				{children}
			</button>
		);
	}

	const isExternal = href.startsWith("http") || href.startsWith("/documents/");


	// External links render <a> and default to safe new-tab behavior unless overridden
	if (isExternal) {
		const { target, rel, ...anchorRest } = rest as AnchorProps;

		return (
			<a
				href={href}
				className={classes}
				target={target ?? "_blank"}
				rel={rel ?? "noopener noreferrer"}
				{...anchorRest}
			>
				{children}
			</a>
		);
	}

	// Internal links render Next <Link>
	// Note: Next <Link> does not accept all anchor props directly (e.g., target/rel).
	// If you need target/rel for internal assets, pass an absolute URL or treat as external.
	return (
		<Link href={href} className={classes} prefetch={prefetch}>
			{children}
		</Link>
	);
}

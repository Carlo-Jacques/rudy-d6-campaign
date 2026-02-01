import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rudolph Tinker for Palm Beach County Commissioner | District 6",
  description: "A simple, accountable 7-point plan for Palm Beach County Commissioner District 6.",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

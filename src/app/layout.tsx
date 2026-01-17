import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rudolph Tinker for County Commissioner | District 6",
  description: "A simple, accountable 10-point plan for District 6.",
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

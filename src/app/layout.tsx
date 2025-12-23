import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { site } from "@/lib/site";
import MobileStickyCta from "@/components/MobileStickyCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `${site.name} | ${site.district}`,
  description: "A simple, accountable 10-point plan for District 6.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-black">
        <Header />

        {/* 
          Mobile bottom padding ensures content & footer
          are not hidden behind sticky petition bar 
        */}
        <div>
          {children}
        </div>

        {/* Mobile-only sticky CTA */}
        <MobileStickyCta />

        <Footer />
      </body>
    </html>
  );
}


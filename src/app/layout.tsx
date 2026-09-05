import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xcecute | AI & Software",
  description: "Build smarter. Move further.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-base text-cream selection:bg-accent-primary/30 font-sans cursor-default md:cursor-none overscroll-none">
        <CustomCursor />
        <SmoothScroll>
          <SiteBackground>
            <FloatingNavbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SiteBackground>
        </SmoothScroll>
      </body>
    </html>
  );
}

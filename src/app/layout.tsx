import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xcecute.com"),
  title: "Xcecute | AI, Data & Software Engineering",
  description: "Xcecute is a technology and product-building initiative operated by its founders. We build practical solutions across AI, software, and data.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xcecute | AI, Data & Software Engineering",
    description: "Xcecute is a technology and product-building initiative operated by its founders. We build practical solutions across AI, software, and data.",
    url: "https://xcecute.com",
    siteName: "Xcecute",
    images: [
      {
        url: "/Logo_with_name-removebg-preview.svg",
        width: 1200,
        height: 630,
        alt: "Xcecute Technology",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xcecute | AI, Data & Software Engineering",
    description: "Xcecute is a technology and product-building initiative operated by its founders. We build practical solutions across AI, software, and data.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-base text-cream selection:bg-accent-primary/30 font-sans cursor-default md:cursor-none overscroll-none">
        <CustomCursor />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
            <SiteBackground>
              <FloatingNavbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </SiteBackground>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import { usePathname } from "next/navigation";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { ReactNode } from "react";

export function ConditionalGlobalLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    if (isHome) {
        // For the homepage, we skip the global SiteHeader, the global Footer,
        // the global padding, and the specific SmoothScroll wrapper to maintain
        // a 100vh locked single-screen layout.
        return <main className="flex-grow flex flex-col">{children}</main>;
    }

    return (
        <SmoothScroll>
            <SiteHeader />
            <main className="flex-grow pt-24">{children}</main>
            <Footer />
        </SmoothScroll>
    );
}

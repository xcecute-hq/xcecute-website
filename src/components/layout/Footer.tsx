import Link from "next/link";
import { Button } from "@/components/ui/Button";

const FOOTER_LINKS = {
    services: [
        { name: "Custom Software", href: "/services" },
        { name: "AI Agents", href: "/services" },
        { name: "SaaS Platforms", href: "/services" },
        { name: "Web Development", href: "/services" },
    ],
    company: [
        { name: "Process", href: "/process" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    socials: [
        { name: "Twitter / X", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "GitHub", href: "#" },
    ],
};

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border-subtle bg-base pt-20 pb-10 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <Link
                            href="/"
                            className="flex items-center gap-3 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-md"
                        >
                            <div className="w-10 h-10 bg-accent-primary rounded-md flex items-center justify-center">
                                <span className="font-display font-bold text-lg text-black leading-none mt-1">
                                    A
                                </span>
                            </div>
                            <span className="font-sans font-semibold tracking-wide text-xl text-cream">
                                AGENCY
                            </span>
                        </Link>
                        <p className="text-muted text-base max-w-sm leading-relaxed">
                            We turn complex ideas into digital products people use. Engineered for scale, designed for impact.
                        </p>
                        <Button asChild variant="secondary" className="w-fit mt-2">
                            <Link href="mailto:hello@agency.com">hello@agency.com</Link>
                        </Button>
                    </div>

                    <div>
                        <h3 className="font-sans font-semibold text-cream mb-6">Services</h3>
                        <ul className="flex flex-col gap-4">
                            {FOOTER_LINKS.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-sans font-semibold text-cream mb-6">Company</h3>
                        <ul className="flex flex-col gap-4">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-sans font-semibold text-cream mb-6">Socials</h3>
                        <ul className="flex flex-col gap-4">
                            {FOOTER_LINKS.socials.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
                    <p>© {year} Agency. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

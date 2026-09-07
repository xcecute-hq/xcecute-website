import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES_DATA } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return Object.values(SERVICES_DATA)
        .filter((service) => service.categorySlug === "software")
        .map((service) => ({
            slug: service.slug,
        }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug("software", slug);

    if (!service) {
        return {
            title: "Software Service Not Found | Xcecute",
            description: "The requested custom software development page could not be located.",
        };
    }

    return {
        title: `${service.title} | Xcecute`,
        description: service.heroDescription,
        openGraph: {
            title: `${service.title} | Xcecute`,
            description: service.heroDescription,
            url: `https://xcecute.com/services/software/${service.slug}`,
            siteName: "Xcecute",
            type: "website",
        },
    };
}

export default async function SoftwareServicePage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceBySlug("software", slug);

    if (!service) {
        notFound();
    }

    return <ServicePageTemplate service={service} />;
}

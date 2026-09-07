import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES_DATA } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return Object.values(SERVICES_DATA)
        .filter((service) => service.categorySlug === "data")
        .map((service) => ({
            slug: service.slug,
        }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug("data", slug);

    if (!service) {
        return {
            title: "Data Service Not Found | Xcecute",
            description: "The requested data analytics service page could not be located.",
        };
    }

    return {
        title: `${service.title} | Xcecute`,
        description: service.heroDescription,
        openGraph: {
            title: `${service.title} | Xcecute`,
            description: service.heroDescription,
            url: `https://xcecute.com/services/data/${service.slug}`,
            siteName: "Xcecute",
            type: "website",
        },
    };
}

export default async function DataServicePage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceBySlug("data", slug);

    if (!service) {
        notFound();
    }

    return <ServicePageTemplate service={service} />;
}

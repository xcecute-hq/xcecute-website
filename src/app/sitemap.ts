import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://xcecute.com";

    // All public routes.
    const routes = [
        "",
        "/about",
        "/services",
        "/work",
        "/products",
        "/process",
        "/contact",
        "/privacy",
        "/terms",
        "/cookies",
        "/disclaimer",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
    }));
}

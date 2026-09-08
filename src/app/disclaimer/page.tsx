import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
    title: "Disclaimer | Xcecute",
    description: "Website Disclaimer for Xcecute.",
};

export default function DisclaimerPage() {
    return (
        <LegalLayout title="Disclaimer" lastUpdated="September 9, 2026">
            <h3>General Information</h3>
            <p>
                The Xcecute website provides information about Xcecute's technology, software, product, engineering, and related services. Xcecute is a technology and product-building initiative operated by its founders. The information contained on this website is provided for general informational purposes only.
            </p>

            <h3>Accuracy</h3>
            <p>
                We make reasonable efforts to provide useful information but do not guarantee that all information is complete, accurate, or current. Reliance on the information provided on this website is strictly at your own risk.
            </p>

            <h3>No Professional Advice</h3>
            <p>
                The content on this website should not be treated as professional, legal, financial, or medical advice of any kind. You should consult with the appropriate professional before taking any action based on the information provided here.
            </p>

            <h3>Technology & Services</h3>
            <p>
                Descriptions of services, technologies, capabilities, or potential solutions represent our general expertise and offerings. These are informational and do not constitute a guarantee, warranty, or promise of a particular result, specific business outcome, ROI, guaranteed timelines, or guaranteed performance for any specific project. Actual client engagements are governed by separately agreed terms and contracts.
            </p>

            <h3>Third-Party Links</h3>
            <p>
                Our website may contain links to independent third-party websites. Xcecute is not responsible for the content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h3>Availability</h3>
            <p>
                We do not guarantee uninterrupted, secure, or error-free website availability. The website may be temporarily unavailable due to technical issues beyond our control.
            </p>

            <h3>Contact</h3>
            <p>
                If you have any questions regarding this Disclaimer, please contact us:
            </p>
            <p>
                <strong>Xcecute</strong><br />
                Bangalore, Karnataka, India<br />
                <strong>Email:</strong> <a href="mailto:xcecute.hq@gmail.com">xcecute.hq@gmail.com</a>
            </p>
        </LegalLayout>
    );
}

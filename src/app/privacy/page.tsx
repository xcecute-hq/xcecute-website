import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
    title: "Privacy Policy | Xcecute",
    description: "Xcecute Privacy Policy and information handling practices.",
};

export default function PrivacyPage() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="September 9, 2026">
            <h3>1. Introduction</h3>
            <p>
                This Privacy Policy describes how Xcecute handles information collected through its website. Xcecute is a technology and product-building initiative operated by its founders.
            </p>

            <h3>2. Information We Collect</h3>
            <p>
                When you contact us or submit an inquiry through our website, we may collect information voluntarily provided by you, such as:
            </p>
            <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Company or business information</li>
                <li>Project details</li>
                <li>Information included in messages submitted through the contact form</li>
            </ul>
            <p>
                We may also automatically collect basic technical information (such as your IP address or browser type) that is fundamental to the operation of our hosting and website infrastructure.
            </p>

            <h3>3. Legal Basis for Processing</h3>
            <p>
                We process your personal information to fulfill our legitimate interests in answering your queries, planning potential engagements, and maintaining the secure operation of our website.
            </p>

            <h3>4. How We Use Information</h3>
            <p>
                We use the information we collect to:
            </p>
            <ul>
                <li>Respond to your inquiries</li>
                <li>Discuss potential projects and requirements</li>
                <li>Communicate with prospective or existing clients</li>
                <li>Operate and maintain the website</li>
                <li>Improve website functionality and security</li>
            </ul>

            <h3>5. How We Share Information</h3>
            <p>
                Your information may be processed by trusted service providers required to operate the website and communication systems. Specifically, contact-form information may be processed through the website hosting infrastructure, the backend infrastructure used to process submissions, and the email infrastructure used to receive and respond to inquiries. We do not sell your personal information to third parties.
            </p>

            <h3>6. Data Retention</h3>
            <p>
                We retain your information only as long as reasonably necessary for the purposes for which it was collected or to comply with applicable legal obligations.
            </p>

            <h3>7. Data Security</h3>
            <p>
                We implement reasonable technical and organizational measures to protect your information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
            </p>

            <h3>8. Your Rights</h3>
            <p>
                Depending on your location, you may have the right to request access to, correction of, or deletion of your personal information. Please contact us to exercise these rights.
            </p>

            <h3>9. Third-Party Websites</h3>
            <p>
                Our website may contain links to external websites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>

            <h3>10. Children's Privacy</h3>
            <p>
                Our website is not intentionally directed toward children, and Xcecute does not knowingly collect children's personal information through the website.
            </p>

            <h3>11. Changes to This Policy</h3>
            <p>
                We may update our Privacy Policy periodically. We will reflect any changes on this page by updating the "Last updated" date.
            </p>

            <h3>12. Contact Us</h3>
            <p>
                If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <p>
                <strong>Xcecute</strong><br />
                Bangalore, Karnataka, India<br />
                <strong>Email:</strong> <a href="mailto:xcecute.hq@gmail.com">xcecute.hq@gmail.com</a>
            </p>
        </LegalLayout>
    );
}

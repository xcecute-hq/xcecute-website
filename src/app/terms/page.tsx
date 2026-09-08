import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
    title: "Terms & Conditions | Xcecute",
    description: "Terms and conditions for using the Xcecute website.",
};

export default function TermsPage() {
    return (
        <LegalLayout title="Terms & Conditions" lastUpdated="September 9, 2026">
            <h3>1. Acceptance of Terms</h3>
            <p>
                By accessing and using this website, you accept and agree to be bound by these Terms & Conditions. Xcecute is a technology and product-building initiative operated by its founders.
            </p>

            <h3>2. Website Use</h3>
            <p>
                You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this website by any third party.
            </p>

            <h3>3. Intellectual Property</h3>
            <p>
                Xcecute owns or has appropriate rights to the website's original branding, logos, text, graphics, design, content, and other underlying proprietary materials. You may not reproduce, distribute, or otherwise use these materials without our explicit permission.
            </p>

            <h3>4. User Submissions</h3>
            <p>
                Information or inquiries submitted through our contact forms may be used to respond to your inquiries and discuss potential work or engagements.
            </p>

            <h3>5. Third-Party Links</h3>
            <p>
                Xcecute may provide links to third-party websites for your convenience. We are not responsible for their content, availability, or policies. The inclusion of any links does not imply a recommendation or endorse the views expressed within them.
            </p>

            <h3>6. No Warranties</h3>
            <p>
                While we make reasonable efforts to keep the website useful and accurate, Xcecute does not guarantee that the website will always be available, error-free, complete, accurate, or up to date.
            </p>

            <h3>7. Limitation of Liability</h3>
            <p>
                To the maximum extent permitted by applicable law, Xcecute shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of, or inability to use, this website.
            </p>

            <h3>8. Indemnification</h3>
            <p>
                You agree to indemnify and hold Xcecute, its founders, and affiliates harmless from any claims, damages, liabilities, and expenses arising from your use of the website or violation of these terms.
            </p>

            <h3>9. Severability</h3>
            <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.
            </p>

            <h3>10. Dispute Resolution</h3>
            <p>
                Any disputes arising from these Terms or use of the website will be addressed in good faith through direct communication before pursuing formal legal avenues.
            </p>

            <h3>11. Governing Law & Jurisdiction</h3>
            <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts located in Bangalore, Karnataka, India.
            </p>

            <h3>12. Contact</h3>
            <p>
                If you have questions about these Terms & Conditions, please contact us:
            </p>
            <p>
                <strong>Xcecute</strong><br />
                Bangalore, Karnataka, India<br />
                <strong>Email:</strong> <a href="mailto:xcecute.hq@gmail.com">xcecute.hq@gmail.com</a>
            </p>
        </LegalLayout>
    );
}

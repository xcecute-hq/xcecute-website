import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
    title: "Terms & Conditions | Xcecute",
    description: "Terms and conditions for using the Xcecute website.",
};

export default function TermsPage() {
    return (
        <LegalLayout title="Terms & Conditions" lastUpdated="September 6, 2026">
            <h3>1. Acceptance of Terms</h3>
            <p>
                By accessing and using this website, you accept and agree to be bound by these Terms & Conditions.
            </p>

            <h3>2. Website Use</h3>
            <p>
                You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this website by any third party.
            </p>

            <h3>3. Website Content</h3>
            <p>
                The information provided on this website is for general informational purposes only and may change without notice. We make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on the website.
            </p>

            <h3>4. Intellectual Property</h3>
            <p>
                Xcecute owns or has appropriate rights to the website's original branding, logos, text, graphics, design, content, and other underlying proprietary materials. You may not reproduce, distribute, or otherwise use these materials without our explicit permission.
            </p>

            <h3>5. User Submissions</h3>
            <p>
                Information or inquiries submitted through our contact forms may be used to respond to your inquiries and discuss potential work or engagements.
            </p>

            <h3>6. Third-Party Links</h3>
            <p>
                Xcecute may provide links to third-party websites for your convenience. We are not responsible for their content, availability, or policies. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed securely within them.
            </p>

            <h3>7. No Warranties</h3>
            <p>
                While we make reasonable efforts to keep the website useful and accurate, Xcecute does not guarantee that the website will always be available, error-free, complete, accurate, or up to date.
            </p>

            <h3>8. Limitation of Liability</h3>
            <p>
                To the maximum extent permitted by applicable law, Xcecute shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of, or inability to use, this website.
            </p>

            <h3>9. Changes to the Website</h3>
            <p>
                Xcecute reserves the right to update, modify, suspend, or discontinue parts of the website when necessary, without prior notice.
            </p>

            <h3>10. Changes to These Terms</h3>
            <p>
                These Terms may be updated from time to time. By continuing to use the website after such changes, you agree to be bound by the updated terms.
            </p>

            <h3>11. Governing Law</h3>
            <p>
                [GOVERNING LAW / JURISDICTION TO BE COMPLETED]
            </p>

            <h3>12. Contact</h3>
            <p>
                If you have questions about these Terms & Conditions, please contact us:
            </p>
            <p>
                <strong>Email:</strong> <a href="mailto:xcecute.hq@gmail.com">xcecute.hq@gmail.com</a><br />
                <strong>Phone:</strong> +91 95510 91144 / +91 72040 09267
            </p>
        </LegalLayout>
    );
}

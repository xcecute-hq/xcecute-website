import { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
    title: "Cookie Policy | Xcecute",
    description: "Cookie Policy for the Xcecute website.",
};

export default function CookiesPage() {
    return (
        <LegalLayout title="Cookie Policy" lastUpdated="September 9, 2026">
            <h3>What Cookies Are</h3>
            <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work or operate more efficiently. Xcecute is a technology and product-building initiative operated by its founders.
            </p>

            <h3>Essential Storage</h3>
            <p>
                We may use essential browser storage and similar local storage technologies that are strictly necessary to provide you with services available through our website and to use some of its features. For example, remembering your theme preference (Light/Dark mode). Without these essential technologies, the services that you have asked for cannot be provided.
            </p>
            <p>
                Please note that we distinguish essential storage from tracking infrastructure. Our website does <strong>not</strong> use Google Analytics, advertising trackers, marketing pixels, third-party analytics, or advertising cookies.
            </p>

            <h3>Managing Cookies</h3>
            <p>
                You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies or clear your local storage, you may still use our website, but your access to some functionality (such as preference saving) may be restricted.
            </p>

            <h3>Changes</h3>
            <p>
                We may update this Cookie Policy from time to time in order to reflect changes to the technologies we use or for other operational, legal, or regulatory reasons.
            </p>

            <h3>Contact</h3>
            <p>
                If you have questions regarding our use of cookies or local storage, please contact us:
            </p>
            <p>
                <strong>Xcecute</strong><br />
                Bangalore, Karnataka, India<br />
                <strong>Email:</strong> <a href="mailto:xcecute.hq@gmail.com">xcecute.hq@gmail.com</a>
            </p>
        </LegalLayout>
    );
}

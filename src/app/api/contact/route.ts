import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize with environment key, but allow safe fallback for local testing without crashing.
const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, source, message } = body;

        if (!name || !email || !source || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const emailText = `
--------------------------------
NEW CONTACT FORM SUBMISSION
--------------------------------

Name:
${name}

Email:
${email}

How did they hear about XCECUTE?
${source}

Message:
${message}

--------------------------------
Submitted via XCECUTE website
--------------------------------
`;

        // If the API key is not configured, we mock the success block allowing frontend testing
        if (!process.env.RESEND_API_KEY) {
            console.log("MOCK EMAIL SENT:", emailText);
            return NextResponse.json({ success: true, mocked: true });
        }

        const data = await resend.emails.send({
            from: 'XCECUTE Contact <onboarding@resend.dev>', // Should be updated to verified domain (e.g. contact@xcecute.com)
            to: ['xcecute.hq@gmail.com'],
            replyTo: email,
            subject: `New XCECUTE Contact — ${name}`,
            text: emailText,
        });

        if (data.error) {
            return NextResponse.json(
                { error: data.error.message },
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('Contact Form Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

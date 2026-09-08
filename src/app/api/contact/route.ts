import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// ─── Schema ──────────────────────────────────────────────────────────────────
const contactSchema = z.object({
    name: z.string().trim().min(1, 'Name is required').max(100),
    email: z
        .string()
        .trim()
        .min(1, 'Email is required')
        .max(254)
        .email('Invalid email address')
        // Prevent header injection via CR/LF
        .refine((v) => !/[\r\n]/.test(v), { message: 'Invalid email address' }),
    phone: z.string().trim().max(50).optional(),
    service: z.string().trim().max(100).optional(),
    source: z.string().trim().max(100).optional(),
    message: z.string().trim().max(5000).optional(),
    website: z.string().optional(), // honeypot
});

// ─── Handler ─────────────────────────────────────────────────────────────────
export async function POST(req: Request) {
    try {
        // 1. Size guard
        const raw = await req.text();
        if (raw.length > 20_000) {
            return NextResponse.json(
                { success: false, message: 'Payload too large.' },
                { status: 413 }
            );
        }

        // 2. JSON parse
        let body: unknown;
        try {
            body = JSON.parse(raw);
        } catch {
            return NextResponse.json(
                { success: false, message: 'Invalid JSON.' },
                { status: 400 }
            );
        }

        // 3. Validate
        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            const firstIssue = parsed.error.issues[0]?.message ?? 'Invalid form data.';
            return NextResponse.json({ success: false, message: firstIssue }, { status: 400 });
        }

        const data = parsed.data;

        // 4. Honeypot
        if (data.website) {
            // Silently discard — return a convincing success to the bot
            return NextResponse.json({ success: true, message: 'Message sent.' });
        }

        // 5. Env guard
        const apiKey = process.env.RESEND_API_KEY?.trim();
        if (!apiKey) {
            console.error('[contact] RESEND_API_KEY is not configured.');
            return NextResponse.json(
                {
                    success: false,
                    message:
                        'Server configuration error. Please email us directly at xcecute.hq@gmail.com.',
                },
                { status: 500 }
            );
        }

        // 6. Send via Resend
        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
            from: 'XCECUTE Contact <onboarding@resend.dev>', // update to your verified domain sender once configured
            to: ['xcecute.hq@gmail.com'],
            replyTo: data.email,
            subject: 'New Contact Form Submission — XCECUTE',
            text: [
                `Name:    ${data.name}`,
                `Email:   ${data.email}`,
                `Phone:   ${data.phone || 'N/A'}`,
                `Service: ${data.service || 'N/A'}`,
                `Source:  ${data.source || 'N/A'}`,
                '',
                'Message:',
                data.message || 'N/A',
            ].join('\n'),
        });

        if (error) {
            console.error('[contact] Resend error:', error.name, error.message);
            return NextResponse.json(
                {
                    success: false,
                    message:
                        'Unable to send your message right now. Please try again or email us directly at xcecute.hq@gmail.com.',
                },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully.' });

    } catch (err) {
        console.error('[contact] Unexpected error:', err instanceof Error ? err.message : err);
        return NextResponse.json(
            {
                success: false,
                message:
                    'Unable to send your message right now. Please try again or email us directly at xcecute.hq@gmail.com.',
            },
            { status: 500 }
        );
    }
}

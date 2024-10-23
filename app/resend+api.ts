import { Resend } from 'resend';
import { unkey } from '@/lib/unkey';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('remote-address') || 'unknown-ip';
  const { success } = await unkey.limit(ipAddress);

  if (!success) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), { status: 429 });
  }

  const { to } = await request.json();

  const sampleSubject = 'Welcome to Unkey x React Native!';
  const sampleHtml = `
    <h1>Hello!</h1>
    <p>This is an email to showcase Unkey rate limiting!</p>
    <p>Best regards,<br/>Harsh Bhat/p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: 'hey@mail.harshbhat.me',
      to: [to],
      subject: sampleSubject,
      html: sampleHtml,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}

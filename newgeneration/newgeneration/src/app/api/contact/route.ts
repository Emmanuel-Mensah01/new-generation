import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, lang } = body;

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const FROM_EMAIL = process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL || 'newgeneration1420@gmail.com';
    const TO_EMAIL = 'newgeneration1420@gmail.com';

    if (!SENDGRID_API_KEY) {
      return NextResponse.json({ error: 'SendGrid API key not configured' }, { status: 500 });
    }

    const isSwahili = lang === 'sw';

    const emailSubject = isSwahili
      ? `Ujumbe Mpya wa Mawasiliano - ${name}`
      : `New Contact Inquiry - ${name}`;

    const htmlContent = `
      <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fbf8; padding: 0;">
        <div style="background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%); padding: 32px 40px; text-align: center;">
          <h1 style="color: #FFD700; margin: 0; font-size: 24px; font-weight: 800;">New Generation School</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Nursery & Primary School — Contact Inquiry</p>
        </div>
        <div style="background: #ffffff; padding: 40px; border-left: 4px solid #2E7D32;">
          <h2 style="color: #1A2E1A; font-size: 20px; margin: 0 0 24px; font-weight: 700;">
            ${isSwahili ? '📩 Ujumbe Mpya Umepokelewa' : '📩 New Contact Inquiry Received'}
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600; width: 35%;">${isSwahili ? 'Jina Kamili' : 'Full Name'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${name}</td>
            </tr>
            ${email ? `
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600;">${isSwahili ? 'Barua Pepe' : 'Email Address'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${email}</td>
            </tr>
            ` : ''}
            ${phone ? `
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600;">${isSwahili ? 'Nambari ya Simu' : 'Phone Number'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${phone}</td>
            </tr>
            ` : ''}
            ${subject ? `
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600;">${isSwahili ? 'Mada' : 'Subject'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${subject}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600; vertical-align: top;">${isSwahili ? 'Ujumbe' : 'Message'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
        </div>
        <div style="background: #FFD700; padding: 20px 40px; text-align: center;">
          <p style="color: #1A2E1A; margin: 0; font-size: 13px; font-weight: 600;">
            ${isSwahili
              ? 'Tafadhali jibu ujumbe huu haraka iwezekanavyo.' :'Please reply to this inquiry as soon as possible.'}
          </p>
        </div>
        <div style="background: #f8fbf8; padding: 20px 40px; text-align: center; border-top: 1px solid #C8E6C9;">
          <p style="color: #5A7A5C; margin: 0; font-size: 12px;">New Generation Day Care Nursery & Primary School</p>
          <p style="color: #5A7A5C; margin: 4px 0 0; font-size: 12px;">Tabata Chang'ombe, Machimbo Ward, Ilala District, Dar es Salaam</p>
          <p style="color: #5A7A5C; margin: 4px 0 0; font-size: 12px;">+255 717 437788 | +255 767 539 963 | newgeneration1420@gmail.com</p>
        </div>
      </div>
    `;

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: TO_EMAIL }] }],
        from: { email: FROM_EMAIL, name: 'New Generation School Website' },
        reply_to: email ? { email, name } : { email: FROM_EMAIL },
        subject: emailSubject,
        content: [{ type: 'text/html', value: htmlContent }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid error:', errorText);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { parentName, childName, phone, grade, date, time, notes, lang } = body;

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const FROM_EMAIL = process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL || 'newgeneration1420@gmail.com';
    const TO_EMAIL = 'newgeneration1420@gmail.com';

    if (!SENDGRID_API_KEY) {
      return NextResponse.json({ error: 'SendGrid API key not configured' }, { status: 500 });
    }

    const isSwahili = lang === 'sw';

    const subject = isSwahili
      ? `Ombi Jipya la Mahojiano - ${childName}`
      : `New Interview Request - ${childName}`;

    const htmlContent = `
      <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fbf8; padding: 0;">
        <div style="background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%); padding: 32px 40px; text-align: center;">
          <h1 style="color: #FFD700; margin: 0; font-size: 24px; font-weight: 800;">New Generation School</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Nursery & Primary School — Admission Request</p>
        </div>
        <div style="background: #ffffff; padding: 40px; border-left: 4px solid #2E7D32;">
          <h2 style="color: #1A2E1A; font-size: 20px; margin: 0 0 24px; font-weight: 700;">
            ${isSwahili ? '📋 Ombi Jipya la Mahojiano Limepokelewa' : '📋 New Interview Request Received'}
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600; width: 40%;">${isSwahili ? 'Jina la Mzazi/Mlezi' : 'Parent / Guardian'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${parentName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600;">${isSwahili ? 'Jina la Mtoto' : "Child's Name"}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${childName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600;">${isSwahili ? 'Nambari ya Simu' : 'Phone Number'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600;">${isSwahili ? 'Darasa Linaloombwa' : 'Grade Applying For'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${grade}</td>
            </tr>
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600;">${isSwahili ? 'Tarehe Inayopendelewa' : 'Preferred Date'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${date}</td>
            </tr>
            <tr style="border-bottom: 1px solid #C8E6C9;">
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600;">${isSwahili ? 'Wakati Unaopendelewa' : 'Preferred Time'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px; font-weight: 700;">${time}</td>
            </tr>
            ${notes ? `
            <tr>
              <td style="padding: 12px 0; color: #5A7A5C; font-size: 13px; font-weight: 600; vertical-align: top;">${isSwahili ? 'Maelezo ya Ziada' : 'Additional Notes'}</td>
              <td style="padding: 12px 0; color: #1A2E1A; font-size: 14px;">${notes}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        <div style="background: #FFD700; padding: 20px 40px; text-align: center;">
          <p style="color: #1A2E1A; margin: 0; font-size: 13px; font-weight: 600;">
            ${isSwahili
              ? 'Tafadhali wasiliana na mzazi kwa SMS au simu kuthibitisha miadi ya mahojiano.' :'Please contact the parent by SMS or phone call to confirm the interview appointment.'}
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
        from: { email: FROM_EMAIL, name: 'New Generation School' },
        reply_to: { email: FROM_EMAIL },
        subject,
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

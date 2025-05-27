import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields. Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const sanitizedName = name.replace(/[<>]/g, '');
    const sanitizedMessage = message.replace(/[<>]/g, '');
    const sanitizedPhone = phone ? phone.replace(/[<>]/g, '') : '';

    const subject = `New Contact Form Message from ${sanitizedName}`;

    const { data, error } = await resend.emails.send({
      from: 'Dylan Frost Construction <onboarding@resend.dev>',
      to: ['dylanfrost@gmail.com'],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #ddd; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            ${sanitizedPhone ? `<p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${sanitizedPhone}</p>` : ''}
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
${sanitizedMessage}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was sent from the Dylan Frost Construction website contact form.</p>
            <p>Reply directly to this email to respond to ${sanitizedName}.</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data?.id);
    return NextResponse.json(
      {
        message: 'Message sent successfully! I\'ll get back to you within 24-48 hours.',
        emailId: data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}

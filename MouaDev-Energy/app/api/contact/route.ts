import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Zen Énergie Services" <${process.env.SMTP_USER}>`,
      to: 'commandes@zen-energieservices.ch',
      replyTo: email,
      subject: `Nouveau message de contact — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2a9b96;">Nouveau message de contact</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; font-weight:600; color:#555; width:130px;">Nom</td>
              <td style="padding: 8px 12px;">${name}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding: 8px 12px; font-weight:600; color:#555;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight:600; color:#555;">Téléphone</td>
              <td style="padding: 8px 12px;">${phone || '—'}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding: 8px 12px; font-weight:600; color:#555; vertical-align:top;">Message</td>
              <td style="padding: 8px 12px; white-space:pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top:24px; color:#aaa; font-size:12px;">
            Envoyé depuis zen-energieservices.ch
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact/route] Email error:', err)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi. Veuillez réessayer.' }, { status: 500 })
  }
}

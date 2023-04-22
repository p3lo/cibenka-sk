import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Email } from '~/components/email';

export function getMailer(text: string, subject: string, from: string, name: string) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_SERVER,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const emailHtml = render(Email({ text, name }));

  const options = {
    from: from,
    to: 'office@cibenka.sk',
    subject: `Dotaz z webu cibenka.sk - ${subject}`,
    html: emailHtml,
  };

  transporter.sendMail(options);
}

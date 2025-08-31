// pages/api/signup.js
import { Resend } from 'resend';

export const config = { api: { bodyParser: true } };

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_WAITLIST_AUDIENCE_ID || '';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { name, email } = req.body || {};
    if (!name || !email) {
      res.status(400).json({ message: 'Name and email are required.' });
      return;
    }
    if (!isValidEmail(email)) {
      res.status(400).json({ message: 'Please enter a valid email address.' });
      return;
    }

    if (AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          audienceId: AUDIENCE_ID,
          email,
          firstName: name,
          unsubscribed: false,
        });
      } catch (e) {
        console.error('Resend audience upsert failed:', e?.message || e);
      }
    }

    await resend.emails.send({
      from: 'ThreadLock <notify@threadlock.ai>',
      to: ['info@threadlock.ai'],
      subject: 'New waitlist signup',
      text: `Name: ${name}\nEmail: ${email}`,
    });

    await resend.emails.send({
      from: 'ThreadLock <hello@threadlock.ai>',
      to: [email],
      subject: 'You’re on the ThreadLock waitlist ✅',
      html: `<p>Thanks, ${name.split(' ')[0]}! You’re on the ThreadLock waitlist. We’ll reach out soon.</p>`,
    });

    res.status(200).json({ message: 'Thanks! You’re on the list.' });
  } catch (e) {
    console.error('Signup API error:', e?.message || e);
    res.status(500).json({ message: 'Internal server error.' });
  }
}
